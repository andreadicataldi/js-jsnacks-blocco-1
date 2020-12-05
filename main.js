//JSnacks Blocco 4

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
/* var squadre = [
  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
    ladri: true,
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
]; */

//JSnack 4B
/* squadre.forEach(function (item) {
  item.punti = Math.floor(Math.random() * 60) + 1;
  item.falli = Math.floor(Math.random() * 40) + 1;
});
console.log(squadre); */

//JSnacks Blocco 5

//JSnack 1
var zucchine = [
  {
    varietà: "nero di Milano",
    peso: 2,
    lunghezza: 10,
  },
  {
    varietà: "romanesco",
    peso: 3,
    lunghezza: 9,
  },
  {
    varietà: "lunga fiorentina",
    peso: 4,
    lunghezza: 12,
  },
  {
    varietà: "siciliano",
    peso: 3,
    lunghezza: 15,
  },
  {
    varietà: "striata di Napoli",
    peso: 2,
    lunghezza: 7,
  },
  {
    varietà: "bianca triestina",
    peso: 1,
    lunghezza: 6,
  },
  {
    varietà: "rigata pugliese",
    peso: 2,
    lunghezza: 7,
  },
  {
    varietà: "tondo di Piacenza",
    peso: 5,
    lunghezza: 5,
  },
  {
    varietà: "tondo di Nizza",
    peso: 4,
    lunghezza: 4,
  },
  {
    varietà: "tondo di Firenze",
    peso: 3,
    lunghezza: 6,
  },
];
var sum = 0;
for (var i = 0; i < zucchine.length; i++) {
  sum += zucchine[i].peso;
}
console.log(sum);