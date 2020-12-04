//JSnack 1A

/* var palla = {
  Nome: "palla",
  Peso: 10
}; */

//JSnack 1B

/* palla.Peso = Number(prompt("Inserisci il peso della palla."));
console.log(palla); */

//JSnack 2
/* var biciDaCorsa = [
  {
    nome: "Bianchi",
    peso: 8.9
  },
  {
    nome: "Trek",
    peso: 8.7
  },
  {
    nome: "Specialized",
    peso: 9.1
  }
];
var pesoMinore = biciDaCorsa[0].peso;
for(var i = 0; i < biciDaCorsa.length; i++) {
  if (biciDaCorsa[i].peso < pesoMinore) {
    pesoMinore = biciDaCorsa[i];
  };
};
console.log(pesoMinore); */

//JSnack 3
/* var triangolo = {
  base: 10,
  altezza: 10,
};
var area = (triangolo.base * triangolo.altezza) / 2;
function pitagora(latoA, latoB) {
  return Math.sqrt(Math.pow(latoA, 2) + Math.pow(latoB, 2));
};
var ipotenusa = pitagora(triangolo.base, triangolo.altezza);
perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(area);
console.log(perimetro); */

//JSnack 4A
var squadre = [
  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },
];

//JSnack 4B
squadre.forEach(function (item) {
  item.punti = Math.floor(Math.random() * 10) + 1;
  item.falli = Math.floor(Math.random() * 10) + 1;
});
console.log(squadre);