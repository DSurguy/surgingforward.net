import * as path from 'path';
import { Kysely } from 'kysely'
import { Database as SQLite } from 'bun:sqlite'
import { BunSqliteDialect } from 'kysely-bun-sqlite'
import type { Database } from './types'
import { getPathValue } from '~/utils/loadEnv';

const dbDir = getPathValue('DATABASE_DIR');
const dbPath = path.resolve(dbDir, 'db.sqlite');

console.log(`Creating and/or opening database at ${dbPath}`)
const dialect = new BunSqliteDialect({
  database: new SQLite(dbPath),
})

export const db = new Kysely<Database>({
  dialect,
})