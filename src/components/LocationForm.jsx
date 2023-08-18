import React, { useState } from "react";
import Suggestion from "./Suggestion";
import axios from "axios";

const LocationForm = ({ handleSubmit }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [locationName, setLocationName] = useState("");

  const handleChange = (e) => {
    const newLocation = e.target.value;
    setLocationName(newLocation);
    const url = `https://rickandmortyapi.com/api/location?name=${newLocation}`;

    axios
      .get(url)
      .then(({ data }) =>  setSuggestions(data.results))
      .catch((err) => {
        
      });
  };
  return (
    <>
      <form className="flex px-2 sm:mx-[15%] " onSubmit={(e) => handleSubmit(e, suggestions)}>
        <div className="relative   border-2 border-green-800 flex-1">
          <input
            className="w-full outline-none  bg-neutral-950 text-[#938686] text-center "
            id="newLocation"
            type="text"
            value={locationName}
            placeholder="Type a dimension..."
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <Suggestion suggestions={suggestions} locationName={locationName} />
        </div>

        <button className="bg-green-700  border-2 border-green-500 py-1 px-4 flex items-center gap-2">
          <span className="hidden sm:block">Search</span>
          <i className="bx bx-search-alt-2 text-dark-gray text-lg"></i>
        </button>
      </form>
    </>
  );
};

export default LocationForm;
