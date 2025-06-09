import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, TrendingUp, Linkedin, Building2, GraduationCap } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in discussing trading strategies, investment opportunities, 
            or potential collaboration in investment banking? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                  <Mail className="h-6 w-6 text-green-500 mr-4 group-hover:animate-bounce" />
                  <div>
                    <div className="text-white font-medium">atishay7000@gmail.com</div>
                    <div className="text-gray-400 text-sm">Trading & Investment Banking</div>
                  </div>
                </div>
                <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                  <Phone className="h-6 w-6 text-green-500 mr-4 group-hover:animate-bounce" />
                  <div>
                    <div className="text-white font-medium">+91 98765 43210</div>
                    <div className="text-gray-400 text-sm">Available for calls</div>
                  </div>
                </div>
                <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-green-500 mr-4 group-hover:animate-bounce" />
                  <div>
                    <div className="text-white font-medium">Mumbai, Maharashtra</div>
                    <div className="text-gray-400 text-sm">Open to relocation</div>
                  </div>
                </div>
                <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                  <Linkedin className="h-6 w-6 text-green-500 mr-4 group-hover:animate-bounce" />
                  <div>
                    <div className="text-white font-medium">linkedin.com/in/atishayjain</div>
                    <div className="text-gray-400 text-sm">Professional network</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-green-500" />
                Career Opportunities
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">3 Years</div>
                  <div className="text-sm text-gray-400">Trading Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">Fresher</div>
                  <div className="text-sm text-gray-400">Investment Banking</div>
                </div>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center group">
                <Building2 className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Explore Opportunities
              </button>
            </div>
          </div>

          <div className={`bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 hover:border-gray-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 hover:border-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Interest Area</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 hover:border-gray-500">
                  <option>Trading Collaboration</option>
                  <option>Investment Banking Opportunity</option>
                  <option>Academic Project Discussion</option>
                  <option>General Networking</option>
                  <option>Mentorship</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 hover:border-gray-500">
                  <option>Student</option>
                  <option>Entry Level Professional</option>
                  <option>Experienced Professional</option>
                  <option>Senior Professional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-all duration-300 hover:border-gray-500"
                  placeholder="Tell me about your interest in trading, investment banking, or potential collaboration..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center group"
              >
                <TrendingUp className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;