// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

require('zone.js/dist/zone-node');

const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');

const { AppServerModuleNgFactory } = require('./dist/server/main');

enableProdMode();

const index = require('fs')
  .readFileSync(path.resolve(__dirname, './dist/browser/index.html'), 'utf8')
  .toString();

let app = express();

let cached = {}; // key is path
let cachedTime = {}; // Number(new Date()) when path cached

app.get('**', function(req, res) {

    renderModuleFactory(AppServerModuleNgFactory, { url: req.path, document: index }).then(html => {
        res.status(200).send(html + 'DONE');
    });

    // here's my attempt at caching
    // let path = req.path;
    // let html = cached[path];
    // let time = cachedTime[path];

    // if (html) {
    //     if (Number(new Date()) - time > 3600000) {
    //         // been an hour, redo
    //         cachedTime[path] = Number(new Date());
    //         renderModuleFactory(AppServerModuleNgFactory, { url: req.path, document: index }).then(html => {
    //             cached[path] = html;
    //         });
    //     }
    //     res.status(200).send(html);
    //     return;
    // }

    // renderModuleFactory(AppServerModuleNgFactory, { url: req.path, document: index }).then(html => {
    //     cachedTime[path] = Number(new Date());
    //     cached[path] = html;
    //     res.status(200).send(html);
    // });
});

exports.ssr = functions.https.onRequest(app);
