'use client'

import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { BlogSummary } from "@/types";

type Props = {
  className?: string;
  data: BlogSummary;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => void
}

export default function BlogSummaryComponent({ className, data, onLinkClick }: Props) {
  const finalClassName = twMerge("prose basis-1/2", className)

  return (
    <article className={finalClassName}>
      <h2>Latest Blog Post</h2>
      <h3>
        <Link href={`/blog/${data.slug}`} passHref legacyBehavior>
          <a onClick={e => (onLinkClick(e, `/blog/${data.slug}`))}>{data.title}</a>
        </Link>
      </h3>
      <Markdown>{data.summary}</Markdown>
    </article>
  )
}