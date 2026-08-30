import React from "react";
import ReactDOM from "react-dom/client";

//JSX Code transpile before it reaches the js by parcel - Babel.

//jsx -> Babel transpiled it react.createElement -> React element (html object) -> HTML Code

//React Element

const elem = (
  <h1 id="heading" className="">
    Hello world from JSX!!
  </h1>
);

const num = 1000; // normal javascript code

//Inserting jsx element inside the functional component.

const Title = () => (
  <div id="container">
    {elem}
    {num}
    <h1>Namaste From JSX !</h1>
  </div>
);

//React Functional Component

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React Funcional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
