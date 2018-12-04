//very simple poc script to console log messages and give me something to 'test'

"use strict";

(function ConsoleHello(consoleHello) {
    consoleHello.hello = "hello";
    consoleHello.constructSayHello = function(who) {
        return `hello there ${who}!`;
    }
    consoleHello.sayHello = function(who) {
        who = who ? who : "you";
        let helloMessage = this.constructSayHello(who);
        console.log(helloMessage);
    }
}(window.ConsoleHello = window.ConsoleHello || {}));
