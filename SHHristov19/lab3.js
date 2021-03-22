let yesFunc = () => vonsole.log("yes");
let noFunc = () => vonsole.log("no");

function ask(a, yes , no){
    if(a > 18){
        yes();
    }
    else{
        no();
    }
}

ask(20 , 
    () => console.log("yes"), 
    () => console.log("no"));