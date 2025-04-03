"use strict";
exports.__esModule = true;
var happy_dom_1 = require("happy-dom");
var window = new happy_dom_1.Window({ url: 'https://localhost:8080' });
var document = window.document;
document.body.innerHTML = '<div class="container"></div>';
var container = document.querySelector('.container');
var button = document.createElement('button');
container === null || container === void 0 ? void 0 : container.appendChild(button);
// Outputs "<div class="container"><button></button></div>"
console.log(document.body.innerHTML);
// Aborts any ongoing operations (such as fetch and timers)
// await window.happyDOM.abort();
// Closes the window
// window.close();
