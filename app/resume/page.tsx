import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';

export const metadata: Metadata = {
  title: 'Derek Surguy | Resume',
}

export default function ResumePage() {
  return <>
    <LoadableContent>
      <div>Test</div>
    </LoadableContent>
  </>
}