// Write your code below
const hasUniqueChars = (word) => {
    let wordArr = word.split("")
    let unique = true ;
    for (let index = 0; index < wordArr.length; index++) {
       let char = wordArr.splice(index,1);
       let stringChar = char.toString();
    //    console.log(stringChar);
    //    console.log(wordArr);
        if (wordArr.includes(stringChar)) {
            unique = false;
            wordArr.splice(index,0,stringChar);
            // console.log(wordArr);

        } else {
            wordArr.splice(index,0,stringChar);
            // console.log(wordArr);
        }
    }
    return unique;
}
let answer = hasUniqueChars("Moonday");
console.log(answer);