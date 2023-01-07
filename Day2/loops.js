/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
/*
Task

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .

Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
*/

function vowelsAndConsonants(s) {
    //vowels
    for (let i=0; i<s.length; i++){
    if(s.charAt(i).match(/[aeiou]/)){  //regex function
        console.log(s.charAt(i))
    }
}

//consonants

    for (let i=0; i<s.length; i++){
    if(s.charAt(i).match(/[^aeiou]/)){
        console.log(s.charAt(i))
    }
}
}
