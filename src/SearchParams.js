import React, { useContext, useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

/* NOTE: THis is how you update the theme (context);
 */

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext); // possible to use "setTheme", but I'm not using it.

  async function requestPets() {
    const { animals } = await pet.animals({
      pet,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  /* NOTE:
   * useEffect will be "scheduled to" run AFTER
   * 1st render of SearchParms return value
   * _____
   * [animal, setBreed, setBreeds] are "dependencies" of sorts
   * if any of them change,(say, animal), useEffect re-renders
   * and calls the API anew.
   * IN ORDER TO RUN IT ONCE & NO MORE -> use an empty array
   * IN ORDER TO RUN IT EVERY SINGLE TIME COMP RENDERS, remove the param entirely
   */

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: APIbreeds }) => {
      const breedStrings = APIbreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
        className="search-form"
      >
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
        <label htmlFor="theme">
          theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="mediumorchid">medium orchid</option>
            <option value="yellow">yellow</option>
            <option value="orangered">orangered</option>
            <option value="purple">purple</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }} type="submit">
          Submit
        </button>
      </form>
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParams;
