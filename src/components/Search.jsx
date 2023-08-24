import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/StateContextProvider';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 2000);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex items-center">
      <input
        value={text}
        type="text"
        className="w-80 h-10 px-4 dark:bg-gray-200 border rounded-full shadow-sm outline-none text-black"
        placeholder="🔎 Search"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button
          type="button"
          className="text-2xl text-gray-500 hover:text-gray-700"
          onClick={() => setText('')}
        >
          x
        </button>
      )}
    </div>
  );
};
