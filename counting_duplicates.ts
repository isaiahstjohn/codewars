/*
 * Runtime complexity: O(2n) = O(n)
 * Space complexity: O(2n) = O(n)
 */
export function duplicateCount(text: string): number{
  let singles: Set<string> = new Set();
  let doubles: Set<string> = new Set();
  [...text.toLowerCase()].forEach(char => {
    if(singles.has(char)){
      doubles.add(char);
    }else{
      singles.add(char);
    }
  });
  return doubles.size;
}

console.log(duplicateCount('aaaBbc'));
