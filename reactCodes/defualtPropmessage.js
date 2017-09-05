var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({

 getDefaultProps :function(){//it is the function for default prop message .if no  data is passed to button component then this text ill render
   return { text: 'hi i am default text' };
 },
  render: function () {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
});

ReactDOM.render(
  <Button/>,
  document.getElementById('app')
);
