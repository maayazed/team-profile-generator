const engineer = require('../lib/engineer');


describe('engineer class', () => {
    const worker = new engineer('Steve', '01', 'this@this.com', 'this@github', this.role);

    describe('getGithub', () => {
        it('should return as this@github from getGithub()', () =>{
            expect(worker.getGithub()).toBe('this@github');
        });
    });
    describe('getRole', () => {
        it('should be Engineer from getRole()', () =>{
            expect(worker.getRole()).toBe('Engineer');
            console.log(worker);
        });
    });
});