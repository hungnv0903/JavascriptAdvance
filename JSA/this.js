//This : là một key word trỏ về một đối tượng mà nó đang thuộc về 
//Đặc tính: - Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức(đối tượng trước dấu . )
//          - Đứng ngoài phương thức, thì this sẽ tham chiếu đến đối tượng global

//Lưu ý : - this trong hàm tạo là đại diện cho đối tượng sẽ được tạo (đối tượng tạo bằng từ khóa new)
//        - this trong ham là undefine khi ở trick mode 
//        - khi gọi một hàm độc lập không thông qua một đối tượng (tức là không dùng dấu chấm) thì this trỏ đến đối tượng global 
//        - Các phượng thức bind(),call(),apply() có thể tham chiếu this tới các đối tượng khác 

class Person {
    constructor(name , age){
        this.name = name ;
        this.age = age 
    }

    // showName(){
    //     console.log("this : " , this); //this trỏ đến thằng student ; 
    // }
}

Person.prototype.showName = function(){
console.log("This của một method : ",this);// this là student : khi gọi student.showName thì nó sẽ xem xét đối tượng student để tìm showName
// có phải là đối tượng trực tiếp của nó không và nó không tìm thấy nên nó sẽ phải vào trong prototype để nó tìm
// và showName nở trong này.Nên khi phương thức gọi thì 'this' sẽ chả về đối tượng student

    //Một trường hợp khác : là trong showName() lại chứa thêm một function
    function test(){
        // Mỗi một function trong javascript đều có một các context(ngữ cảnh chạy riêng).
        console.log("This của một function : ",this); //vì test() nó một hàm không phải là một phương thức nên 'this' ở trong một hàm
                            // sẽ trỏ tới đối tượng global tức là window
        //Sự khác biệt giữa hàm và phương thức(method) : Fuction(hàm) : là một khối mã có thể được gọi độc lập 
        // từ bất kỳ đâu trong chương trình.Function có để được định nghĩa mà không liên quan đến bất kỳ đối tượng 
        // hoặc class cụ thể nào. 'This' trong hàm không liên quan đến bất kỳ đối tượng hoặc lớp class nào mà function
        // có thể được gọi.
        // Method(phương thức) : Là một hàm được đặt trong một đối tượng hoặc là lớp.Phương thức thường thực hiện các
        // hành động liên quan đến đối tượng chứa nó
        // 'This' trong một phương thức thường trỏ đến đối tượng hoặc lớp mà phương thức đó là một phần                      
    }
    test() ;  

    // Trương hợp là arrow funcction không có context => nó không có this. Nên this ở trong arow function nó sẽ nhảy ra
    // ngoài để nó trỏ đến đối tượng là student
    const arrowFunction = ()=>{
        console.log("This của một arrow function : ",this);
    } 
    arrowFunction() ; 


}

let student = new Person('Hung' , 24) ; 
console.log(student);
student.showName() ; 
// student.fullName ; 

//