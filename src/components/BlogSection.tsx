import React from 'react';
import BlogCard from './cards/BlogCard';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest web development trends that are shaping the digital landscape and how businesses can leverage them.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'June 15, 2025',
      readTime: '6 min read',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Optimizing AWS Infrastructure for Cost and Performance',
      excerpt: 'Learn how to balance performance and cost-efficiency in your AWS infrastructure with these proven strategies.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'June 8, 2025',
      readTime: '8 min read',
      category: 'AWS'
    },
    {
      id: 3,
      title: 'Building Cross-Platform Mobile Apps with React Native',
      excerpt: 'Discover how React Native is revolutionizing mobile development by enabling truly cross-platform applications.',
      image: 'https://images.pexels.com/photos/14398354/pexels-photo-14398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'May 29, 2025',
      readTime: '5 min read',
      category: 'Mobile Development'
    }
  ];
  
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Read our latest articles on technology trends, best practices, and industry insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;