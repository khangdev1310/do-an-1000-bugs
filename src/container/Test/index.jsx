import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import poster1 from "./../../assets/money-heist.jpg";
import poster2 from "./../../assets/the100.jpg";
import poster3 from "./../../assets/tenet.jpg";
import poster4 from "./../../assets/inception.jpg";

export default class Test extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={poster1} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={poster2} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={poster3} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={poster4} alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src={poster3} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={poster4} alt="4" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div>
      </div>
    );
  }
}
