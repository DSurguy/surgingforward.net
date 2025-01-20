import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Release } from '@/types'
import * as projectMdxComponents from '@/components/react/ProjectMdxComponents'

type Props = {
  release: Release
}

export default function ProjectReleaseDetail({ release }: Props) {
  return (
    <article className="mb-12">
      <div className="border-b-2 border-slate-200 flex justify-between items-end">
        <a className="font-mono mr-2 text-sm text-slate-700" href={release.repositoryHtmlUrl}>
          <span>{release.repositoryHtmlUrl}</span>
        </a>
        <span className="text-sm whitespace-nowrap bg-slate-200 p-1 rounded-sm font-mono">
          <span className="text-slate-500 mr-1">tag</span>
          <span className="">{release.tag}</span>
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-teal-800 py-2 underline"><a href={release.html_url}>{release.name}</a></h2>
      <div>
        <Markdown remarkPlugins={[remarkGfm]} components={{...projectMdxComponents}}>{release.body}</Markdown>
      </div>
    </article>
  )
}