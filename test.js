//prueba euro a dolares
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// prueba yen a libra
test("One yen should be 0.0055591054313099035 pounds ", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 yen son 0.0055591054313099035 pounds, entonces 3.5 yenes debe ser (3.5 * 0.0055591054313099035)
    const expected = 3.5 * 0.0055591054313099035;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); // 1 yen son 0.0055591054313099035 pounds, entonces 3.5 yenes deberían ser = (3.5 * 0.0055591054313099035)
})
// prueba dolar a yen
test("One dollar should be 146.26168224299064 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(3.5);

    // Si 1 dolar son 146.26168224299064 dólares, entonces 3.5 dolares debe ser (3.5 * 146.26168224299064)
    const expected = 3.5 * 146.26168224299064;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected); // 1 dolar son 146.26168224299064 yenes, entonces 3.5 dolares deberían ser = (3.5 * 146.26168224299064)
})