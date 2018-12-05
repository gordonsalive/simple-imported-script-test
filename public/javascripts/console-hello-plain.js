// very simple poc script to console log messages and give me something to 'test'

const consoleHelloPlain = {};

(function ConsoleHello(consoleHello) {
  consoleHello.hello = 'hello';
  consoleHello.constructSayHello = function constructSayHello(who) {
    const who2 = who || 'you';
    return `Hello there ${who2}!`;
  };
  consoleHello.sayHello = function sayHello(who) {
    const helloMessage = consoleHello.constructSayHello(who);
    console.log(helloMessage);
  };
}(consoleHelloPlain.ConsoleHello = consoleHelloPlain.ConsoleHello || {}));

module.exports.console_hello_plain = consoleHelloPlain;
// export default result;
