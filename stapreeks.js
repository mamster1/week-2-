let stapReeks = function(a, b, stap) {
  let rij = [];
  if (b > a)
    for (let start = a; start <= b; start = start + stap)
      rij.push(start);
  else
    for (let end = a; end >= b; end = end + stap)
      rij.push(end);
  return rij;
};
console.log(stapReeks(5,2,-1));
//[5, 4, 3, 2]
console.log(stapReeks(5,-25,-5));
//[5, 0, -5, -10, -15, -20, -25]
console.log(stapReeks(10,100,10));
//[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
