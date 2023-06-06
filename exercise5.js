export default function calculateFactorial(n) {
    if (n <= 1) return 1;
    let factorial = 1;
    for (let index = 2; index <= n; index += 1) {
        factorial *= index;
    }
    return factorial;
}
