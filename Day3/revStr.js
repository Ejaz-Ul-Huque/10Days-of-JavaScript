function reverseString(s) {
    try {
     
        console.log(s.split("").reverse().join(""));
    } catch (error) {
        console.log(`${error.message}\n${s}`);
    }
    
    
}

// OR

function reverseString1(s) {
    try {
     
        // console.log(s.split("").reverse().join(""));
        var revStr = s.split("").reverse().join("");
    console.log(revStr);
    } catch (error) {
        console.log(`${error.message}\n${s}`);
    }
    
    
}