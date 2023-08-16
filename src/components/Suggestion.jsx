import React from "react";

const Suggestion = ({ suggestions, locationName }) => {
  return (
    <ul className="absolute bg-green-700  z-10 w-full top-9 flex items-center justify-center">
      {locationName &&
        suggestions.map((suggestion) => (
          <li key={suggestion.id} className="text-black  hover:bg-emerald-300">
            {" "}
            {suggestion.name}
          </li>
        ))}
    </ul>
  );
};

export default Suggestion;
