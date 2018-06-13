import React, { Component } from "react";

// first we will make a new context
export const MyContext = React.createContext;

// Then create a provider Component
export default class MyProvider extends React.Component {
  state = {
    data: {
      calories: 37,
      climbed: 0,
      distance: 1050,
      heartRate: 72,
      height: 1.7,
      steps: 1505,
      weight: 64,
     },
     editing: false,
  };

  onSubmit = () => {
    this.setState({
      editing : !this.state.editing,
    });
  }

  render() {
    return (
      <MyContext.Provider value={{
        ...this.state,
        onSubmit: this.onSubmit,
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
