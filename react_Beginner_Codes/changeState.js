var React = require('react');
var ReactDOM=require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({

  getInitialState:function() {
    return {color:green};
  },

  changeColor:function(){
    var newColor=this.state.color=='#39D1B4'?'#FFD712':'#39D1B4';//newcolor will store the new value
  this.setState({ color: newColor });//it is the function to change the state
/*
That is why you can't call this.setState from inside of the
render function! this.setState automatically calls render. If
 render calls this.setState, you will create an infinite loop.

*/
  },
  render: function () {
    return (
      <div style={{background:this.state.color}}>
      /*The screen's color doesn't change until Toggle renders.
Inside of the render function, it's this line:
<div style={{background:this.state.color}}>
that changes a virtual DOM object's color to the new this.state.color,
 eventually causing a change in the screen.*/

        <h1>Change my color</h1>
        <button onClick={this.changeColor}> Change color</button>//we are calling change color function here
      </div>
    );
  }
});

ReactDOM.render(<Toggle />,document.getElementById('app'));
