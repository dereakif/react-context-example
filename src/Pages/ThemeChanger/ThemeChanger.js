import React, { Component } from "react";

export default class ThemeChanger extends Component {
  state = {
    darkTheme: true,
  };
  render() {
    return (
      <div
        style={{
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button>Change Theme</button>
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "1px solid black",
            backgroundColor: this.state.darkTheme ? "black" : "white",
            color: this.state.darkTheme ? "white" : "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Theme {this.state.darkTheme ? "Dark" : "White"}
        </div>
      </div>
    );
  }
}
