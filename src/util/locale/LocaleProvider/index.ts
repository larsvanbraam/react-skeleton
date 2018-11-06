import LocaleProvider from './LocaleProvider';

import { connect } from 'react-redux';

const mapStateToProps = ({ translation }) => ({
  locale: translation.locale,
  translations: translation.translations,
});

export default connect(mapStateToProps)(LocaleProvider);
