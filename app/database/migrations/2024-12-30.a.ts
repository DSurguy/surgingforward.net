import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('release')
    .addColumn('id', 'text', col => col.notNull())
    .addColumn('repositoryId', 'text', col => col.notNull())
    .addPrimaryKeyConstraint('release-id', ['id', 'repositoryId'])
    .addColumn('name', 'text')
    .addColumn('html_url', 'text')
    .addColumn('body', 'text')
    .addColumn('publishedAt', 'text')
    .addColumn('updatedAt', 'text')
    .addColumn('repositoryHtmlUrl', 'text')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('release').execute();
}