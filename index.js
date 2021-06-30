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

// run start
const start = () => {
const team = [];
    console.log(`Team builder, build your teams here.`);
    addManager()
    .then((data) => {
        const worker = new manager(data.name, data.id, data.email, `office ${data.officeNumber}`, this.role);
        console.log(worker);
        team.push(`Manager: ${JSON.stringify(worker)}`);
        (err) => {
            if (err) {
                throw new Error(err);
            }
        }
        addEngineer()
        .then((data) => {
            const worker = new engineer(data.name, data.id, data.email, data.github, this.role);
            console.log(worker);
            team.push(`Engineer: ${JSON.stringify(worker)}`);
            (err) => {
                if (err) {
                    throw new Error(err);
                }
            }
            addIntern()
            .then((data) => {
                const worker = new intern(data.name, data.id, data.email, data.school, this.role);
                console.log(worker);
                team.push(`Intern: ${JSON.stringify(worker)}`);
                (err) => {
                    if (err) {
                        throw new Error(err);
                    }
                }
                console.log(`Working team: ${team}`);
            });
        });
    });
};

const addManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter team Manager's name:`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter team Manager's id:`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter team Manager's email:`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Enter team Manager's office number:`,
        }
    ])
};

const addEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter team Engineer's name:`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter team Engineer's id:`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter team Engineer's email:`,
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter team Engineer's github user:`,
        }
    ])
};

const addIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter team Intern's name:`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter team Intern's id:`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter team Intern's email:`,
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter team Intern's college:`,
        }
    ]);
}

// initialization
start();