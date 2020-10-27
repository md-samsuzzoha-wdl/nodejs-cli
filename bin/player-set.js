// SUB COMMANDS
// console.log("Add or remove players");
const Set = require('../commands/Set');

const set = new Set();


const program = require("commander");

program.command('add').description("Add player informations").action( set.addPlayer);
program.command('remove').description("remove player informations").action(set.removePlayer);


program.parse(process.argv);
