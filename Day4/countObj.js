// Complete the function in the editor. It has one parameter: an array, , of objects. 
// Each object in the array has two integer properties denoted by  and . 
// The function must return a count of all such objects  in array  that satisfy o.x == o.y.

function getCount(objects) {
    let count = 0;
    for ( let obj of objects) {
        if (obj.x === obj.y) {
            count ++;
        }
    }
    return count;
}