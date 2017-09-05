const Element=React.createClass({
  getSum: function(num1,num2){
  return num1+num2;
} ,
  render:function(){
    return <h1>answer is {this.getSum(4,6)}</h1>
  }
});

ReactDOM.render(
 <Element />,
  document.getElementById('root')
);
