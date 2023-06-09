function calculateMatrixSum(matrix) {
    return matrix.flat().reduce((sum, value) => sum + value, 0);
}
