const buttonCovert = document.querySelector(".convert-button")
const selectToConverted = document.querySelector(".select-to-converted")

function currencyExchange(){
    const convertedImage = document.querySelector("#converted-image")
    const currencyNameConverted = document.querySelector(".currency-name-converted")

    if(selectToConverted.value == "dolar"){
        convertedImage.src = "./src/img/USD.png" 
        currencyNameConverted.innerHTML = "Dólar Americano"
    }
    if(selectToConverted.value == "euro"){
        convertedImage.src = "./src/img/EURO.png" 
        currencyNameConverted.innerHTML = "Euro"
    }
    if(selectToConverted.value == "libra"){
        convertedImage.src = "./src/img/GBP.png" 
        currencyNameConverted.innerHTML = "Libra"
    }
    if(selectToConverted.value == "bitcoin"){
        convertedImage.src = "./src/img/BTC.png" 
        currencyNameConverted.innerHTML = "Bitcoin"
    }

    convertValues()
}


function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector("#value-to-convert")
    const ValueFromConverted = document.querySelector("#value-from-converted")

    const dolarToday = 5.42
    const euroToday = 5.86
    const libraToday = 6.94
    const bitcoinToday = 317.123

    if(selectToConverted.value === "dolar"){
        ValueFromConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }
    if(selectToConverted.value === "euro"){
        ValueFromConverted.innerHTML = new Intl.NumberFormat("en-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }
    if(selectToConverted.value === "libra"){
        ValueFromConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }
    if(selectToConverted.value === "bitcoin"){
        ValueFromConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

selectToConverted.addEventListener("change", currencyExchange)
buttonCovert.addEventListener("click", convertValues)