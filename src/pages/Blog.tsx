import React from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Advanced Penetration Testing Techniques for Modern Web Applications',
      excerpt: 'Exploring cutting-edge methodologies for identifying vulnerabilities in contemporary web applications, including API security testing and client-side attack vectors.',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Penetration Testing',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/',
      featured: true
    },
    {
      title: 'Securing Cloud Infrastructure: AWS Security Best Practices',
      excerpt: 'A comprehensive guide to implementing robust security measures in AWS environments, covering IAM policies, network security, and compliance frameworks.',
      date: '2024-11-28',
      readTime: '12 min read',
      category: 'Cloud Security',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/'
    },
    {
      title: 'Red Team Operations: Simulating Real-World Attacks',
      excerpt: 'Deep dive into red team methodologies, attack simulation techniques, and how organizations can benefit from adversarial security testing.',
      date: '2024-11-10',
      readTime: '10 min read',
      category: 'Red Teaming',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/'
    },
    {
      title: 'Secure Code Review: Finding Vulnerabilities in Source Code',
      excerpt: 'Best practices for conducting thorough security code reviews, common vulnerability patterns, and automated tools for static analysis.',
      date: '2024-10-22',
      readTime: '15 min read',
      category: 'Secure Development',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/'
    },
    {
      title: 'Bug Bounty Hunting: From Reconnaissance to Exploitation',
      excerpt: 'A step-by-step guide to successful bug bounty hunting, including reconnaissance techniques, vulnerability identification, and responsible disclosure.',
      date: '2024-10-05',
      readTime: '11 min read',
      category: 'Bug Bounty',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/'
    },
    {
      title: 'ISO 27001 Compliance: Building a Security Management System',
      excerpt: 'Understanding ISO 27001 requirements, implementation strategies, and maintaining continuous compliance in modern organizations.',
      date: '2024-09-18',
      readTime: '9 min read',
      category: 'Compliance',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://saurabh-jain.medium.com/'
    }
  ];

  const categories = ['All', 'Penetration Testing', 'Cloud Security', 'Red Teaming', 'Secure Development', 'Bug Bounty', 'Compliance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Security Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity, penetration testing, 
            and secure development practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read Article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Follow me on Medium for the latest insights on cybersecurity, penetration testing, 
              and secure development practices.
            </p>
            <a
              href="https://saurabh-jain.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Follow on Medium
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;