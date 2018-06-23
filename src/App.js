import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBHbV-1c-g_04c5O9HwPtaSxlK3iKA6o68',
            authDomain: 'manager-faef9.firebaseapp.com',
            databaseURL: 'https://manager-faef9.firebaseio.com',
            projectId: 'manager-faef9',
            storageBucket: 'manager-faef9.appspot.com',
            messagingSenderId: '344725970842'
        };

        firebase.initializeApp(config);
    }

    render() {
        // second argument is an optional initial state
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
