// Genneric : cho phép viết các function interface có thể tái sử dụng và tổng quát hóa 
function getRandomElement<Type>(item:Type[]):Type{
    let randomIndex = Math.floor(Math.random()* item.length) ;
    return item[randomIndex] ;  
}

let nb = [1,2,3,4,5] ; 
let str = ['nguyen', 'van', 'hung'] ; 

console.log(getRandomElement<number>(nb));
console.log(getRandomElement<string>(str));