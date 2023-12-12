//Bind call aplly : giúp thay đổi ngữ cảnh thực thi (phạm vi chứa hàm) để sử dụng một hàm với công dụng đa năng hơn
// như thực thi cho một đối tượng ,phạm vi khác giúp ta tận dụng tối đa mã nguồn được tạo ra, hay tạo shortcut cho hàm 
// linh hoạt hơn tham số đầu vào.
// Call ,apply ,chung ta sử dụng để thực thi hàm đó luôn khi gọi, còn bind thì ta có thể thực thi với hàm đó nhiều lần
// sau khi buộc (bind ) với một ngữ cảnh nhất định.


//Bind : (Ràng buộc) Là một phương thức nằm trong function.prototype do đó chỉ có fuction mới có khả năng để gọi nó.
// Bind giúp ràng buộc this của một hàm trong các phương thức thành mội đối tượng khác
// Bind nó không sửa this mà nó trả về một hàm mới với this mới.
// Có thể nhận các đối số như những hàm ban đầu

class Teacher { 
    constructor(firstName , lastname) {
        this.firstName = firstName ; 
        this.lastName = lastname ; 
    }

    getFullName(data1,data2) {
        console.log(data1 , data2);
        return `${this.firstName} ${this.lastName}`  ;
    }
}

const student = {
    firstName: "Mimh",
    lastName: "Thu" 
}

let teacher = new Teacher('Minh' , 'Thao') ; 
console.log(teacher.getFullName());
const getTeacherName = teacher.getFullName.bind(student , 'test1' , 'test2'); 
//student là đối số đầu tiên để ràng buộc với thí
console.log(this.firstName);
console.log(this.lastName);
console.log(getTeacherName());

//