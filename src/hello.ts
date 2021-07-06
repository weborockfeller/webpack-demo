interface A {
  /*** 联合类型 */
  n: number | string;
}
const b:A = { n: 111 };

// 字面量
const n:number = 123;
const s:string = '456';
const o:object = {a:1,b:'2'};

// 非字面量
const n1:Number = new Number(123);
const s1:String = new String('456');
const o1:Object = new Object({a:1,b:'2'});

let numbers:number[] = [1,2,3,4,5];
// number|string代表联合类型, 下面的高级类型中会讲
let numbers1:(number|string)[] = [1,2,3,4,'5'];
let numbers2:Array<number|string> = [1,2,3,4,5,'6'];

// 元组

// let list1:[number, string] = [1, '2', 3]; // 错误, 数量不对, 元组中只声明有2个元素
// let list2:[number, string] = [1, 2]; // 错误, 第二个元素类型不对, 应该是字符串'2'
// let list3:[number, string] = ['1', 2]; // 错误, 2个元素的类型颠倒了
let list4:[number, string] = [1, '2']; // 正确

