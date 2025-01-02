import type { ColumnType, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  release: ReleaseTable
}

export interface ReleaseTable {
  id: number;
  repositoryId: number;
  name: string;
  tag: string;
  html_url: string;
  body: string;
  publishedAt: ColumnType<Date, string, string>;
  updatedAt: ColumnType<Date, string, string>;
  repositoryHtmlUrl: string;
}

export type Release = Selectable<ReleaseTable>;
export type NewRelease = Insertable<ReleaseTable>;
export type UpdatedRelease = Updateable<ReleaseTable>;