import LocaleProvider from './LocaleProvider';

import { connect } from 'react-redux';

const mapStateToProps = ({ locale }) => ({
  activeLocale: locale.activeLocale,
  translations: locale.translations[locale.activeLocale] || {},
});

export default connect(mapStateToProps)(LocaleProvider);
