const manager = require('../lib/manager');


describe('manager class', () => {
    const worker = new manager('Manager', '000-111-000');

    describe('getRole', () => {
        it('should be Manager from getRole()', () =>{
            expect(worker.getRole()).toEqual('Manager');
        });
    });
});