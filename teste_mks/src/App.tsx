import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
