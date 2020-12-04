//JSnack 1A

/* var palla = {
  Nome: "palla",
  Peso: 10
}; */

//JSnack 1B

/* palla.Peso = Number(prompt("Inserisci il peso della palla."));
console.log(palla); */

//JSnack 2
var biciDaCorsa = [
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
var piuLeggera;
for(var i = 0; i < biciDaCorsa.length; i++) {
  if (biciDaCorsa[i].peso < pesoMinore) {
    pesoMinore = biciDaCorsa[i].peso;
    piuLeggera = i;
  };
};
console.log(biciDaCorsa[piuLeggera]);

