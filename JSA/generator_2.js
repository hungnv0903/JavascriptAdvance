// KN : Là các function,các quy trình nền ,chương trình con ,có khả năng tạm dừng và tiếp tục chạy 
// Có khả năng thoát ra khỏi hàm sau đó nhập lại vào trong hàm chạy lại.Và mỗi lần thoát ra hoặc 
// nhập vào hàm lại như vậy ta có thể lưu trữ các biến.Cú pháp : dấu * có thể xuất hiện bất kỳ điểm 
// nào giữa từ khóa function và tên hàm.

//Ex 
function* genneratorFunction(){
    yield 2023 ; 
    return "Generator trong ES6" ; 
}

const result = genneratorFunction() ; 
console.log(result); //Giá trị này gọi là iterrator là  đối tượng mảng.
//Gennerator function trả về các iterrator.Là các đối tượng,xem như một chuỗi các giá trị,hỗ trợ
// lấy giá trị tiếp theo(yield tiếp theo ) trong chuỗi bằng hàm next() 
// Kết qua bao gồm value và trả về done (luận lý) để kiểm tra trong iterator con dữ liệu hay không
// Để lấy giá trị sử dụng hàm next() ;   

console.log(result.next()); //trả về một đối tượng (value , done) ; 
console.log(result.next());

// Sự khác biệt giữa  yield và return trong gennerator là : yield sẽ trả về done:false
// còn return sẽ trả done:true

//Gennerator trong gennerator : 
// yield* : dùng để nhượng quền lại cho một gennerator khác chạy 
// Gennerator function printName sẽ chạy trước khi chuyển đến end 
console.log("");
console.log("Generator in Generator"); 
// xinchao => Redux => Ket thuc 
function* printName(){
    yield "redux" ; 
}

function* hello(){
    yield "Xin  chao" ; 
    yield* printName() ; //nhượng quền cho generator printName()chạy. 
    yield "Ket thuc"
}

const iterator = hello() ; 
for(let item of iterator){
    console.log(item);
}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//
