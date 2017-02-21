
import assert from 'assert';
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import Animated from '../src';

describe('library', function () {
	let rootNode;

	beforeEach(function () {
		document.body.innerHTML = window.__html__['index.html'];
		rootNode = document.getElementById('app');
	});

	it('<Animated.Div>', function () {
		const value = 'it works';

		const App = () => (<Animated.Div>{value}</Animated.Div>);

		render(<App />, rootNode);
		assert.equal(rootNode.textContent, value);
	});

	it('Animated.Value()', function (done) {
		const defaultValue = 0;
		const updatedValue = 1;

		class App extends Component {
			state = {
				anim: new Animated.Value(defaultValue),
			};

			componentDidMount() {
				const { style } = findDOMNode(this);

				assert.equal(parseInt(domNode.style.width, 10), defaultValue);
				this.state.anim.setValue(updatedValue);
				assert.equal(parseInt(domNode.style.width, 10), updatedValue);
				done();
			}

			render() {
				return (
					<Animated.Div
						style={{
							width: this.state.anim,
						}}
					/>
				);
			}
		}

		render(<App />, rootNode);
	});

});
