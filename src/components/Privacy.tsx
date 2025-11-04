import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primarycolor-100 hover:text-primarycolor-200 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
      
      <h1 className="text-3xl font-bold text-textcolor-100 mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-textcolor-200">
        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">1. Introduction</h2>
          <p>This Privacy Policy explains how IremeOn ("we," "our," or "us") collects, uses, and protects information when you visit our website. Our site is primarily informational and does not require users to register or provide personal details to browse.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect limited information to operate and improve the website:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Automatically collected data:</strong> such as IP address, browser type, device type, pages visited, and visit duration.</li>
            <li><strong>Voluntary information:</strong> if you contact us via email or form, we may collect your name, email address, and message content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">3. How We Use the Information</h2>
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries or messages you send us.</li>
            <li>Monitor website performance and improve user experience.</li>
            <li>Prevent misuse or security breaches.</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">4. Cookies and Analytics</h2>
          <p>We use cookies and similar technologies to understand visitor interactions, measure traffic, and improve performance. You can manage or disable cookies in your browser settings. For more details, see our Cookies Policy below.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">5. Data Sharing</h2>
          <p>We may share limited data with trusted service providers who help us operate the site (such as analytics or hosting platforms). These providers must comply with confidentiality and data protection standards. We may also disclose information if required by law or to protect our rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">6. Data Security</h2>
          <p>We use reasonable measures to secure your information from unauthorized access or misuse. However, no system is completely secure, and we cannot guarantee absolute protection.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">7. Your Rights</h2>
          <p className="mb-3">If you've provided any personal data, you can request that we:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide a copy of your data.</li>
            <li>Correct or delete your data.</li>
          </ul>
          <p className="mt-3">You can make such requests via <a href="mailto:info@iremeon.com" className="text-primarycolor-100 hover:underline">info@iremeon.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">8. Children's Privacy</h2>
          <p>Our site is not directed toward children under 13. We do not knowingly collect information from minors.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">9. Updates to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Updates will be posted here with a new effective date.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">10. Contact Us</h2>
          <p>For privacy-related questions, contact: <a href="mailto:info@iremeon.com" className="text-primarycolor-100 hover:underline">info@iremeon.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;