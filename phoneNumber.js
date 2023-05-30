function createPhoneNumber(numbers) {
    let stringNumbers = numbers.join("").toString()
    return `(${stringNumbers.slice(0, 3)}) ${stringNumbers.slice(3, 6)}-${stringNumbers.slice(6)}`

}