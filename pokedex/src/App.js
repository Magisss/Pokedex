import router from './router';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";

import './App.css';
import store from './store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
