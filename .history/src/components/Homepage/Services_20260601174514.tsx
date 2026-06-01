import React from 'react';
import { Code, Palette, Users, Brain, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-bgcolor-200 text-center">
      <h2 className="text-4xl font-bold mb-6 text-textcolor-100">Our Services</h2>
      <p className="text-textcolor-200 mb-16 text-lg">We craft digital solutions that empower businesses to grow and innovate.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mb-6">
            <Code className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Web Development</h3>
          <p className="text-textcolor-200">Responsive, secure, and high-performance websites built for scalability.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mb-6">
            <Palette className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Web Design</h3>
          <p className="text-textcolor-200">Creative, user-focused designs that deliver stunning digital experiences.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mb-6">
            <Users className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Small Business Consultation</h3>
          <p className="text-textcolor-200">Helping small businesses adopt the right technology to grow smarter.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Mobile App Development</h3>
          <p className="text-textcolor-200">Custom iOS and Android apps tailored to your business needs.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mb-6">
            <Brain className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Artificial Intelligence Solutions</h3>
          <p className="text-textcolor-200">AI-powered tools and automation to unlock new opportunities and efficiency.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;