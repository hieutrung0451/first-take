import React from "react";

const SearchForm = () => {
  const submitHandler = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={submitHandler} className="my-16 mx-auto">
      <input
        className="py-2 px-2 w-96 rounded-md border-2 border-zinc-500"
        type="text"
        name="search"
        placeholder="Search..."
      />
      <button
        className="rounded-md bg-slate-900 text-slate-200 ml-2 py-2 px-8 font-semibold"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
