import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="my-14 mx-6">
      <ul className="flex w-full justify-center">
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          <Link to="/mountain">Mountain</Link>
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          Beaches
          <Link to="/beaches">Beaches</Link>
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          <Link to="/birds">Birds</Link>
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          <Link to="/food">Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
