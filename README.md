# Photow
Realtime Web app made with Angular 1 and the awesome Firebase to take photos from webcam 🔥

![photow](https://cloud.githubusercontent.com/assets/5286092/18990001/914bf704-86e5-11e6-9c7c-b8ddd73aa238.png)

#Instructions to run
This project runs with Gulp, and some node dependencies.
The first thing that you have to do is `npm install` in the root folder, after hit `enter`, go drink a coffee, and when you come back, all the things should be downloaded and read to go.

#Setting up firebase SDK
First, you have to configure the firebase keys that you can get in the dashoboard of firebase when created your app, looks like this:

```
// Initialize the Firebase SDK
var config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);
```

You just need to replace the `config/config.js` file with the infos.

**This project have some commands that you need to know:**

`gulp serve` to launch a browser sync server on your source files
`gulp build` to build an optimized version of your application in /dist
`gulp test` to launch your unit tests with Karma
`gulp test:auto` to launch your unit tests with Karma in watch mode

