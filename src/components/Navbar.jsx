import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <nav className="p-2 pb-2 border-b dark:border-gray-700 border-gray-200 bg-white dark:bg-gray-800">
  <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-5 px-6 md:px-10 lg:px-16 xl:px-20">      
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="p-2 text-sm dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full shadow-sm hover:shadow-lg"
      >
        {darkTheme ? '💡' : '🌙'}
      </button>
      <Link to="/" className="p-2 text-2xl font-bold text-gray-900 rounded dark:text-white">
        SearchNet 🔎
      </Link>
    </div>
    <div className="flex items-center space-x-3">
      <Search />
    </div>
  </div>
</nav>
);

