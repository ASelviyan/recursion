//In this function you count down from the number that is given! 

//Naive Way
function countDown(num){
    //creating a for loop so that you can iterate through the numbers
    for (let i = num; i > 0; i--) {
        //while iterating printing each number as the iterating goes from the number to 0 
       console.log(i)
    }
    //print all done when the iteration has ended
    console.log('All Done')
}
countDown(10)



//The Refactored way using recursion
function countDownRecursion(num) {
    //BASE CASE:if the num that was given is a 0 or less then return and print all done 
    if(num <= 0){
        console.log('All Down')
        return
    }
    //print num 
    console.log(num)
    //then subtract 1 from the num that was given so that we have a different input when we call the function again
    num--
    //call the function again to repeat the function
    countDownRecursion(num)
}

// countDownRecursion(5)
