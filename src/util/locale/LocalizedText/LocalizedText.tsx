import * as React from 'react';
import LocaleContext from '../LocaleContext';

const LocalizedText = ({ id }) => (
  <React.Fragment>
    <LocaleContext.Consumer>{context => context.getTranslation(id)}</LocaleContext.Consumer>
  </React.Fragment>
);

export default LocalizedText;
