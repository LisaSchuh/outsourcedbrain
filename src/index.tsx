import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OutsourcedBrain from './app/outsourcedBrain';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <OutsourcedBrain />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
