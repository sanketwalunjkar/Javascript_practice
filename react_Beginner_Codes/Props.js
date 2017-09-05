var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;//here we are displaying the name using props
  }
});

// ReactDOM.render goes here:
ReactDOM.render(
  <Greeting firstName='Grobeta' />, //here we have passed the name
  document.getElementById('app')
);
