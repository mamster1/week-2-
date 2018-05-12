//schaakbord
let groot = 8;

let blok = "";

for (let vert = 0; vert < groot; vert++) {
  for (let hor = 0; hor < groot; hor++) {
    if ((hor + vert) % 2 == 0) {
      blok += " ";
    } else {
      blok += "#";
    }
  }
  blok += "\n";
};
console.log(blok);
