//Set không có trong ES5 mà có từ ES6
// Set là một kiểu dữ liệu tập hợp 
//Khởi tạo set : 
let set = new Set() ; 
//Thêm phần tử : 
set.add("1") ; 
set.add("2") ; 
set.add("3") ;
//Xóa phần tử trong set
set.delete("1") ;  
//Kiểm tra sự tồn tại giá trị trong set
let ckeck1 = set.has("2") ;
console.log(ckeck1); 
//Đếm tổng số phần tử 
console.log(set.size);
console.log(set);
//Xóa toàn bộ phần tử 
set.clear()
console.log(set);
//Trong Set thì các giá trị không được trùng nhau vì vậy nếu thêm 2 giá trị giống nhau nó chỉ lưu
// một lần mà thôi

//Chuyển đổi Set sang Array sử dụng toán tử spread 
let number = new Set([0,1,3,5,5,5,3]) ;
let arr_number = [...number] ; 
//chuyển từ arr sang Set
let new_number_set = new Set(arr_number) ; 
console.log(arr_number); 
console.log(new_number_set);

//Mapping

let mapping = new Set([2,4,6,8]) ; 
let arr_mapping = [...mapping].map((value , index)=>{
    return value*index ; 
}) ; 
console.log(arr_mapping);

//Filtering
let filtering = new Set([1,2,3,4,5,6,7,8]) ; 
let filter = [...filtering].filter((value , index)=>{
    return value%2===0 ; 
}) ; 

console.log(filter);

//