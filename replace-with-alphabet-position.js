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
