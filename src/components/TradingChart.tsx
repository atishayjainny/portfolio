import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const TradingChart = () => {
  const [currentPrice, setCurrentPrice] = useState(25135.45);
  const [isGaining, setIsGaining] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 30;
      setCurrentPrice(prev => Math.max(24800, prev + change));
      setIsGaining(change > 0);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartBars = Array.from({ length: 20 }, (_, i) => ({
    height: Math.random() * 80 + 20,
    isGreen: Math.random() > 0.4
  }));

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">NIFTY 50</h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">{currentPrice.toFixed(2)}</span>
            <span className={`flex items-center text-sm ${isGaining ? 'text-green-500' : 'text-red-500'}`}>
              <TrendingUp className={`h-4 w-4 mr-1 ${!isGaining ? 'rotate-180' : ''}`} />
              {isGaining ? '+' : '-'}1.24%
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-32 flex items-end space-x-1">
        {chartBars.map((bar, index) => (
          <div
            key={index}
            className={`w-4 rounded-t transition-all duration-1000 ${
              bar.isGreen ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ height: `${bar.height}%` }}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>09:15</span>
        <span>12:00</span>
        <span>15:30</span>
      </div>
    </div>
  );
};

export default TradingChart;