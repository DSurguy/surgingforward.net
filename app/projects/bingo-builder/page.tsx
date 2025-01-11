import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import { join } from 'path';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata: Metadata = {
  title: 'Derek Surguy | Projects',
}

export default function BingoBuilderProjectPage() {
  const postDir = join(process.cwd(), "_content");
  const { content } = matter(readFileSync(join(postDir, `bingo-builder.mdx`)))

  return <>
    <LoadableContent>
      <div className="p-4">
        <MDXRemote source={content} components={{
          h1: props => <h1 className="text-3xl" {...props} />,
          h2: props => <h2 className="text-2xl mb-2 pb-1 pt-4 border-b border-gray-300 w-6/12" {...props} />,
          h3: props => <h3 className="text-xl mt-4 font-semibold" {...props} />,
          p: props => {
            const isImage = (props.children as unknown as any)?.type?.toString().includes('img')
            if (isImage) return <div className="mt-2 mb-4" {...props} />
            return <p className="mt-2 mb-4" {...props} />
          },
          ul: props => <ul className="list-disc list-inside ml-4 pb-1" {...props} />,
          li: props => <li className="pb-1" {...props} />,
          img: props => <div className="max-w-[80%] mx-auto">
            <img className="mx-auto border-4 rounded-md border-gray-200" {...props} />
            <div className="flex justify-center text-sm text-gray-500">{props.alt}</div>
          </div>,
          a: props => <a className="underline" {...props} />
        }}/>
      </div>
    </LoadableContent>
  </>
}