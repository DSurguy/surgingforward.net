import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import ProjectList from './projectList';

export const metadata: Metadata = {
  title: 'Derek Surguy | Projects',
}

export default function ProjectsPage() {
  return <>
    <LoadableContent>
      <div className="p-4">
        <h1 className="text-3xl">Projects</h1>
        <p className="mt-2">I&apos;ve included a selection of my personal projects below, please explore and click into a project to learn more about it.</p>
        <p className="mt-2 mb-4">Feel free to browse <a href="https://github.com/DSurguy" className="underline">my github</a> for more raw code and things that were too silly or bad to discuss here.</p>
        <ProjectList />
      </div>
    </LoadableContent>
  </>
}