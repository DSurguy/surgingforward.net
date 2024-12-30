#!/usr/bin/env bun

import { open, readdir } from "fs/promises";
import { resolve } from "path";

const handle = async <T>(wrappedPromise: Promise<T>, errorMessage: string): Promise<T> => {
  try {
    return await wrappedPromise
  } catch (e) {
    console.error(errorMessage);
    console.error(e);
    process.exit(1);
  }
}

const migrationDir = resolve(__dirname, '../app/database/migrations');

// Scan migrations directory for files matching current date
const now = new Date();
const today = now.toISOString().split('T')[0];
const migrations = await handle(readdir(migrationDir), `error reading migration dir: ${migrationDir}`)
const migrationsFromToday = migrations.filter(migration => migration.startsWith(today))
let newFilename: string;
if( migrationsFromToday.length ) {
  // If some, create "<date>.<next-alpha>.ts", such as .b, .c, etc
  const currentLastMigration = migrationsFromToday.sort().pop()! // We already checked if it had length.
  const nextAlpha = String.fromCharCode(currentLastMigration.split('.')[1].charCodeAt(0) + 1)
  // If we're out of alphabet, bounce
  if( nextAlpha === '{' ) {
    console.warn('\x1b[33m%s\x1b[0m', `\u26A0 Too many migrations for ${today}`);
    console.log("Create a new migration manually, or just wait until tomorrow.");
    process.exit(0);
  }
  newFilename = `${today}.${nextAlpha}.ts`;
} else {
  // TODO: If none, create "<date>.a.ts"
  newFilename = `${today}.a.ts`;
}

const fullFileName = resolve(migrationDir, newFilename);
const file = await handle(open(fullFileName, "ax"), `error opening ${fullFileName}`);
await handle(file.close(), `error closing ${fullFileName} somehow`)

console.log(`Created ${fullFileName}`);
process.exit(0);