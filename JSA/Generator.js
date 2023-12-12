//Generator là một tính năng quan trọng trong js ,cho phép tạo ra một hàm có thể tạm dừng và tiếp tục thực
// thi .Cú pháp sử dụng function và từ khóa yield để tạm dừng và trả về giá trị.

function* myGenerator(){
    yield 1 ; 
    yield 2 ; 
    yield 3  ;
}

let gen = myGenerator() ; //gen là một instance của myGenerator 
console.log(gen.next()); // mỗi lần gọi gen.next() hàm myGenerator sẽ thực hiện đến khi gặp từ khóa ,sau đó
console.log(gen.next()); // trả về giá trị được yield và tạm dừng.Khi gọi next() lần nữa hàm myGennerator 
// sẽ tiếp tục thực thi từ nơi nó tạm dừng đến khi gặp yield tiếp theo hoặc kết thúc không còn yield

// Gennerator thường được sử dụng để tạo ra các chuỗi giá trị lớn mà không cần lưu trữ tất cả chúng
// trong bộ nhớ cùng một lúc,giúp tiết kiệm tài nguyên.
console.log("");
var obj = {
    name: 'AnhNV',
    clazz:'React',
    age:20
}
// obj là một đối tượng mà đối tượng không phải là một iterables nên không thể lặp qua được
// giờ phải định nghĩa iterator cho nó => nó có thể lặp qua sử dụng(for-of )....
obj[Symbol.iterator] = function* (){ 
    var self = this ; 
    var keys  = Object.keys(self) //converse đối tượng về mảng seft được gán = thí (this đang trỏ đến obj)
    // console.log(keys);

    for(let i = 0 ; i<keys.length ; i++){
        yield self[keys[i]] ; 
    }
    return ; 
}
for(var keys of obj){
    console.log(keys);
}
//