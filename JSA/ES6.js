//Khác biệt giữa arrow function và normal function : Cú pháp trong arowfc đơn giản hơn. this trong arowfc 
// sẽ trỏ đến ddooid tượng global.arowfc không có đối số(muôn có đối số sử dụng toán tử rest parameter).


//Block scope : voi cac bien cho toan ung dung va thay doi lien tuc thi nen dung var con let chi nen dung cho cac
// truong hop tam thoi

var a = 1 ; 
var b = 2 ; 

if(a<b){
    let tmp = a ; 
    a = b ; 
    b = tmp ; 
}

console.log(a);
console.log(b);
// console.log(tmp);
//Arrow Function
console.log("ArowFunction");
var total = (a,b)=>{
    return a+b ; 
} ; 

var hello = (a,b)=>{
    console.log(`Hello ${a} goobye ${b}`);
}

var message = ()=>{
    console.log("Hello");
}

var mes = a=>{
    return a
}
console.log((total(1,3)));
hello("nguyen van A" , "nguyen van B") ; 
message() ; 
console.log(mes(100));

var domain = ['a','b','c','d'] ; 
var newDomain =  domain.map(value=>{
    return value.toUpperCase() ; 
});
console.log(newDomain);

//Rest/Spread : 
//Toán tử spread (...)  
//Rest  được dùng trong khai báo hàm để gom các tham số thành một mảng
//Spread được dùng để rải các phần tử hoặc thuộc tính của mảng hay đối tượng.
console.log("Spread");
let arrSpread = [1,2,3,4,5,6] ; 
console.log(...arrSpread);
let objSpread = {
    name:"HUNG",
    age:24
}
let objSpreadNew = {
    ...objSpread,
    addres:"Phu Tho"
}
console.log(objSpreadNew);
console.log("Min : " ,Math.min(...arrSpread));

console.log("");
console.log("Rest");

let rest1 = (...paraArr)=>{
    return paraArr
}
console.log(rest1(1,1,2,2,3,3)) ; 
let rest2 = (para1,para2,...paraArr)=>{
    console.log(para1); //1
    console.log(para2);//2
    console.log(paraArr);//[3,4,5,6,7,8]
}
rest2(1,2,3,4,5,6,7,8) ; 

//Rest+pread ;
console.log("Rest+spread"); 
var arrRest = [10,20,30,40,50,60] ;
let rest3 = (para1,para2,...paraArr)=>{ //rest
    console.log(para1);
    console.log(para2);
    console.log(paraArr);
} 
rest3(...arrRest) ; //pread

//Destructuring : Cách tách các phần tử của Array hoặc Object thành nhiều biến chỉ bằng một đoạn code duy nhất. 
// Trong trường hợp destructuring array, giá trị được gán dựa vào vị trí.
// Trong trường hợp destructuring object, giá trị được gán dựa vào tên thuộc tính.
// Nếu truy cập vào một biến không tồn tại trong arr hoặc không tồn tại thuộc tính đối với obj thề giá trị là undefine

console.log("");
console.log("Destructuring");
//Array Destructuring
var DesArr = [1,2,3,4,5] ; 
var [a,b] = DesArr ; 
console.log(a , b); //1 ,2 
var [a,b,c,d,e,f=2] = DesArr ; 
console.log(d,e); //4,5
console.log(a,b,c,d,e,f);
var sw1 = 1  , sw2 = 2 ; 
var [sw1 , sw2] = [sw2 , sw1] ; 
console.log(sw1 , sw2);

var restDes = ()=>{
    return [11,22,33,44,55] ; 
}

var [a,b,,,e,f] = restDes() ; 
console.log(a); //11
console.log(b); //22
console.log(e); //55
console.log(f); //undefine

console.log("");
//Object Destructuring
let date = {
    day : 10 , 
    month : 6,
    year : 2023
}
console.log("");
let {day ,month, year} = date ; // Chuyen 3 gt thanh 3 bien
console.log(day , month , year);

//kết hợp với function
var domains = ()=>{
    return ['nguyen' , 'van' , 'Hung'] ; 
}

let [domain1 , domain2 , domain3] = domains() ; 
console.log(domain1 , domain2 , domain3);
// object lồng array
console.log("");
const blogs = {
	anonystick: [
  	{
      pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {anonystick:[{pageFacebook:pageValue , likes:likesValue , daily:dailyValue}]} = blogs ; 
console.log(`${pageValue} ${likesValue} ${dailyValue}`); //

console.log("");
var fuc = (...fucArr)=>{
    return fucArr
}
const [fucArr_1,fucArr_2 , fucArr_3] = fuc(1,2,3) ; 
console.log(fucArr_1 , fucArr_2 , fucArr_3);

console.log("");

const blogs_2 = {
    title: "Lorem ipsum",
    anonymous: [
        {
            page : "anonymous.com",
            likes: 10000,
            daily:2000
        }
    ]
}

const {anonymous:[{page , likes , daily}]} = blogs_2 ; 
console.log(page , likes , daily);

console.log("");
const personObj = {
    name:"Hung" , 
    age : 24,
    address: "hanoi",
    hairColor:'black'

}

const getSomeThing = ({name , age , ...otherInfo})=>{
    console.log(name , age , otherInfo); //other la một đối tượng và bên trong là các thuộc tính còn lại
}
getSomeThing(personObj)

//