
function checkNested(array) {
    let nested = array.filter((element, index) => Array.isArray(element) === true).length
    if (nested >= 1) return array.flat()
    return array
}

