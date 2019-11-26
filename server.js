require ("dotenv").config();
const express = require("express")
var db = require("./models");
var mongojs = require("mongojs");
const app = express();
const path = require("path");
var axios = require("axios");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/indicators")

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})