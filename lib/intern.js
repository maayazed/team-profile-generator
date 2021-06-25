const employee = require('../lib/employee');

class intern extends employee {
    constructor(name, id, email, school) {
        super('Intern');
        this.role = 'Intern';
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return this.role;
    };
};

module.exports = intern;