const employee = require('../lib/employee');


describe('employee class', () => {
    const worker = new employee('Steve', '01', 'this@this.com');

    describe('getName', () => {
        it('should return as steve from getName()', () =>{
            expect(worker.getName()).toBe('Steve');
        });
    });
    describe('getId', () => {
        it('should return as 01 from getId()', () =>{
            expect(worker.getId()).toBe('01');
        });
    });
    describe('getEmail', () => {
        it('should return as this@this.com from getEmail()', () =>{
            expect(worker.getEmail()).toBe('this@this.com');
        });
    });
    describe('getRole', () => {
        it('should be Employee from getRole()', () =>{
            expect(worker.getRole()).toEqual(true);
        });
    });
});