import React, { Component } from "react";
import { scroller } from "react-scroll";
import "./Navigation.css";
import data from "../data.json";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      currentTheme: 1,
    };
  }

  changeColorTheme() {
    debugger;
    let current = this.state.currentTheme;
    current = current === data.themes.length - 1 ? 0 : ++current;
    this.setState({
      currentTheme: current,
    });
    this.props.parentCallback(data.themes[this.state.currentTheme]);
  }

  scrollToAbout() {
    scroller.scrollTo("about-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  scrollTSkill() {
    scroller.scrollTo("skill-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <div
          className="change-theme"
          onClick={() => {
            this.changeColorTheme();
          }}
        >
          <img src={this.props.icon} alt="" />
          <span>Color Me</span>
        </div>

        <span onClick={this.scrollToAbout} className="section-link">
          About
        </span>
        <span onClick={this.scrollTSkill} className="section-link">
          Skills
        </span>
      </div>
    );
  }
}
