export type FrontMatter = {
  title: string;
  summary: string;
  updateDate: string;
}

export interface BlogSummary extends FrontMatter {
  slug: string;
}

export interface PageProps {
  params: Promise<{}>;
  searchParams: Promise<Record<string, string | string[] | undefined>>
}