import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { join } from 'path';
import { readFileSync } from 'fs';
import GithubIcon from '../sharedComponents/icons/GithubIcon';
import MailIcon from '../sharedComponents/icons/MailIcon';

export const metadata: Metadata = {
  title: 'Derek Surguy | Resume',
}

export default function ResumePage() {
  const postDir = join(process.cwd(), "_content");
  const { content } = matter(readFileSync(join(postDir, `resume.mdx`)))

  return <>
    <LoadableContent>
      <div className="relative h-[160px] mb-2 m-8">
        <div className="headshot absolute w-[160px] h-[160px] rounded-full bg-teal-800 border-teal-800 border-2 z-20"></div>
        <div className="bg-teal-800 text-white text-2xl flex h-[40px] w-[250px] rounded-r-full absolute z-10 top-0 left-[80px] justify-end items-center">
          <h1 className="mr-4 mt-[-2px]">Derek Surguy</h1>
        </div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[320px] rounded-r-full absolute z-10 bottom-[40px] left-[120px] justify-end items-center">
          <a href="https://github.com/DSurguy" className="underline mr-2 mt-[-2px]">https://github.com/DSurguy</a>
          <GithubIcon className="mr-4" />
        </div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[320px] rounded-r-full absolute z-10 bottom-0 left-[80px] justify-end items-center">
          <a href="mailto:Surguy.Derek@gmail.com" className="underline mr-2 mt-[-2px]">Surguy.Derek@gmail.com</a>
          <MailIcon className="mr-4" />
        </div>
      </div>
      <div className="p-4">
        <MDXRemote source={content} components={{
          h2: props => <h2 className="text-2xl mb-2 pb-1 pt-4 border-b border-gray-300 w-6/12" {...props} />,
          h3: props => <h3 className="text-xl mt-4 font-semibold" {...props} />,
          p: props => <p className="py-2" {...props} />,
          ul: props => <ul className="list-disc list-inside ml-4 pb-1" {...props} />,
          li: props => <li className="pb-1" {...props} />
        }}/>
      </div>
    </LoadableContent>
  </>
}