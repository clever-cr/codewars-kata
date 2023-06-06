function calculateAverage(numbers) {
    const sum = numbers.reduce((add, number) => add + number, 0);
    const average = sum / numbers.length;
    return average;
}