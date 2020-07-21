import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="banner-container">
          <h1>
            <a href="/">Marvel Quiz</a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
