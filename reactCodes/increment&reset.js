var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  resetCount:function(){
    this.setState({
      count: 0
    });
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
        <button type="button" onClick={this.resetCount}>reset</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('root'));
