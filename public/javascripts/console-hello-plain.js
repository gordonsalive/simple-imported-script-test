//very simple poc script to console log messages and give me something to 'test'

"use strict";

let console_hello_plain = {};

(function ConsoleHello(consoleHello) {
    consoleHello.hello = "hello";
    consoleHello.constructSayHello = function(who) {
        who = who ? who : "you";
        return `Hello there ${who}!`;
    }
    consoleHello.sayHello = function(who) {
        let helloMessage = this.constructSayHello(who);
        console.log(helloMessage);
    }
}(console_hello_plain.ConsoleHello = console_hello_plain.ConsoleHello || {}));

module.exports.console_hello_plain = console_hello_plain;
//export default result;
