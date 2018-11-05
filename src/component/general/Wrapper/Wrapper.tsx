import * as styles from './Wrapper.scss';

import * as React from 'react';

export const Wrapper = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Wrapper;
