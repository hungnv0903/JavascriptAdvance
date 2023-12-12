const prinLable = (lableObject) => {
    console.log(`Lable : ${lableObject.lable} - Size : ${lableObject.size}`);
};
let object = { size: 100, lable: "Lable size 100" }; //tên thuộc tính phải trùng với tên được triển khai trong 
// interface
prinLable(object);
class Cricle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let myCrile = new Cricle("red", 100);
console.log(myCrile.area());
class ColorCricle {
    constructor(color, radius) {
        this.color = color;
        this.radius - radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let person1 = { name: "Hung" }; //khong can age cũng đươc 
// 
