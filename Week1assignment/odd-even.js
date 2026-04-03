let number  = 10
let evencount = 0
let oddcount = 0
for(let i = 0;i<=number;i++)
{
    if(i%2===0)
    {
        console.log(i +' = even') //to check the value is even
        evencount++        //if the value is even then it adds the count internally
    }
    else{//if the value is not even it comes to this else
   console.log(i +' = odd')   //if the value is not even then it prints as odd 
    oddcount++ //it counts the value and store internally
        }
   
}
console.log('even count = '+evencount)  //once the looping ends it consolidate the count and prints here
  console.log('odd count = '+ oddcount)