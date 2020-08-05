
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  MovieComponent  from './src/components/moviComponent';
import rootSaga from './src/redux-saga/sagas/rootSaga'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/redux-saga/reducers/rootReducer';
// import store from './src/redux/store/store';
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  
export default function App() {
  return ( 
    <Provider store={store}>
        <MovieComponent />
    </Provider>
      
  );
}

sagaMiddleware.run(rootSaga)