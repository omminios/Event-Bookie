import React, { useState } from 'react';
import TabsNavigation from './TabsNavigation';
import TabContent from './TabContent';

function LoginPage() {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
    <div className="container mx-auto pb-8 border rounded shadow-lg p-4 mt-4" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0)' }}>
      <TabsNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <TabContent activeTab={activeTab} />
      </div>
    </>
  );
}

export default LoginPage;
