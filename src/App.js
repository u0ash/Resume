import React, { Component } from "react";
import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import data from "./data.json";
import Snowfall from "react-snowfall";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
    };
  }
  changeThemeCallback = (childTheme) => {
    this.setState({
      theme: childTheme,
    });
  };

  componentWillMount(){
    this.setState({
      theme: data.themes[0],
    });
  }


  render() {
    return (
      <div className="App">
        <Navigation 
          parentCallback={this.changeThemeCallback}
          icon={data.icons.changeTheme}
        />
        <TitleSection themeName={this.state.theme}/>
        <AboutSection themeName={this.state.theme}/>
        <SkillSection themeName={this.state.theme}/>
      </div>
    );
  }
}

export default App;
