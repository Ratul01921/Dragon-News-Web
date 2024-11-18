import React from "react";
import { FaStar, FaEye, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card gap-4 bg-white shadow-lg border rounded-lg overflow-hidden relative">
      {/* Author Section */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-gray-800 font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span
            className={`badge badge-outline ${
              news.others_info.is_trending ? "text-red-500" : "text-gray-500"
            } text-sm font-semibold mr-3`}
          >
            {news.others_info.is_trending ? "Trending" : "600"}
          </span>
          <FaBookmark className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          src={news.thumbnail_url}
          alt="Thumbnail"
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {news.category_id}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {news.details.slice(0, 100)}...
        </p>
        <button className="btn btn-link px-0 mt-3 text-blue-600 font-semibold">
          Read More
        </button>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center">
          <FaStar className="text-yellow-400" />
          <p className="ml-2 font-semibold text-gray-800">
            {news.rating.number}
          </p>
        </div>
        <div className="flex items-center">
          <FaEye className="text-gray-500" />
          <p className="ml-2 text-gray-800">{news.total_view || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
