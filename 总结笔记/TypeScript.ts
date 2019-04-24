// https://www.tslang.net/interfaces.html
// https://blog.csdn.net/xiagh/article/details/78654674

// TS最大的价值就是引入了接口，类，继承的编程思想。 
// 是JavaScript的超集，需要编译成js使用，它让JavaScript支持强类型
// 命名空间 模块 泛型 枚举 接口 类 继承implements

// 1，布尔类型(boolean)    例：let flag: boolean = true;

// 2，数字类型(number)     例：let years: number = 5;   例：let list: number[] = [1, 2, 3]; 数组类型的数组

// 3，字符串类型(string)    例：let words: string = "angular";

// 5，元组类型(tuple)       例: let x: [string, number];
// x = ["angular", 3];
// console.log(x[0])  //输出：angular；

// 6，枚举类型（enum ）      例：enum Color { Red，Green，Blue };
// let c: Color = Color.Blue;
// console.log(c) //输出：2

// 7，任意值类型（any）     例： let x: any;

// 8，null 和 undefined: 例：let z: number | null | undefined

// 9，void类型：  例：函数无返回值
    // function warnUser(): void {     // void类型像是与any类型相反，它表示没有任何类型。 
    //当一个函数没有返回值时，是void：
    //     alert("This is my warning message");
    // }

// 10，never类型：  例： 其他类型 （包括null和undefined）代表从不会出现的值，
    // 多用在抛出异常时候或无法执行到终点的（例如死循环）  
    // function error(message: string): never {
    //     throw new Error(message);
    // }

//11.   类型断言 <> 或者 as  “相信我，我知道自己在干什么”
    //  let someValue: any = "this is a string";  let strLength: number = (someValue as string).length;

// 12. 泛型
    // let someValue: any = "this is a string";
    // let strLength: number = (<string>someValue).length;

//  13.  函数类型的接口
interface SearchFun {
    (source: string, subString: string): boolean;
}
var mySearch: SearchFun;
mySearch = function (src: string, sub: string) {
        return true; 
} 


//子类实现接口
// 区别： implements：  继承implements的接口  extends：继承父类
    interface ClockInterface{  
        currentTime:Date;  
        setTime(day:Date);  
    }  
    class Clock implements ClockInterface{  
        currentTime:Date;  
        setTime(day:Date){  
            this.currentTime=day;  
        }  
        constructor(hour:number,minute:number){  
        }  
    }  


// TS装饰器：

// 1，方法装饰器：
// 2，类装饰器：
// 3，参数装饰器：
// 4，属性装饰器：



// string类型的返回值
function stringTest(names: string): string {
    return '';
}
// 只能拿字符串去调用
stringTest('ysk');

class Person {
    name: string;
    age: number;
}
var zhangsan : Person = new Person();
console.log(zhangsan.name);

// 位置关系 : 必选参数 > 可选参数 > 默认值
// 调用的时候age必须传递 ，不然报错，除非给默认值，给默认值那一项可以不传
// 带默认值的参数一定要申明在最后面
function defaultTest(age : number , names : string = 'ysk' ): string {
    return '';
}

// 可选参数 必须申明在必选参数的后面 当申明可选参数的时候 带个问好 
//调用时候可以不传递  但是函数内部job得做非空判断 不然报错
// 以下只需要传递 age参数即可
function kexuanTest(age: number, job?:string, names: string = 'ysk'): string {
    return '';
}

 
//  generator 函数
// 控制函数的执行过程，手工暂停和恢复代码执行
// yield
function* dosomething(){
    console.log('start');
    yield;
    console.log('finish')
}
var fun1 = dosomething();
fun1.next();    //暂停到yield
fun1.next();    // finish
 
function* getStockPrice(stock){
    while(true){
        yield Math.random() * 100;        //无限循环0到100  yield可以控制代码的暂停与执行
    }
}
var priceGenerator = getStockPrice('IDD');
var limitPrice = 15;    //大于15的时候就继续循环
var price = 100;        //初始值100
while (price > limitPrice){
    price = priceGenerator.next().value;        //会在yield那里停下来 当遇到next()才会执行到下一个yield
    console.log(`随机到的数字大于15 是${price}`);
}
//小于15的时候 就跳出无限循环
console.log('这个随机数组小于15 所以跳出循环');
 

//destructuring 析构表达式
// 对象：
function destructuring(){
    return {
        price:0,
        times:{
            n1:1,
            n2:2
        },
        name:'123'
    }
}
// price别名叫p 
// 拿出times里面的n1的值
var { price: p, times: { n1 }} = destructuring();

// 数组
var arr1:any = [1,2,3,4];
var [number1, number2] = arr1;   //  console.log(number1)   1  console.log(number2)  2
var [, , number1, number2] = arr1; // console.log(number1)  3  console.log(number2)  4
var [number1, , , number2] = arr1; // console.log(number1)  1  console.log(number2)  4
var [number1, number2, ...orthers] = arr1; // console.log(number1)  1  console.log(number2) 2  console.log(others) [3,4] 

function dofn([number1, number2, ...others]){
    console.log(number1);
    console.log(number2);
    console.log(others);
}
dofn(arr1);

 
// 私有属性  只有内部才可以访问
class Person1 {
    private name;
    private eat() {
        console.log(name);
    }
}
// 公有属性  内部与外部都可以访问  public可以省略不写
class Person2 {
    constructor (public age: string){       //加了public是声明age属性

    }
    public name;
    code: string;
    public eat() {

    }
}
// 受保护的  内部和子类可以访问  外部不可以访问
// readonly 不可修改
class Person3 {
    readonly numberOfLegs: number = 8;
    protected name;  
    protected eat(){

    }
} 
// 泛型 
// 申明一个数组works的泛型
// 只有从Person1 new出来的 才不会报错
var works : Array<Person1> = [];
works[0] = new Person1('aaa');


 


// 接口
//用法1: 一个方法的参数的类型申明
export interface Props {
  name: string;
  enthusiasmLevel?: number;     
}
class Hi extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    return (
       
    );
  }
}
ReactDOM.render(
  <Hi name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);


//  声明了2个类型  必须传申明的两个属性
var j1 = new Job({
    name?:'zhangsan',
    age:1
})

//用法2:  一个类实现一个方法  申明一个接口Animal
interface Animal{
    eat();
}
// Sheep 实现 Animal一个接口 ，必须实现eat()方法;
class Sheep implements Animal{
    eat(){
        console.log('aaa')
    }
}


// 接口
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
function Hello({ name, enthusiasmLevel = 1 }: Props) {
  
} 


// const 与readonly不同点:
    // const
        // 定义时即初始化，运行期间无法再初始化
        // 只能定义值类型与字串
        // 只能通过 类名称 访问
        // 不能在构造函数与其它属性与方法中初始化
    // readonly 
        // 能在运行期间的构造函数中初始化，实例 => 实例构造函数中初始化，静态 => 静态构造函数中初始化