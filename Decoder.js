function solution(roman) {
    const romans = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    let count = 0;

    for (let i = 0; i < roman.length; i++) {
        let symbol = roman[i];
        let value = romans[symbol];
        let nextSymbol = roman[i + 1];

        if (subtract(symbol, nextSymbol)) {
            count -= value;
        } else {
            count += value;
        }
    }

    return count;
}

function subtract(symbol, nextSymbol) {
    const subtractSymbols = {
        I: ['V', 'X'],
        X: ['L', 'C'],
        C: ['D', 'M']
    };

    return subtractSymbols[symbol] && subtractSymbols[symbol].includes(nextSymbol);
}