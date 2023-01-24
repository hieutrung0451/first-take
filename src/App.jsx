import React from "react";
import SearchForm from "./components/SearchForm";
import MainNav from "./components/MainNav";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="bg-slate-200 w-full h-full container px-32 py-32 flex flex-col items-center">
      <div>
        <h1 className="text-5xl text-center font-bold">First Take</h1>
        <SearchForm />
        <MainNav />
      </div>
      <div>
        <h2 className="text-3xl text-center font-bold mb-12">Pictures</h2>
        <Gallery />
      </div>
    </div>
  );
};

export default App;
