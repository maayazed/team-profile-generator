const employee = require('../lib/employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super('Manager');
        this.role = 'Manager';
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    };
    getRole() {
        return this.role;
    };
};

module.exports = manager;