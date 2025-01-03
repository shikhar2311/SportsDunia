import BlogSection from '@/app/ui/BlogCard'
import React from 'react'
import Link from 'next/link'

function ArticleSection() {

    const blogs = [
        {
          "id": 1,
          "author": "Alice Johnson",
          "title": "Exploring Minimalism: A Guide to Simplifying Your Life",
          "theme": "Lifestyle",
          "description": "A deep dive into the art of minimalism and how it can positively impact your mental and physical space.",
          "url": "https://example.com/blogs/minimalism-guide",
          "urlToImage": "https://example.com/images/minimalism.jpg",
          "publishedAt": "2024-12-20T10:30:00Z",
          "content": "Minimalism is more than a design trend; it’s a lifestyle choice. In this blog, we explore practical steps to declutter your life..."
        }
      ]
      

  

  return (
    <div className=' relative bg-purple-200 p-3 text-black flex justify-center flex-col items-center min-h-screen'>
        <div className=' absolute right-1 top-1'><Link href="/pages/AddYourBlog"> <button className=' cursor-pointer bg-green-400 p-2 rounded-lg size-xl'>New ➕</button> </Link></div>
        <BlogSection blogs={blogs}/>
    </div>
  )
}

export default ArticleSection