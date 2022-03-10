/**
 * splice()方法[数组]：
 * 1.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
  2.会改变原数组。
  3.语法
  array.splice(index, howmany, item1, ....., itemX)
  index	必需。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置。
  howmany	可选。要删除的项目数。如果设置为 0，则不会删除任何项目。
  item1, ..., itemX	可选。要添加到数组中的新项目。
 */

let a = ["x", "y", "z"];
// let b = a.splice(1, 1, "i", "j");

/**
 * slice()方法[数组和字符串]：
 * 1.slice(start,end)：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素。注意：该方法不会改变原数组，而是返回一个子数组。
语法：
start参数：必须，规定从何处开始选取，如果为负数，规定从数组尾部算起的位置，-1是指最后一个元素。
end参数：可选（如果该参数没有指定，那么切分的数组包含从start至数组结束的所有元素，如果这个参数为负数，那么规定是从数组尾部开始算起的元素）。

 */

let c = a.slice(0, 2);
console.log(c);

/**
 * split()[字符串]：
 * split方法把这个string分割成片段来创建一个字符串数组。
语法：string.split(separator,limit)
可选参数limit可以限制被分割的片段数量。separator参数可以是一个字符串或一个正则表达式,从该参数指定的地方分割。如果separator是一个空字符，会返回一个单字符的数组。
 */
let d = "abdsfhaksfl";
let f = d.split("", 3);
console.log(f, "f");
