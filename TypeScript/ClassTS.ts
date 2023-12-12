//TypeScript is Object Oriented JavaScript
class Menu {
    item:string[] ;
    pages:number ; 

    constructor(item_list:string[] , total_pages:number){
        this.item = item_list ; 
        this.pages = total_pages ; 
    }

    list():void {
        this.item.forEach(item => {
            console.log(item);
        });
    }
}

var satudayMenu = new Menu(['pho' , 'bun' , 'banhmi'] , 1) ; 
satudayMenu.list() ; 

class ChildMenu extends Menu {
    constructor(item_list:string[] , total_page:number){
        super(item_list,total_page) ; 
    }
    list():void {
        console.log("Child Menu");
        this.item.forEach(item => {
            console.log(item);
        });
    }
}

var menuForChild = new ChildMenu(['cake','Yogurt'],2) ; 
menuForChild.list() ; 

//Private trong TS khai bao bằng private trong JS la dấu #

// Abstract : không thể tạo ra một đối tượng từ abstractClass

abstract class Animal {
    abstract makesSound():void ; 
}

class Cat extends Animal {
    makesSound(): void {
        console.log("Meo meo");
    }
}

//let myPet = new Animal() ; //khong the khoi tao mot doi tuong tu abstract class
let myCat:Cat = new Cat() ;
myCat.makesSound() ;  

