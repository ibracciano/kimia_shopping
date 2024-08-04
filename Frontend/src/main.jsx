// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importing react-toastify for notifications
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './toolkit/store/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux'


import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={"loading"}>
      <App />
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
