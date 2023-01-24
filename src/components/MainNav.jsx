import React from "react";

const MainNav = () => {
  return (
    <nav className="my-14 mx-6">
      <ul className="flex w-full justify-center">
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          Mountain
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          Beaches
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          Birds
        </li>
        <li className="px-4 py-2 mr-10 bg-slate-900 text-slate-200 rounded-md font-semibold">
          Food
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
