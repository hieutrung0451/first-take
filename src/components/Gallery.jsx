import { useEffect, useState, useContext } from "react";
import FlickrContext from "../context/FlickrContext";
import Image from "./Image";

const Gallery = () => {
  const { images, loading, fetchImages } = useContext(FlickrContext);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="h-full">
      <ul className="flex flex-wrap justify-center">
        {images.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            farm={item.farm}
            server={item.server}
            secret={item.secret}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
