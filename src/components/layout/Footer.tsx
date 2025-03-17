
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} BRE Backtesting Tool
          </div>
          <div className="text-sm text-gray-500">
            Version 1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
