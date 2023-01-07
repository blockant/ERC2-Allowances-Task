import React from 'react';
import { Provider } from 'react-redux';
import ConnectMetamask from './components/Landing/ConnectMetamask';
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <>Hello World</>
        <ConnectMetamask></ConnectMetamask>
      </Provider>
    </>
  );
}

export default App;
