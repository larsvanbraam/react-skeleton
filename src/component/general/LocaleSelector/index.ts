import LocaleSelector from './LocaleSelector';
import { connect } from 'react-redux';
import { setActiveLocale } from '../../../store/actions/localeActions';

const mapStateToProps = ({ locale }) => ({
  activeLocale: locale.activeLocale,
});

const mapDispatchToProps = dispatch => ({
  setActiveLocale: locale => dispatch(setActiveLocale(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleSelector);
