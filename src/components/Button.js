import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // let width = document.querySelector(".front-button").clientWidth;
    // console.log(width);
    // let left_margin = -width / 2;
    // console.log(left_margin);
    // document.getElementById(
    //   "main-button"
    // ).style.marginLeft = `${left_margin}px`;

    let element = document.getElementsByClassName(`front-button`);
    for (let child of element) {
      let width = -child.clientWidth / 2;
      child.style.marginLeft = `${width}px`;
    }

    element = document.getElementsByClassName(`back-button`);
    for (let child of element) {
      let width = -child.clientWidth / 2;
      child.style.marginLeft = `${width}px`;
    }
  }

  render() {
    return (
      <div className={this.props.type}>
        <a href={this.props.toLink} target="_blank">
          <button className="front-button">
            <h5>{this.props.text}</h5>
          </button>
          <div className="back-button">
            <h5>{this.props.text}</h5>
          </div>
        </a>
      </div>
    );
  }
}
