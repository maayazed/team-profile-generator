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

const team = [];

// run start
const start = () => {
    console.log(`Team builder, build your teams here.`);
    addManager()
    .then((data) => {
        const workerA = new manager(data.name, data.id, data.email, `office ${data.officeNumber}`, this.role);
        console.log(workerA);
        team.push(workerA);
        (err) => {
            if (err) {
                throw new Error(err);
            }
        }
        addEngineer()
        .then((data) => {
            const workerB = new engineer(data.name, data.id, data.email, data.github, this.role);
            console.log(workerB);
            team.push(workerB);
            (err) => {
                if (err) {
                    throw new Error(err);
                }
            }
            addIntern()
            .then((data) => {
                const workerC = new intern(data.name, data.id, data.email, data.school, this.role);
                console.log(workerC);
                team.push(workerC);
                (err) => {
                    if (err) {
                        throw new Error(err);
                    }
                }
                console.log(`Working team: ${JSON.stringify(team)}`);
                writeFileAsync('./dist/myTeam.html', generateHTML(data))
                .then(() => console.log(`Wrote to myTeam.html`))
                .catch((err) => console.log(err));
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
            message: `Enter team Engineer's github username:`,
        }
    ]);
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
};

const generateHTML = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
    <div class='p-3 mb-2 bg-gradient bg-danger text-white text-center'>
        <h1>My Team</h1>
    </div>

    <div class='p-5 m-5 d-flex flex-row justify-content-evenly'>

        <div id='manager-card' class='shadow-lg'>
            <div class='p-3 bg-gradient bg-primary text-white'>
                <h2 class='text-capitalize'>${team[0].name}</h2>
                <h3>&#128100; Manager</h3>
            </div>
            <div class='p-3 bg-gradient bg-light text-dark fw-normal font-monospace'>
                <div class='p-2 bg-white border border-dark d-flex flex-column justify-content-evenly'>
                    <p>Id: ${team[0].id}</p>
                    <p>Email: <a href='${team[0].email}' class='text-decoration-none text-reset'>${team[0].email}</a></p>
                    <p>Office number: ${team[0].officeNumber}</p>
                </div>
            </div>
        </div>

        <div id='engineer-card' class='shadow-lg'>
            <div class='p-3 bg-gradient bg-primary text-white'>
                <h2 class='text-capitalize'>${team[1].name}</h2>
                <h3>&#128295; Engineer</h3>    
            </div>
            <div class='p-3 bg-gradient bg-light text-dark fw-normal font-monospace'> 
                <div class='p-2 bg-white border border-dark d-flex flex-column justify-content-evenly'>
                    <p>Id: ${team[1].id}</p>
                    <p>Email: <a href='${team[1].email}' class='text-decoration-none text-reset'>${team[1].email}</a></p>
                    <p>Github: <a href='https://github.com/${team[1].github}' class='text-decoration-none text-reset'>github@${team[1].github}</a></p>      
                </div>
            </div>
        </div>

        <div id='intern-card' class='shadow-lg'>
            <div class='p-3 bg-gradient bg-primary text-white'>
                <h2 class='text-capitalize'>${team[2].name}</h2>
                <h3>&#9997; Intern</h3> 
            </div>
            <div class='p-3 bg-gradient bg-light text-dark fw-normal font-monospace'>
                <div class='p-2 bg-white border border-dark d-flex flex-column justify-content-evenly'>
                    <p>Id: ${team[2].id}</p>
                    <p>Email: <a href='${team[2].email}' class='text-decoration-none text-reset'>${team[2].email}</a></p>
                    <p>School: ${team[2].school}</p>     
                </div>
            </div>
        </div>  
        
    </div>
</body>
</html>`

// initialization
start();