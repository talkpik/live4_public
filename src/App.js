import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Extra from './extra';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
	    <Extra />
      <Footer />

    </div>
	</BrowserRouter>
  );
}

export default App;
