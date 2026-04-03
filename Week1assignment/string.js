// //using normal word

// let word = 'Raji' //declare
// console.log(word.length) //print length

// let splitword = (word.split('')) // split the word
// console.log(splitword)
// let reverseword = splitword.reverse('') //reverse the splited word
// console.log(reverseword)
// let joinword = splitword.join('') //join the reversed word
// console.log(joinword)


// if(word === joinword) 
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }

// using palindrome word

let word = 'level' //declare
console.log(word.length)
console.log(word.length-1)  //print the length
let splitword = (word.split(''))
console.log(splitword)
let reverseword = splitword.reverse('')
console.log(reverseword)
let joinword = splitword.join('')
console.log(joinword)


if(word === joinword)
{
    console.log(true)
}
else
{
    console.log(false)
}

