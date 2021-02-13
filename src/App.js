import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddWord from "./component/AddWord";
import Header from "./component/Header";
import Home from "./component/Home";
import LeftSide from "./component/LeftSide";
import ShowWord from "./component/ShowWord";

import { useDispatch } from "react-redux";
import { getWorksFromAPIASYNC } from "./feature/wordSlice";

export default function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksFromAPIASYNC());
  }, []);

  return (
    <Router>
      <Header />
      <LeftSide />
      <Route path="/" exact component={Home} />
      <Route path="/new" component={AddWord} />
      <Route path="/list/:id" component={ShowWord} />
    </Router>
  );
}
