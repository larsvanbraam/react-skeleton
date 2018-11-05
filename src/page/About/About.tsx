import * as styles from './about.scss';

import * as React from 'react';

import Wrapper from '../../component/general/Wrapper';

class About extends React.Component {
  public render() {
    return (
      <section className={styles.about}>
        <Wrapper>
          <h2>About page!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ipsum ipsum.
            Donec pharetra diam nibh, quis vestibulum tortor mattis tincidunt. Fusce a mollis mi, et
            hendrerit lorem. Nulla eu bibendum magna. Donec sed orci blandit, efficitur enim in,
            pellentesque nisl. Nulla facilisi. Aenean rhoncus vel nisl non tincidunt. Maecenas
            posuere ex justo, non molestie mi porttitor mattis. Integer iaculis convallis nisl.
            Vivamus sit amet sapien imperdiet lectus pharetra fringilla id nec ex. Quisque at
            faucibus elit. Quisque sed nisi id leo rutrum rutrum vel a odio. Nam vel tincidunt leo.
            Mauris volutpat facilisis justo quis congue. Vestibulum dictum convallis consequat.
          </p>
          <p>
            Praesent a iaculis arcu. Fusce lacinia enim in est rutrum accumsan. Quisque velit erat,
            dignissim nec sodales ut, fermentum nec nisi. Nam molestie sollicitudin est, id maximus
            dui blandit ac. Nunc ut ornare ex. Nulla eleifend vel mauris eu condimentum. Suspendisse
            pellentesque odio sollicitudin, dapibus sem vitae, feugiat diam. Praesent elit ex,
            cursus ac interdum ac, facilisis sed leo.
          </p>
          <p>
            Nulla viverra erat sed viverra iaculis. Nulla aliquam tortor eget bibendum aliquet.
            Nulla viverra, lorem sed varius semper, magna odio pulvinar nulla, id malesuada augue
            felis rutrum turpis. Duis mi nunc, elementum eu neque a, suscipit vestibulum massa.
            Etiam dignissim ut ex euismod consequat. Nunc scelerisque efficitur sem. Duis quis
            tristique leo, eu iaculis nisl.
          </p>
          <p>
            Suspendisse convallis mi sem, vitae commodo urna malesuada luctus. Pellentesque interdum
            tempus orci eget eleifend. Sed auctor massa at lectus lobortis bibendum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur eget neque semper ipsum consequat
            posuere. Donec condimentum felis ac varius sagittis. Ut lacinia mattis nisl et
            tincidunt. Praesent dolor tellus, viverra nec tellus ac, semper scelerisque enim.
            Vestibulum ut urna vitae risus luctus luctus. Sed ornare metus luctus neque fringilla,
            eu sagittis nisl auctor. Suspendisse ut euismod ligula. Integer ullamcorper consectetur
            euismod. Praesent rhoncus tincidunt erat eu ullamcorper. Ut luctus ut odio at porta.
          </p>
        </Wrapper>
      </section>
    );
  }
}

export default About;
