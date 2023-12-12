// Iterator : là một bộ duyệt dùng để duyệt qua một mảng ,một danh sách hoặc một collection mà qua mỗi lần 
// duyệt sẽ ghi lại vị trí đã duyệt để từ đó có thể biết và lấy vị trí tiếp theo
// sử dụng phương thức next(), phương thức này sẽ return về phần tử tiếp theo,đồng thời ghi nhận luôn phần
// tử đã lặp là phần tử next(). Phương thức next() sẽ trả về một object gồm 2 thuộc tính là value và done.
//exaple  
let arr  = ['a','b','c'] ;
var iterator = arr[Symbol.iterator]() ;
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Itorators : là một đối tượng có khả năng lặp qua từng phần tử của iterables
//Iterable : là một đối tượng có thẻ được lặp qua.Một đối tượng được gọi là iterable 
//nếu như nó có phương thức Symbol.itorator.Phương thức này sẽ trả về một itorator
//Iterators được tạo ra từ một iterable để thực hiện công việc lặp qua các phần tử của iterables.
// Các itorable(array , string , set , map , collection DOM): Object theo mặc định không phải một itorable
// nên phải converse nó thành mảng sử dụng entries() , key , value
let obj = { a: 1, b: 2, c: 3 };
let iterableObj = Object.values(obj);
console.log(iterableObj);