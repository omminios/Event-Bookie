// TabsNavigation.jsx
import React from 'react';

function TabsNavigation({ activeTab, onTabChange }) {
  return (
      <div className="p-4" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
        {/* Tabs navigation */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className={`px-4 py-2 bg-orange-500 text-white rounded-t-lg hover:bg-blue-600 ${
                activeTab === 'Login' ? 'bg-blue-600' : ''
              }`}
              onClick={() => onTabChange('Login')}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`px-4 py-2 bg-orange-500 text-white rounded-t-lg hover:bg-blue-600 ${
                activeTab === 'Signup' ? 'bg-blue-600' : ''
              }`}
              onClick={() => onTabChange('Signup')}
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
  );
}

export default TabsNavigation;
