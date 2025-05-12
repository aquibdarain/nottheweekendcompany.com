import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  image: string;
  tags: string[];
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, image, tags, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className={`text-white/90 text-sm mb-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {description}
          </p>
        </div>
      </div>
      
      <div 
        className="p-4 bg-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">View Case Study</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="p-6 bg-white border-t border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Responsive design for all devices</li>
            <li>Optimized performance and loading times</li>
            <li>Secure authentication and data handling</li>
            <li>Scalable architecture</li>
          </ul>
          
          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            Start a Similar Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;