// var table = [1, 1, 1, 1, 1, 1];
// var temp = 0;
// var count = 0;

// for (var i = 0; i < table.length; i++) {
//   temp += table[i];
//   if (temp === table[i]) {
//     count++;
//   }
// }

// console.log(temp);
var myArr = [1,2,3,4,7,1,3,5,6,1,];
var count = {};
for(var i=0; i<myArr.length;i++){
  var num = myArr[i];
  count[num]= count[num]? count[num]+1 : 1;
} 
console.log(count);