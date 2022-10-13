function receivesAFunction(callBackFunction){
callBackFunction();
return "Call back function";
}

function returnsANamedFunction(){
    return function namedFunctin(){
        console.log("returning function");
    }
}

function returnsAnAnonymousFunction(){
return ()=> "I am anonymous";
}