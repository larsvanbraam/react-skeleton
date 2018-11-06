import * as styles from './home.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';
import LocaleContext from '../../util/locale/LocaleContext';

class Home extends React.Component {
  public render() {
    return (
      <section className={styles.home}>
        <Wrapper>
          <h2>Home page!</h2>
          <LocaleContext.Consumer>{context => context.getText('foo.bar')}</LocaleContext.Consumer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, volutpat at
            facilisis vel, tempor et arcu. Proin vitae fringilla massa. In pulvinar venenatis nulla
            sit amet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. In hac habitasse platea dictumst. Aliquam eget turpis sed ante
            pulvinar hendrerit. Pellentesque non turpis in tellus imperdiet eleifend tempor et est.
            Nam nec orci non felis interdum malesuada ac at est. Morbi elementum est blandit, luctus
            turpis non, facilisis erat. Praesent auctor, neque eu efficitur luctus, nulla ante
            placerat metus, ac dapibus eros risus vel dolor. Nam vel neque placerat, sollicitudin
            erat nec, pellentesque quam.
          </p>
          <p>
            Donec vitae sodales ligula. Nam maximus, sapien quis pretium facilisis, magna mi
            elementum ex, fermentum fringilla leo turpis vitae magna. Cras sagittis nisl nisl, quis
            ornare odio ultricies vel. Praesent in feugiat augue. Mauris aliquet nisl non tellus
            convallis volutpat. Phasellus pulvinar dolor in auctor semper. Aenean sed euismod
            turpis. Aliquam at neque ut dolor dapibus porta. Ut elementum dapibus mauris, a
            pellentesque sem accumsan vel. Phasellus sed rutrum lorem, sed viverra lorem. Nullam
            eget odio euismod, sodales velit nec, accumsan nisl. Curabitur lobortis lorem orci, nec
            tincidunt nisl tincidunt vel. Nunc facilisis lorem vel odio auctor, ultricies commodo
            felis suscipit. Curabitur et condimentum lectus, sed scelerisque metus. Donec convallis,
            mauris in cursus dignissim, metus sem tristique ipsum, non maximus nibh ligula non
            dolor. Mauris id nisl id dui pretium placerat.
          </p>
        </Wrapper>
      </section>
    );
  }
}

export default Home;
