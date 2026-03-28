const { clear } = require("node:console");

const browserName = "Chrome"

function getBrowserVersion(){
    if(browserName == "Chrome")
    {
        let browserVersion = "122.30.001" 
        console.log("If block - " +browserVersion) //prnt inside if blcok
        }
//console.log("Function block - " +browserVersion) //prnt inside function blcok
}
getBrowserVersion();


//Note: * if var(declaring as local) is used it will print both if and fun block
    //  * if let is used(which is declared as local) it will print only the if 