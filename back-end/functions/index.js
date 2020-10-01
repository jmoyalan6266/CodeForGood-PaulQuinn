const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const admin = require('firebase-admin');
admin.initializeApp();
const app = express();

app.post('/', async (req, res) => {

    const user = req.body;
    await admin.firestore().collection('user').add(user);
    res.status(200).send()

})

exports.user = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
