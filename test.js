var array = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
var array2 = [array];
array2[0] = 10;
array2[5].push(50);
console.log(array);
console.log(array2);
