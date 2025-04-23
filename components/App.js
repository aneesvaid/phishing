// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailList from './components/EmailList';
import EmailViewer from './components/EmailViewer';

function App() {
  return (
    <div>
      <h1>AI Shield - Phishing Email Detector</h1>
      <Routes>
        <Route path="/" element={<EmailList />} />
        <Route path="/email/:emailId" element={<EmailViewer />} />
      </Routes>
    </div>
  );
}

export default App;
