import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, name) => ({
    type: 'LOGIN',
    uid,
    name
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = (email, password) => {
    return () => {
        if(email && password) {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            return firebase.auth().signInWithPopup(googleAuthProvider);
        }
    }
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const onRegister = (user) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userData) =>  {
           userData.updateProfile({displayName: user.displayName})
            .then(() => dispatch(login(userData.uid, userData.displayName)));
        })
        .catch((error) => console.log('Error:', error));
    }    
};