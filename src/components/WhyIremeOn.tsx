import React from 'react';
import { Users, Zap, Target, Shield } from 'lucide-react';
import Button from './Button';

const WhyIremeOn: React.FC = () => {
  return (
    <section className="py-20 bg-bgcolor-300 text-center">
      <h2 className="text-4xl font-bold mb-16 text-textcolor-100">Why IremeOn?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Expert Team</h3>
          <p className="text-textcolor-200">A skilled, passionate team of developers, designers, and consultants.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Future-Ready Tech</h3>
          <p className="text-textcolor-200">From AI to cloud, we deliver tomorrow's solutions today.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Tailored for You</h3>
          <p className="text-textcolor-200">We build around your unique goals and challenges.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primarycolor-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4 text-textcolor-100">Scalable & Secure</h3>
          <p className="text-textcolor-200">Solutions that grow with your business, safely and reliably.</p>
        </div>
      </div>
      <Button variant="primary" className='flex items-center gap-2 mx-auto'>
        Ready to experience the IremeOn difference?
      </Button>
    </section>
  );
};

export default WhyIremeOn;