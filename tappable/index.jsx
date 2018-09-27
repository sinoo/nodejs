var Tappable  = require('react-tappable');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Tappable onTap={tapMe} style={{fontSize:'60px', margin:'50px auto' }}
            activeDelay={5000}
            moveThreshold={1}
            onPress={pressMe}
            pressMoveThreshold={1000}
            onPinchStart={pinchMeStart}
            onPinchMove={pinchMeMove}
            onPinchEnd={pinchMeEnd}>Tap Me</Tappable>,
  document.getElementById('container')
);

function tapMe() {
  console.log(new Date() + 'I\'m tapped.');
}

function pressMe() {
  console.log(new Date() + 'I\'m pressed.');
}

function pinchMeStart() {
  console.log(new Date() + 'I\'m pinched. Start!');
}

function pinchMeMove() {
  console.log(new Date() + 'I\'m pinched. Move!');
}

function pinchMeEnd() {
  console.log(new Date() + 'I\'m pinched. End!');
}
