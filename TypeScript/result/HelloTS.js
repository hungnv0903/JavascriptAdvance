"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloTypeScript = void 0;
//Vấn đề vs JS : Khó viết các chương trình lớn.Thiếu cơ chế gõ tĩnh để dễ bắt lỗi.Thiếu cơ chế cấu trúc
// class Interface.
//Giải quyết với typeScript: Xây dựng các ứng dụng lớn,Thêm các tính năng static,class,interface
// Dễ dàng chuyển đổi từ JS sang TS , mã nguồn mở có đầy đủ tính năng trong ES6
// Khai báo biến có chú thích kiểu dữ liệu
// const className : string  = "Nguyen Van Hung" ; 
// const age: number = 24 ; 
//const isfresher:boolean = 'true' ; //Thông báo lỗi khi không đúng kiểu dữ liệu (!importance)
var HelloTypeScript;
(function (HelloTypeScript) {
    var name = "Fsoft"; //String -Declare its type and value in one statement
    var brand; //Khai bao không có giá trị giá trị mặc định là undefine
    var price = 5000; //Không có type : thì type mặc định là any(Kiểu giá trị của nó có thể được suy 
    // ra dựa vào giá trị của nó)
    var promotion; //không type không value : mặc định type là any , value là undefine
    //Any là một kiểu dữ liệu linh hoạt cho phép variable có thể là bất kiểu giá trị nào ,sử dụng any 
    // giúp chánh kiểm tra kiểu dữ liệu trong quá trình phát triển và có thể gấy ra lỗi datatype trong 
    //quá trình chạy
    var varriable = 10;
    varriable = "Hung";
    varriable = true;
    console.log(varriable); //True 
    // var variable1 :number = 10 ; 
    // variable1 = "Hung" ; 
    // variable1 = true ; 
    // console.log(variable1); //lỗi 
})(HelloTypeScript || (exports.HelloTypeScript = HelloTypeScript = {}));
//Môt số loại basic type trong typeScript
// any
// primitive: null , undefine , bool , number , string  , void:kiểu không có giá trị trả về.
// Array:mảng giá trị có cùng type
// enum : kiểu liệt kê
//Khi truyền các parameter vào fun thì khi gọi hàm số lượng các đối số phải bằng số lượng các parameter
// và phải đúng vs kiểu dữ liệu. Nếu không sẽ báo lỗi.
//Array syntax: variable: <DataType> []
var counstries = ["VietNam", "Laos", "China"]; //Cach 1
var counstries2 = ["VietNam", "Laos", "China"]; //Cach 2
//Không thể khai báo mảng có giá trị khác kiểu khai báo
//cách khắc phục 
var mixArr = [1, 2.1, "nguyen", true];
var mixArr1 = [1, 2, true, "nguyen"]; //mảng này không quan tâm bao nhiêu phần 
// tử ,không quan tâm vị trị chỉ cần có một trong số các kiểu dữ liệu ddouuowcj khai báo là ok
var tuple = ["nguyen", 24, true]; // mảng khai báo kiểu tuple số phần tử trong
// mảng = số kiểu giá trị được khai báo và phải đúng theo thứ tự khai báo;
//Object
var obj = { name: "Hung", age: 24 };
var person = { name: "FPT", age: 17 }; // các thuộc tính phải đúng cới các kiểu 
// khai báo giá trị 
//Enum : là cách đặt tên thân thiện hơn cho các giá trị và bổ sung các kiểu dữ liệu vào JS
// Trong typeScript enum dùng để định nghĩa một tập hợp các hằng số có tên. (bên trong là các hằng số).
// Mặc định gán giá trị cho mỗi một item bên trong enum bắt đầu từ 0 
//
var YesorNo;
(function (YesorNo) {
    YesorNo[YesorNo["Thinkhing"] = 0] = "Thinkhing";
    YesorNo[YesorNo["Yes"] = 1] = "Yes";
    YesorNo[YesorNo["No"] = 2] = "No";
})(YesorNo || (YesorNo = {}));
var YesorNo1;
(function (YesorNo1) {
    YesorNo1[YesorNo1["Thinkhing"] = 1] = "Thinkhing";
    YesorNo1[YesorNo1["Yes"] = 2] = "Yes";
    YesorNo1[YesorNo1["No"] = 3] = "No";
    YesorNo1[YesorNo1["Never"] = 4] = "Never";
})(YesorNo1 || (YesorNo1 = {}));
console.log(YesorNo.Thinkhing, YesorNo.Yes, YesorNo.No); //output:0 1 2
console.log(YesorNo1.Thinkhing, YesorNo1.Yes, YesorNo1.No); //output:1,2,3,4
var YesorNo2;
(function (YesorNo2) {
    YesorNo2[YesorNo2["Thinkhing"] = 0] = "Thinkhing";
    YesorNo2[YesorNo2["Yes"] = 3] = "Yes";
    YesorNo2[YesorNo2["No"] = 5] = "No";
    YesorNo2[YesorNo2["Never"] = 6] = "Never";
})(YesorNo2 || (YesorNo2 = {}));
let answer = YesorNo2.Never;
console.log(YesorNo2.Thinkhing, YesorNo2.Yes, YesorNo2.No, YesorNo2.Never); //output:0,3,5,6
console.log(answer); //output:6 
//gía trị mặc không gán của một item sẽ là bằng giá trị của item đứng trước cộng 1 ; 
//Giá trị của các item có thể được gán là string tuy nhiên nếu để mặc định nó sẽ lỗi vì item đứng trước 
// có giá trị kiểu string không thể công 1 ;
//Any : Mô tả loại biến chưa biết , Có thể đến từ một nội dung động , Cho phép từ chối kiểm tra type,
// Tương tự như không khai báo bất kỳ kiểu dữ liệu nào
//Tuy nhiên việc dùng any giảm độ an toàn và nhất quán.
//Void : không return một cái gì
//Function
function functionTS(a) {
    return a;
}
console.log(functionTS(10));
