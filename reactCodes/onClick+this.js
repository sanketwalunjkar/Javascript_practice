import React from 'react';

//create button component

var Button=React.createClass(
  {
    click (){
      var name==="vishal" ? 'hi':'hello';
      return name;

    },
    render () {
      return <button onClick={this.click}>click here</button>; //here we have called click property for the button
    }
});

export default Button;
