'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge";

const layouts = {
  big: {
    width: '56.25%',
    yMargin: '50px'
  }
}

export default function MainComponent() {
  const router = useRouter();
  const [transitionTo, setTransitionTo] = useState<null | string>(null);
  const baseMainClass = "main-home bg-neutral-50"
  
  const className = useMemo(() => {
    return transitionTo ? twMerge(baseMainClass, 'transition') : baseMainClass;
  }, [transitionTo])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setTransitionTo(target);
  }

  useEffect(() => {
    if( transitionTo ) {
      setTimeout(() => {
        router.push(transitionTo)
      }, 501)
    }
  }, [transitionTo])
  
  const mainContent = <>
    <nav>
      <Link href="/blog" passHref legacyBehavior>
        <a onClick={e => (handleClick(e, '/blog'))}>Blog</a>
      </Link>
    </nav>
  </>
  return (  
    <main className={className}>
      {!transitionTo && mainContent}
    </main>
  )
}