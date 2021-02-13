import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWords,
  addNewASYNC,
  getWorksFromAPIASYNC,
} from "../feature/wordSlice";
import LeftSide from "./LeftSide";

const Home = (props) => {
     
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksFromAPIASYNC());
   
  }, []);
  const data = useSelector(selectWords);

  return (
    <React.Fragment>
      <LeftSide data={data.words}></LeftSide>
      <div className="cart-container"></div>
    </React.Fragment>
  );
};

export default Home;
