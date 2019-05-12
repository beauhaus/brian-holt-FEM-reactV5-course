import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <SearchParams path="/" name="Ralph" animal="loris" breed="dragon" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
