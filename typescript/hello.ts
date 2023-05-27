
// var str:string = "go fuck yourself"

var num:number = 1234

var checked:boolean = false

// 枚举类型用于定义数值集合，
// 使用枚举我们可以定义一些带名字的常量。 
// 使用枚举可以清晰地表达意图或创建一组有区别的用例。，
// 如周一到周日，方位上下左右等
// 可以设置 数字 第一个后面会累加
// 可以设置 字符串，会固定值
enum Color {
    RED = "红色",
    PINK = "粉色",
    BLUE = "蓝色",
}

const red: Color = Color.RED;
const color: Color[] = [Color.RED, Color.PINK, Color.BLUE];
console.log(red);
console.log(color);
const arr: number[] = [1,2,3];
const arr2: Array<number|string> = [1,2,3,"wqds"];
console.log(arr2);

// 元组（ Tuple ）表示一个已知数量和类型的数组,可以理解为他是一种特殊的数组

const tuple: [number, string] = [1, "zhangmazi"];

// 函数没有返回值
function sayHello(): void {
    console.log("hello 啊，树哥！");
  }
//   never 类型表示的是那些永不存在的值的类型。 
// 例如never 类型是那些总是会抛出异常或根本就不会有返回值的
// 函数表达式或箭头函数表达式的返回值类型

// 异常
function error(msg: string): never { // 编译正确
    throw new Error(msg); 
  }
  
  // 死循环
  function loopForever(): never { // 编译正确
    while (true) {};
  }
//   unknown与any一样，所有类型都可以分配给unknown:

let value: unknown = 1;
value = "zhangmazi"; // 编译正确
value = false; // 编译正确

// object object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。
let object: object;
// object = 1; // 报错
// object = "a"; // 报错
// object = true; // 报错
// object = null; // 报错
// object = undefined; // 报错
object = {}; // 编译正确


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHi(): void {
      console.log(`Hi, ${this.name}`);
    }
  }
  
  const flag1: number[] = [1, 2, 3];
  const flag2: Array<number> = [1, 2, 3];
  
//   function add(x: number, y: number): number {
//     return x + y;
//   }
//   接口定义函数
  interface Add {
    (x: number, y: number): number;
  }

//   function add(x: number, y?: number): number {
//     return y ? x + y : x;
//   }
  
//   function add(x: number, y: number = 0): number {
//     return x + y;
//   }
  
  function add(...numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
 

  console.log( add(1,2,3,45));
  

//   let str: any = "to be or not to be";
//   let strLength: number = (<string>str).length;
  

//   let str: any = "to be or not to be";
// let strLength: number = (str as string).length;


let user: string | null | undefined;
console.log(user!.toUpperCase()); // 编译正确
// console.log(user.toUpperCase()); // 错误

// interface Item {
//     name:string;

// }
type Item =  {
    name:string;

}

let array:Item[] = [{name:"baby"},{name:"bay"}]