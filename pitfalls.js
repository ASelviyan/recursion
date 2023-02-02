//Example of functions that have problems in them 

//Forgetting to return or returning the wrong thing

function factorial(num){
    if(num === 1) return 1
    //this is will create a stack overflow because it will never get to the base case because num in the recursion factorial isn't being decreased to actually get to 1
    return num * factorial(num)
}

function factorial(num){
    //this is will create a stack overflow because the base case isn't actually stopping the recursion with a return. It will just subtract 1 from num, creating an infinite loop 
    if(num === 1) console.log(1)
    return num * factorial(num -1)
}

