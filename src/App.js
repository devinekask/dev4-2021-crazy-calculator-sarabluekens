import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  
  return (
    <>
      <Header/>
      <Form/>
      <Results/>
      <Footer/>
    </>
    );
};

export default App;
