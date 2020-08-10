require("dotenv").config();
var express = require("express");
var app = express();
var router = require("./router");
var { testConnection } = require("./config/database");
var cors = require("cors");

testConnection();

app.use(cors());
app.use(router);

module.exports = app;
