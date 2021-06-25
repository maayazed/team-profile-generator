const intern = require('../lib/intern');


describe('intern class', () => {
    const worker = new intern('Steve', '01', 'this@this.com', 'University', this.role);

    describe('getSchool', () => {
        it('should return as University from getSchool()', () =>{
            expect(worker.getSchool()).toBe('University');
        });
    });
    describe('getRole', () => {
        it('should be Intern from getRole()', () =>{
            expect(worker.getRole()).toBe('Intern');
            console.log(worker);
        });
    });
});