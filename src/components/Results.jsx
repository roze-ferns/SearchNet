import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {     
        getResults(`/?query=${searchTerm}&limit=20&related_keywords=true`);
    }
  }, [searchTerm]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        // <div className="sm:px-6 md:px-10 lg:px-16 xl:px-20">
        //     {results?.results?.map(({ url, title, description }, index) => (
        //         <div key={index} className="w-full mb-8">
        //         <a href={url} target="_blank" rel="noreferrer">
        //             <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
        //             <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
        //         </a>
        //         <p className="text-gray-450">{description}</p>
        //         </div>
        //     ))}
        // </div>
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    default:
      return 'API Usage Limit Exceeded';
  }
};
