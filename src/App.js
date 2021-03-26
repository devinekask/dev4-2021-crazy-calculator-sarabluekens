import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  return (
    <>
      <Header/>
        <Calculator/>
      <Footer/>
    </>
    );
};

export default App;
