import * as styles from './{{name_pc}}.scss';

import * as React from 'react';

{{#if classComponent}}
class {{name_pc}} extends React.Component {
  render() {
    return (
      <section className={ styles.{{name_cc}} }>
        <h2>{{name_pc}}</h2>
      </section>
    );
  }
}
{{else}}
const {{name_pc}} = () => (
  <section className={ styles.{{name_cc}} }>
    <h1>{{name_pc}}</h1>
  </section>
);
{{/if}}


export default {{name_pc}};
