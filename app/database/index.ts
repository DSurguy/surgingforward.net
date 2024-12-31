import * as path from 'path';
import { Kysely } from 'kysely'
import { Database as SQLite } from 'bun:sqlite'
import { BunSqliteDialect } from 'kysely-bun-sqlite'
import type { Database } from './types'

const dbDir = process.env['DATABASE_DIR'];
if( !dbDir ) throw new Error("Database path is required");
const dbPath = path.resolve(dbDir, 'db.sqlite');
console.log(dbPath);

const dialect = new BunSqliteDialect({
  database: new SQLite(dbPath),
})

export const getDatabase = () => {
  const db = new Kysely<Database>({
    dialect,
  })

  return {
    db,
    done: () => db.destroy()
  }
};