import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>Hello, Mundo!</h1>
      <p>Este es mi primer componente</p>
    </div>
  );
}

root.render(
  <div>
    <Greeting />
    <Greeting />
  </div>
);
