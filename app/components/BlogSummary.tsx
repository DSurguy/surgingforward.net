import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

type BlogSummary = {
  id: string;
  title: string;
  summary: string;
}

async function getLatestBlog(): Promise<BlogSummary> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 'blog-post-1',
        title: 'Some Blog Post',
        summary: 'this is a summary\n\nTrying to newline in markdown\n\n#### Header?'
      })
    }, 200);
  })
}

type Props = {
  className?: string;
}

export default async function BlogSummary({ className }: Props) {
  const blog = await getLatestBlog();
  const finalClassName = twMerge("prose basis-1/2", className)

  return (
    <article className={finalClassName}>
      <h2>Latest Blog</h2>
      <h3>{blog.title}</h3>
      <Markdown>{blog.summary}</Markdown>
    </article>
  )
}