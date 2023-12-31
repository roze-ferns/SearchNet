import React, { useState } from "react";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Router from "./components/Router";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={`h-screen ${darkTheme ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black flex flex-col min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Router />
        <Footer />
      </div>
    </div>
  );
};

export default App;
