import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import confirmStore from "./components/Redux-Components/store/configureStore"
import {Provider} from "react-redux"


const store = confirmStore()

console.log(store.getState());

store.subscribe(()=>{
  console.log("subscribe", store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

