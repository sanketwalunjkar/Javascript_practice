var React = require('react');
var ReactDOM = require('react-dom');

var input =	prompt('enter the number');


// React.createClass call begins here:
var EvenOdd = React.createClass({   //creating the component
  render: function () {
    var answer = input %2 === 0 ? 'even' : 'odd';
    return <h1>the number is {answer}</h1>;
  }
});

ReactDOM.render(
  <EvenOdd />,//rendering the component
  document.getElementById("app"));
