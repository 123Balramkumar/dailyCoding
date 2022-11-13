// average of an even number 
var num = [12,9,4,3,1,45,5];
var sum =0;
var count = 0;
for( var i=0;i< num.length; i++){
if(num[i]%2==0){
    sum =sum + num[i];
    count++;

}
}
console.log("Average = "+sum/count);

