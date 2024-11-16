import { readdirSync, readFileSync } from "fs"
import { join } from "path"
import { Metadata } from "next"
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import LoadableContent from "@/app/sharedComponents/LoadableContent"

const postDir = join(process.cwd(), "_blogPosts");

interface StaticParams {
  params: Promise<{
    slug: string;
  }>
}

export default async function BlogPost(props: StaticParams) {
  const { slug } = await props.params;

  const { content } = matter(readFileSync(join(postDir, `${slug}.mdx`)))
  
  return (
    <LoadableContent>
      <MDXRemote source={content} />
    </LoadableContent>
  )
}

export async function generateMetadata(props: StaticParams): Promise<Metadata> {
  const { slug } = await props.params;
  
  const { data } = matter(readFileSync(join(postDir, `${slug}.mdx`)))

  return {
    title: data.title
  }
}

export async function generateStaticParams() {
  const files = readdirSync(postDir)

  return files.map(file => {
    return {
      slug: file.replace('.mdx', '')
    };
  })
}