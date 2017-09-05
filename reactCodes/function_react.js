var React = require('react');
var ReactDOM = require('react-dom');

var EvenOdd = React.createClass({
  getNumber:function() {
    var number=prompt('enter the number');
    var answer=number>5?'true':'false';
    return answer;
  },
  render: function () {
    return (<h1>condition is {this.getNumber()} </h1>);
  }
});

ReactDOM.render(
  <EvenOdd />,//rendering the component
  document.getElementById("root"));
