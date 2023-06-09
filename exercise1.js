function calculateAverage(numbers) {
    return numbers.reduce((add, number) => add + number, 0) / numbers.length;
}
