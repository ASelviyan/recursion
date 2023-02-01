//Given a number, return the factorial 

//Naive way
function factorial(num){
    //create a total variable to keep track 
    let total = 1
    //loop through the num from the num to 2
    //the reason we go to 2 and not 1 because total is already 1 so we don't have to multiply by 1 again 
    for (let i = num; i > 1; i--) {
        //multiply i to total
        total *= i
    }
    //return the total after the iteration has finished 
    return total
}

// console.log(factorial(4))


//Refactored Way(recursion)
function factorialRecursion(num){
    //BASE CASE: if num is 1 return 1
    if(num === 1) return 1
     //recursive call: it would seem like this would also be a base case because the line has a return but because the return has a recursion in it it doesn't automatically return the info because it is waiting for the recursion in it to complete 
    return num * factorial(num -1)
}


console.log(factorialRecursion(3))

//Ex: factorialRecursion(3) walk through
//     recursion line: return 3 * factorialRecursion(3 - 1 = 2)
//                                     return 2 * factorialRecursion(2 - 1 = 1)
//                                                     got to the base case num is 1 so it returns 1
//                                             |
//                                             v
//recursion line: return 3 * factorialRecursion(3 - 1 = 2)
//                                     return 2 * 1 = 2
//                                             |
//                                             v
//recursion line: return 3 * 2 = 6
//The last return is 6                         
                                                
