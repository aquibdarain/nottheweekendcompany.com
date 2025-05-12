import React from 'react';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, readTime, category }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
          <a href="#">{title}</a>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
        >
          Read More
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;