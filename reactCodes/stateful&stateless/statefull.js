var React=require('react');
var ReactDOM=require('react-dom');
var Child=require('./stateless.js'); //importing

var Parent=React.createClass({

	getInitialState: function() {
    return {name:'Frarthur'}
  },
  render: function () {
  return <Child name={this.state.name}/>;//render child
}
});

ReactDOM.render(<Parent />,document.getElementById('app')); //render parent
