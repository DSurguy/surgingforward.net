import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';

export const metadata: Metadata = {
  title: 'Derek Surguy | Projects',
}

export default function BlogPage() {
  return <LoadableContent>
    <div>Test</div>
  </LoadableContent>
}