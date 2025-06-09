import React from 'react';
import { BarChart3, TrendingUp, PieChart, Coins, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Equity Research',
      description: 'Comprehensive stock analysis and investment recommendations based on fundamental and technical analysis.',
      features: ['Sector Analysis', 'Company Valuations', 'Risk Assessment', 'Market Timing']
    },
    {
      icon: TrendingUp,
      title: 'Intraday Trading',
      description: 'High-frequency trading strategies for maximizing short-term profits with controlled risk.',
      features: ['Day Trading Plans', 'Technical Indicators', 'Risk Management', 'Real-time Alerts']
    },
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Customized investment portfolios designed to meet your financial goals and risk tolerance.',
      features: ['Asset Allocation', 'Diversification', 'Regular Reviews', 'Tax Optimization']
    },
    {
      icon: Coins,
      title: 'Crypto Investment',
      description: 'Strategic cryptocurrency investments and trading across major digital assets.',
      features: ['Altcoin Research', 'DeFi Strategies', 'Market Analysis', 'Secure Holdings']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies to protect your investments.',
      features: ['Stop Loss Plans', 'Hedging Strategies', 'Market Risk Analysis', 'Capital Protection']
    },
    {
      icon: Users,
      title: 'Investment Advisory',
      description: 'Personalized financial advice and strategic planning for long-term wealth creation.',
      features: ['Financial Planning', 'Goal Setting', 'Investment Strategy', 'Regular Consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive financial services tailored to maximize your investment returns 
            and achieve your financial objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:translateY-[-8px] group"
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;