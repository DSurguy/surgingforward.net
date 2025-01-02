import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.transaction().execute(async tx => {
    await tx.schema
      .alterTable('release')
      .addColumn('tag', 'text')
      .execute()
    
    await tx.updateTable('release').set({ tag: "" }).where('tag', '=', null).execute()

    await tx.schema.alterTable('release').alterColumn('tag', alter => alter.setNotNull()).compile()
  })
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.alterTable('release').dropColumn('tag').execute();
}