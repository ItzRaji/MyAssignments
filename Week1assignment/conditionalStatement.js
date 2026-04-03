// a) First one need to have input as browserName (string)  -
//  use if-else (chrome or otherwise) - Print the value

// let browserName = 'www.chrome.com'
// if(browserName === 'www.chrome.com')
// {
//  console.log(browserName)
// }
// else{
//     console.log('launch other browser')
// }

//b) Second one need to have input as testType (string)
//   - use switch case (smoke, sanity, regression, default (smoke)) - 
// Print the values 

let testType = 'sanity'

switch(testType)
{
case 'smoke':
console.log('case1='+ testType)
break;

case 'regression':
console.log('case2='+ testType)
break;

case 'sanity':
console.log('case3='+ testType)
break;

default:
    console.log('default='+ 'systemtest')
}