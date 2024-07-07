'use client'

import Link from "next/link"
import { MouseEvent } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  onMenuItemClick: (e: MouseEvent<HTMLAnchorElement>, target: string) => void;
  className?: string;
}

const itemClass = "ml-8 mr-4 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-500 hover:underline transition-colors duration-200"

const baseClassName = "flex justify-end bg-gray-200 dark:bg-gray-800 [clip-path:polygon(0 0, 100% 0, 90% 100%, 0% 100%)]";

export default function Menu({ className, onMenuItemClick }: Props) {
  const mergedClassName = twMerge(baseClassName, className)
  return (
    <nav className={mergedClassName}>
      <Link href="/blog" passHref legacyBehavior>
        <a className={itemClass} onClick={e => (onMenuItemClick(e, '/blog'))}>Blog</a>
      </Link>
      <Link href="/resume" passHref legacyBehavior>
        <a className={itemClass} onClick={e => (onMenuItemClick(e, '/resume'))}>Resume</a>
      </Link>
      <Link href="/projects" passHref legacyBehavior>
        <a className={itemClass} onClick={e => (onMenuItemClick(e, '/projects'))}>Projects</a>
      </Link>
      <Link href="/contact" passHref legacyBehavior>
        <a className={itemClass} onClick={e => (onMenuItemClick(e, '/contact'))}>Contact</a>
      </Link>
    </nav>
  )
}