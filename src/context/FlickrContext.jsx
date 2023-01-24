import { createContext, useState } from "react";

const FlickrContext = createContext();

export const FlickrProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=25dfa20beee1b18fe04a59d8fa6a4fb5&user_id=61495424@N00&format=json&nojsoncallback=1
  return (
    <FlickrContext.Provider value={{ images, loading }}>
      {children}
    </FlickrContext.Provider>
  );
};
