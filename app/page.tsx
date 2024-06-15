import { Metadata } from 'next'
import MainComponent from "./MainContainer";
 
export const metadata: Metadata = {
  title: 'Derek Surguy | Home',
}

export default function Home() {
  return <>
    <MainComponent />
  </>
}
