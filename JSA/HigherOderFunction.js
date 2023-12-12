//Higher order function : Là một hàm nhận một hàm làm đối sô hoặc trả về một hàm mới.

//Foreach vs for in vs for of : 
//foreach: duyệt qua các phần tử của mảng , không duyệt qua được một object và không thể breack.
// for in : duyệt qua các thuộc tính của mảng,có thể lặp qua được object
// for off : duyệt qua các phần tử của mảng không,không thể duyệt qua các thuộc tính của đôi tượng.(Chỉ làm
// việc với các đối tượng có itorator : mảng chuỗi set map) và nó không thể lấy được index của 
// phần tử đang duyệt


// map method được dùng khi muốn thao tác trên một mảng và trả về một mảng các giá trị thay đổi 
//dựa trên giá trị của mảng đầu vào 
//ex 
const lengthArr = [1,4,3,6] ; 
let areaArr = lengthArr.map(function(item , index , arr){ //item : là phần tử hay giá trị đang xét tới
    return item*2 ; 
}) ; 

let areaArr_1 = lengthArr.map(item=>{
    return item**3 ; 
})
let areaArr_2 = lengthArr.map(item=>item*item);

console.log(areaArr);
console.log(areaArr_1);
console.log(areaArr_2);

//fiiter : trả về một mảng mới mà các giá trị được lọc từ mảng đầu vào theo một điều kiện
//ex
const filterArr = [1,2,3,4,5,6,7,8,9] ; 
let newfilterArr = filterArr.filter(function(value , index , aarr){
    return true ; 
}) ; 

let newfilterArr_1 = filterArr.filter(value =>{
    return false ; 
})

let newfilterArr_2 = filterArr.filter(value=>value%2==0) ; 
console.log(newfilterArr_2);

//map+filter
let mapfilter = filterArr.map(value=>{
    return value*3 ; 
}).filter(value=>value%2==0) ; 

console.log(newfilterArr);
console.log(newfilterArr_1);
console.log(newfilterArr_2);
console.log(mapfilter);


//reduce : tích hợp các phần tử của mảng thành một giá trị duy nhất
const reduceArr = [1,2,3,4,5,6] ; 
let sum = reduceArr.reduce(function(total , value , index , arr){
    return total+value // total ban đầu mặc định lấy phần tử đầu tiên va index bắt đầu từ phần tử thứ 2
}) ; 

let sum_2 = reduceArr.reduce(function(total , value){
    return total+value  ;
},5) ; //khoi tao total ban dau bang 5 index bắt đầu chạy từ phần tử đầu tiên
console.log(sum);
console.log(sum_2);

console.log("-----------");
//filter+reduce 

const  filterReduceArr = [10,11,12,24,11,14,24] ; 
let resultArr = filterReduceArr.reduce(function(newArr , value){
    
},[]) ; 
console.log(resultArr);


//