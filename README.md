# ReactNativeFirebaseAuthApp

-react-native init auth
-react-native run-ios 
to run simulator

* Set up Firebase account and enable Email/Password for Authentication:
* go to firebase.google.com to sign up for an account:
-'go to console'
-'add new project', name it auth, and creat project
you can wok with analytics, authentification, database, storage, hosting, ... with Firebase
-'Add Firebase to your web app' 
(cuz react-native does not fit ios and andriod separately, we need both of them)
-go to 'Authentification' on the left bar
-'Set up sign-in method'
-click on 'Email/Password' and 'Enable' and 'Save', status will sow enabled
this creates a distinct bucket of data for our project that sits on the firebase servers

* To set up Firebase client library so we can interact with their servers:
- intall Firebase library as npm module --> 'npm install --save firebase'
= to set up out firebase locally, we have to tell it which bucket exactly go to reach out on Firebase servers that our data sits in
(we do that inside App.js)

*