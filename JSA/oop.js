//OOP :object oriented programing : là kỹ thuật, phương pháp lập trình sử dụng sử dụng các đối tượng để xây dựng ứng dụng.Dễ mô hình hóa 
// các bài toán các đối tượng bên ngoài thực tế thành mã code VD: Con mèo là một thực thể có các hành động như kêu
// ăn ,ngủ...và từ đó ta có thể tạo ra lớp Cat có đầy đủ các phương thức tương ứng với các hành động của con mèo
// OOP dễ bảo trì ,dễ mở rộng ,code nhìn gọn gàng 

//Class : Là một kiểu dữ liệu một khuôn mẫu giúp mô hình hóa các đối tượng thực tế,class bao gồm có các properties
//và method 
//Không giông như function class trong Javacript không được hoised

//Object : Nếu class là một khuôn mấu thì object là một thể hiện được tạo ra từ khuôn mấu đó 
//vd:Lớp class Cat thì có các thể hiện là các object như Mimi , Tom ,..... 
//(Class là chỉ những thứ chung chung còn object là những thứ cụ thể).

//Encapsulation(tính đóng gói) : Giúp nhóm lại các properties,methods và nhiều thành phần khác thành một đối tượng
//hay một đơn vị .Hạn chế quyền truy cập trực tiếp vào cấu trúc dữ liệu (properties,method...).
//public : có thể truy cập ở bất kỳ đâu
//private : Chỉ có thể truy cập ở bên trong class
//protected : Chỉ có thể truy cập ở bên trong class và các class kế thừa từ class đó.

//Inheritance(kế thừa) : Cho phép tạo ra một class con từ một class đã được định nghĩa trước đó.Các class con 
//kế thừa lại các properties và method cua class cha mà không cần định nghĩa lại hoặc tái định nghĩa. Giúp tái sử
//dụng và tránh code lặp dư thừa

//Polymorphism(Đa hình) : Một hành động có thể được hiểu và thực hiện theo nhiều cách khác nhau

//Abstraction (trừu tượng) : Nghĩa là ẩn đi các thông tin chi tiết bên trong,chỉ thể hiện các chi tiết cần thiết 
// ra bên ngoài 
//ví dụ : khi thực hiện một hành động thanh toán.Nó có thể có nhiều bước và nghiệp vụ bên trong.Bằng cách chia 
// tách nhỏ nghiệp vụ thành từng bước và sử dụng interface ta có thể dễ dàng hiểu được tổng quan những bước khi 
// thanh toán , mà không cần đi vào chi tiết các hành động.

//Constructor: đối với class trong js :Nó là hàm khởi tạo
//vi dụ :
class PersonConstructor {
    constructor(name){
        this.name = name ; 
    }

    showName(){
        console.log("Name : " , this.name);
    }
}

let person1 = new PersonConstructor("nguyen van a") ; 
person1.showName() ; 
console.log("---------");
//Class : ví dụ : tạo class Person với mục đích khai báo y tế
class Person {
    constructor(name , address , phone , cccd){
        this.name = name ; 
        this.address = address ; 
        this.phone = phone ; 
        this.cccd = cccd ; 
    }
    showPerson(){
        return `Name    : ${this.name}
                Address : ${this.address}
                Phone   : ${this.phone}
                CCCD    : ${this.cccd}`
            }
}
console.log(typeof(Person));
//class là function
console.log(Person===Person.prototype.constructor);
// class Person là một constructor 
console.log(Person.prototype.showPerson);
// showPerson cũng nằm trong prototype 

//Để xem danh sách các thuộc tính của Person.prototype
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log("-----------");

//Field :
// public :
class Public {
    name = "" ; 
    constructor(name){
        this.name = name ; 
    }
    sayName(){
        console.log(this.name);
    }
}

let pub = new Public("Nguyen") ; 
// console.log(pub.name);
pub.name = "Nguuyen Van A" ; 
console.log(pub.name);
pub.sayName();

console.log("---------------");
// Protected : trong JS không hỗ trợ : 1 : Quy ước _name là một protected 2:trong class chỉ tạo getter không tạo
// setter. 
class Protected {
    _name ; 
    constructor(name){
        this._name = name ; 
    }

    get getName(){
        return this._name ; 
    }

    showName(){
        console.log("Name : " , this._name);
    }
}

