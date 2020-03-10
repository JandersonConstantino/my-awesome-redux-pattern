import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import Button from './Button'

const App = () => {
  return (
    <Provider store={store}>
      <Button />
    </Provider>
  );
}

export default App;
