//JS là đơn luồng : mỗi lần chỉ có thể chạy một tác vụ

//Sync : Xử lý đồng bộ Chương trình sẽ chạy theo từng bước và chỉ khi nào bước 1 thực hiện xong thì mới 
// nhảy sang bước 2.Khi nào chương trình chạy xong thì mới nhảy sang chương trình khác.
//Đây là nguyên tắc cơ bản trong lập trình khi biên dịch sẽ theo thứ tự từ trên xuống dưới,từ trái qua 
//phải 
// ==> Sinh ra trạng thái chờ : Ưu điểm: Có nguyên tắc,sẽ không mắc phải các lỗi tiến trình,dễ fix đk lỗi
// Nhược điểm : Sinh ra trạng thái chờ => tràn bộ nhớ vì phải lưu trữ các trạng thái chờ

//Async : Xử lý bất đồng bộ : chương trình có thể nhảy đi bỏ qua một bước nào đó 
// Ưu điểm : Có thể xử lý nhiều task một lúc mà không cần phải chờ đợi 
//Nhược điểm : Không thể sử dụng ở trong một trước trình đòi hỏi tính quy trình vd: trong quá trình validate
// dữ liệu

//JS runtime : là một hộp chứa tất cả các thứ để có thể chạy được code JS
//JS runtime : * JS Engine  + Heap(Memory heap) : nó là một bộ nhớ được dùng để lưu trữ đối tượng và dữ liêu
//                            trong quá trình thực thi chương trình
//                          + CallStack : Call là gọi các fuction ,stack là luồng theo dõi các tiến trinh
//                             để gọi fuction . Mói chung call stack dùng để xử lý các tác vụ đồng bộ 
//           : * Web API :  + Bao gồm các API (bao gồm các function) ví dụ : settimeout(), fetch(),
//                            document.getElementByID(),console.log().....Nói dung là nó dùng để xử lý các 
//                             tác vụ bất đồng bộ chạy ngầm,nó sẽ trả về một callback(function....);
//           : * Callback queue : Hàng đợi Thằng nào đến trước thì thực hiện trước 
//Event Loop : Hiểu đơn giản là thằng đứng giữa callStack và Callback queue :kiểm tra xem callstack 
//có trông hay không nếu trông thì nó sẽ truyển các task từ callback queuue sang để thực hiện.

// ví dụ : 
setTimeout(function(){ 
    console.log("Số 1"); 
},3000);

console.log("Số 2");
setTimeout(function(){
    console.log("Số 3");
},0);

console.log("Số 4");

//Settimeout 3s Ban đầu nó sẽ bỏ vào callStack nhưng do thằng setimeout là bất đồng bộ nên nó sẽ 
// bị ném sang WebAPI.Ở bên callStack coi như song với settimeout 3s. Lúc này callStack Trống
//clg Số 2 sẽ được đưa sang callSatck thực hiện log ra số 2.Sau đó bỏ ra khỏi CallStack.Lúc này callStack trống.
// Settimeout 0s cũng sẽ bị bỏ sang callStack và nó là bất đồng bộ nên bị đẩy sang WebAPI.CallStack Trống
//clg số 4 đươc đưa vào callStack và thực hiện in ra số 4 .Call Stack lúc này Trống.
//Ở bên WebAPI thằng setimeout 0s sẽ thực hiện ngày và trả về callback(tức là cái function trong settimeout).
// Và cái fuction này sẽ được đưa xuống CallBack queue. Tương tự như thằng settimeout 3s đợi song 3 giấy 
// thì thực hiện trả về callback và đưa xuống Callback queue.
// Event loop nó sẽ kiểm tra xem bên trong callStack có rông hay không.Chỉ khi callStack rông thì nó mới đưa 
// trước tiên là thằng settieout 0s qua callStack trước. thực hiện clg.log ra Số 3 .thực hiện song thì
// Callstack trống và Eventloop lại đẩy thằng settimeout 3s sang thực hiện clg.log ra số 1

//Ouput : số 2 , số 4 ,số 3 , số 1
