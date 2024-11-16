import { Metadata } from 'next'
import MainComponent from "./MainContainer";
import BlogSummary from './components/BlogSummary';
 
export const metadata: Metadata = {
  title: 'Derek Surguy | Home',
}

export default function Home() {
  return <>
    <MainComponent
      blogSummary={<BlogSummary className="p-4" />}
      projectSummary={<BlogSummary className="p-4" />}
    />
  </>
}
