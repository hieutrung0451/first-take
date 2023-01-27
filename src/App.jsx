import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import Gallery from "./components/Gallery";

import { FlickrProvider } from "./context/FlickrContext";

const App = () => {
  return (
    <FlickrProvider>
      <Router>
        <span id="forkongithub">
          <a href="https://github.com/hieutrung0451/first-take">
            Fork me on GitHub
          </a>
        </span>
        <div className="bg-slate-200 w-full h-full container px-32 py-32 flex flex-col items-center">
          <div>
            <h1 className="text-5xl text-center font-bold">First Take</h1>
            <SearchForm />
            <MainNav />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-12">
              Mountain Pictures
              <Routes>
                <Route path="/" />
                <Route path="/mountain" />
                <Route path="/beaches" />
                <Route path="/birds" />
                <Route path="/food" />
              </Routes>
            </h2>
            <Gallery />
          </div>
        </div>
      </Router>
    </FlickrProvider>
  );
};

export default App;