let protecte = new Protected("Hung") ;
console.log(protecte._name); 

protecte.getName = "nguyen" ; 
protecte.showName() ; 

protecte._name = "HungNguyen" ; 
console.log(protecte._name);
protecte.showName() ; 

console.log("-------------");
//Private
class Private {
    #name ; 
    constructor(name) {
        this.#name = name ; 
    }

    sayHi(){
        console.log("Hello : " , this.#name);
    }

}
class Extend extends Private {
    sayGoodbye() {
        // console.log(`${this.#name} goodbye`); //không thể truy cập  #name từ class con 
    }
}

let exten = new Extend("AAAAA") ; 
exten.sayHi() ; 
// exten.#name = "BBBBBB" ;  //sai : không thể truy cập từ bên ngoài

console.log("--------");

// STATIC 

//Static  : tạo thuộc tính và phương thức tĩnh: Khi properties hay method được khai báo bằng static thì có thể
// gọi đến mà không cần phải sử dụng new để khởi tạo đối tượng

class User {
    static staticMethod(){
        console.log(this === User);
    }
}
//không cần khởi tạo 
User.staticMethod() ; 
// this ở trong static method chính là class
// Một method được khai báo bằng static ta không thể sử dụng được từ khóa this để gọi đến một phương thức không
// được khai báo là static
console.log("---------");
class thisStatic {
    static  name = "nguyen Van A" ; 
            age = 24 ; 
    sayHello(){
        console.log(`Hello ${this.name}`); //Không thể gọi đến thuộc properties và method được khai báo bằng static
       //Trả về undefined vì thuộc tính static không nằm trong danh sách thuộc tính của class. Mà nó được lưu
       // trữ ở trong constructor của class.
        // Để truy cập được thì sử dụng cách là gọi đến constructor : this.contructor.name ; 
        console.log("This.constructor.name : ",this.constructor.name);
        console.log(`Hello ${this.age}`);
    }

    static sayGoodbye(){
        console.log(`Goodbye ${this.name}`);
        console.log(`Goodbye ${this.age}`);
        // this.sayHello() ; khong thể vì sayHello không được khai báo bới static
    }

    changestatic(newName){
        this.constructor.name = newName ; 
    }
    
}
console.log(thisStatic.name);
thisStatic.sayGoodbye() ; 
let thisstatic = new thisStatic() ; 
thisstatic.sayHello() ; 
console.log(thisstatic);
console.log(thisstatic.constructor.name);
//Thuộc tính và phương thức stattic trong JS là duy nhất vì nó được lưu trữ trong constructor mà dữ liệu trong 
//contructor là duy nhất nghĩa là những thay đổi bên trong constructor là ảnh hưởng đến đối tượng chứ không 
// phải instance

thisstatic.changestatic("ABC") ; 
thisstatic.sayHello() ; 
console.log("--------");
//Static trong Kế thừa 
class Article {
    static firstname = "Nguyen" ;
} 
class Post extends Article {
    show(){

    }
}

console.log(Post.firstname);
console.log(Article.firstname);
//Thay đôi giá trị thuộc tính từ lớp con
Post.firstname = "Nguyen Van" ; 
console.log(" ");
console.log(Post.firstname);
console.log(Article.firstname);
//Khi thay đổi giá trị của thuôc tính static từ lớp CON thì chỉ lớp con bị thay đổi còn lớp chá sẽ không bị thay đổi
// Khi thay đổi giá trị thuộc tính static từ lớp cha thì cả lớp cha và con đều bị thay đổi.
let post = new Post() ;  
console.log(post);
console.log("---------");
//Thay đôi ở lớp cha
Article.firstname = "Hung" ;
console.log(Article.firstname);
console.log(Post.firstname);

// ex  
class TestA {
    name ; 
    static count = 0 ; 
    constructor(name) {
        this.name = name ; 
        this.count ; //will refe to non-static field cound  
        TestA.count+=1 ; //to access static field 
    }
}

let testa = new TestA("ha noi") ; 
console.log(testa.count);
console.log(testa);
let testb = new TestA('phutho') ; 
console.log(testb);
// end static 


//Getter-Setter ; Getter : la những hàm có nhiệm vụ lấy giá trị của thuộc tính. Setter : là những hàm thiết lập
// giá trị cho thuộc tính 


//