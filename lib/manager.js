const employee = require('../lib/employee');

class manager extends employee {
    constructor(role, officeNumber) {
        super(role);
        this.officeNumber = officeNumber;
        this.role = role;
    };
    getRole() {
        if (this.role === 'Manager') {
            return this.role;
        };
    };
};

module.exports = manager;