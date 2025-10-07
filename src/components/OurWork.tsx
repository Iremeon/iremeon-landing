import React from 'react';
import Button from './Button';

const OurWork: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-bgcolor-200 text-center">
      <h2 className="text-4xl font-bold mb-6 text-textcolor-100">Our Work</h2>
      <p className="text-textcolor-200 mb-16 text-lg">See how we've turned ideas into impact.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img src="/ecom.jpg" alt="E-Commerce Platform" className="w-full h-64 object-cover" />
          <div className="p-6 text-left">
            <p className="text-primarycolor-100 text-sm font-medium mb-2">Web Development</p>
            <h3 className="text-xl font-bold mb-3 text-textcolor-100">E-Commerce Platform</h3>
            <p className="text-textcolor-200">Modern, scalable online store with AI-powered recommendations</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img src="/mediconnect.jpg" alt="Healthcare Mobile App" className="w-full h-64 object-cover" />
          <div className="p-6 text-left">
            <p className="text-primarycolor-100 text-sm font-medium mb-2">Mobile Development</p>
            <h3 className="text-xl font-bold mb-3 text-textcolor-100">Healthcare Mobile App</h3>
            <p className="text-textcolor-200">HIPAA-compliant telemedicine platform for remote patient care</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img src="/analytic.jpg" alt="AI Analytics Dashboard" className="w-full h-64 object-cover" />
          <div className="p-6 text-left">
            <p className="text-primarycolor-100 text-sm font-medium mb-2">Artificial Intelligence</p>
            <h3 className="text-xl font-bold mb-3 text-textcolor-100">AI Analytics Dashboard</h3>
            <p className="text-textcolor-200">Real-time business intelligence with predictive analytics</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img src="/corporate.jpg" alt="Corporate Website" className="w-full h-64 object-cover" />
          <div className="p-6 text-left">
            <p className="text-primarycolor-100 text-sm font-medium mb-2">Web Design</p>
            <h3 className="text-xl font-bold mb-3 text-textcolor-100">Corporate Website</h3>
            <p className="text-textcolor-200">Professional brand presence with modern, responsive design</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Button variant="primary" className='flex items-center gap-2 mx-auto'>View Full Portfolio</Button>
      </div>
    </section>
  );
};

export default OurWork;