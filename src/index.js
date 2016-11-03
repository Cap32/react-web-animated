
var AnimatedImplementation = require('AnimatedImplementation');
var Easing = require('Easing');

const { createAnimatedComponent } = AnimatedImplementation;

const Div = createAnimatedComponent('div');
const Span = createAnimatedComponent('span');
const Img = createAnimatedComponent('img');

module.exports = {
	...AnimatedImplementation,
	Div,
	Span,
	Img,
	AnimatedDiv: Div,
	AnimatedSpan: Span,
	AnimatedImg: Img,
	AnimatedValue: AnimatedImplementation.Value,
	AnimatedValueXY: AnimatedImplementation.ValueXY,
	Easing,
};
