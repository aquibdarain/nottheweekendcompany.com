import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="p-8">
        <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && !isExpanded && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      
      <div 
        className="px-8 py-4 bg-gray-50 flex justify-between items-center border-t border-gray-100 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-medium text-blue-600">Learn more</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </div>

      {isExpanded && (
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-3">Technologies we use:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <h4 className="font-semibold text-gray-900 mb-3">Our approach:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Requirements analysis and planning</li>
            <li>Design and architecture</li>
            <li>Development and testing</li>
            <li>Deployment and maintenance</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;