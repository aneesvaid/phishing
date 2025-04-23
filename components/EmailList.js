// src/components/EmailList.js
import React from 'react';
import { Link } from 'react-router-dom';

// Sample email data (you can update this with real data later)
const emails = [
  { id: 1, subject: 'Urgent Action Required: Verify Your Bank Account!', preview: 'We have detected unusual activity in your account.' },
  { id: 2, subject: 'Your Subscription Renewal Confirmation', preview: 'Your subscription has been successfully renewed.' },
  { id: 3, subject: 'Important Security Update', preview: 'Click here to update your security settings.' },
  { id: 4, subject: 'Welcome to AI Shield!', preview: 'Thank you for signing up with AI Shield. We are here to protect you.' },
];

function EmailList() {
  return (
    <div>
      <h2>Email Inbox</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id}>
            <Link to={`/email/${email.id}`}>
              <strong>{email.subject}</strong>
            </Link>
            <p>{email.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailList;
