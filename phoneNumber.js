function createPhoneNumber(numbers) {
    const stringNumbers = numbers.join("")
    return `(${stringNumbers.slice(0, 3)}) ${stringNumbers.slice(3, 6)}-${stringNumbers.slice(6)}`
}
