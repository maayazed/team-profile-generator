const employee = require('../lib/employee');

class engineer extends employee {
    constructor(role, github) {
        super(role);
        this.github = github;
        this.role = role;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        if (this.role === 'Engineer') {
            return this.role;
        };
    };
};

module.exports = engineer;