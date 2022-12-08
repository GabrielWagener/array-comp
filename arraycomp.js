var array = [ 1, 2, 3, 4, 5, 6, 6 ]
array.sort(function(a, b) {
  return a - b;
});
var result = array[1]
console.log(result)