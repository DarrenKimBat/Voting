'use strict';

var express = require('express');
var http = require('http');
var app = express();
var path = require("path")
var fs = require('fs');

//SHOULD BE CHANGED//
var mysql = require('mysql');
//SHOULD BE CHANGED//

var client = mysql.createConnection({
    user : 'root',
    password : 'apmsetup',
    database : 'Company'
});

app.use(express.static(path.join(__dirname + '/../../public')));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

app.get('/', function (req, res) {
    fs.readFile(path.join(__dirname + '/../index.html'), function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.get('/vote', function (req, res) {
    fs.readFile(path.join(__dirname + '/../app/voting_authen.html'), function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.get('/images', function (req, res) {
    fs.readFile(path.join(__dirname + '/../images/main.png'), function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.listen(3000, function () {
    console.log("Go!");
});