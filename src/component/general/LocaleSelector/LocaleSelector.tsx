import * as styles from './LocaleSelector.scss';

import * as React from 'react';
import classNames from 'classnames';
import { PropertyNames } from '../../../data/enum/configNames';
import configManager from '../../../config/configManager';

class LocaleSelector extends React.Component<{
  activeLocale: string;
  setActiveLocale: () => void;
}> {
  private locales = configManager.getProperty(PropertyNames.LOCALES);

  public render() {
    return (
      <div className={styles.localeSelector}>
        {this.locales.map(locale => (
          <button
            key={locale}
            onClick={this.props.setActiveLocale.bind(this.props, locale)}
            className={classNames({ [styles.isActive]: locale === this.props.activeLocale })}
          >
            {locale}
          </button>
        ))}
      </div>
    );
  }
}

export default LocaleSelector;
