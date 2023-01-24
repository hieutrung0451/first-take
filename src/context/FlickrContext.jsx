import { createContext, useState } from "react";

const FlickrContext = createContext();

export const FlickrProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // 
  return (
    <FlickrContext.Provider value={{ images, loading }}>
      {children}
    </FlickrContext.Provider>
  );
};
