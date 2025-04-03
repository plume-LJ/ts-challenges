"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _ccc;
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
        _ccc.set(this, 1);
        __classPrivateFieldSet(this, _ccc, +__classPrivateFieldGet(this, _ccc) + 1);
        this..call(this);
    }
    Singleton.prototype. = function () {
        console.log(__classPrivateFieldGet(this, _ccc));
    };
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
_ccc = new WeakMap();
var s = Singleton.getInstance();
// const tt = new Singleton()
