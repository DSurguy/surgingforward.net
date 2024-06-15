'use client'

import React, { useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export default function LoadableContent({ children }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);
  const baseMainClass = "w-[56.25vw] mt-[50px] mx-auto bg-neutral-50 transition-opacity opacity-0 duration-200"

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

  return <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
    <div className="main-placeholder"></div>
    <main className={mainClass}>
      {children}
    </main>
  </div>
}