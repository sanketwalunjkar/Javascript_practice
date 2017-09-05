var Display = React.createClass({
  render: function() {
    return(
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
});

var Label = React.createClass({
  render: function() {
    return (
      <Display  {...this.props} />//using ... operator we are getting all properites of Display Component
    );
  }
});

var Shirt = React.createClass({
  render: function() {
      return (
        <div>
          <Label  {...this.props} />//using ... operator we are getting all properites Label  Component
        </div>
      );
    }
});

ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium"/> //here we are displaying shirt Component
  </div>,
  document.getElementById("root")
);
