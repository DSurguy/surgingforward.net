'use client'

import { useRouter } from "next/navigation";
import type { MouseEvent } from 'react';
import { Suspense, useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge";
import Menu from "./components/Menu";
import MailIcon from "./sharedComponents/icons/MailIcon";
import GithubIcon from "./sharedComponents/icons/GithubIcon";
import ServerSideDate from "./sharedComponents/ServerSideDate";
import BlogSummaryComponent from "./components/BlogSummary";
import type { BlogSummary } from "@/types";

const backgroundBaseClass = "main-bg bg-neutral-50 dark:bg-gray-900 z-0"

type Props = {
  latestBlogContent: BlogSummary,
  latestProjectContent: {}
}

export default function MainComponent({ latestBlogContent }: Props) {
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
  
  const mainContent = <div className="relative z-10 pb-8">
    <div className="ml-5 md:ml-20">
      <div className="relative h-[160px] md:h-[240px] mb-2">
        <div className="headshot absolute w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full bg-teal-800 border-teal-800 border-2 z-20"></div>
        <div className="bg-teal-800 text-white text-2xl flex h-[40px] w-[250px] md:h-[48px] md:w-[350px] rounded-r-full absolute z-10 top-0 left-[80px] md:left-[120px] justify-end items-center">
          <h1 className="mr-4 md:mr-16 mt-[-2px]">Derek Surguy</h1>
        </div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[320px] md:w-[350px] rounded-r-full absolute z-10 bottom-[40px] left-[120px] md:left-[150px] justify-end items-center">
          <a href="https://github.com/DSurguy" className="underline mr-2 mt-[-2px]">https://github.com/DSurguy</a>
          <GithubIcon className="mr-4" />
        </div>
        <div className="bg-teal-800 text-white flex h-[32px] w-[320px] md:w-[350px] rounded-r-full absolute z-10 bottom-0 left-[80px] md:left-[120px] justify-end items-center">
          <a href="mailto:Surguy.Derek@gmail.com" className="underline mr-2 mt-[-2px]">Surguy.Derek@gmail.com</a>
          <MailIcon className="mr-4" />
        </div>
      </div>
      <div className="lg:w-[500px] mr-5 md:mr-20">
        <p className="pb-4">Welcome!</p>
        <p className="pb-4">
          I&apos;m an expert front-end software engineer, competent in full-stack development, leading engineering teams and shipping maintainable software.
        </p>
        <p className="pb-8">I make stuff and put it on the internet sometimes.</p>
      </div>
    </div>
    <div className="mt-[100px] md:mt-12 w-screen">
      <div className="md:w-[600px] ml-auto mr-auto lg:ml-20 lg:w-[920px] lg:h-[332px] shadow-lg bg-white dark:bg-teal-900 text-white md:rounded-md lg:flex">
        <Suspense fallback={"hello"}>
          <BlogSummaryComponent data={latestBlogContent} onLinkClick={handleClick} className="basis-1/2 p-4" />
          <BlogSummaryComponent data={latestBlogContent} onLinkClick={handleClick} className="basis-1/2 p-4" />
        </Suspense>
      </div>
    </div>
  </div>

  return (  
    <div className="overflow-x-hidden relative min-h-screen grid grid-rows-[auto_1fr_auto]">
      <div className="pt-4 pb-8 relative z-10">
        <Menu onMenuItemClick={handleClick} className="w-[380px] lg:w-[760px]" />
      </div>
      <div className={transitionTo ? 'w-[95%] sm:w-[90%] md:w-[80%] lg:w-[920px] mx-auto relative' : 'relative'}>
        <div className={backgroundClassName}></div>
        {!transitionTo && mainContent}
      </div>
      {!transitionTo && <div className="bg-neutral-50 dark:bg-gray-900 mt-auto lg:w-[240px] p-2 relative z-10">
        <div>© <ServerSideDate format="year" /> Derek Surguy</div>
        <div>Created with Next.JS</div>
      </div>}
    </div>
  )
}