import React from "react";

import { About, Footer, Header, Skills, Testimonials, Work } from "./containers";
import { Navbar } from './components';
import './App.scss'

const App = () => (
  <>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  </>
);

export default App;
