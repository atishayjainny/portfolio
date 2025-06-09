import React, { useEffect, useState } from 'react';

const PerformanceChart = () => {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    setAnimateChart(true);
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const returns = [5.2, 8.5, 12.8, 7.3, 15.7, 18.1, 14.4, 22.6, 16.8, 25.3, 19.7, 28.1];

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-2">Monthly Returns (%)</h4>
        <div className="text-3xl font-bold text-green-500">+18.4%</div>
        <div className="text-sm text-gray-400">Average monthly return (3 years)</div>
      </div>

      <div className="relative h-48">
        <div className="absolute inset-0 flex items-end justify-between">
          {returns.map((returnValue, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-1000 delay-${index * 100} ${
                  animateChart ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  width: '20px',
                  height: animateChart ? `${(returnValue / 30) * 100}%` : '0%'
                }}
              />
              <span className="text-xs text-gray-400 mt-2">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-white">78%</div>
          <div className="text-xs text-gray-400">Win Rate</div>
        </div>
        <div>
          <div className="text-lg font-bold text-white">₹2.1L</div>
          <div className="text-xs text-gray-400">Best Month</div>
        </div>
        <div>
          <div className="text-lg font-bold text-white">8.2%</div>
          <div className="text-xs text-gray-400">Max Drawdown</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;