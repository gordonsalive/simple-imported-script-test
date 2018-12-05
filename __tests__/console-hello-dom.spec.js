const chd = require('../public/javascripts/console-hello-dom.js');

describe('console-hello-plain', () => {
  it('correctly constructs hello message with you if no parameter passed', () => {
    expect(window.ConsoleHello.constructSayHello()).toBe('Hello there you!');
  });

  it('correctly constructs hello message with parameter passed', () => {
    expect(window.ConsoleHello.constructSayHello('Alan')).toBe('Hello there Alan!');
  });

  // the next bit shows how we can check that a method has been called with the correct parameters,
  // which is key to decoupling the tests of the method from the tests that is gets called and so
  // moving as much as possible down to more comprehensible unit tests and leaving only journey
  // tests behind in the sillenium tests
  describe('sayHello', () => {
    beforeEach(() => {
      jest.spyOn(window.ConsoleHello, 'constructSayHello').mockImplementation();
    });
    afterEach(() => {
      window.ConsoleHello.constructSayHello.mockRestore();
    });
    it('calls construct method when saying hello', () => {
      window.ConsoleHello.sayHello();
      expect(window.ConsoleHello.constructSayHello)
        .toHaveBeenCalled();// gives you a default method of jest.fn()
    });
    it('calls construct method with no params when saying hello()', () => {
      window.ConsoleHello.sayHello();
      expect(window.ConsoleHello.constructSayHello)
        .toHaveBeenCalledWith(undefined);
    });
    it('calls construct method with correct param when saying hello(Alan)', () => {
      window.ConsoleHello.sayHello('Alan');
      expect(window.ConsoleHello.constructSayHello).toHaveBeenCalledWith('Alan');
    });
  });

  describe('showHello', () => {
    beforeEach(() => {
      jest.spyOn(window.ConsoleHello, 'constructSayHello').mockImplementation(() => 'TEST');
    });
    afterEach(() => {
      window.ConsoleHello.constructSayHello.mockRestore();
      // console.log(document.documentElement.innerHTML);
      document.getElementsByTagName('html')[0].innerHTML = '';
      // console.log(document.documentElement.innerHTML);
    });
    it('calls construct method when saying hello', () => {
      window.ConsoleHello.showHello();
      expect(window.ConsoleHello.constructSayHello)
        .toHaveBeenCalled();// gives you a default method of jest.fn()
    });
    it('calls construct method with no params when saying hello()', () => {
      window.ConsoleHello.showHello();
      expect(window.ConsoleHello.constructSayHello)
        .toHaveBeenCalledWith(undefined);
    });
    it('calls construct method with correct param when saying hello(Alan)', () => {
      window.ConsoleHello.showHello('Alan');
      expect(window.ConsoleHello.constructSayHello).toHaveBeenCalledWith('Alan');
    });
    it('creates an html element of the correct id with the correct text', () => {
      window.ConsoleHello.showHello('dummy');
      expect(document.getElementById('hello').innerHTML).toBe('TEST');
      console.log(document.documentElement.innerHTML);
    });
  });
});
