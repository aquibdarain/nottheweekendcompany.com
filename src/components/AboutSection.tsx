import React from 'react';
import { Users, TrendingUp, CoffeeIcon, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { 
      id: 1, 
      label: 'Years Experience', 
      value: '10+',
      icon: <Clock className="h-8 w-8 text-blue-500" />
    },
    { 
      id: 2, 
      label: 'Projects Completed', 
      value: '200+',
      icon: <TrendingUp className="h-8 w-8 text-emerald-500" />
    },
    { 
      id: 3, 
      label: 'Satisfied Clients', 
      value: '150+',
      icon: <Users className="h-8 w-8 text-purple-500" />
    },
    { 
      id: 4, 
      label: 'Cups of Coffee', 
      value: '∞',
      icon: <CoffeeIcon className="h-8 w-8 text-orange-500" />
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Build Software That Empowers Your Business
            </h2>
            
            <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            
            <p className="text-xl text-gray-600 mb-8">
              TechNova is a team of passionate developers, designers, and technology enthusiasts dedicated to creating exceptional digital experiences.
            </p>
            
            <p className="text-gray-600 mb-8">
              Since our founding in 2015, we've helped businesses of all sizes—from startups to established enterprises—transform their ideas into powerful digital solutions. Our approach combines technical excellence with creative problem-solving to deliver results that exceed expectations.
            </p>
            
            <p className="text-gray-600 mb-10">
              We believe in building long-term partnerships with our clients. By understanding your business challenges and goals, we create customized solutions that drive real value and growth.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-300"
              >
                Our Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Background pattern */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-lg"></div>
              
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-6 w-72">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-center p-2">
                      <div className="flex justify-center mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h4>
              <p className="text-gray-600">
                We never compromise on quality. From code to design, we deliver excellence in everything we create.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-emerald-100 text-emerald-600 rounded-lg mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h4>
              <p className="text-gray-600">
                Open communication and honesty form the foundation of our client relationships and internal culture.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-purple-100 text-purple-600 rounded-lg mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technologies and creative approaches to solve complex challenges efficiently.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-orange-100 text-orange-600 rounded-lg mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Results-Driven</h4>
              <p className="text-gray-600">
                We focus on delivering measurable outcomes that create real business value for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;