import firebase from "firebase";

export default {
    state: {
      error: null
    },
    actions: {
        async login({commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            }
            catch(e) {
                commit('setError', e)
                throw new Error(e)
            }
        },
        async logout() {
          await firebase.auth().signOut();
        },
        async register({dispatch, commit}, {name, email, password}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                let uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name
                })
            }
            catch(e) {
                commit('setError', e)
                throw new Error(e)
            }
        },
        getUid() {
            let user = firebase.auth().currentUser;
            if(user) {
                return user.uid
            }
            else {
                return null
            }
        }
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        }
    },
    getters: {
        error(state) {
            return state.error
        }
    }
}