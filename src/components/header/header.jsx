import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/images/logos/ablam-logo.jpg";
import { TypeAnimation } from "react-type-animation";
import { NavBar } from "../navbar/navbar";
import anime from "animejs/lib/anime.es.js";

class Header extends Component {
  constructor(props) {
    super(props);
    // this.animation = React.createRef();
    this.animation = anime.timeline({ loop: false });
  }

  componentDidMount() {
    this.animation.add({
      targets: "#name",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    });
  }
  render() {
    return (
      <header>
        <div id="info">
          <img className="img" src={logo} alt="AblamLeTitiz" width="250px" />
          <h2 id="name">EZIAN Ablam Hippolyte</h2>

          <TypeAnimation
            sequence={[
              "Software Developer", // Types 'One'
              1000, // Waits 1s
              "Coach at 3W Academy", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Photographer and tourist", // Types 'Three' without deleting 'Two'
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>

        <NavBar />
      </header>
    );
  }
}

export default Header;
