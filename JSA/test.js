var a = [1,2,1,2,5] ; 
var b = [2,3,1,6,7,1] ; 
var c = [10 ,123,544,6778] ; 

var inputArr = [...a , ...b , ...c] ; 
console.log(inputArr);
var mark = new Array(10000) ;
var result = [] ;  
for(let i = 0 ; i<inputArr.length ; i++){
    if(mark[inputArr[i]]===undefined){
        mark[inputArr[i]] = 1 ; 
        result.push(inputArr[i]) ; 
    }
}

console.log(result);