console.log('最值函数');
// 最大值
console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.max('1', '5', '3'));

// 最小值
console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.min('1', '5', '3'));

var Test = {
  e: 2.75684589541,
  Max: function () {
    var max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  Min: function () {
    var min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  },
};
console.log(Test.e);
console.log(Test.Max(2, 5, 6, 7, 8, 9, 4, 52));
