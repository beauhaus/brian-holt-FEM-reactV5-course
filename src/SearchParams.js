import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";

// console.log("anim[2]", ANIMALS[2]);
// console.log("animals", ANIMALS);

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("breed", "", breeds);

  // const [animal, setAnimal] = useState("dog");
  // const [breed, setBreed] = useState({});

  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error);
  });

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="" className="search-form">
        <label htmlFor="location">
          location
          <input
            onChange={e => updateLocation(e.target.value)}
            onBlur={e => updateLocation(e.target.value)}
            id="location"
            type="text"
            placeholder="Location"
            value={location}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
