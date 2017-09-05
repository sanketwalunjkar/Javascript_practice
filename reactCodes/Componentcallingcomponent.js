var Sayhi=React.createClass( //first component
{
	render:function(){
  return <h1>hi</h1>;
  }
});

var SayName=React.createClass({ //second component
	render:function(){
  var name=prompt('enter your name');

  return (
	<div>//this is necessary div
	<Sayhi /> //here we have called sayhi component inside sayname component
  <h2>{name}</h2>
  </div>
  )
  }
});
ReactDOM.render(
  <SayName />,
  document.getElementById("container"));
