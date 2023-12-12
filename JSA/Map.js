//Map là kiểu dữ liệu có cấu trúc dạng ky=>value (Set có dạng value)
//Các thao tác chính với map 
// Khởi tạo : let map = new Map() ; 
// Thêm phần tử : map.set("Name" , "Nguyên Văn Hung") ; 
//Xóa phần tử : map.delete("Name") //Xóa key ; 
//Kiểm tra sự tồn tại: map.has("Name") ; Kiểm tra ky nếu tồn tại trả về true và ngược lại
//Đếm tổng số phần tử : map.size ; 
//Xóa toàn bộ phần tử : map.clear() ;
//Trong map key không được trùng=>truyền 2 key giống nhau nó sẽ ghi đè vào một key duy nhât.
//Các định dang của key String,number,const , NaN  

 
let map = new Map() ; 
map.set("name" , "Hung") ; 
map.set("age" , 24) ; 
map.set("address" , "PhuTho") ;
console.log(map); 
console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("address"));
console.log(map.size);
console.log(map.has("color"));
console.log(map.has("age"));
map.clear() ; 
console.log(map);
map.set(NaN , "FPT") ; 
console.log(map.get(NaN));
const constKey = {} ;
map.set(constKey , "contKey") ; 
console.log(map.get(constKey));

//Cac hàm bộ trợ trong map , keys:lay key , values:lấy value , entries() lấy cả key và value
let map_1 = new Map([
    ['name' , 'Nguyen Van Hung'],
    ['domain' , 'FPT software'],
])

console.log(map_1.keys());
console.log(map_1.values());
console.log(map_1.entries());

//