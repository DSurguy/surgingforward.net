export type Release = {
  id: number;
  repositoryId: number;
  name: string;
  tag: string;
  html_url: string;
  body: string;
  publishedAt: Date;
  repositoryHtmlUrl: string;
}