import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';

const Terms: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primarycolor-100 hover:text-primarycolor-200 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
      <h1 className="text-3xl font-bold text-textcolor-100 mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-textcolor-200">
        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the IremeOn website ("Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree, please stop using the Service immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">2. Purpose of the Service</h2>
          <p>IremeOn is a tech startup. The website serves as an informational platform to help visitors understand who we are, what we do, and our ongoing initiatives. The site does not currently offer account registration, paid services, or direct product sales.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">3. Changes to Terms</h2>
          <p>We may revise these Terms from time to time to reflect updates in our operations or legal requirements. Any modifications will be posted here with an updated effective date. Your continued use of the website after such changes constitutes acceptance of the new Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">4. Acceptable Use</h2>
          <p className="mb-3">You agree to use the website responsibly and only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attempt to hack, disrupt, or interfere with the functionality of the website.</li>
            <li>Copy, distribute, or reuse content, code, or designs without written permission from IremeOn.</li>
            <li>Use the website for activities that could harm IremeOn's reputation or integrity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">5. Intellectual Property</h2>
          <p>All content on this website — including text, logos, graphics, designs, and code — is the property of IremeOn unless stated otherwise. You may view and share information for personal use, but reproduction or modification without written consent is prohibited.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">6. External Links</h2>
          <p>This website may contain links to external websites or third-party resources. IremeOn is not responsible for the content, privacy practices, or reliability of those sites. Visiting them is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">7. Disclaimers</h2>
          <p>All information on the IremeOn site is provided for general informational purposes only. While we strive for accuracy, we make no guarantees that the information is complete, up to date, or error-free.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, IremeOn will not be liable for any damages, losses, or claims resulting from your use of or reliance on the website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">9. Governing Law</h2>
          <p>These Terms are governed by the laws of Rwanda. Any disputes will be handled in accordance with Rwandan law and within Rwandan jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-textcolor-100 mb-3">10. Contact Information</h2>
          <p>If you have any questions regarding these Terms, contact us at: <a href="mailto:info@iremeon.com" className="text-primarycolor-100 hover:underline">info@iremeon.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default Terms;