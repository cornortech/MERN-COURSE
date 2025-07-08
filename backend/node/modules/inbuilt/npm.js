// NPM - Node Package Manager

// module / package (programs used for some feature )

// inbuilt pacakge/modue fs , path , os

// const fs = require("fs")
// const path = require("path")
// const os = require("os")

// const timeAgo = require("timeago.js");

const moment = require("moment");

const yesterdaysDate = new Date("2021-05-02");

console.log(moment(yesterdaysDate).format("LL"));

// const result = timeAgo.format(yesterdaysDate);

// console.log(result);
