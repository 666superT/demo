let arr:(number|string)[]=[2,3,3,'dsa']

let str:string='hellow word'

// 函数参数和返回值数据类型
function add(num1:number,num2:number):number{
  return num1+num2
}
console.log(add(1,2));

//函数没有返回值时数据类型设置
function test(name:string='狗蛋'):void{
  console.log('hellow',name);
  
}
test('王旭')

