import React, { Component } from "react";

class CreateForm extends Component {
  state = {
    currentColor: "pink"
  };
  handleColorClick(color) {
    this.setState({ currentColor: color });
  }
  render() {
    const { currentColor } = this.state;
    return (
      <div className={`create-form-wrapper ${currentColor}`}>
        <div className="theme-preview">
          <div className="pattern-overlay" />
        </div>
        <div className="theme-choice-wrapper">
          <p className="theme-choice-label">Choose a theme:</p>
          <div className="theme-choice-list">
          <a href="javascript:;" onClick={()=> this.handleColorClick("pink")} className={`theme-choice pink ${currentColor === "pink" ? "fa fa-check": ""}`} />
            <a href="javascript:;" onClick={()=> this.handleColorClick("blue")} className={`theme-choice blue ${currentColor === "blue" ? "fa fa-check": ""}`} />
            <a href="javascript:;" onClick={()=> this.handleColorClick("yellow")} className={`theme-choice yellow ${currentColor === "yellow" ? "fa fa-check": ""}`} />
            <a href="javascript:;" onClick={()=> this.handleColorClick("purple")} className={`theme-choice purple ${currentColor === "purple" ? "fa fa-check": ""}`} />
            <a href="javascript:;" onClick={()=> this.handleColorClick("orange")} className={`theme-choice orange ${currentColor === "orange" ? "fa fa-check": ""}`} />
            <a href="javascript:;" onClick={()=> this.handleColorClick("green")} className={`theme-choice green ${currentColor === "green" ? "fa fa-check": ""}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateForm;
