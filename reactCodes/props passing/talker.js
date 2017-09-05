var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');//importing the button component

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },

  render: function () {
    return <Button onClick={this.handleClick}/>; //calling handleClick on button ,here onclick is just a name of attribute not an event
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
