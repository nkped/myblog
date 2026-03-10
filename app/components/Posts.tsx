import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import ListItem from './ListItem'

export default async function Posts() {
  const posts = await getPostsMeta()

  if (!posts) {
      return <p className="mt-10 text-center">Beklager, vi kan ikke finde nogen posts..</p>
  }

  return (
      <section className="py-10 mx-auto max-w-2xl">
          <div className='mb-8 pb-5 border-b-2 border-solid border-white/20'>
          <h2 className="text-3xl font-bold dark:text-white/80 ">Blog - nkped</h2></div>
          <ul className="w-full list-none p-0">
              {posts.map(post => (
                  <ListItem key={post.id} post={post} />
              ))}
          </ul>
      </section>
  )
}