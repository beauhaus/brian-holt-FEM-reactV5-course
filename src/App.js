import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "important" }, [
    React.createElement("h1", {}, "Adopt me!!!!!!"),
    React.createElement("h1", {}, "Adopt me?"),
    React.createElement(Pet, {
      name: "ralph",
      animal: "Bird",
      breed: "bluebird"
    }),
    React.createElement(Pet, {
      name: "suzi",
      animal: "frog",
      breed: "lovelyFrog"
    }),
    React.createElement(Pet, { name: "babe", animal: "cat", breed: "fluffy" })
  ]);
};
render(React.createElement(App), document.getElementById("root"));