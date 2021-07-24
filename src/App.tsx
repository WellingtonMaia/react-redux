import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import  Catalog from './components/Catalog';
import Cart from './components/CartList';

function App() {
  return (
    <Provider store={store}>
     <Catalog />
     <Cart />
    </Provider>
  );
}

export default App;
