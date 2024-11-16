'use server'

import { Metadata } from 'next'
import MainComponent from "./MainContainer";
import { BlogSummary, FrontMatter } from '@/types';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

async function getLatestBlog(): Promise<BlogSummary> {
  // TODO: How can we make this less stupid
  const files = readdirSync(join(process.cwd(), "_blogPosts"))

  let latestPost: BlogSummary | null = null;
  for( let file of files ) {
    const { data } = matter(readFileSync(join(process.cwd(), "_blogPosts", file)))
    if (!latestPost || Date.parse(data.updateDate) > Date.parse(latestPost.updateDate)) {
      latestPost = {
        ...data as FrontMatter,
        slug: file.replace('.mdx', '')
      }
    }
  }
  if( !latestPost ) {
    throw Error("Unable to get latest blog post, none of them had dates?")
  }
  return latestPost
}

export default async function Home() {
  const blog = await getLatestBlog();
  
  return <MainComponent
    latestBlogContent={blog}
    latestProjectContent={{}}
  />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Derek Surguy | Home'
  }
}