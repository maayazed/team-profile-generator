const manager = require('../lib/manager');


describe('manager class', () => {
    const worker = new manager('Steve', '01', 'this@this.com', 'office1', this.role);

    describe('getRole', () => {
        it('should be Manager from getRole()', () =>{
            expect(worker.getRole()).toBe('Manager');
            console.log(worker);
        });
    });
});