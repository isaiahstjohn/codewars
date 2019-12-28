/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

function alphabetPosition(text) {
  text = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  text = Array.prototype.map.call(text, char => {
    const rank = alphabet.indexOf(char);
    if(rank === -1){
      return '';
    }else{
      return rank + 1;
    }
  });
  text = text.filter(item => String(item).length > 0);
  text = text.join(' ');
  return text;
}
