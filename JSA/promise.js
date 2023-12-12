//Promise : TRong JS prommise là một đối tượng được xử dụng để xử lý các tác vụ bất đồng bộ và 
// sử lý kết quả của chúng
// kết quả của một hành động cụ thể có thể là thành công
// hay là thất bại "Nếu thành công thì làm gì,nếu thất bại thì làm gì".Và cả hai câu hỏi này ta gọi là
// một hành động gọi lại callback
// Một promise được khởi tạo thì nó có một trong 3 trạng thái sau:
//Fulfilled: Hành động xử lý song và thành công
//Rejected : Hành động xử lý song và thất bại
//Pending : Hành động đang chờ xử lý hoặc bị từ chối.
//(Fulfilled và Rejected) gọ là settled : tức là đã xử lý song
//tạo một promise 
// var promise = new Promise(callback) ; 
//callback là một function có hai  tham số truyền vào 

// var promise = new Promise(function(resolve , reject){

// });
//resolve : là một hàm callback xử lý cho hành động thành công
//reject : là một hàm callback xử lý cho hành động thất bại

//Thenable trong Promise : là một phương thức ghi nhận kết quả của trạng thái (thành công hoặc thất bại)

var promise = new Promise((resolve , reject)=>{
    resolve([{
        id:1,
        name: "Hung"
    }]) ; 
    // reject('Error') ; 
    }
);
promise.then(
    (success)=>console.log(success) 
) ; 

//có thể dung catch để bắt lỗi
var promise_1 = new Promise((resolve,reject)=>{
    reject("Error") ; 
})
    .then(message=>console.log(message))
    .catch(message=>console.log(message)) ; 

//Promise.all([prm1,prm2,prm3]) trả về một promise mới và 
// promise mới này sẽ trả về resolve khi tất cả các promise trong mảng trả về resolve và 
// kết quả là một mảng chứa tất cả các kết quả của các proise
// promise mới sẽ trả về reject khi một promise trong mảng trả về reject kết quả sẽ là kết quả 
//của promise trả về reject đầu tiên
 
//Promise.any() // Trả về một promise mới và promise mới này sẽ trả về resolve khi một trong số các promise 
// trong mảng trả về resolve và kết quả sẽ là giá trị promise đầu tiên trả về resolve.
// Promise sẽ trả về reject khi tất cả các promise trong mảng đều trả về reject và kết quả là một mảng
// chứa tất cả các reject.

// const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Promise 1'));
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Promise 2'));
// const promise3 = new Promise((resolve, reject) => setTimeout(reject, 800, 'Promise 3'));

// Promise.any([promise1, promise2, promise3])
//   .then(value => {
//     console.log(value); // Giá trị của Promise đầu tiên giải quyết thành công
//   })
//   .catch(error => {
//     console.log(error); // Nếu tất cả các Promise đều bị từ chối, sẽ nhận được mảng các lý do từ chối
//   });

//Promise.race : Phụ thuộc vào thằng đầu tiên tron mảng 
// trả về resole khi promise đầu tiên trong mảng rả về resolve và reject khi thằng đầu tiên trong mảng 
// trả về reject. 
const promise1Race = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Promise 1'));
const promise2Race = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Promise 2'));
const promise3Race = new Promise((resolve, reject) => setTimeout(reject, 800, 'Promise 3'));

Promise.race([promise1Race, promise2Race, promise3Race])
  .then(value => {
    console.log("Resolve : ",value); // Giá trị của Promise đầu tiên giải quyết hoặc từ chối
  })
  .catch(error => {
    console.log("Reject : ",error); // Nếu Promise đầu tiên từ chối, sẽ nhận được lý do từ chối đó
  });

