// convert lower into upper
var char = "b";
var lower = ["a","b","c","d"];
var upper = ["A","B","C","C"];
for(i=0;i<lower.length;i++){
    if(lower[i]==char){
        console.log(upper[i]);
        break;
    }
}