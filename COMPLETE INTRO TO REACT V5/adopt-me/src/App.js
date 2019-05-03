const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ])
}
const App = () => {
    return React.createElement("div",{id: "important"},
[        React.createElement('h1', {}, "Adopt me!"),
        React.createElement(Pet,
            {name: "ralph", 
        animal: "Bird",
    breed: "bluebird"}),
        React.createElement(Pet,
            {name: "suzi", 
        animal: "frog",
    breed: "lovelyFrog"}),
        React.createElement(Pet,
            {name: "babe", 
        animal: "cat",
    breed: "fluffy"})
])
}
ReactDOM.render(React.createElement(App),
document.getElementById("root"))
