// src/components/EmailViewer.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const emails = [
  { id: 1, subject: 'Urgent Action Required: Verify Your Bank Account!', content: 'We have detected unusual activity in your bank account. Kindly verify your information immediately to avoid suspension. ➡️ Click Here to Verify Now', isPhishing: true },
  { id: 2, subject: 'Your Subscription Renewal Confirmation', content: 'Your subscription has been successfully renewed. Thank you for your payment.', isPhishing: false },
  { id: 3, subject: 'Important Security Update', content: 'Click here to update your security settings.', isPhishing: false },
  { id: 4, subject: 'Welcome to AI Shield!', content: 'Thank you for signing up with AI Shield. We are here to protect you from phishing threats.', isPhishing: false },
];

function EmailViewer() {
  const { emailId } = useParams();
  const email = emails.find((email) => email.id === parseInt(emailId));
  const navigate = useNavigate();

  const handleReportPhishing = () => {
    alert("Email Reported!");
    navigate('/');
  };

  return (
    <div>
      <h2>{email?.subject}</h2>
      <p>{email?.content}</p>

      <div style={{ backgroundColor: email?.isPhishing ? '#E74C3C' : '#2ECC71', padding: '10px', color: 'white' }}>
        {email?.isPhishing ? 'Phishing Detected!' : 'Safe Email'}
      </div>

      <button onClick={handleReportPhishing}>Report Phishing</button>
      <button onClick={() => navigate('/')}>Back to Inbox</button>
    </div>
  );
}

export default EmailViewer;
