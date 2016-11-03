/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewStylePropTypes
 * @flow
 */
'use strict';

var LayoutPropTypes = require('LayoutPropTypes');
var ReactPropTypes = require('React').PropTypes;
var ColorPropType = require('ColorPropType');
var TransformPropTypes = require('TransformPropTypes');

/**
 * Warning: Some of these properties may not be supported in all releases.
 */
var ViewStylePropTypes = {
	...LayoutPropTypes,
	...TransformPropTypes,
	backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
	backgroundColor: ColorPropType,
	borderColor: ColorPropType,
	borderTopColor: ColorPropType,
	borderRightColor: ColorPropType,
	borderBottomColor: ColorPropType,
	borderLeftColor: ColorPropType,
	borderRadius: ReactPropTypes.number,
	borderTopLeftRadius: ReactPropTypes.number,
	borderTopRightRadius: ReactPropTypes.number,
	borderBottomLeftRadius: ReactPropTypes.number,
	borderBottomRightRadius: ReactPropTypes.number,
	borderStyle: ReactPropTypes.oneOf(['solid', 'dotted', 'dashed']),
	borderWidth: ReactPropTypes.number,
	borderTopWidth: ReactPropTypes.number,
	borderRightWidth: ReactPropTypes.number,
	borderBottomWidth: ReactPropTypes.number,
	borderLeftWidth: ReactPropTypes.number,
	opacity: ReactPropTypes.number,
};

module.exports = ViewStylePropTypes;
