import 'modernizr';
import './asset/style/main.scss';

import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

render(<App />, document.getElementById('app'));
