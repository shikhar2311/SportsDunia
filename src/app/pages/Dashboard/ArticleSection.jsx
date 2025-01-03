import BlogSection from '@/app/ui/BlogCard'
import React from 'react'

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
        },
        {
          "id": 2,
          "author": "Rajesh Kumar",
          "title": "Mastering JavaScript: Top Tips for Developers",
          "theme": "Technology",
          "description": "A collection of best practices and tips for JavaScript developers to improve their coding skills.",
          "url": "https://example.com/blogs/mastering-javascript",
          "urlToImage": "https://example.com/images/javascript-tips.jpg",
          "publishedAt": "2024-11-15T08:00:00Z",
          "content": "JavaScript is an essential language for web development. In this blog, we cover tips for optimizing code and debugging effectively..."
        },
        {
          "id": 3,
          "author": "Sophia Lee",
          "title": "The Art of Baking: Secrets to Perfect Pastries",
          "theme": "Food",
          "description": "Unlock the secrets to baking delicious pastries with expert tips and foolproof recipes.",
          "url": "https://example.com/blogs/baking-secrets",
          "urlToImage": "https://example.com/images/baking-pastries.jpg",
          "publishedAt": "2024-10-10T14:45:00Z",
          "content": "Baking is both a science and an art. From flaky croissants to soft muffins, learn how to achieve perfection in your baking endeavors..."
        },
        {
          "id": 4,
          "author": "Liam Smith",
          "title": "Hiking Trails Around the World You Must Visit",
          "theme": "Travel",
          "description": "Discover breathtaking hiking trails around the globe, from the Himalayas to Patagonia.",
          "url": "https://example.com/blogs/hiking-trails",
          "urlToImage": "https://example.com/images/hiking-trails.jpg",
          "publishedAt": "2024-09-05T17:20:00Z",
          "content": "For nature lovers and adventure seekers, hiking is the perfect way to explore the world's most stunning landscapes. Here are our top picks..."
        },
        {
          "id": 5,
          "author": "Emily Carter",
          "title": "Meditation for Beginners: Finding Your Inner Peace",
          "theme": "Health",
          "description": "A beginner's guide to meditation, helping you embark on a journey toward mindfulness and tranquility.",
          "url": "https://example.com/blogs/meditation-for-beginners",
          "urlToImage": "https://example.com/images/meditation.jpg",
          "publishedAt": "2024-08-22T09:15:00Z",
          "content": "Meditation is a powerful tool to improve your mental health. In this blog, we cover simple techniques to help you get started..."
        }
      ]
      

  return (
    <div className=' bg-purple-200 p-3 text-black flex justify-center flex-col items-center min-h-screen'>
        <div><button className=' cursor-pointer'>Create Your Blog</button></div>
        <BlogSection blogs={blogs}/>
    </div>
  )
}

export default ArticleSection