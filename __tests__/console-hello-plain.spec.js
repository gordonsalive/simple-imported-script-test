//import console_hello_plain from "../public/javascripts/console-hello-plain.js";
const chp = require("../public/javascripts/console-hello-plain.js");

describe('console-hello-plain', () => {
    it('correctly constructs hello message with you if no parameter passed', () => {
        expect(chp.console_hello_plain.ConsoleHello.constructSayHello()).toBe("Hello there you!");
    });

    it('correctly constructs hello message with parameter passed', () => {
        expect(chp.console_hello_plain.ConsoleHello.constructSayHello('Alan')).toBe("Hello there Alan!");
    });

    //the next bit shows how we can check that a method has been called with the correct parameters, which is key
    // to decoupling the tests of the method from the tests that is gets called and so moving as much as possible
    // down to more comprehensible unit tests and leaving only journey tests behind in the sillenium tests
    describe('sayHello', () => {
        beforeEach(() => {
            jest.spyOn(chp.console_hello_plain.ConsoleHello, 'constructSayHello').mockImplementation();
        });
        afterEach(() => {
            chp.console_hello_plain.ConsoleHello.constructSayHello.mockRestore();
        });
        it('calls construct method when saying hello', () => {
            chp.console_hello_plain.ConsoleHello.sayHello();
            expect(chp.console_hello_plain.ConsoleHello.constructSayHello).toHaveBeenCalled();//gives you a default method of jest.fn()
        });
        it('calls construct method with no params when saying hello()', () => {
            chp.console_hello_plain.ConsoleHello.sayHello();
            expect(chp.console_hello_plain.ConsoleHello.constructSayHello).toHaveBeenCalledWith(undefined);
        });
        it('calls construct method with correct param when saying hello(Alan)', () => {
            chp.console_hello_plain.ConsoleHello.sayHello('Alan');
            expect(chp.console_hello_plain.ConsoleHello.constructSayHello).toHaveBeenCalledWith('Alan');
        });
    });
});
