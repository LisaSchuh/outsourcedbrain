import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OutsourcedBrain from './outsourcedBrain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OutsourcedBrain />, div);
  ReactDOM.unmountComponentAtNode(div);
});
