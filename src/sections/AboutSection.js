import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import ScrollIcon from "../components/ScrollIcon";
import "./AboutSection.css";

export default class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage
          className={`second ${this.props.themeName.Name} || ""`}
          particleColor={this.props.themeName.particleColor}
        >
          <Element name="about-element" className="element"></Element>
          <h3 className="about-title">{data.sections[0].title}</h3>
          <div className="about-content">
            {data.sections[0].items.map((item) => {
              return <div>{item.content}</div>;
            })}
          </div>
          <Link
            activeClass="active"
            to="skill-element"
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

  componentDidMount() {}
}
