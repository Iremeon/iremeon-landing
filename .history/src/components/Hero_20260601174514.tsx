import Button from './Button';
import { ArrowRight,Play } from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/iremeon1.jpg")' }}
      ></div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-primarycolor-100/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-textcolor-300 mb-6">
            IremeOn — Built to Scale,{' '}
            <span className="text-buttoncolor-200">Built to Last</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-textcolor-300 mb-12 max-w-3xl mx-auto">
            Innovative IT solutions for the businesses of today — and the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary">
              Get Started <ArrowRight />
            </Button>
            <Button variant="secondary">
              <Play /> Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;