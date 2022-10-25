import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { Column } from "./styles/globals";

function App() {
  return (
    <Column justify="space-between" height="100vh">
      <Header />
      <ProductsList />
      <Footer />
    </Column>
  );
}

export default App;
