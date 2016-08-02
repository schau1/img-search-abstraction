/**
 * User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
 * User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
 * User Story: I can get a list of the most recently submitted search strings.
 * 
*/
 
var express = require("express");
var path = require("path");
var url = require("url");
var mongo = require("mongodb").MongoClient;
var dbUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener';

var app = express();

app.use(express.static(path.join(__dirname, "public")));

console.log("Image Search Abstraction Layer starting...");
app.listen(process.env.PORT || 8080);

