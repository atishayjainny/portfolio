import React, { useEffect, useState } from 'react';
import { Building2, TrendingUp, Users, Award, ExternalLink, Calendar, GraduationCap } from 'lucide-react';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Reliance Industries Valuation',
      type: 'Academic Project',
      value: 'DCF Analysis',
      duration: '3 weeks',
      description: 'Comprehensive valuation analysis of Reliance Industries using DCF methodology and comparable company analysis.',
      highlights: ['Financial modeling', 'Industry research', 'Peer comparison', 'Investment recommendation'],
      status: 'Completed',
      year: '2024',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      grade: 'A'
    },
    {
      title: 'TCS vs Infosys Comparison',
      type: 'Comparative Analysis',
      value: 'Ratio Analysis',
      duration: '2 weeks',
      description: 'Detailed comparative analysis of two IT giants focusing on financial performance and valuation metrics.',
      highlights: ['Financial ratios', 'Profitability analysis', 'Growth comparison', 'Investment thesis'],
      status: 'Completed',
      year: '2024',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      grade: 'A-'
    },
    {
      title: 'HDFC Bank Credit Analysis',
      type: 'Credit Assessment',
      value: 'Risk Analysis',
      duration: '2 weeks',
      description: 'Credit risk assessment and loan portfolio analysis of HDFC Bank with focus on asset quality.',
      highlights: ['Credit risk metrics', 'NPA analysis', 'Capital adequacy', 'Stress testing'],
      status: 'Completed',
      year: '2024',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      grade: 'B+'
    },
    {
      title: 'Startup Valuation Model',
      type: 'Valuation Project',
      value: 'Early Stage',
      duration: '4 weeks',
      description: 'Created valuation model for early-stage fintech startup using multiple methodologies.',
      highlights: ['Venture capital methods', 'Risk-adjusted returns', 'Market sizing', 'Exit scenarios'],
      status: 'Completed',
      year: '2023',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      grade: 'A'
    },
    {
      title: 'M&A Case Study Analysis',
      type: 'Case Study',
      value: 'Strategic Analysis',
      duration: '3 weeks',
      description: 'Analysis of recent M&A transaction in pharmaceutical sector including synergy assessment.',
      highlights: ['Deal rationale', 'Synergy analysis', 'Valuation impact', 'Integration challenges'],
      status: 'In Progress',
      year: '2024',
      icon: Building2,
      color: 'from-red-500 to-red-600',
      grade: 'Pending'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Academic <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Investment banking and valuation projects completed during coursework, 
            demonstrating practical application of financial analysis and modeling skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className={`bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:transform hover:translateY-[-8px] group backdrop-blur-sm overflow-hidden ${
                  isVisible ? 'animate-slideInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 relative`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-8 w-8 text-white" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{project.value}</div>
                      <div className="text-white/80 text-sm">{project.year}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </div>
                    {project.grade !== 'Pending' && (
                      <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Grade: {project.grade}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duration: {project.duration}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Components:</h4>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center group">
                    <GraduationCap className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    View Project Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Summary */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">A-</div>
            <div className="text-gray-400 text-sm">Average Grade</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Companies Analyzed</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;