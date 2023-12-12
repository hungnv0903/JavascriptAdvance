class Academy {
    #privateProperty
    publicProperty

    constructor(privateValue , publicValue) {
        this.#privateProperty = privateValue ; 
        this.publicProperty   = publicValue  ;
    }

    getPrivateProperty(){
        return this.#privateProperty ; 

    }

    setPrivateProperty(value){
        this.#privateProperty = value ;  
    }
}

class Student extends Academy {
    study(){
       return this.getPrivateProperty() ; 
    }
}

let objAcademy = new Academy("fsoft" , 'fpt Corp') ; 
console.log(objAcademy);
console.log(objAcademy.publicProperty);
//Không thể truy cập thuộc tính private từ bên ngoài vì nó là thuộc tính private
// Thay vao đó chung ta phải sử dụng các phương thức công khai để truy cập
console.log(objAcademy.setPrivateProperty("FPT Coporation")); 
console.log(objAcademy.getPrivateProperty());

let s = new Student('ffff' , 'vdnfvjkd') ; 
// console.log(s.getPrivateProperty());

console.log("==========");
// s.study() ; 
console.log(s.study());