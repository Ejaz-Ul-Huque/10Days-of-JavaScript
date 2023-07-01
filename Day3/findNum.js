function getSecondLargest(nums) {
    // Complete the function
    let a = [...new Set(nums)];
    a.sort((a,b)=> a - b );
    let result = a[(a.length-2)];
    return result;
}