import React, { Component } from "react";
import { Particles } from "react-particles-js";

import "./ParticleEffect.css"


export default class ParticleEffect extends Component {
  render (){
    return (
        <Particles
        params={{
          background: {
            color: "transparent"
          },
          particles: {
            color: {
              value: this.props.particleColor,
            },
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />
    )
  }
}
