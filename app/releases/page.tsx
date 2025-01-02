import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import { db } from '../database';
import type { PageProps } from '../types';
import { PAGE_SIZE } from './constants';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata: Metadata = {
  title: 'Derek Surguy | Releases',
}

const getReleases = async ({ page }: Record<string, string | string[] | undefined>) => {
  let actualPage = Number(page);
  if( isNaN(actualPage) ) actualPage = 0
  return await db
    .selectFrom('release')
    .orderBy('publishedAt', 'desc')
    .selectAll()
    .limit(PAGE_SIZE)
    .offset(PAGE_SIZE * actualPage)
    .execute()
}

export default async function ReleasePage({ searchParams }: PageProps) {
  const releases = await getReleases(await searchParams);

  return <>
    <LoadableContent>
      <div className="main-min-size p-4">{
        releases.map(release => (<article key={`${release.repositoryId}.${release.id}`} className="mb-8">
          <div className="border-b-2 border-slate-200 flex justify-between items-end">
            <span className="text-sm whitespace-nowrap bg-slate-200 p-1 rounded-sm font-mono">
              <span className="text-slate-500 mr-1">tag</span>
              <span className="">{release.tag}</span>
            </span>
            <a className="font-mono mr-2 text-sm underline text-slate-700 text-end" href={release.repositoryHtmlUrl}>
              <span>{release.repositoryHtmlUrl}</span>
            </a>
          </div>
          <h2 className="text-2xl font-semibold text-teal-800 py-2"><a href={release.html_url}>{release.name}</a></h2>
          <div>
            <MDXRemote source={release.body} components={{
              p: props => <p className="py-2" {...props} />,
              ul: props => <ul className="list-disc list-inside" {...props} />,
              li: props => <li className="" {...props} />
            }}/>
          </div>
        </article>))  
      }</div>
    </LoadableContent>
  </>
}