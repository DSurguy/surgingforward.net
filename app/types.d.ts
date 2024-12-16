export type FrontMatter = {
  title: string;
  summary: string;
  updateDate: string;
}

export interface BlogSummary extends FrontMatter {
  slug: string;
}
