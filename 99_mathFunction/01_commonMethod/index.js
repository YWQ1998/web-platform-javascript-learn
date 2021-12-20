console.log('常用数学公式');
// 1. 绝对值方法示例
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1 隐式转换 会把字符串类型 -1 转换为数字型
console.log(Math.abs('你好')); // NAN null

// 2. 三个取整方法
//    （1）Math.floor() 向下取整 往最小了取值
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1
console.log(Math.floor(-1.1)); // -2
console.log(Math.floor(-1.9)); // -2
//     （2）Math.ceil() 天花板 向上取整 往最大取整
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2
console.log(Math.ceil(-1.1)); // -1
console.log(Math.ceil(-1.9)); // -1

//      （3）Math.round() 四舍五入 其他数字都是四舍五入， 但是.5特殊 他是往大了取
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.9)); // 2
console.log(Math.round(1.5)); // 2
console.log(Math.round(-1.1)); // -1
console.log(Math.round(-1.9)); // -2
console.log(Math.round(-1.5)); // -1
