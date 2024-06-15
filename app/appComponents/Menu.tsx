'use client'

import Link from "next/link"
import { MouseEvent } from "react"

type Props = {
  onMenuItemClick: (e: MouseEvent<HTMLAnchorElement>, target: string) => void
}
const itemClass = "ml-8 text-gray-700 hover:text-gray-600 hover:underline transition-colors duration-200"

export default function Menu({ onMenuItemClick }: Props) {
  return (
    <nav className="flex p-4 pr-8 w-[720px] justify-end">
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