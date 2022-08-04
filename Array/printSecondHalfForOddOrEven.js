var table = [5,10,15,20,25,30,35,40,45];
if(table.length%2==0){
    var start = table.length/2;

}
else{
    var start = (table.length-1)/2;
}
for(i=start; i<table.length; i++){
    console.log(table[i]);
}