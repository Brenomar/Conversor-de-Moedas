const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") // aqui é o select, onde o usuário vai escolher o tipo de moeda


function convertValues() {  /*essa function convertValues é para todas as moedas desse site*/
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas

    console.log(currencySelect.value) /* esse console é pra captar o tipo de moeda que fois escolhida no select pelo usuário*/
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.4



    if (currencySelect.value == "dolar") { // se o usuário escolher a conversão em dólar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  /*intl.NumberFormat é usado para formatar números de acordo com as convenções de uma região ou idioma específicos*/    
            style: "currency",  // currencyValueConverted é o resultado da moeda convertida
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) // inputCurrencyValue é o valor que a pessoa colocou no input que ela quer converter dividido pelo valor do dólar
    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // aqui vamos formatar o valor que o usuário colocar no input inputCurrencyValue a ser convertido

    // currencyValueToConvert é o valor em real que foi digitado e aí quando clicar no botão, irá pegar o novo texto que a pessoa digitou no inputCurrencyValue e irá mostrar abaixo da bandeira do Brasil

    //  currencyValueConverted é o valor convertido já na moeda desejada, e irá mostar abaixo da bandeira
}

function changeCurrency() { // quando o usuário trocar o valor do select, ele vai chamar o changeCurrency, se o novo valor selecionado for dólar aí ele vai escrever Dólar Americano logo abaxixo da bandeiro, se for libra ou euro é a mesma coisa
    const currencyName = document.getElementById("currency-name") // currency name é o id da div onde está o dólar, e serve para as outras moedas
    const currencyImage = document.querySelector(".currency-img") // currencyimg é a class que dei para a imagem que está no HTML, e de acordo com o tipo de moeda escolhida, a imagem vai mudar com o SRC dela, quando o usuário selecionar o valor, dólar por exemplo, irá trocar o src da imagem


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano" // Quando eu trocar o valor do select, ele vai chamar a função function changeCurrency() se o novo valor que selecionei for dólar, 
        currencyImage.src = "./assets/eua.png" // aqui se o usuário escolher o valor de dólar, a imagem da bandeira dos EUA irá aparecer, está sendo utilizado o src delaaí ele vai escrever Dólar Americano, que é a currencyName que está no HTML na div do dólar
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"  // currency name é o id da div que tem o dólar, e mostra o nome da moeda após ser convertida, como Dólar Americano
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra" // estamos usando o innerHtml para mudar o texto que tem dentro da tag p
        currencyImage.src = "./assets/libra.png"
    }


    convertValues()  // essa função está logo acims esse aqui é para quando eu já tiver convertido uma moeda e eu queira alterar o tipo de moeda, e o valor da conversão mudar automaticamente 

}



currencySelect.addEventListener("change", changeCurrency) // quando trocar o tipo de moeda, ele fica de olho no select, só irá avisar quando o select trocar de valor, toda vez que o select trocar, ele vai chamar a function changeCurrency e assim altera a bandeira
convertButton.addEventListener("click", convertValues)