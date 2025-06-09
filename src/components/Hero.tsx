import React, { useEffect, useState } from 'react';
import { TrendingUp, BarChart3, Building2, DollarSign, ArrowUpRight, GraduationCap } from 'lucide-react';
import AnimatedChart from './AnimatedChart';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const [currentValue, setCurrentValue] = useState(850000);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const interval = setInterval(() => {
      setCurrentValue(prev => prev + Math.random() * 5000 - 2500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Trading Experience', value: '3 Years', icon: TrendingUp, delay: '0ms' },
    { label: 'Portfolio Value', value: '₹8.5L', icon: DollarSign, delay: '200ms' },
    { label: 'Trading Success Rate', value: '78%', icon: BarChart3, delay: '400ms' },
    { label: 'Academic Projects', value: '5+', icon: GraduationCap, delay: '600ms' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 relative overflow-hidden">
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`space-y-6 ${isAnimating ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Trading Expert • Investment Banking Aspirant
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Atishay</span>
                <span className="block text-green-500 animate-glow">Jain</span>
                <span className="block text-2xl lg:text-3xl text-gray-300 font-normal mt-2">
                  Trader & Future Investment Banker
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                3 years of proven trading experience in Indian markets with strong academic foundation 
                in investment banking. Passionate about financial analysis and building expertise in M&A and corporate finance.
              </p>
            </div>

            <div className={`grid grid-cols-2 gap-4 ${isAnimating ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group backdrop-blur-sm"
                    style={{ animationDelay: stat.delay }}
                  >
                    <Icon className="h-8 w-8 text-green-500 mb-3 group-hover:animate-bounce" />
                    <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className={`flex flex-wrap gap-4 ${isAnimating ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center group">
                View Trading Portfolio
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="border border-gray-600 hover:border-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:bg-green-500/10">
                Academic Projects
              </button>
            </div>
          </div>

          <div className={`space-y-6 ${isAnimating ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <AnimatedChart />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">Current Portfolio</div>
                <div className="text-2xl font-bold text-green-500 animate-pulse">
                  ₹{(currentValue / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-green-400 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.4% this month
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-2">Learning Projects</div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-xs text-blue-400">Valuation Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;