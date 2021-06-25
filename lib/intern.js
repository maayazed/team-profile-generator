const employee = require('../lib/employee');

class intern extends employee {
    constructor(role, school) {
        super(role);
        this.school = school;
        this.role = role;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        if (this.role === 'Intern') {
            return this.role;
        };
    };
};

module.exports = intern;