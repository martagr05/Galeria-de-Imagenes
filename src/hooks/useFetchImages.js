import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
    const [images, setimages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true)
  
    const peticion = useCallback(async () => {
      const key = "client_id=6nFL0qtWvCtAP6vbrFwqIt9eSo4IG0rwU2pP7t9M4lU";
  
      let route = `https://api.unsplash.com/photos/?${key}`;
  
      if (input !== "") {
        route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
          input
        )}&${key}`;
      }
  
      setLoading(true)
  
      const resp = await fetch(route);
  
      const data = await resp.json();
  
      if (data.results) {
        setimages(data.results);
      } else {
        setimages(data);
      }
      setLoading(false)
    }, [input]);
  
    useEffect(() => {
      peticion();
    }, [peticion]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const text = e.target[0].value;
  
      setInput(text);
    };

    return [ images, loading, handleSubmit]
}
