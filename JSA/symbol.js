//Xuất hiện trong ES6,đây là kiểu dữ liệu dạng primitive type,nó tạo ra các ký tự duy nhất (unique)
// và không trả về một chuỗi mà chỉ trả về một dạng object.Vì vậy không thể thấy được giá trị thực của nó
// Symbol được dùng để xử lý các bài toán unique.
// Mỗi khi tạo một đối tượng symbol thì nó sẽ không trùng lặp với đối tượng khác

// khoi tạo
let symbol1 = Symbol() ; 
let symbol2 = Symbol('symbol2') ;
console.log(symbol1===symbol2); //false  

//Vì các symbol không giống nhau nên có thể sử dụng để tọa các key trong object hoặc map

//obj
const myKey1 = Symbol() ; 
let obj = {
    [myKey1] : 123 
}
console.log(obj[myKey1]);
//Map
const myKey2 = Symbol() ; 
let map = new Map() ; 
map.set(myKey2 ,'nguyen van hung') ; 
console.log(typeof(map));
console.log(...map);

// Ẩn đi chi tiết triển khai
var arr = [1,2,3,4] ; 
console.log(arr);
console.log(arr[Symbol.iterator]);

//