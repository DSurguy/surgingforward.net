import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';

export const metadata: Metadata = {
  title: 'Derek Surguy | Projects',
}

export default function ProjectsPage() {
  return <>
    <LoadableContent>
      <div className="main-min-size">Test</div>
    </LoadableContent>
  </>
}