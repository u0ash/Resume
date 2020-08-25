import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import { Link, Element } from "react-scroll";
import ScrollIcon from "../components/ScrollIcon";
import "./SkillSection.css";

export default class SkillSection extends Component {
  render() {
    return (
      <Fullpage
        className={`third ${this.props.themeName.Name} || ""`}
        particleColor={this.props.themeName.particleColor}
      >
        <Element name="skill-element" className="element"></Element>
        <h3 className="skill-title">{data.sections[1].title}</h3>
        <div className="card-wrapper">
          {data.sections[1].items.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
        <Link
          activeClass="active"
          to="title-element"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onSetActive={this.handleSetActive}
        >
          <ScrollIcon icon={data.icons.up} />
        </Link>
      </Fullpage>
    );
  }
}
