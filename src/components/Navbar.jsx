import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <nav className="p-5 pb-0 border-b dark:border-gray-700 border-gray-200 bg-white dark:bg-gray-800">
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-5">      
        <div>
          {/* <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-sm dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 shadow-sm hover:shadow-lg"
        >
          {darkTheme ? '💡' : '🌙'}
        </button> */}
        <Link to="/" className="text-2xl font-bold text-gray-900 py-1 px-2 rounded dark:text-white">
        SearchNet 🔎
      </Link></div>
      <div className="flex items-center space-x-3">
        <Search />
      </div>
    </div>
  </nav>
);

// export default Navbar;
