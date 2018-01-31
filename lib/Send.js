'use strict';

exports.__esModule = true;
exports.default = Send;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _LikeSize = require('./constants/LikeSize');

var _LikeSize2 = _interopRequireDefault(_LikeSize);

var _ColorScheme = require('./constants/ColorScheme');

var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Send(props) {
  var className = props.className,
      _props$href = props.href,
      href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
      colorScheme = props.colorScheme,
      children = props.children,
      size = props.size,
      kidDirectedSite = props.kidDirectedSite,
      referral = props.referral,
      onParse = props.onParse;


  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-send',
        'data-ref': referral,
        'data-href': href,
        'data-colorscheme': colorScheme,
        'data-size': size,
        'data-kid-directed-site': kidDirectedSite
      },
      children
    )
  );
}

Send.propTypes = {
  className: _propTypes2.default.string,
  referral: _propTypes2.default.string,
  href: _propTypes2.default.string,
  colorScheme: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  size: _propTypes2.default.string,
  kidDirectedSite: _propTypes2.default.bool.isRequired,
  onParse: _propTypes2.default.func
};

Send.defaultProps = {
  colorScheme: _ColorScheme2.default.LIGHT,
  size: _LikeSize2.default.SMALL,
  kidDirectedSite: false,
  children: undefined,
  className: undefined,
  href: undefined,
  referral: undefined,
  onParse: undefined
};
//# sourceMappingURL=Send.js.map