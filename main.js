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
/* var zucchine = [
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
console.log(sum); */

//JSnack 2
/* function invert(word) {
  return word.split("").reverse().join("");
}
console.log(invert("Andrea")); */

//JSnack 3
/* var zucchine = [
  {
    varietà: "nero di Milano",
    peso: 2,
    lunghezza: 16,
  },
  {
    varietà: "romanesco",
    peso: 3,
    lunghezza: 14,
  },
  {
    varietà: "lunga fiorentina",
    peso: 4,
    lunghezza: 17,
  },
  {
    varietà: "siciliano",
    peso: 3,
    lunghezza: 20,
  },
  {
    varietà: "striata di Napoli",
    peso: 2,
    lunghezza: 12,
  },
  {
    varietà: "bianca triestina",
    peso: 1,
    lunghezza: 11,
  },
  {
    varietà: "rigata pugliese",
    peso: 2,
    lunghezza: 12,
  },
  {
    varietà: "tondo di Piacenza",
    peso: 5,
    lunghezza: 10,
  },
  {
    varietà: "tondo di Nizza",
    peso: 4,
    lunghezza: 9,
  },
  {
    varietà: "tondo di Firenze",
    peso: 3,
    lunghezza: 11,
  },
];
var zucchineCorte = [];
var zucchineLunghe = [];
for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza < 15) {
    zucchineCorte.push(zucchine[i]);
  } else if (zucchine[i].lunghezza > 15) {
    zucchineLunghe.push(zucchine[i]);
  }
}
var pesoZucchineCorte = 0;
var pesoZucchineLunghe = 0;
for (var i = 0; i < zucchineCorte.length; i++) {
  pesoZucchineCorte += zucchineCorte[i].peso;
}
for (var i = 0; i < zucchineLunghe.length; i++) {
  pesoZucchineLunghe += zucchineLunghe[i].peso;
}
console.log(pesoZucchineCorte);
console.log(pesoZucchineLunghe); */

//JSnack 4
/* var arrayLettere = ["a", "b", "c"];
var arrayNumeri = [1, 2, 3];

function altArrays(arr1, arr2) {
  var fusion = [];
  for (var i = 0; i < arr1.length; i++) {
    fusion.push(arr1[i]);
    fusion.push(arr2[i]);
  }
  return fusion;
}
console.log(altArrays(arrayLettere, arrayNumeri)); */

//JSnack 5
var myArray = ["Milan", "Inter", "Juventus", "Roma", "Lazio", "Napoli"];
function myVar(array, a, b) {
  var newArray = [];
  if (a < b && b <= array.length) {
    for (var i = a; i < b; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
console.log(myVar(myArray, 0, 3));

