var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
 getInitialState:function(){//this is the function to get the default state of component
   //A React component can access dynamic information in two ways: props and state.
   //Unlike props, a component's state is not passed in from the outside. A component decides its own state.
   return {title :'Best App'};

 },//getInitialState should return an object, like in the example above.
  render: function () {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
});
