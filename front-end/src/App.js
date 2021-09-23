import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";


function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
