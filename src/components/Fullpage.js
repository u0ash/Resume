import React, { Component } from "react";
import ParticleEffect from "./ParticleEffect";
import "./Fullpage.css";

export default class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className={`fullpage ${this.props.className} || ""`}>
          <div className="content-container">{children}</div>
          <div className="particles-container ">
            <ParticleEffect particleColor={this.props.particleColor} />
          </div>
        </div>
      </div>
    );
  }
}
