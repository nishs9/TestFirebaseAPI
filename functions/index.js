const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log("Listening to Port" + port);
});

app.get('/ping', (req, res) => {
    res.send("Hello World");
})

//exports.app = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
