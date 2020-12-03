import firebase from '../../firebase/firebase.utils';

export const loginUserWithEmailAndPassword = (email, password, dispatch) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(snapshot => {
            const {email, displayName, uid} = snapshot.user
            const user = {
                email, 
                displayName,
                uid
            }
            dispatch({
                type: "LOGIN_USER",
                payload: user
            })
        })
        .catch(error => {
          //Do something with the error if you want!
          console.log('error ', error);
          dispatch( {
            type: "LOGIN_USER_FAIL"
            })
    
          //return error;
        }); 
}