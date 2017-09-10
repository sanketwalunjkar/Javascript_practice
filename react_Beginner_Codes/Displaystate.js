var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
 getInitialState:function(){

      return {title :'Best App'};

 },//getInitialState should return an object, like in the example above.
  render: function () {
    return (
      <h1>
        Wow this entire app is just an {this.state.title}.//it will pass the title to render function
      </h1>
    );
  }
});
ReactDOM.render(<App />,document.getElementById('app'));
