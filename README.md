## Learning about Recursion 
#### What is a recursion function?
- a process (a function in our case) that calls itself

#### How does a recursive function work?
- Invoking the same function with a different input until you reach your base case

#### Base Case 
- The condition when the recursion ends. The base case is important because it allows the recursion to actually stop and not have a infinite loops.

#### THE TWO ESSENTIAL PARTS OF RECURSION FUNCTIONS
-   The Base Case 
- Different Input (so that your not checking the same data over and over)

#### The Call Stack Explained  
- Its a stack data structure 
- Any time a function is invoked it is placed (pushed) on the top of the call stack. Its like a stack of papers when a function is called a new 'paper' is put on top of the stack and as soon as that 'paper' has done its purpose (aka the function has returned or has ended) then the 'paper' is removed from the top of the stack. 
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

#### How Recursion Works with the Call Stack
- Your used to function being pushed in the call stack and pooped off when they are done 
- When we write recursive functions, we keep pushing new functions into the call stack. So it keeps stacking the same function over and over

### Problem #1: Count Down
- In this function you count down from the number that is given! 

### Problem #2: Sum Range
- In this function it will add up a numbers range 

### Problem #3: Factorial 
- Given a number, return the factorial 
