


function ask(a, yes, no){
    if (a > 18) {
        // yes
        yes();
    } else {
        // no
        no();
    }
}

let yesFunc = () => console.log("yes");
let noFunc = () => console.log("no");

ask(15, yesFunc, noFunc);

ask(15, 
    () => console.log("yes"), 
    () => console.log("no"));