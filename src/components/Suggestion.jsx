import React from "react";

const Suggestion = ({ suggestions, locationName }) => {
  return (
    <ul className="absolute bg-green-700  z-10 w-full grid ">
      {locationName &&
        suggestions.map((suggestion) => (
          <li key={suggestion.id} className="text-black  hover:bg-emerald-600">
            {suggestion.name}
          </li>
        ))}
    </ul>
  );
};

export default Suggestion;
