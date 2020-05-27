#!/usr/bin/env node
const fs = require("fs");

const myArgs = process.argv.slice(2);
// console.log(myArgs);

const regex = /([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))/;

const rawEmails = fs.readFileSync(myArgs[0], "utf8");
// console.log(rawEmails);

const rawEmailArray = rawEmails.split(";");
const emailArray = rawEmailArray.map((x) => x.match(regex));

// console.log(emailArray);

console.log("Email addresses:");
emailArray.forEach((email) => {
  console.log(email[0]);
});
