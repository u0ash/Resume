import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import ScrollIcon from "../components/ScrollIcon";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import "./TitleSection.css";

export default class TitleSection extends Component {
  render() {
    return (
      <div>
        <Fullpage
          className={`first ${this.props.themeName.Name} || ""`}
          particleColor={this.props.themeName.particleColor}
        >
          <Element name="title-element" className="element"></Element>
          <h1 className="title">{data.title}</h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <div className="social-icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
          <Link
            activeClass="active"
            to="about-element"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={this.handleSetActive}
          >
            <ScrollIcon icon={data.icons.down} />
          </Link>
        </Fullpage>
      </div>
    );
  }
}
