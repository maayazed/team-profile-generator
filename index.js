// generate const

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// class const

const manager = require('./lib/manager');
// const worker = new manager('Steve', '01', 'this@this.com', 'office1', this.role);

const engineer = require('./lib/engineer');
// const worker = new engineer('Steve', '01', 'this@this.com', 'this@github', this.role);

const intern = require('./lib/intern');
// const worker = new intern('Steve', '01', 'this@this.com', 'University', this.role);

const name = () => {
    return inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: `Enter team manager's name:`,
    })
};

const init = () => {
    name()
        .then((data) => {
            const worker = new manager(data.name, this.role);
            console.log(worker);
        })
};

init();