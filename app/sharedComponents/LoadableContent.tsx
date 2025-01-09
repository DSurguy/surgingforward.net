'use client'

import React, { useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge";
import Menu from "../components/Menu";
import ServerSideDate from "./ServerSideDate";

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export default function LoadableContent({ children }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [, setFadeComplete] = useState(false);
  const baseMainClass = "relative mx-auto bg-neutral-50 transition-opacity opacity-0 duration-200"

  const mainClass = useMemo(() => {
    return loaded ? twMerge(baseMainClass, 'opacity-1') : baseMainClass;
  }, [loaded])

  useEffect(() => {
    if( children ){
      if (!loaded) {
        setLoaded(true);
        setTimeout(() => {
          setFadeComplete(true)
        }, 201)
      }
    }
  }, [children])

  return (
    <div className="overflow-x-hidden relative min-h-screen grid grid-rows-[auto_1fr_auto]">
      <div className="pt-4 pb-8 relative z-10">
        <Menu className="w-[380px] lg:w-[760px]" />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[920px] mx-auto relative">
        <div className="z-[-1] absolute top-0 left-0 right-0 bottom-0 bg-neutral-50"></div>
        <main className={mainClass}>{children}</main>
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[920px] bg-neutral-50 dark:bg-gray-900 mx-auto p-2 relative z-10">
        <div>© <ServerSideDate format="year" /> Derek Surguy</div>
        <div>Created with Next.JS</div>
      </div>
    </div>
  )
}