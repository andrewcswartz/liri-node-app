require("dotenv").config();

let Spotify = require("node-spotify-api");
let keys = require("./keys.js");

console.log(keys.spotify.id);