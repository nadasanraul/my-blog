import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetPosts} from './actions/posts';
import {startSetPublicPosts} from './actions/posts';
import {login, logout} from './actions/auth';
import 'react-dates/lib/css/_datepicker.css';
import 'react-quill/dist/quill.snow.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';
import Loading from './components/Loading';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<Loading />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid, user.displayName));
        //store.dispatch(startSetPublicPosts()).then(() => {
            store.dispatch(startSetPosts()).then(() => {
                renderApp();
                if(history.location.pathname === '/'){
                    history.push('/dashboard');
                }
            });
       // });
    } else {
        store.dispatch(logout());
        renderApp()
        // store.dispatch(startSetPublicPosts()).then(() => {
        //     setTimeout(() => renderApp(), 300);
        // });
    }
});
