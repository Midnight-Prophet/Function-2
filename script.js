function numberofVowels(str) {
    let words = str.split(""); 
    let vowelCount = 0;
    let arrayOf = ["a", "e", "i", "o", "u", "y"];
    
   for (let i = 0; i < words.length; i++) {
        if (arrayOf.includes(words[i])) { // Checks if the array includes the vowel
            vowelCount++;
        }
    }
    
    return vowelCount;
}


console.log(numberofVowels("superhero"));


