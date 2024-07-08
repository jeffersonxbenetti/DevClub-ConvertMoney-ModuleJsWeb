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

    convertValues()
}


function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector("#value-to-convert")
    const ValueFromConverted = document.querySelector("#value-from-converted")

    const dolarToday = 5.2
    const euroToday = 6.2

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

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

selectToConverted.addEventListener("change", currencyExchange)
buttonCovert.addEventListener("click", convertValues)