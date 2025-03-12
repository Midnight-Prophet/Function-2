function numberofVowels(str) {
    let words = str.toLowerCase().split(""); 
    let vowelCount = 0;
    let arrayOfFunction = ["a", "e", "i", "o", "u"];
    
   for (let i = 0; i < words.length; i++) {
        if (arrayOfFunction.includes(words[i])) { // Checks if the array includes the vowel "i" goes through every single letter
            vowelCount++;
        }
    }
    
    return vowelCount;
}


console.log(numberofVowels("suPErherO"));


