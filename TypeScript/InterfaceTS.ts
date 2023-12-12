//interface: không chứa code thực thi mà chỉ định nghĩa cấu trúc các đối tượng mà các class có thể triển 
// khai
//Nếu object tuân thủ đúng khuôn mẫu của interface thì đối tượng đẫ implement interface đấy sẽ được xử lý 
// đúng
//Nếu interface không đúng thì TS báo lỗi ngay lập tức 
//Ex1
interface LableValue {
    lable:string ; 
    size:number ; 
}

const prinLable = (lableObject:LableValue):void=>{
    console.log(`Lable : ${lableObject.lable} - Size : ${lableObject.size}`);
}

let object = {size:100,  lable:"Lable size 100"} //tên thuộc tính phải trùng với tên được triển khai trong 
// interface
prinLable(object) ; 

//Ex2

interface Shape {
    color:string ; 
    area():number ; 
}

class Cricle implements Shape {
    color: string;
    radius:number ; 

    constructor(color:string , radius:number){
        this.color = color ; 
        this.radius = radius ; 
    }

    area(): number {
        return Math.PI*this.radius**2 ; 
    }
}

let myCrile = new Cricle("red" , 100) ; 
console.log(myCrile.area());

//Ex3 
interface ShapePro {
    color :string ; 
}

interface CriclePro extends ShapePro {
    radius : number ; 
    area(): number ; 
} 

class ColorCricle implements CriclePro {
    color: string;
    radius: number;
    constructor(color:string , radius:number){
        this.color = color ; 
        this.radius - radius ; 
    }

    area(): number {
        return Math.PI * this.radius ** 2 ; 
    }
}

//Ex4 
interface Person {
    name:string ; 
    age?:number ; //Tuy chon : không bắt buộc . có cũng được không có cũng được
}

let person1:Person = {name:"Hung"} ; //khong can age cũng đươc 
// 
