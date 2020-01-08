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

export class Kata {
  static getCount(str: string): number {
    const vowels: Set<string> = new Set([..."aeiou"]);
    return [...str].reduce((acc: number, cur: string): number => vowels.has(cur) ? ++acc : acc, 0);
  }
}

console.log(Kata.getCount("happy birthday"));
