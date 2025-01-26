import type { MouseEvent } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  onMenuItemClick?: (e: MouseEvent<HTMLAnchorElement>, target: string) => void;
  className?: string;
}

const itemClass = "ml-4 lg:ml-8 mr-4 text-black dark:text-white hover:text-slate-700 dark:hover:text-slate-500 hover:underline transition-colors duration-200"

const baseClassName = "p-2 flex justify-start lg:justify-end bg-slate-200 dark:bg-slate-800 [clip-path:polygon(0 0, 100% 0, 90% 100%, 0% 100%)]";

export default function Menu({ className, onMenuItemClick }: Props) {
  const mergedClassName = twMerge(baseClassName, className);
  
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    if( onMenuItemClick ) onMenuItemClick(e, link);
  }

  return (
    <nav className={mergedClassName}>
      <a href="/blog" data-astro-prefetch="load" className={itemClass} onClick={e => (handleMenuClick(e, '/blog'))}>Blog</a>
      <a href="/resume" data-astro-prefetch="load" className={itemClass} onClick={e => (handleMenuClick(e, '/resume'))}>Resume</a>
      <a href="/projects" data-astro-prefetch="load" className={itemClass} onClick={e => (handleMenuClick(e, '/projects'))}>Projects</a>
      <a href="/contact" data-astro-prefetch="load" className={itemClass} onClick={e => (handleMenuClick(e, '/contact'))}>Contact</a>
    </nav>
  )
}