import type { Metadata } from 'next'
import LoadableContent from '@/sharedComponents/LoadableContent';
import { db } from '../database';

export const metadata: Metadata = {
  title: 'Derek Surguy | Releases',
}

const getReleases = async () => {
  const releases = await db
    .selectFrom('release')
    .orderBy('publishedAt')
    .selectAll()
    .execute()
  
  return releases;
}

export default async function ReleasePage() {
  const releases = await getReleases();

  return <>
    <LoadableContent>
      <div className="main-min-size">{
        releases.map(release => (<div key={`${release.repositoryId}.${release.id}`}>
          {release.name}
        </div>))  
      }</div>
    </LoadableContent>
  </>
}