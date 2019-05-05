import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Ralph" animal="loris" breed="dragon" />
      <Pet name="Bob" animal="cat" breed="siamese" />
      <Pet name="Jeff" animal="dog" breed="doberman" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
