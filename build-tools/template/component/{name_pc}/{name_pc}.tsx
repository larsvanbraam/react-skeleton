import * as styles from './{{name_pc}}.scss';

import * as React from 'react';

{{#if classComponent}}
class {{name_pc}} extends React.Component {
  render() {
    return (
      <div className={ styles.{{name_cc}} }>
        <h2>{{name_pc}}</h2>
      </div>
    );
  }
}
{{else}}
const {{name_pc}} = () => (
  <div className={ styles.{{name_cc}} }>
    <h1>{{name_pc}}</h1>
  </div>
);
{{/if}}


export default {{name_pc}};
