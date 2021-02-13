import React, { useEffect, useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import { useSelector, } from "react-redux";
import { selectWords, } from "../feature/wordSlice";

const ShowWord = (props) => {
  const [currentList, setCurrentList] = useState({ words: [] });
  const [slider, setSlider] = useState({
    activeSlide: 0,
  });
  const data = useSelector(selectWords);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setSlider({ activeSlide: current }),
  };

  useEffect(() => {
    if (data.words.length > 0) {
      let d = data.words.filter((f) => f.id === Number(props.match.params.id));

      setCurrentList(d[0]);
    }
  }, [data, props.match.params.id]);

  const changeClassName = (event) => {
    const element = event.target.ownerDocument.activeElement;
    
    element.className =
      element.className === "flip-card" ? "flip-card active" : "flip-card";
  };
  return (
    <div className="cart-container">
      <h1 className="cart-title">{currentList.name}</h1>
      <Slider {...settings}>
        {currentList.words.map((m, index) => (
          <div
          name="flip-card"
            className="flip-card"
            key={index}
            onClick={(e) => changeClassName(e)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1>{m.english}</h1>
              </div>
              <div className="flip-card-back">
                <h1>{m.turkish}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <p className="slider-counter">
        {slider.activeSlide + 1}/{currentList.words.length}
      </p>
    </div>
  );
};

export default ShowWord;
