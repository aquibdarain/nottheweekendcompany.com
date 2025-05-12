import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images with parallax effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            filter: 'brightness(0.4)',
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-gray-900/90 mix-blend-multiply"
        />
      </div>
      
      {/* Animated particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 w-full py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Ideas Into 
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> Digital Reality</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              We build cutting-edge web and mobile applications, deploy robust AWS infrastructure, and create automation solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 hidden sm:block">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Trusted by innovative companies</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center">
                <div className="text-gray-400 font-semibold opacity-70 text-base lg:text-lg">ACME Inc.</div>
                <div className="text-gray-400 font-semibold opacity-70 text-base lg:text-lg">TechCorp</div>
                <div className="text-gray-400 font-semibold opacity-70 text-base lg:text-lg">Innovate AI</div>
                <div className="text-gray-400 font-semibold opacity-70 text-base lg:text-lg">DataFlow</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-lg mx-auto">
              {/* Abstract shapes */}
              <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
              
              {/* Hero image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl p-4">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Digital technology visualization" 
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  
                  {/* Floating tech elements */}
                  <div className="absolute top-6 -left-6 px-4 py-2 bg-white/90 rounded-lg shadow-lg transform -rotate-6">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm font-medium text-gray-800">React.js</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 -right-6 px-4 py-2 bg-white/90 rounded-lg shadow-lg transform rotate-6">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      <span className="text-sm font-medium text-gray-800">AWS</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-12 -left-4 px-4 py-2 bg-white/90 rounded-lg shadow-lg transform rotate-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      <span className="text-sm font-medium text-gray-800">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;