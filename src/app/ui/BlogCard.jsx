'use client'
import React from "react";

const BlogCard = ({ blog }) => {
  const { title, author, description, theme, url, urlToImage, publishedAt } = blog;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{theme}</span>
          <span className="text-xs text-gray-400">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-700 text-sm mt-2 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">By {author || "Unknown"}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection = ({ blogs }) => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Latest Blogs
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
