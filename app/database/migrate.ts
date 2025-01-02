import { promises as fs } from 'fs'
import * as path from 'path';
import { FileMigrationProvider, Migrator } from 'kysely'
import colors from 'colors/safe';
import { db } from '.';
import { parseArgs } from 'util';

const migrationFolder = path.resolve(__dirname, 'migrations')

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder
  })
})

const { values: { down } } = parseArgs({
  args: Bun.argv,
  options: {
    down: {
      type: 'boolean'
    },
  },
  strict: true,
  allowPositionals: true,
});

if( down ) {
  const {error, results} = await migrator.migrateDown();

  results?.forEach(result => {
    if( result.status === 'Success' ) {
      console.log(colors.green(`Migrated ${result.migrationName} down`))
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
} else {
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
}
