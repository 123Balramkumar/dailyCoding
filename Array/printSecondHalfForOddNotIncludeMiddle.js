// print second half of the array. Assume that Array is of odd size.
var element = [1,2,3,4,5,6,7,8,9];
//not  include middle
var start = (element.length+1)/2;
for ( var i= start; i< element.length; i++){

    console.log(element[i]);
}