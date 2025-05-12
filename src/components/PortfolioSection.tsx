import React, { useState } from 'react';
import PortfolioCard from './cards/PortfolioCard';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/6169/woman-shopping-cart-supermarket.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'Redux'],
      description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.'
    },
    {
      id: 3,
      title: 'Serverless API Infrastructure',
      category: 'aws',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Lambda', 'API Gateway', 'DynamoDB'],
      description: 'Scalable serverless architecture for a high-traffic application, reducing operational costs by 60%.'
    },
    {
      id: 4,
      title: 'Workflow Automation System',
      category: 'automation',
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Docker', 'RabbitMQ'],
      description: 'Automated document processing system that reduced manual work by 80% and improved accuracy to 99.8%.'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      description: 'Property listing and management platform with virtual tours, analytics, and agent portals.'
    },
    {
      id: 6,
      title: 'Financial Analytics Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'D3.js', 'Node.js'],
      description: 'Interactive financial data visualization dashboard with real-time updates and customizable reports.'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                filter === 'web' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                filter === 'mobile' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter('aws')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                filter === 'aws' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              AWS
            </button>
            <button
              onClick={() => setFilter('automation')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                filter === 'automation' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Automation
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <PortfolioCard 
              key={project.id}
              title={project.title}
              image={project.image}
              tags={project.tags}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;