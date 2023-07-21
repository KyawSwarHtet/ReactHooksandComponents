import React, { Component } from "react";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      });
    }, 2000);
  }

  render() {
    return <div>Parent Component</div>;
  }
}
export default ParentComp;
