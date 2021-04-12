import { Component } from "react";

class ThemeContext extends Component {
  state = { dark: true };
  render() {
    return <div>hello from theme changer</div>;
  }
}

export default ThemeContext;
