function reverseVowels(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "O", "I", "U"]
    const onlyVowels = str.split("").filter((letter) => vowels.includes(letter))
    return str.split("").map((letter) => vowels.includes(letter) ? onlyVowels.pop() : letter).join("");

}
