//Có 7 loại dữ liệu primitives : null ,undefine , boolean , number , string , object , symbol
// Trong JS không có kiểu biến mà chỉ có kiểu giá trị
//Có thể gán nhiều kiểu giá trị cho một biến.
//Array : chứa bất kỳ loại giá trị nào
// String là bất biến (không thể gán giá trị khác cho các phần tử trong chuỗi ) trong khi array thì có thể thay 
// đổi.
// Không có phương thức nào thay đổi nội dung của chuỗi trong khi aray thì có .
//Number : bao gồm các số nguyên và số thập phân
// Ép kiểu :  ParseInt PartFloat vs Number
// Number chỉ sử dung được với các biến kiểu string nhưng giá trị có dạng số hoặc dấu chấm
//Nhưng khi chuỗi string đó có các ký tự không phải dạng sô hoặc dấu chấm ví dụ như nó chứa các chữ cái thì 
// dùng parseInt,parseFloat để ép kiệp và khi sử dụng chúng thì chúng chỉ lấy giá trị từ cho đến kí tự không phải là
// dấu chấm động hoặc chứ sô.

//Sự khác nhau giữa null và undefine 
// undefine : khi một biến được khai báo nhưng không được gán giá trị thì biến sẽ có giá trị mặc định là undefine
// null : là giá trị mà ta chủ động gán để thể hiện rằng biến đó là rỗng.

//NaN : được hiểu là số không hợp lệ,là giá trị đặc biệt trong JS viết tắt của "Not A Number ".Nó là một giá trị kiểu Number, được dùng để
// biểu diễn kết quả của một phép số không hợp lệ hoặc không xác định.
// NaN đặc biệt ở chỗ nó không bao giờ bằng NaN.
//isNaN (ES6) : kiểm tra một số có phải NaN không , nếu không phải là NaN thì trả về true ,là NaN trả về false

console.log(1+'gbfbkb');


var epk1 = '123.12' ;
var epk2 = '123.12a' ;
console.log(Number(epk1));
console.log(parseFloat(epk1)); 
console.log(parseFloat(epk2));

var a = [] ; 
a[1] = 1 ; 
a["name"] = "hung" ; 
console.log(a);
console.log(a.length);
console.log(a[0]);
a["3"] = 10 ; 
console.log(a[3]);
console.log(a);
console.log(a.length);
a['age'] = 24 ; 
console.log(a.length);
console.log(a['age']);

console.log(a.indexOf(1));
a.concat(3) ; 
console.log(a);

var str = "12345";
var b = 1.12345 ;
console.log(b.toFixed(0)); //1
console.log(b.toFixed(1));//1.1
console.log(b.toFixed(2)); // 1.12
console.log(b.toFixed(3)); //1.123
console.log(b.toFixed(4));//1.1235
console.log(b.toFixed(5));//1.12345
console.log(b.toFixed(6));//1.123450
console.log(b.toFixed(7));//1.1234500

console.log(0.1+0.2);
console.log(Number.MAX_VALUE);
var a = 2  ;
var b = "1" ; 
console.log(a/b);
console.log(typeof(a/b));
console.log(a/b === NaN);
if(b===NaN){
    console.log("ok");
}

a = NaN ; 
b = NaN ; 
console.log(a===b);

if(!Number.isNaN){
    Number.isNaN = function(n){
        return (
            typeof n === "number" && window.isNaN(n) 
        ) ; 
    }
}

a = 2/"foo" ; 
b = "foo" ;
Number.isNaN(a) ; 
Number.isNaN(b) ; 
//value : với các kiểu giá trị undefined,null,boolean ,number ,string
// khi gan một biến cho một giá trị thì tức là đang tạo ra một bản sao của giá trị đó 
//Khi sao chép hoặc truyền một biến giá tri thì tức là đang truyền biến mang giá trị bản sao và không 
//làm ảnh hưởng đến biến gốc.
var x = 10 ; 
var y = x ; 
y = 20 ; 
console.log(y , x);
//reference: tham chieu
//Doi voi cac kieu du lieu phuc tap object , array , function se duoc luu tru duoi dang tham chieu
// khi mà gán một biến cho một đối tượng tức là đang tạo ra một tham chiếu đến đối tuong đó 
//,không phải là một bản sao
//Khi sao chép hoặc truyền một biến tham chiếu thì sẽ tham chiếu đến đôi tượng gốc,nghĩa là 
//đang tham chiếu đến cùng một đối tượng 
var obj_1 = {"name" : "hung"} ; 
var obj_2 = obj_1 ; 
obj_2.name = "ABC" ;
console.log(obj_1 , obj_2); 

