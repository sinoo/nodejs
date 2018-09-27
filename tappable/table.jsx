require('purecss/build/pure.css');
require('./style.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var Table = React.createClass({
  render: function() {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>
              title
              <hr />
              <div className="top-triangle"></div>
              <div className="bottom-triangle"></div>
              <span className="top-right"></span>
              <span className="bottom-left"></span>
            </th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title1</td>
            <td>content1</td>
          </tr>
        </tbody>
      </table>
    );
  },
});

ReactDOM.render(<Table />, document.getElementById('container'));
