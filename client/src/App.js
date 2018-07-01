import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";



const App = () =>
  <Router>
    <div>
      {/* This is a single page application */}
      <Route path="/" component={Home} />
    </div>
  </Router>;

export default App;