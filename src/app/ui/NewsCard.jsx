"use client"
import React from "react";

const NewsCard = ({ article }) => {
  const { author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="max-w-sm mx-auto my-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 sm:max-w-md md:max-w-lg">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-500 my-2">
          {new Date(publishedAt).toLocaleString()}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Read More
          </a>
          <span className="text-gray-500 text-xs">
            {author ? `By ${author}` : "Unknown Author"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
