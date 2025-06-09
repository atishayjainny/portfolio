import React, { useEffect, useState } from 'react';
import { Award, TrendingUp, Users, Target, Building2, GraduationCap } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: TrendingUp, title: '3 Years', desc: 'Trading Experience', color: 'text-green-500' },
    { icon: Target, title: '78% Success', desc: 'Trading Win Rate', color: 'text-blue-500' },
    { icon: Users, title: '₹8.5L', desc: 'Current Portfolio Value', color: 'text-purple-500' },
    { icon: GraduationCap, title: '5+ Projects', desc: 'Academic Valuations', color: 'text-yellow-500' },
    { icon: Building2, title: 'Learning', desc: 'Investment Banking', color: 'text-red-500' },
    { icon: Award, title: 'Passionate', desc: 'About Finance', color: 'text-indigo-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-green-500">Atishay</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experienced trader with 3 years in Indian markets, currently building expertise 
            in investment banking through academic projects and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Trading Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                Started my trading journey 3 years ago with a passion for financial markets. 
                Specialized in intraday trading, swing trading, and long-term investments across 
                Indian equity markets and cryptocurrency.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently expanding my knowledge in investment banking through academic coursework, 
                focusing on valuation analysis, financial modeling, and corporate finance fundamentals.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Current Skills:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Technical Analysis',
                  'Risk Management',
                  'Portfolio Management',
                  'Market Research',
                  'Financial Modeling',
                  'Valuation Analysis',
                  'Equity Research',
                  'Crypto Trading'
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <span className="text-green-500 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={`h-8 w-8 ${achievement.color} mb-4 group-hover:animate-bounce`} />
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{achievement.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;