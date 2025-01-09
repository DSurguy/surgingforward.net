'use client'

import Link from "next/link"
import type { MouseEvent } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  onMenuItemClick?: (e: MouseEvent<HTMLAnchorElement>, target: string) => void;
  className?: string;
}

const itemClass = "ml-4 lg:ml-8 mr-4 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-500 hover:underline transition-colors duration-200"

const baseClassName = "p-2 flex justify-start lg:justify-end bg-gray-200 dark:bg-gray-800 [clip-path:polygon(0 0, 100% 0, 90% 100%, 0% 100%)]";

export default function Menu({ className, onMenuItemClick }: Props) {
  const mergedClassName = twMerge(baseClassName, className);
  
  const handleMenuClick = (e: MouseEvent, link: string) => {
    if( onMenuItemClick ) onMenuItemClick(e, link);
  }

  return (
    <nav className={mergedClassName}>
      <Link href="/blog" passHref legacyBehavior prefetch>
        <a className={itemClass} onClick={e => (handleMenuClick(e, '/blog'))}>Blog</a>
      </Link>
      <Link href="/resume" passHref legacyBehavior prefetch>
        <a className={itemClass} onClick={e => (handleMenuClick(e, '/resume'))}>Resume</a>
      </Link>
      <Link href="/projects" passHref legacyBehavior prefetch>
        <a className={itemClass} onClick={e => (handleMenuClick(e, '/projects'))}>Projects</a>
      </Link>
      <Link href="/contact" passHref legacyBehavior prefetch>
        <a className={itemClass} onClick={e => (handleMenuClick(e, '/contact'))}>Contact</a>
      </Link>
    </nav>
  )
}