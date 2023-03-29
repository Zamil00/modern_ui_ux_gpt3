
import React from "react";
import { Footer, Header, Blog, Features, WhatGPT3, Possibility } from "./containers";
import { Article, Brand, Feature, CTA, Navbar } from "./components";
import "./App.css"


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Article/>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Feature />
      <Footer/>
    </div>
  );
}

export default App;
