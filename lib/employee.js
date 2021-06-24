class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    getRole() {
        if (employee) {
            let role = 'Employee';
            return true;
        };
    };
};

module.exports = employee;