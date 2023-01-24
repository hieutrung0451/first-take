import React from "react";

const SearchForm = () => {
  const submitHandler = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={submitHandler} className="my-16 mx-auto">
      <input
        className="py-2 px-2 w-96 rounded-md border-2 border-zinc-500 outline-none"
        type="text"
        name="search"
        placeholder="Search..."
      />
      <button
        className="relative right-2 rounded-r-lg bg-slate-900 text-slate-200 py-2 px-8 font-semibold border-2 border-slate-900"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
