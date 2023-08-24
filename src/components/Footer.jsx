import React from 'react';

export const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">{children}</div>
    <Footer />
  </div>
);

export const Footer = () => (
  <div className="text-center p-4 border-t dark:border-gray-700 border-gray-200 bg-gray-100 dark:bg-gray-800 mt-auto">
    <p className="text-gray-600 dark:text-gray-300">&copy; 2023 SearchNet, Inc.</p>
  </div>
);

