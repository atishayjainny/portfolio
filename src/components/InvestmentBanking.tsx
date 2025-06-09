import React, { useEffect, useState } from 'react';
import { Building2, TrendingUp, Users, FileText, Calculator, Shield, Briefcase, GraduationCap } from 'lucide-react';

const InvestmentBanking = () => {
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

    const element = document.getElementById('investment-banking');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const learningAreas = [
    {
      icon: Building2,
      title: 'Valuation Analysis',
      description: 'Learning comprehensive company valuation methods through academic projects and case studies.',
      features: ['DCF Modeling', 'Comparable Analysis', 'Precedent Transactions', 'Financial Statements'],
      status: 'Academic Projects: 5+'
    },
    {
      icon: TrendingUp,
      title: 'Financial Modeling',
      description: 'Building expertise in creating detailed financial models for investment decisions.',
      features: ['Excel Modeling', 'Scenario Analysis', 'Sensitivity Testing', 'Forecasting'],
      status: 'Projects Completed: 2'
    },
    {
      icon: Users,
      title: 'Research & Analysis',
      description: 'Developing skills in equity research and industry analysis methodologies.',
      features: ['Industry Research', 'Company Analysis', 'Market Research', 'Report Writing'],
      status: 'Reports Written: 2'
    },
    {
      icon: FileText,
      title: 'Corporate Finance',
      description: 'Studying corporate finance fundamentals and capital structure optimization.',
      features: ['Capital Structure', 'Cost of Capital', 'M&A Basics', 'Corporate Strategy'],
      status: 'Currently Learning'
    }
  ];

  const academicMetrics = [
    { label: 'Valuation Projects', value: '5+', change: 'Completed', icon: Calculator },
    { label: 'Financial Modeling', value: '2', change: 'Projects', icon: TrendingUp },
    { label: 'Research Reports', value: '2', change: 'Written', icon: FileText },
    { label: 'Goal', value: 'IB Role', change: 'Pursuing', icon: Shield }
  ];

  return (
    <section id="investment-banking" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Investment Banking <span className="text-green-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building investment banking expertise through academic coursework, practical projects, 
            and continuous learning to transition from trading to corporate finance.
          </p>
        </div>

        {/* Academic Metrics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          {academicMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-green-500 mb-3 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="text-xs text-green-500 font-medium">{metric.change}</div>
              </div>
            );
          })}
        </div>

        {/* Learning Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className={`bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:translateY-[-8px] group backdrop-blur-sm ${
                  isVisible ? 'animate-slideInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{area.description}</p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                    <div className="text-blue-400 font-semibold text-sm">{area.status}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
                  View Progress
                </button>
              </div>
            );
          })}
        </div>

        {/* Learning Goals */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Career Aspiration</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Combining my trading experience with investment banking knowledge to pursue 
              opportunities in corporate finance, M&A advisory, and financial analysis.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Connect for Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBanking;