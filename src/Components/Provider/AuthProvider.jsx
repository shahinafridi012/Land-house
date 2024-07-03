import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Importing PropTypes
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    
  }

  const SignInWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state changed', currentUser);
      setUser(currentUser);
      // setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  }, []);

  const AuthInfo = {
    name: 'shahin',
    createUser,
    signInUser,
    signInWithGoogle,
    SignInWithGithub,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

// Adding propTypes
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
