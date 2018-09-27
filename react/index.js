var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  render: function() {
    return (
      <div>
        <input type="button" onClick={this._clickHandler} value="点我" />
      </div>
    );
  },
  _clickHandler: function() {
    ReactDOM.unmountComponentAtNode(document.getElementById('container2'));
  },
});

var SubComponent = React.createClass({
  render: function() {
    return <div id="sub"><span>I'm about to disappear.</span></div>;
  },
});

ReactDOM.render(<Component />, document.getElementById('container1'));
ReactDOM.render(<SubComponent />, document.getElementById('container2'));
