import React, { useContext, useState, useEffect } from 'react'
import { auth, storage } from "../firebase/config";
import firebase from "firebase/app"
import 'firebase/firestore';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setcurrentUser] = useState()
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const facebookProvider = new firebase.auth.FacebookAuthProvider()

    const db = firebase.firestore()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function googleSignup() {
        return auth.signInWithPopup(googleProvider)
    }

    function facebookSignup() {
        return auth.signInWithPopup(facebookProvider)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function logout(email) {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user)
        });

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        googleSignup,
        facebookSignup,
        db,
        storage
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
