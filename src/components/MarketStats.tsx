import React from 'react';
import { TrendingUp, TrendingDown, Bitcoin, Coins } from 'lucide-react';

const MarketStats = () => {
  const stats = [
    { symbol: 'RELIANCE', price: '₹1,449.25', change: '+0.8%', isUp: true },
    { symbol: 'TCS', price: '₹3,422.80', change: '-0.5%', isUp: false },
    { symbol: 'INFY', price: '₹1,577.45', change: '+1.2%', isUp: true },
    { symbol: 'HDFC', price: '₹1,981.90', change: '+0.3%', isUp: true }
  ];

  const cryptos = [
    { symbol: 'BTC', price: '$1,05,472', change: '+2.1%', isUp: true },
    { symbol: 'ETH', price: '$2,486', change: '-0.8%', isUp: false }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          Top Stocks
        </h4>
        <div className="space-y-2">
          {stats.map((stock, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-white text-sm font-medium">{stock.symbol}</span>
              <div className="text-right">
                <div className="text-white text-sm">{stock.price}</div>
                <div className={`text-xs ${stock.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
          <Bitcoin className="h-4 w-4 mr-2" />
          Crypto Watch
        </h4>
        <div className="space-y-3">
          {cryptos.map((crypto, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-white text-sm font-medium">{crypto.symbol}</span>
              <div className="text-right">
                <div className="text-white text-sm">{crypto.price}</div>
                <div className={`text-xs ${crypto.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Portfolio Value</span>
            <span className="text-green-500 font-semibold">₹8,50,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;