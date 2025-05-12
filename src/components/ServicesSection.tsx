import React from 'react';
import { Code, Smartphone, Server, Cpu, Figma, GitBranch } from 'lucide-react';
import ServiceCard from './cards/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive, fast, and scalable solutions tailored to your needs.',
      technologies: ['React', 'Vue.js', 'Node.js', 'Next.js', 'Express']
    },
    {
      icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with smooth performance and offline capabilities.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: <Server className="h-10 w-10 text-purple-500" />,
      title: 'AWS Infrastructure',
      description: 'Scalable and secure cloud infrastructure using AWS services. From simple deployments to complex microservices architectures.',
      technologies: ['EC2', 'Lambda', 'S3', 'DynamoDB', 'CloudFormation']
    },
    {
      icon: <Cpu className="h-10 w-10 text-red-500" />,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with custom automation tools. Increase efficiency and reduce manual work with intelligent workflows.',
      technologies: ['Python', 'Node.js', 'CI/CD', 'Serverless']
    },
    {
      icon: <Figma className="h-10 w-10 text-indigo-500" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces with a focus on user experience. Modern designs that engage users and drive conversions.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      icon: <GitBranch className="h-10 w-10 text-orange-500" />,
      title: 'DevOps Services',
      description: 'Continuous integration and deployment pipelines for faster and safer releases. Automate testing and deployment to improve your development workflow.',
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            We offer a comprehensive range of IT services to help your business succeed in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;