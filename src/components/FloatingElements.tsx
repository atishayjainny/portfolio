import React from 'react';
import { TrendingUp, BarChart3, PieChart, DollarSign, Building2, Coins } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: TrendingUp, position: 'top-20 left-10', delay: '0s', size: 'h-6 w-6' },
    { Icon: BarChart3, position: 'top-40 right-20', delay: '2s', size: 'h-8 w-8' },
    { Icon: PieChart, position: 'top-60 left-1/4', delay: '4s', size: 'h-5 w-5' },
    { Icon: DollarSign, position: 'bottom-40 right-10', delay: '1s', size: 'h-7 w-7' },
    { Icon: Building2, position: 'bottom-60 left-20', delay: '3s', size: 'h-6 w-6' },
    { Icon: Coins, position: 'top-1/3 right-1/3', delay: '5s', size: 'h-5 w-5' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const { Icon, position, delay, size } = element;
        return (
          <div
            key={index}
            className={`absolute ${position} text-green-500/20 animate-float`}
            style={{ animationDelay: delay, animationDuration: '6s' }}
          >
            <Icon className={`${size} animate-pulse`} />
          </div>
        );
      })}
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-green-500/10 animate-pulse"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;