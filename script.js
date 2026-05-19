let convertButton = document.querySelector(".convert-button");
let currencySelect = document.querySelector(".notes-for-conversion");
let inputCurrencyEl = document.querySelector(".input-currency");
let currencyValueToConvert = document.querySelector(".currency-value"); // BRL
let currencyValueConverted = document.querySelector(".currency-value-convert"); // outra moeda

const dolarToday = 4.91;
const euroToday = 5.77;
const libraToday = 6.65;
const bitcoinToday = 389.329;

function sanitizeValue(val) {
  if (!val) return 0;
  // remove tudo que não for dígito, ponto ou vírgula; substitui vírgula por ponto
  const apenasNumeros = val.replace(/[^\d.,-]/g, ""); // (/[^\d.,-]/g, "") é usada para encontrar e remover todos os caracteres de uma string que não sejam números
  const normal = apenasNumeros.replace(",", ".");
  const parsed = parseFloat(normal);
  return isNaN(parsed) ? 0 : parsed;
}

function updateUIForReal() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-dolar");
  const v = currencySelect?.value;

  switch (v) {
    case "dolar":
      currencyName.innerHTML = "Dólar americano";
      currencyImage.src = "./assets/Dolar.png";
      break;
    case "euro":
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/Euro.png";
      break;
    case "libra":
      currencyName.innerHTML = "Libra";
      currencyImage.src = "./assets/libra 1.png";
      break;
    case "bitcoin":
      currencyName.innerHTML = "Bitcoin";
      currencyImage.src = "./assets/bitcoin 1.png";
      break;
    default:
      currencyName.innerHTML = "Real";
      currencyImage.src = "./assets/Real.png";
  }
}
//case e uma alternativa mais limpa a múltiplos if-else , break e para finalizar
async function convertValues() {
  const inputValue = sanitizeValue(inputCurrencyEl.value);
  if (!currencySelect || !currencyValueConverted) {
    console.error('Elementos ausentes');
    return;
  }

  let resultado;

  if (currencySelect.value === "dolar") {
    resultado = inputValue / dolarToday;
    currencyValueConverted.textContent = resultado.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  } else if (currencySelect.value === "euro") {
    resultado = inputValue / euroToday;
    currencyValueConverted.textContent = resultado.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR"
    });
  } else if (currencySelect.value === "libra") {
    resultado = inputValue / libraToday;
    currencyValueConverted.textContent = resultado.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP"
    });
  } else if (currencySelect.value === "bitcoin") {
    resultado = inputValue / bitcoinToday;
    currencyValueConverted.textContent = resultado.toFixed(8) + " BTC";
  } else if (currencySelect.value === "real") {
    // Real para Real (valor de referência)
    currencyValueConverted.textContent = inputValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  currencyValueToConvert.textContent = inputValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  updateUIForReal();
}

document.addEventListener("DOMContentLoaded", () => {
  if (convertButton) convertButton.addEventListener("click", convertValues);
  // atualizar UI inicialmente
  updateUIForReal();
});


/* const convertButton = document.querySelector(".convert-button");
/*document = HTML |querySelector para selecionar o botao | const = variavel*/
/*const currencySelect = document.querySelector(".notes-for-conversion");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value"); //valor do real
    const currencyValueConverted = document.querySelector(".currency-value-convert"); // outra moeda
}
    const dolarToday = 4.91;
    const euroToday = 5.77;
    const libraToday = 6.65;
    const bitcoinToday = 389.329;

    /*const convertedValue = inputCurrencyValue / dolarToday
    constante chama convertedValue ela vai pegar o valor que o usuario colocou na caixinha (inputCurrencyValue)
    e dividir com o valor do dolar (dolarToday) assim ele vai exibir o resultado */

/*   if (currencySelect.value === "dolar") {

       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
           style: "currency", currency: "USD"

       }).format(inputCurrencyValue / dolarToday)
       /* currencyValueConverted e o valor do real que sera convertido e colocado em convertedValue
       substituindo o texto abaixo da bandeira pelo valor convertido */




