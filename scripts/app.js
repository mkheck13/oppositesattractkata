// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// we want to see what the sum of the two inputs is.
// if its even then its false, if its odd then its true
// we want our new variable to be equal to the inputs added together
// do an if statement that returns false if the number is even, and true if odd
function lovefunc(flower1, flower2){
    const num = flower1 + flower2;
    if(num % 2 == 0){
        return false;
    }else{
        return true;
    }
}