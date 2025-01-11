'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProjectList() {
  const router = useRouter();

  const handleMouseOver = (key: string) => {
    router.prefetch(key);
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      <Link
        className="border-2 border-gray-200 min-h-24 p-2"
        href={`/projects/bingo-builder`}
        prefetch={false}
        onMouseOver={() => handleMouseOver('/projects/bingo-builder')}
      >
        <h3>Bingo Builder</h3>
      </Link>
    </div>
  )
}