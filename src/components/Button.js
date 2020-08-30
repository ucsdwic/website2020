import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div className={this.props.type}>
        <a href={this.props.toLink}>
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
