import React, { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import PerformanceChart from './PerformanceChart';

const Portfolio = () => {
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

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const portfolioStats = [
    { label: 'Portfolio Value', value: '₹8.5L', change: '+8.4%', icon: DollarSign },
    { label: 'Monthly Returns', value: '8.4%', change: 'This Month', icon: TrendingUp },
    { label: 'Active Positions', value: '12', change: 'Diversified', icon: BarChart3 },
    { label: 'Win Rate', value: '78%', change: '3 Year Avg', icon: PieChart }
  ];

  const topHoldings = [
    { name: 'Reliance Industries', allocation: '18.2%', value: '₹1,54,700', change: '+12.4%' },
    { name: 'TCS', allocation: '15.8%', value: '₹1,34,300', change: '+8.1%' },
    { name: 'HDFC Bank', allocation: '12.5%', value: '₹1,06,250', change: '+6.7%' },
    { name: 'Infosys', allocation: '10.3%', value: '₹87,550', change: '+15.2%' },
    { name: 'Bitcoin', allocation: '8.7%', value: '₹73,950', change: '+24.3%' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trading <span className="text-green-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Current trading portfolio performance showcasing 3 years of consistent growth 
            and disciplined risk management across equity and crypto markets.
          </p>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          {portfolioStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-green-500 mb-3 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className="text-xs text-green-500 font-medium">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Performance Overview</h3>
            <PerformanceChart />
          </div>

          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Current Holdings</h3>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
              <div className="space-y-4">
                {topHoldings.map((holding, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div>
                      <div className="text-white font-medium">{holding.name}</div>
                      <div className="text-sm text-gray-400">{holding.allocation} allocation</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{holding.value}</div>
                      <div className="text-sm text-green-500">{holding.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Portfolio Value</span>
                  <span className="text-2xl font-bold text-green-500 animate-pulse">₹8,50,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;