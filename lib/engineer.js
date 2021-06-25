const employee = require('../lib/employee');

class engineer extends employee {
    constructor(name, id, email, github) {
        super('Engineer');
        this.role = 'Engineer';
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return this.role;
    };
};

module.exports = engineer;