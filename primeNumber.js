function isPrime(number) {
    if (number < 2) return `${number} is not a prime number`;

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) return `${number} is not a prime number`;
    }

    return `${number} is a prime number`;
};