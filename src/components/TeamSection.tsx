import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Lead Full Stack Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 8 years of experience in web development, Alex leads our technical projects and ensures high-quality code delivery.',
      expertise: ['React', 'Node.js', 'AWS', 'TypeScript'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Mobile Development Specialist',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah specializes in creating seamless mobile experiences using React Native and Flutter for both iOS and Android platforms.',
      expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Marcus handles our cloud infrastructure and deployment pipelines, ensuring smooth operations and optimal performance.',
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Parker',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emily creates intuitive and beautiful user interfaces that enhance user experience and drive engagement.',
      expertise: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our talented team of developers, designers, and engineers brings diverse expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        className="text-white hover:text-blue-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github}
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        className="text-white hover:text-blue-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Want to join our team? We're always looking for talented individuals.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;