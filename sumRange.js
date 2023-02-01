//In this function it will add up a numbers range 

function sumRange(num){
    //BASE CASE 
    if(num === 1) return 1
    //recursive call: it would seem like this would also be a base case because the line has a return but because the return has a recursion in it it doesn't automatically return the info because it is waiting for the recursion in it to complete 
    return num + sumRange(num-1)
}

console.log(sumRange(3))
//Ex: SumRange(3) walk through 
        //Recursive Line: return 3 + sumRange(3-1 = 2)
        //                         return 2 + sumRange(2 - 1)
        //                                         then this line hits the base case and return 1
        //                                 |
        //                                 V
        //Recursive Line: return 3 + sumRange(3-1 = 2)
        //                         return 2 + 1 = 3
        //                                 |
        //                                 V
        //Recursive Line: return 3 + 3
        // the final return is 6

    