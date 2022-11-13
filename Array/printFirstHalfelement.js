var product = [1,2,3,4,5,6,7,8]
 if(product.length%2==0){
    var end = product.length/2;

 }
 else{
    var end = (product.length-1)/2;

 }
 for (i =0 ; i< end; i++){
    console.log(product[i]);
 } 