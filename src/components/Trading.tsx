import React, { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Coins, Activity, Zap } from 'lucide-react';
import TradingChart from './TradingChart';
import MarketStats from './MarketStats';

const Trading = () => {
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

    const element = document.getElementById('trading');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tradingServices = [
    {
      icon: BarChart3,
      title: 'Equity Trading',
      description: 'Experienced in Indian stock markets with focus on technical analysis and risk management.',
      features: ['Intraday Trading', 'Swing Trading', 'Long-term Investing', 'Risk Management'],
      performance: '+18.5% avg returns'
    },
    {
      icon: TrendingUp,
      title: 'Technical Analysis',
      description: 'Proficient in chart patterns, indicators, and market sentiment analysis for trading decisions.',
      features: ['Chart Patterns', 'Technical Indicators', 'Support/Resistance', 'Volume Analysis'],
      performance: '78% success rate'
    },
    {
      icon: Coins,
      title: 'Crypto Trading',
      description: 'Active in cryptocurrency markets with understanding of DeFi and spot trading.',
      features: ['Spot Trading', 'Market Analysis', 'Portfolio Diversification', 'Risk Assessment'],
      performance: '+25% crypto returns'
    }
  ];

  const tradingStats = [
    { label: 'Trading Experience', value: '3 Years', icon: Activity },
    { label: 'Win Rate', value: '78%', icon: TrendingUp },
    { label: 'Portfolio Value', value: '₹8.5L', icon: PieChart },
    { label: 'Monthly Return', value: '8.4%', icon: Zap }
  ];

  return (
    <section id="trading" className="py-20 bg-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trading <span className="text-green-500">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            3 years of hands-on trading experience across Indian equity markets and cryptocurrency 
            with consistent performance and disciplined risk management.
          </p>
        </div>

        {/* Trading Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          {tradingStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-green-500 mb-3 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Trading Charts */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Live Market Data</h3>
            <TradingChart />
            <MarketStats />
          </div>

          {/* Trading Services */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Trading Expertise</h3>
            {tradingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:translateY-[-4px] group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <Icon className="h-8 w-8 text-green-500 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 mb-3">
                        <div className="text-green-400 font-semibold text-xs">{service.performance}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-300 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;