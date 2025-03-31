//WealthHealth-app\src\main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/main.css';
import App from './App.jsx';

//redux
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
