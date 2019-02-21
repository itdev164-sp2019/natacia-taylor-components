'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\nbackground: none;\nbox-shadow: none;\nfont-weight: normal;\nborder-radius: 0;\ncursor: pointer;\n'], ['\nbackground: none;\nbox-shadow: none;\nfont-weight: normal;\nborder-radius: 0;\ncursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rebass = require('rebass');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Reset = (0, _styledComponents2.default)(_rebass.Button)(_templateObject);

var ButtonBase = function ButtonBase(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        Reset,
        props,
        children
    );
};

exports.ButtonBase = ButtonBase;
_rebass.Button.propTypes = {
    children: _propTypes2.default.node.isRequired
};

//# sourceMappingURL=ButtonBase.js.map