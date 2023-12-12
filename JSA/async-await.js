//Async/await là một tính năng của javascript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thu vị và dẽ 
//hiểu hơn .Nó được xây dựng dựa trên promise và tương thích với các promise dựa trên API 

//Async : khai báo một hàm bất đồng bộ ví dụ :  async  function someName(){}
// - Nó tự động biến đổi một hàm thông thường thành một promise 
// - khi goi tới hàm async nó sẽ xử lý mọi thứ và trả về kết quả trong hàm của nó
// -Async cho phép sử dụng await

//Await : -Tạm dừng việc thực hiện các hàm async ví dụ : var result = await someAsyncCall()
// Khi được đặt trước một promise ,nó sẽ đợi cho đến khi promise kết thúc và trả về kết quả
// Await chỉ làm việc với promise,nó không hoạt động với callback
// Await chỉ có thể sử dụng bên trong các function async

//Ex1
const getTodo =  async (id)=>{
    try {     
        let response =  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if(response && response.status!=200){
            throw new Error("Status code : " + response.status)
        }
        let data = await response.json() ; 
        console.log(data);
        return data
    } catch (error) {
        console.log("Check error : " , error.message);
        return {} ; 
    }
}

getTodo(1)
    .then(data=>{
    console.log(data);
    })
    .catch(error=>console.log("Check error : " , error.messsage))

// fetch : là một API đơn giản cho việc gửi và nhận request bằng js.Với fetch thì việc thực hiện các yêu cầu 
// web và sử lý phản hồi dễ dàng hơn XMLHTTPResquest. fetch trả về một promise có trạng thái resolve với giá
// trị là response cho request đó.
//Response trả về của request chứa kết quả của các thuộc tính 
// Response có phương thức truy cập vào nội dung trả về . Response.json() trả về một promise resolve dạng Json
// 

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>{ //response la mot promisr
        return response.json() ; 
    })
    .then(data=>{ //data đã được convert sang json 
        console.log("Fetch Data : " , data);
    })



//Ex2
function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms)) ; 
}
async function sequentialDelay(){
    const delays = [3000,1000,2000] ; 
    for(const delayTime of delays){
        console.log(`Start delay for ${delayTime} ms`);
        await delay(delayTime) ; 
        console.log(`End delay for ${delayTime} ms`);
    }
}

sequentialDelay() ; 

//Ex3
var USERS_URL =  'https://jsonplaceholder.typicode.com/todos/'; 
const fetchData = async ()=>{
    try {
        const [data1 , data2 , data3] = await Promise.all([
            fetch(USERS_URL+1),
            fetch(USERS_URL+2),
            fetch(USERS_URL+3),   
        ])

        const result1 = await data1.json() ; 
        const result2 = await data2.json() ; 
        const result3 = await data3.json() ;
        console.log(result1 , result2 , result3); 
    } catch (error) {
        console.log("Error" , error.message);
    }
}

fetchData() ; 