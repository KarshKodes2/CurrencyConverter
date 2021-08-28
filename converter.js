function exchange() {

    let amount1 = document.getElementById("currency1").value;
    let amount2 = document.getElementById("currency2").value;

    // Test if input is a number
    if (isNaN(amount1) || isNaN(amount2)) {
        document.getElementById('display').innerHTML = `Kindly check, input is not a valid number`;
    }

    // Execute conversion function
    else {

        let curr1, curr2;

        const naira = 1;
        const dollar = 360;
        const pounds = 480;
        const euro = 420;

        // currency object keys and values
        const currencies = {
            naira: 1,
            dollar: 360,
            pound: 480,
            euro: 420
        }

        const getCurrencies = () => {
            let currency1 = document.querySelector("#selCurrency1");
            let currency2 = document.querySelector("#selCurrency2");

            curr1 = currencies[currency1.value.toString()]
            curr2 = currencies[currency2.value.toString()]

            console.log(currency1.value, currency2.value, curr1, curr2);


            return curr1, curr2
        }

        let multiplier = 0

        const getMultiplier = () => {

            getCurrencies()

            return multiplier = curr1 / curr2;
        }

        function convert(val1, val2) {
            let result = val1 * val2;
            let newResult = parseFloat(result).toFixed(2)
            return document.getElementById('currency2').value = `${newResult}`;
        }

        const getConvertedValues = () => {

            const input1 = document.querySelector('#currency1')

            getMultiplier()
            convert(input1.value, multiplier)
        }

        getConvertedValues()

    }

}

exchange()