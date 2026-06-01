import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-bgcolor-100 text-center">
      <h2 className="text-3xl font-bold mb-6">About IremeOn</h2>
      <p className="text-textcolor-200 max-w-2xl mx-auto mb-10">
        At IremeOn, we believe technology should not just solve problems—it should <span className='text-primarycolor-200 font-semibold'>
          open doors to new possibilities.
        </span>
      </p>
      <p className="text-textcolor-200 max-w-2xl mx-auto mb-10">
        Our mission is to help businesses harness the power of modern IT, cutting-edge AI, and user-friendly digital solutions, built with <span className='text-primarycolor-200 font-semibold'>
          scalability and reliability
          </span> at their core.
      </p>
    </section>
  );
};

export default About;