var n = 1 ; 
var m = 2 ; 
function swap(n,m){
    var tmp = n ; 
    n = m ; 
    m = tmp ;
}
swap(n,m) ; 
console.log(n,m);
//trong js sử dụng tham trị khi truyền tham số vào hàm tức là khi truyền tham số vào hàm nó sẽ sao chép
// giá trị của biến gốc và truyền vao, còn biến gốc sẽ không bị ảnh hưởng.

var c = "1" ; 
console.log(isNaN(c));
console.log(typeof(c));

//scope :pham vi xác định hoạt động của biến 
//lexical scope : Hiểu đơn giản là các hàm bên trong có thể truy xuất đước các biến bên ngoài nhưng 
//các hàm bên ngoài không truy xuất được các biến khái báo ở hàm bên trong.  
//3 loại scope: 
// global scope : biến và hàm khai báo ở mức này có thể truy cập ở bất kỳ đâu trong chương trình
//function scope : Biến hoặc hàm được khai báo ở bên trong một hàm chỉ có phạm vi ở trong một hàm.
//Và không thể bị truy cập từ bên ngoài.Điều này để tránh sự xung đột với các biến,hàm có cùng tên ở các phạm vi khác
//block scope : Chỉ được giới hạn ở trong một khối mã nào đó.Một block thường được thể hiển bởi cặp dấu ngoặc nhọn
// ( {} ) 
let let_block = "let" ; 
const const_block = "const" ; 
console.log("-----");
function blockScope(){
    var var_block = "var" ; 
    if(true){
        console.log(var_block);
        console.log(let_block);
        console.log(const_block);
    }
}
blockScope() ; 

console.log("------");

//Khác biệt giữa khai báo var let const : 
//Var được phép khai báo lại , let và const không thể khai báo lại
// var , let có thể được update còn const thì không thể update
// khi khai báo trong block scope thì var có phạm vị là global , còn let và const có phạm vi là block scope


//Hositing : là một cơ chế trong javascript nó se đẩy toàn bộ khai báo biến và khai báo hàm lên đầu phạm vi
//hoạt đọng của nó trước khi biên dịch.


hoisiting(hois) ; //undefine
console.log(hois); //undefined 
var hois = 10 ; 
hoisiting(hois)  ; //10
function hoisiting(hois){ // khai báo hàm được đẩy lên trên đầu
    console.log(hois);
}
console.log("----");

hoist() ; //hoisting
function hoist(){
    console.log("hoisting");
}
var hoi = 20 ; 

console.log("------");

// Closure : là một hàm được tạo ra bên trong một hàm khác, nó có thể sử lưu trữ  , dụng được tất cả các biến
// có phạm vi của hàm bên ngoại, ngay cả khi hàm bên ngoài đã kết thúc thực thi.

function sayHi(name){
    return  function(){
        console.log("Hello" , name);
    } 
}

//sayHi tra ve mot function
var hung = sayHi("hung") ;  //luc nay hung la mot function
console.log(hung);
//De in ra thong bao thi phai goi kich hoat function la hung
hung() ;

//Luu ý : các biến bên trong hàm sẽ kết thúc khi nó chạy xong
// Closure có thẻ sử dụng biến cục bộ biến của hàm cha và chính nó,

console.log("-------");
// sau khi chay xong counter thi bien count se bi huy.Tuy nhiên nó vẫn tồn tại trong hàm closure 
function counter(){
    var count = 1 ; 
    return function(){
        return count++ ; 
    }
}

var c = counter() ; 
console.log(c());
console.log(c());
console.log(c());

var x = 0;
var isTruthy = Boolean(x); // isTruthy s
console.log(isTruthy);

var de = undefined ; 
console.log(de+'1');
//