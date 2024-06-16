'use client'

import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge";
import Menu from "./components/Menu";
import MailIcon from "./sharedComponents/icons/MailIcon";
import GithubIcon from "./sharedComponents/icons/GithubIcon";
import ServerSideDate from "./sharedComponents/ServerSideDate";

const backgroundBaseClass = "main-bg bg-neutral-50 w-screen h-screen fixed top-0 left-0 z-0 transition-[clip-path] duration-200 ease-out"

export default function MainComponent() {
  const router = useRouter();
  const [transitionTo, setTransitionTo] = useState<null | string>(null);
  
  const backgroundClassName = useMemo(() => {
    return transitionTo ? twMerge(backgroundBaseClass, 'navigating') : backgroundBaseClass;
  }, [transitionTo])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setTransitionTo(target);
  }

  useEffect(() => {
    if( transitionTo ) {
      setTimeout(() => {
        router.push(transitionTo)
      }, 201)
    }
  }, [transitionTo])
  
  const mainContent = <div className="relative z-10 min-h-screen">
    <Menu onMenuItemClick={handleClick} className="p-8 pr-12 w-[800px]" />
    <div className="ml-20">
      <h1 className="text-4xl font-semibold pb-8">Derek Surguy</h1>
      <div className="w-[500px]">
        <p className="pb-4">Welcome!</p>
        <p className="pb-4">
          <span>I&apos;m an expert front-end software engineer, competent in</span>
          <span className="block">full-stack development, leading engineering teams</span>
          <span className="block">and shipping maintainable software.</span>
        </p>
        <p className="pb-8">I make stuff and put it on the internet sometimes.</p>
      </div>
      <div className="relative h-[240px] mb-8">
        <div className="headshot absolute w-[240px] h-[240px] rounded-full border-teal-800 border-2 z-10"></div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[350px] rounded-r-full absolute z-0 bottom-[40px] left-[150px] justify-end items-center">
          <a href="https://github.com/DSurguy" className="underline mr-2 mt-[-2px]">https://github.com/DSurguy</a>
          <GithubIcon className="mr-4" />
        </div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[350px] rounded-r-full absolute z-0 bottom-0 left-[120px] justify-end items-center">
          <a href="mailto:Surguy.Derek@gmail.com" className="underline mr-2 mt-[-2px]">Surguy.Derek@gmail.com</a>
          <MailIcon className="mr-4" />
        </div>
      </div>
      <div className="w-[1000px] h-[332px] shadow-lg bg-white rounded-md">
        <div>
          <h2>Latest Blog</h2>
          <h3>Blog Title</h3>
          <p>Blog summary</p>
        </div>
        <div>
          <h2>Latest Project Update</h2>
          <h3>Project Title</h3>
          <p>Update summary</p>
        </div>
      </div>
      <div className="h-32"></div>
      <div className="w-[600px] absolute bottom-2 left-2">
        <div>© 2024-<ServerSideDate format="year" /> Derek Surguy</div>
        <div>Created with Next.JS and deployed on Vercel</div>
      </div>
    </div>
  </div>

  return (  
    <main className="overflow-x-hidden">
      {!transitionTo && mainContent}
      <div className={backgroundClassName}></div>
    </main>
  )
}