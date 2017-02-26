
import invariant from 'fbjs/lib/invariant';
import capitalize from 'lodash.capitalize';
import { findDOMNode } from 'react-dom';

import CSSPropertyOperations from 'react-dom/lib/CSSPropertyOperations';
// import CSSPropertyOperations from 'react/lib/CSSPropertyOperations';

const reduce = (obj = {}, iterator, initialValue) => Object
	.keys(obj)
	.reduce(
		(returnValue, key) => iterator(returnValue, obj[key], key),
		initialValue,
	)
;

const prefix = (prop) => {
	if (typeof window === 'undefined') { return prop; }

	prefix._cache = prefix._cache || {};

	if (prefix._cache[prop]) { return prefix._cache[prop]; }

	const check = (prop) => prop in document.documentElement.style;
	const vendors = ['Webkit', 'webkit', 'ms', 'moz'];

	if (check(prop)) { return prop; }

	const capitalizedCSS = capitalize(prop);
	let result = vendors
		.map((vendor) => `${vendor}${capitalizedCSS}`)
		.find((prefixed) => check(prefixed))
	;

	if (!result) {
		invariant(false, `Your browser do not support \`${prop}\`.`);
		result = prop;
	}

	prefix._cache[prop] = result;
	prefix._cache[result] = result;

	return result;
};

const ensureValue = (prop, value) => {
	const whiteList = ['translateX', 'translateY', 'translateZ', 'perspective'];
	if (!isNaN(value) && whiteList.indexOf(prop) > -1) {
		return `${value}px`;
	}
	return value;
};

function mapTransform(transforms) {
	return reduce(transforms, (arr, value, prop) =>
		arr.concat(`${prop}(${ensureValue(prop, value)})`)
	, []).join(' ');
}

function mapStyle(style) {
	return reduce(style, (finalStyle, value, prop) => {
		if (prop.indexOf('ransform') !== -1 && Array.isArray(value)) {
			value = value.map(mapTransform).join(' ');
		}

		finalStyle[prefix(prop)] = value;
		return finalStyle;
	}, {});
}

function applyAnimatedValues(instance, props, component) {
	const domNode = findDOMNode(component);
	if (domNode && domNode instanceof window.Element) {
		CSSPropertyOperations.setValueForStyles(
			domNode,
			mapStyle(props.style),
			component._reactInternalInstance,
		);
	}
}

module.exports = applyAnimatedValues;
