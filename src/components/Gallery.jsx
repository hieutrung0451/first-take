import React from "react";
import { useEffect, useState } from "react";
import Image from "./Image";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_URL}`);

    const data = await response.json();

    setImages(data.photos.photo);
    setLoading(false);
  };

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
