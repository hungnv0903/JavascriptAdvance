// Prototype là cơ chế cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác 
// [[Prototype]] : là thuộc tính nội bộ (internal property)
// Mỗi đối tượng trong js đều có một prototype và các đối tượng này đều được kế thừa các thuộc tính và phương thức từ
// prototype (prototype giông như một cái khuôn và các object là những thứ được tạo ra từ cái khuôn đó)
// Khi khởi tạo một đối tượng js sẽ tự động tạo một prototype.Đối tượng prototype này chứa các phương thức và thuộc tính
// có thể được chia sẻ giữa tất cả các đối tượng được tạo ra từ contructor đó.
class Person {
    constructor(first , last) {
        this.first = first ; 
        this.last = last ; 
    }
} 
console.log(Person.prototype.constructor===Person);//true

Person.prototype.getFullName = function(){
    return `${this.first} ${this.last}` ; 
}

let p1 = new Person('nguen' , 'hung') ; 
let p2 = new Person('van' , 'hung') ; 
console.log(p1.getFullName()); 
console.log(p2.getFullName());

//Tất cả cá function khi mà được khai báo thì nó đều có một cái property là prototype(object) 
// Khi mới khai báo thì trong prototype không có gì cả 
// Bên trong prototype thì lại có một cái property là contructor và contructor này lại trỏ ngược tới class Person
//Prototype dùng để làm gì: ví dụ bên trên getFullName() là một method của prototype mà prototype lại được chia sẻ 
// cho tất cả các object hay instance được tạo ra khi sử dụng từ khóa new 
console.log(p1.getFullName===p2.getFullName); //vì hai thằng p1,p2 cùng được chia sẻ getFullName (tức là
// đang tham chiếu đến getFullName) nên kết quả trả về là true. 
// Việc sử dụng prototype để tạo phương thức giúp tối ưu bộ nhớ vì nó chỉ cần tạo ra một lần.


//