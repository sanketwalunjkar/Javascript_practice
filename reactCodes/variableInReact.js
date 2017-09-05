
// Write code here:
var myList=(
	<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
)

ReactDOM.render(myList,document.getElementById('app'));
//first argument is jsx expression and second argument the location where you need to append the 1st expression
//One special thing about ReactDOM.render is that it only updates DOM elements that have changed.
