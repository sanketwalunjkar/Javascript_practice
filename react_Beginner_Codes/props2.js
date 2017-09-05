var Shirt=React.createClass({
  render:function(){
    return (
       <div>
      <h1>NAME :: {this.props.name}</h1>
      <h1>Jursey Number :: {this.props.num}</h1>
      <h1>Style :: {this.props.style}</h1>
      </div>
    );
  }
                             });
ReactDOM.render(
  <div>
    <Shirt name="vishal" num="8" style="all-rounder"/>
  </div>,
  document.getElementById("root")
);
