import React, { createContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Components/Auth/firebase.config";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
    });

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email } = res.user;
                setUser({
                    ...user,
                    isSignedIn: true,
                    name: displayName,
                    email,
                });
                alert("Log in successful");
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.code);
            });
    };

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                setUser({ ...user, isSignedIn: false, name: "", email: "" });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    //Create user with email and password

    const createUserWithEmailAndPassword = (name, email, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                setUser({ ...user, isSignedIn: true, name });
                updateUserName(name);
                alert("Account created successfully");
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Failed to create user. ${error.message}`);
            });
    };

    //Sign in user with email and createUserWithEmailAndPassword

    const signInWithEmailAndPassword = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                setUser({
                    ...user,
                    isSignedIn: true,
                    name: res.user.displayName,
                });
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    };

    //update user name

    const updateUserName = (name) => {
        const currentUser = firebase.auth().currentUser;

        currentUser
            .updateProfile({
                displayName: name,
            })
            .then(function () {
                console.log("user name updated successfully");
            })
            .catch(function (error) {
                console.log(error.message);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                handleGoogleSignIn,
                user,
                handleSignOut,
                createUserWithEmailAndPassword,
                signInWithEmailAndPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
