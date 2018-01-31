import React from 'react';
import PropTypes from 'prop-types';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import LikeSize from './constants/LikeSize';
import ColorScheme from './constants/ColorScheme';

export default function Send(props) {
  const {
    className,
    href = getCurrentHref(),
    colorScheme,
    children,
    size,
    kidDirectedSite,
    referral,
    onParse
  } = props;

  return React.createElement(
    Parser,
    { className: className, onParse: onParse },
    React.createElement(
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
  className: PropTypes.string,
  referral: PropTypes.string,
  href: PropTypes.string,
  colorScheme: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
  kidDirectedSite: PropTypes.bool.isRequired,
  onParse: PropTypes.func
};

Send.defaultProps = {
  colorScheme: ColorScheme.LIGHT,
  size: LikeSize.SMALL,
  kidDirectedSite: false,
  children: undefined,
  className: undefined,
  href: undefined,
  referral: undefined,
  onParse: undefined
};
//# sourceMappingURL=Send.js.map