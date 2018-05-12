//tellen hoe vaak de D voorkomt in een string
function countDs(woord) {
  return countChar(woord, 'D');
}
//tellen hoe vaak het gegeven karakter voorkomt in string
function countChar(woord, kar) {
  let teller = 0
  for (let letter = 0; letter < woord.length; letter++) {
    if (woord.charAt(letter) === kar) {teller++;}
  }
  return teller;
};


console.log(countDs("DDS"));
//2
console.log(countChar("kikker","k"));
//3
console.log(countDs("Drie dames drinken een kopje thee"));
//1
console.log(countChar("Drie dames drinken een kopje thee","e"));
//8
