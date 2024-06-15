import React from 'react';
import { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';

export const metadata: Metadata = {
  title: 'Derek Surguy | Resume',
}

export default function ResumePage() {
  return <>
    <LoadableContent>
      <div className="main-min-size">Test</div>
    </LoadableContent>
  </>
}