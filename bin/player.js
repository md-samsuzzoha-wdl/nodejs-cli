#!/usr/bin/env node


// SUPER COMMANDS 
const program = require('commander');

program
    .version('1.1.1')
    .command("show", "Show all players")
    .command("set", "add or remove player")
    .parse(process.argv);

// console.log("hello from player");