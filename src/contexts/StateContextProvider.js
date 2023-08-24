import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com"; //works

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a6cd02ab21mshc3e83043eb353fcp16ba57jsne10c04cd9d15",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await res.json();
    console.log(data);
    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
