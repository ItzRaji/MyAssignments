
let score = 78.5
function studentscore()
{
    switch(true)
    {
        case (score < 35):
        console.log('Grade C')
        break;

        case (score > 35 && score <= 50):
        console.log('Grade B')
        break;

        case (score >= 51 && score <= 70):
        console.log('Grade A')
        break;

        case (score >= 71 && score <= 100):
        console.log('Grade E')
        break;

        default:
            console.log('absent')
    
    }
}
studentscore()


// let score = 35
// function studentscore()
// {
//     switch(score)
//     {
//         case  35:
//         console.log('Grade C')
//         break;

//         case 50:
//         console.log('Grade B')
//         break;

//         case 70:
//         console.log('Grade A')
//         break;

//         case 80:
//         console.log('Grade E')
//         break;

//         default:
//             console.log('absent')
    
//     }
// }
// studentscore()