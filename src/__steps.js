/**                 --------------
 *                  INITIAL SETUP
 *                ------------------
 * 1. visit: console.firebase.google.com
 * 2. create project ( skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your projects
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *                   ------------
 *                   INTEGRATION
 *                 ----------------
 * 7. visit : Go to docs > Build > Authentication > Web > Get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *                      ------------
 *                     PROVIDER SETUP
 *                    -----------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use singInWithPopUp and pass auth and provider
 * 13. activate sing-in method (google, facebook,github,etc)
 *                    ------------
 *                    MORE AUTH PROVIDER
 *                    ----------------
 * 1.Activate the auth provider (create app, provide redirect URL, client id, client secret)
 * 2. 
 */