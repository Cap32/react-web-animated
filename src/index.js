
const AnimatedImplementation = require('AnimatedImplementation');
const Easing = require('Easing');

const {
	createAnimatedComponent, Value, ValueXY,
} = AnimatedImplementation;

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
	AnimatedValue: Value,
	AnimatedValueXY: ValueXY,
	Easing,
};
