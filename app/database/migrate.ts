import { promises as fs } from 'fs'
import * as path from 'path';
import { FileMigrationProvider, Migrator } from 'kysely'
import colors from 'colors/safe';
import { getDatabase } from '.';

const migrationFolder = path.resolve(__dirname, 'migrations')

const { db } = getDatabase();

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder
  })
})

const {error, results} = await migrator.migrateToLatest();

results?.forEach(result => {
  if( result.status === 'Success' ) {
    console.log(colors.green(`Migrated ${result.migrationName}`))
  } else if( result.status === 'Error' ) {
    console.log(colors.red(`Failed ${result.migrationName}`))
  } else {
    console.log(colors.yellow(`Unknown ${result.migrationName}`))
  }
})

if (error) {
  console.error('failed to migrate')
  console.error(error)
  process.exit(1)
}

// await done();