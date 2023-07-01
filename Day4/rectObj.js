// Complete the function in the editor. 
// It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

function Rectangle(a, b) {
    const obj = {
        length : a,
        width : b,
        perimeter : 2*(a+b),
        area : a*b,
    } ;
    return obj;
    
}