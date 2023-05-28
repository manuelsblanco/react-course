import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard} from "./Greeting"; 
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <div>
    <Post/>
    </div> 
);
