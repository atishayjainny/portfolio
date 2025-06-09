import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const AnimatedChart = () => {
  const [currentPrice, setCurrentPrice] = useState(25135.45);
  const [isGaining, setIsGaining] = useState(true);
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    setAnimateChart(true);
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 50;
      setCurrentPrice(prev => Math.max(24800, prev + change));
      setIsGaining(change > 0);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartBars = Array.from({ length: 24 }, (_, i) => ({
    height: Math.random() * 80 + 20,
    isGreen: Math.random() > 0.3,
    delay: i * 50
  }));

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center">
            NIFTY 50
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white">{currentPrice.toFixed(2)}</span>
            <span className={`flex items-center text-sm font-medium px-2 py-1 rounded ${
              isGaining ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'
            }`}>
              <TrendingUp className={`h-4 w-4 mr-1 transition-transform duration-300 ${
                !isGaining ? 'rotate-180' : ''
              }`} />
              {isGaining ? '+' : '-'}1.24%
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-40 flex items-end space-x-1 overflow-hidden">
        {chartBars.map((bar, index) => (
          <div
            key={index}
            className={`w-3 rounded-t transition-all duration-1000 ${
              bar.isGreen 
                ? 'bg-gradient-to-t from-green-600 to-green-400 shadow-lg shadow-green-500/20' 
                : 'bg-gradient-to-t from-red-600 to-red-400 shadow-lg shadow-red-500/20'
            } ${animateChart ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
            style={{
              height: animateChart ? `${bar.height}%` : '0%',
              animationDelay: `${bar.delay}ms`
            }}
          />
        ))}
        
        {/* Animated line overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <path
              d="M 0 80 Q 100 60 200 70 T 400 65"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              className={`${animateChart ? 'animate-drawLine' : 'opacity-0'}`}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>09:15</span>
        <span>12:00</span>
        <span>15:30</span>
      </div>
    </div>
  );
};

export default AnimatedChart;