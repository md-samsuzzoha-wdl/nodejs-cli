const inquirer = require('inquirer');
const colors = require('colors');
const playerData = require('../data/player-data');


class Set {
    addPlayer = async () => {
        console.log("Adding player to the player set");
        let newPlayer = await inquirer.prompt([
            {
                type: 'input',
                name: "name",
                message: "Enter player name! ==> ".cyan
            },
            {
                type: 'list',
                name: "game",
                message: "Enter the game of the player! ==> ".cyan,
                choices: ["Cricket", "Football"]
                // choices[, default, filter, loop]
            },
        ]);
        playerData.push(newPlayer);
        playerData.forEach((pd_value, pd_index) => console.log(pd_index, pd_value));
    }


    removePlayer = async () => {
        console.log(playerData.length);
        playerData.forEach((pd_value, pd_index) => console.log(pd_index, pd_value));
        let indexNum = await inquirer.prompt([{
            type: 'number',
            name: "player",
            message: "Enter the index number which you want to remove! ==> ".cyan
        }]);
        playerData.splice(indexNum, 1);
        console.log("-------------------");
        playerData.forEach((pd_value, pd_index) => console.log(pd_index, pd_value));
    }
}


module.exports = Set;