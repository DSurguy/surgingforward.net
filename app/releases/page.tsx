import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import { db } from '../database';
import type { PageProps } from '../types';
import { PAGE_SIZE } from './constants';

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
      <div className="main-min-size">{
        releases.map(release => (<div key={`${release.repositoryId}.${release.id}`}>
          {release.name}
        </div>))  
      }</div>
    </LoadableContent>
  </>
}