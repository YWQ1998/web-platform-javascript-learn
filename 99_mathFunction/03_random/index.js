console.log('随机函数');
//  1. Math 对象随机方法 random（） 返回一个随机的小数 0 <= x < 1
//  2. 这个方法里面不跟参数
//  3. 代码验证
console.log(Math.random());
//  4. 获取到两个数之间的随机整数，并且包含这两个整数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(1, 5));
