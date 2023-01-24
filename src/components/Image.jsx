import React from "react";

const Image = ({ id, farm, server, secret, title }) => {
  return (
    <li className="mr-12 mb-4 w-44">
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
        alt={title}
      />
    </li>
  );
};

export default Image;
