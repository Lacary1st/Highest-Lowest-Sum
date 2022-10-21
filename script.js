// finding the highest
const nums = [10,30, 40, 70,100];
numbers=0;
nums.forEach((element) =>{
    if (numbers < element) {
        numbers = element;
    } 
    document.getElementById('highest_array').innerHTML = `1. Highest Number: ${numbers}`

});

// finding the lowest
var lowest;
nums.sort(function(x,y){
    return x-y});
    lowest = nums[0];
    // console.log(lowest)

document.getElementById('low').innerHTML = `2. Lowest Number: ${lowest}`


// total of all elements
var total=0;
total = nums.reduce(function(a,b){
    return a + b;
}, 0);
document.getElementById('total-element').innerHTML = `3. Total of all elements: ${total}`



// sum of the highest and lowest divided by 2
for(let x=0; x<nums.length; x++){
    let sum =(numbers + lowest)/2
    document.getElementById('high_low_sum').innerHTML = `4. Sum of highest and lowest numbers divided by 2:   ${sum}`
}



