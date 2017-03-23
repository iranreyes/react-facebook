import React, { PropTypes } from 'react';
import Parser from './Parser';
import getCurrentHref from './utils/getCurrentHref';
import LikeSize from './constants/LikeSize';
import ColorScheme from './constants/ColorScheme';

export default class Send extends Parser {
  static propTypes = {
    ...Parser.propTypes,
    referral: PropTypes.string,
    href: PropTypes.string,
    colorScheme: PropTypes.string.isRequired,
    children: PropTypes.node,
    size: PropTypes.string,
    kidDirectedSite: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    colorScheme: ColorScheme.LIGHT,
    share: false,
    size: LikeSize.SMALL,
    kidDirectedSite: false,
  };

  renderComponent() {
    const {
      href = getCurrentHref(),
      colorScheme,
      children,
      size,
      kidDirectedSite,
      referral,
    } = this.props;

    return (
      <div
        className="fb-send"
        data-ref={referral}
        data-href={href}
        data-colorscheme={colorScheme}
        data-size={size}
        data-kid-directed-site={kidDirectedSite}
      >
        {children}
      </div>
    );
  }
}
