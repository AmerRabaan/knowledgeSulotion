import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className='self-center text-center px-20'>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Knowledge Solution, we value the privacy and security of your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website.
        By using our website, you consent to the practices described in this Privacy Policy.
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Information We Collect</h2>
      <p className="mb-4">
        When you visit our website, we may collect certain information about you.
        The types of information we may collect include:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Personal Information: This may include your name, email address, phone number, and any other information you voluntarily provide to us through our website's contact forms or registration processes.</li>
        <li>Usage Information: We may collect information about your usage of our website, such as your IP address, browser type, device information, and website navigation patterns.
          This information helps us improve our website and provide a better user experience.</li>
      </ol>

      <h2 className="text-lg font-bold mt-4 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Communication: We may use your contact information to respond to your inquiries, provide you with information about our services, and send you relevant updates and newsletters.</li>
        <li>Improvement of Services: We analyze usage information to improve our website's content, functionality, and user experience.
          This helps us understand how visitors interact with our website and tailor it to their needs.</li>
        <li>Legal Compliance: We may use your information to comply with applicable laws, regulations, and legal processes.</li>
      </ul>

      <h2 className="text-lg font-bold mt-4 mb-2">Information Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following situations:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services.
          These providers are obligated to keep your information confidential and use it only for the purposes specified by us.</li>
        <li>Legal Requirements: We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government investigation.</li>
      </ul>

      <h2 className="text-lg font-bold mt-4 mb-2">Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your information from unauthorized access, loss, misuse, or alteration.
        However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        Therefore, we cannot guarantee absolute security of your information.
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites.
        Please note that we are not responsible for the privacy practices or content of those websites.
        We encourage you to review the privacy policies of any third-party sites you visit.
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Your Rights</h2>
      <p className="mb-4">
        You have certain rights regarding your personal information, including the right to access, update, or delete your information.
        If you would like to exercise any of these rights or have any questions or concerns about our privacy practices, please contact us using the information provided below:
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our Privacy Policy or our handling of your personal information, please contact us:
      </p>

      <p>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
