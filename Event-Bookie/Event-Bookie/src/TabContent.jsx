// TabContent.jsx
import React from 'react';

function TabContent({ activeTab }) {
  return (
    <>
        <div id="Login" className={activeTab === 'Login' ? '' : 'hidden'}>
          {/* Login tab content */}
          <h2 className="text-2xl font-semibold">Please Login with an Option Below</h2>
          <button className="w-48 h-12 mb-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Login with Facebook
          </button>
          <button className="w-48 h-12 mb-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
            Login with Gmail
          </button>
          <button className="w-48 h-12 mb-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900">
            Login with Other
          </button>
        </div>

        <div id="Signup" className={activeTab === 'Signup' ? '' : 'hidden'}>
          {/* Signup tab content */}
          <h2 className="text-2xl font-semibold">Please Signup with an Option Below</h2>
          <button className="w-48 h-12 mb-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Signup with Facebook
          </button>
          <button className="w-48 h-12 mb-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
            Signup with Gmail
          </button>
          <button className="w-48 h-12 mb-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900">
            Signup with Other
          </button>
        </div>
        </>
  );
}

export default TabContent;
