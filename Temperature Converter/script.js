document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();
    return convertInputDegree();
  });

// document.getElementById('inputDegree').addEventListener('input', () => convertInputDegree());
// document.getElementById('selectInputDegreeType').addEventListener('change',() => convertInputDegree());
// document.getElementById('selectConversionType').addEventListener('change',() => convertInputDegree());

function convertInputDegree() {

    let inputDegree = parseInt(document.getElementById('inputDegree').value);
    let selectInputDegreeType = document.getElementById('selectInputDegreeType').value;
    let conversionType = document.getElementById('selectConversionType').value;
    if(isNaN(inputDegree))
    {
        alert("Please input temperature.");
        return false;
    }
    let result = "";

    switch (selectInputDegreeType) {

        case "C":
            result = celciusToDegree(inputDegree, conversionType);
            break;

        case "F":
            result = fahrenheitToDegree(inputDegree, conversionType);
            break;

        case "K":
            result = kelvinToDegree(inputDegree, conversionType);
            break;

    }

    if (isNaN(inputDegree)) {
        document.getElementById('convertedDegree').innerText = '';
        return;
    }
    document.getElementById('convertedUnit').innerText = conversionType;
    document.getElementById('convertedDegree').innerText = result.toFixed(2);
}
function fahrenheitToDegree(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {
        case 'F':
            temperature = inputDegreeValue;
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 32) * (5 / 9));
            break;
        case 'K':

            temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
            break;

    }
    return temperature;
}
function celciusToDegree(inputDegreeValue, conversionDegreeType) {


    let temperature = '';

    switch (conversionDegreeType) {

        case 'C':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue * (9 / 5)) + 32);
            break;
        case 'K':
            temperature = eval(inputDegreeValue + 273.15);
            break;

    }

    return temperature;
}
function kelvinToDegree(inputDegreeValue, conversionDegreeType) {


    let temperature = '';

    switch (conversionDegreeType) {
        case 'K':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 273.15));
            break;

    }
    return temperature;
}