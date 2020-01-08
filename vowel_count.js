"use strict";
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

--

export class Kata {
  static getCount(str: string) {
    // your code here
  }
}
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        var vowels = new Set(__spreadArrays("aeiou"));
        return __spreadArrays(str).reduce(function (acc, cur) { return vowels.has(cur) ? ++acc : acc; }, 0);
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.getCount("happy birthday"));
