//cijferreeks van - tot -
let reeks = function (a, b) {
  let rij = [];
  if (b > a)
    for (let start = a; start <= b; start++)
      rij.push(start);
  else
    for (let end = a; end >= b; end--)
      rij.push(end);
  return rij;
};
console.log(reeks(1,10));
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(reeks(10,-10)
//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
