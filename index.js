function receivesAFunction(thing){
    console.log(thing());
    }
        
    function returnsANamedFunction(){
        return function namedFunction(){
            console.log("named function")
        }
    }
    
    function returnsAnAnonymousFunction (){
        return function (){}
        console.log("anon function")}
    