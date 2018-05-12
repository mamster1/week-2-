//cijferreeks maken van a tot b
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
//cijferreeks optellen
function totaal(rij) {
  let som = 0;
  for (let a = 0; a < rij.length; a++) {
    som += rij[a];
  }
  return som;
}
console.log(totaal(reeks(1,10)));
//55
console.log(totaal(reeks(100,1000)));
//495550
console.log(totaal(reeks(234,235)));
//469
