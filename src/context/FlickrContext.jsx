import { createContext, useState } from "react";

const FlickrContext = createContext();

export const FlickrProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    const response = await fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25dfa20beee1b18fe04a59d8fa6a4fb5&tags=mountain&per_page=24&format=json&nojsoncallback=1"
    );

    const data = await response.json();

    setImages(data.photos.photo);
    setLoading(false);
  };

  return (
    <FlickrContext.Provider value={{ images, loading, fetchImages }}>
      {children}
    </FlickrContext.Provider>
  );
};

export default FlickrContext;
