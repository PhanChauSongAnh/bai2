// -------------bai1-------------------//
// let students = [{
//     name: "NVA",
//     age: 16,
//     course:[ "mindx 01","mindx 02","mindx 03",]
// },
// {
//     name: "NVB",
//     age: 18,
//     course:[ "mindx 01","mindx 02","mindx 03",]
// },
// {
//     name: "NVC",
//     age: 17,
//     course:[ "mindx 01","mindx 02","mindx 03",]
// },
// {
//     name: "NVD",
//     age: 15,
//     course:[ "mindx 01","mindx 02","mindx 03",]
// }]
//user input
// const input = prompt("age?");
// //check
// // --------------array map------------------
// rs = students.map((item) => {
//     if(item.age == input){
//         return item.name;
//     }
// });

// let count = 0 ;
// rs.forEach((i) => {
//     if(i == undefined){
//         count++;
//     }
// });
// if(count <4){
//     console.log(rs);
// }else if(count == 4){
//     console.log("nah");
// }
//--------------------array filter-------------
// let rs1 = students.filter((item)=> item.age == input).map(item => item.name);
// if(rs1.length == 0){
//     console.log("nah")
// }else{
//     console.log(rs1)
// }
// let input1 = prompt("course")
// let rsCourse = students.filter((item) => item.course.filter((c) => c == input1).length != 0 ).map(item =>item.name );
// if(rsCourse.length == 0){
//     console.log("nah")
// }else{
//     console.log(rsCourse)
// }
// -------------bai2-------------------//
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]
let array3 = [...arr1,...arr2];//contact spead operator
document.write(array3);
document.write(`<br>`);
document.write(array3.filter(num => num >3));
document.write(`<br>`);
document.write(array3.sort())
let m = new Date();

