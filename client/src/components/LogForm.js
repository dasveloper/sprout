import React, { Component } from "react";
import { connect } from "react-redux";



class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    const { form } = this.props;
    return <p>{JSON.stringify(form)}</p>;
  }
}

function mapStateToProps({ form }) {
  return {
    form
  };
}
const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogForm);
