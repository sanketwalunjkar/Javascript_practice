var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.onClick}>//second onclick is attribute name from talker.js not onclick function
        Click me!
      </button>
    );
  }
});

module.exports = Button; //we are exporting button component
