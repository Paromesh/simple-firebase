/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,signOut
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.massage);
      });
  };

  const handleGithubSingIn =() =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
    })
    .catch(error =>{
        console.log(error)
    })
  }
  const handleSingOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSingOut}>Sing out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSingIn}>Google Login</button>
          <button onClick={handleGithubSingIn}>Github Login</button>
        </div>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
