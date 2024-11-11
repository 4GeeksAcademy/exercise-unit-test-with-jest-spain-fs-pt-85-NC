// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Funcion de dolares a yenes
function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}
// Funcion de euros a dolares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}
// Funcion de yenes a libras
function fromYenToPound(yenes) {
    const euros = yenes / oneEuroIs.JPY;
    const libras = euros * oneEuroIs.GBP;
    return libras;
}
// Module export
module.exports = {fromEuroToDollar, fromYenToPound, fromDollarToYen};
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));
