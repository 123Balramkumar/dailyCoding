var table = [1, 1, 1, 1, 1, 1];
var temp = 0;
var count = 0;

for (var i = 0; i < table.length; i++) {
  temp += table[i];
  if (temp === table[i]) {
    count++;
  }
}

console.log(temp);
