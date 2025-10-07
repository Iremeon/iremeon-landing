import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from './Button';

const ContactUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primarycolor-300 via-primarycolor-200 to-buttoncolor-200 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textcolor-300 mb-6">
        Let's Build the Future{' '}
        <br />
        <span className="text-buttoncolor-200">Together</span>
      </h2>
      
      <p className="text-lg sm:text-xl text-textcolor-300 mb-12 max-w-3xl mx-auto">
        Ready to innovate, scale, and grow? Partner with IremeOn today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="px-6 py-3 bg-textcolor-300 text-primarycolor-100 rounded-xl font-semibold flex items-center gap-2 hover:bg-textcolor-300/90 transition-colors">
          <MessageCircle size={20} /> Contact Us <ArrowRight size={20} />
        </button>
        <Button variant="secondary">
          Schedule a Call
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-textcolor-300 mb-2">Email</h3>
          <p className="text-textcolor-300/80">hello@iremeon.com</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-textcolor-300 mb-2">Phone</h3>
          <p className="text-textcolor-300/80">+1 (555) 123-4567</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-textcolor-300 mb-2">Response Time</h3>
          <p className="text-textcolor-300/80">Within 24 hours</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;