/*   if (currencySelect == "euro") {

       currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency", currency: "EUR"

       }).format(inputCurrencyValue / euroToday)

   }

   if (currencySelect == "libra") {

       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
           style: "currency", currency: "GBP"

       }).format(inputCurrencyValue / libraToday)

   }

   if (currencySelect == "bitcoin") {

       currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
           style: "currency", currency: "BTC"

       }).format(inputCurrencyValue / bitcoinToday)

   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {    
   style: "currency" /*vai estilizar a moeda*//* currency: "BRL" /*tipo da moeda*/
/*  }).format(inputCurrencyValue) /*format vai estilizar a moeda que o usuario colocar na caixinha*/
/*currencyValueToConvert e o valor que o usuario vai colocar na caixinha mais ele vai ser transferido para
inputCurrencyValue que e o valor do texto da do real */

/*document.addEventListener("click", convertValues)
/* addEventListener serve para adicionar uma função quando o usuario interagir*/
 







/*let convertButton = document.querySelector(".convert-button");
let currencySelect = document.querySelector(".notes-for-conversion");
let inputCurrencyEl = document.querySelector(".input-currency");
let currencyValueToConvert = document.querySelector(".currency-value"); // BRL
let currencyValueConverted = document.querySelector(".currency-value-convert"); // outra moeda

const dolarToday = 4.91;
const euroToday = 5.77;
const libraToday = 6.65;
const bitcoinToday = 389.329;

function sanitizeValue(val) {
  if (!val) return 0;
  // remove tudo que não for dígito, ponto ou vírgula; substitui vírgula por ponto
  const apenasNumeros = val.replace(/[^\d.,-]/g, "");
  const normal = apenasNumeros.replace(",", ".");
  const parsed = parseFloat(normal);
  return isNaN(parsed) ? 0 : parsed;
}

function updateUIForReal() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-dolar");
  const v = currencySelect?.value;

  switch (v) {
    case "dolar":
      currencyName.innerHTML = "Dólar americano";
      currencyImage.src = "./assets/Dolar.png";
      break;
    case "euro":
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/Euro.png";
      break;
    case "libra":
      currencyName.innerHTML = "Libra";
      currencyImage.src = "./assets/libra 1.png";
      break;
    case "bitcoin":
      currencyName.innerHTML = "Bitcoin";
      currencyImage.src = "./assets/bitcoin 1.png";
      break;
    default:
      currencyName.innerHTML = "Real";
      currencyImage.src = "./assets/Real.png";
  }
}

async function convertValues() {
  const inputValue = sanitizeValue(inputCurrencyEl.value);
  if (!currencySelect || !currencyValueConverted) {
    console.error('Elementos ausentes');
    return;
  }

  let resultado;

  if (currencySelect.value === "dolar") {
    resultado = inputValue / dolarToday;
    currencyValueConverted.textContent = resultado.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  } else if (currencySelect.value === "euro") {
    resultado = inputValue / euroToday;
    currencyValueConverted.textContent = resultado.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR"
    });
  } else if (currencySelect.value === "libra") {
    resultado = inputValue / libraToday;
    currencyValueConverted.textContent = resultado.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP"
    });
  } else if (currencySelect.value === "bitcoin") {
    resultado = inputValue / bitcoinToday;
    currencyValueConverted.textContent = resultado.toFixed(8) + " BTC";
  } else if (currencySelect.value === "real") {
    // Real para Real (valor de referência)
    currencyValueConverted.textContent = inputValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  currencyValueToConvert.textContent = inputValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  updateUIForReal();
}

document.addEventListener("DOMContentLoaded", () => {
  if (convertButton) convertButton.addEventListener("click", convertValues);
  // atualizar UI inicialmente
  updateUIForReal();
}); */