import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Modal } from 'antd';
import Button from './Button';

const ContactUs: React.FC = () => {
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    setConfirmLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.currentTarget.reset();
      setTimeout(() => setOpen(false), 1500);
    } else {
      setResult("Error sending message");
    }
    setConfirmLoading(false);
  };

  const ContactForm = () => (
    <form onSubmit={onSubmit} className="space-y-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
        className="w-full px-4 py-3 rounded-xl bg-textcolor-300/10 border border-textcolor-300/20 text-textcolor-300 placeholder-textcolor-300/60 focus:outline-none focus:border-textcolor-300/40"
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required 
        className="w-full px-4 py-3 rounded-xl bg-textcolor-300/10 border border-textcolor-300/20 text-textcolor-300 placeholder-textcolor-300/60 focus:outline-none focus:border-textcolor-300/40"
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        required 
        rows={4}
        className="w-full px-4 py-3 rounded-xl bg-textcolor-300/10 border border-textcolor-300/20 text-textcolor-300 placeholder-textcolor-300/60 focus:outline-none focus:border-textcolor-300/40 resize-none"
      />
      <button type="submit" className="w-full px-6 py-3 bg-textcolor-300 text-primarycolor-100 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-textcolor-300/90 transition-colors">
        <MessageCircle size={20} /> Send Message <ArrowRight size={20} />
      </button>
      {result && <p className="text-textcolor-300 text-sm">{result}</p>}
    </form>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primarycolor-300 via-primarycolor-200 to-buttoncolor-200 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textcolor-300 mb-6">
        Let's Build the Future{' '}
        <br />
        <span className="text-buttoncolor-200">Together</span>
      </h2>
      
      <p className="text-lg sm:text-xl text-textcolor-300 mb-12 max-w-3xl mx-auto">
        Ready to innovate, scale, and grow? Partner with IremeOn today.
      </p>

      

      {/* Desktop Modal Button */}
      <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button 
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-textcolor-300 text-primarycolor-100 rounded-xl font-semibold flex items-center gap-2 hover:bg-textcolor-300/90 transition-colors"
        >
          <MessageCircle size={20} /> Contact Us <ArrowRight size={20} />
        </button>
        <Button variant="secondary">
          Schedule a Call
        </Button>
      </div>

      {/* Antd Modal for Desktop */}
      <Modal
        title="Contact Us"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        confirmLoading={confirmLoading}
        className="contact-modal"
      >
        <div className="py-4">
          <ContactForm />
        </div>
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 py-7">
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

      {/* Mobile Form */}
      <div className="lg:hidden max-w-md mx-auto mb-16 px-4">
        <ContactForm />
      </div>

      <style>{`
        .contact-modal .ant-modal-content {
          background: linear-gradient(to right, var(--color-primarycolor-300), var(--color-primarycolor-200), var(--color-buttoncolor-200)) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
        }
        .contact-modal .ant-modal-header {
          background: transparent !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
        .contact-modal .ant-modal-title {
          color: white !important;
          font-weight: bold !important;
        }
        .contact-modal .ant-modal-close {
          color: white !important;
        }
        .contact-modal .ant-modal-mask {
          background-color: rgba(0, 0, 0, 0.6) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;