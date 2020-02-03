export const signIn = (credentials) => {
  return async (dispatch, getState, {getFirebase}) => {
    //initialize
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      dispatch({ type: 'LOGIN_SUCCESS'})
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR', err})
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, {getFirebase}) => {
    //initiliaze
    const firebase = getFirebase();
      await firebase.auth().signOut()
      dispatch({ type: 'SIGNOUT_SUCCESS'})
  };
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //initialize
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        userName: newUser.username,
        initial: newUser.username[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
}