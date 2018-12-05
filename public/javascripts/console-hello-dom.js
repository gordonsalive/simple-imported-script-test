// very simple poc script to console log messages and give me something to 'test'


(function ConsoleHello(consoleHello) {
  consoleHello.hello = 'hello';
  consoleHello.constructSayHello = function constructSayHello(who) {
    const who2 = who || 'you';
    return `Hello there ${who2}!`;
  };
  consoleHello.sayHello = function sayHello(who) {
    const helloMessage = this.constructSayHello(who);
    console.log(helloMessage);
  };
  consoleHello.showHello = function showHello(who) {
    const helloMessage = this.constructSayHello(who);
    const textnode = document.createTextNode(helloMessage);
    const node = document.createElement('h1');
    node.setAttribute('id', 'hello');
    node.appendChild(textnode);
    document.body.appendChild(node);
  };
}(window.ConsoleHello = window.ConsoleHello || {}));
