import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setimages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(async () => {
    const key = "client_id=6nFL0qtWvCtAP6vbrFwqIt9eSo4IG0rwU2pP7t9M4lU";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    const resp = await fetch(route);

    const data = await resp.json();

    if (data.results) {
      setimages(data.results);
    } else {
      setimages(data);
    }
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-100">
          {" "}
          Buscar: <input className=" " type="text" name="inputText" />{" "}
          <button type="submit" className="btn btn-outline-dark m-2">
            <span className="material-symbols-outlined ">search</span>
          </button>
        </label>
      </form>

      <hr />

      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
