// const yosh = +prompt("Yoshingiz: ")

// if (yosh>=25) {
//     console.log("Chipta narxi 18ming");
// }else if (yosh >= 18 && yosh <= 24){
//     console.log("Chipta narxi 13ming");
// }else{
//     console.log("Chipta narxi 7ming");
// }
// let a = 1;
// let b = 0;
// let c = 1;
// let d = 1;

// if (a > b && a > c) {
//     console.log("a soni katta");
// } else if (b > a && b > c) {
//     console.log("b katta");
// } else if (c > a && c > b) {
//     console.log("c soni katta");
// } else if (a == b && a == c) {
//     console.log("hamma sonlar teng");
// } else if (a == b) {
//     console.log("a va b sonlari teng");
// } else if (b == c) {
//     console.log("b va c sonlari teng");
// } else if (c == a) {
//     console.log("c va a sonlari teng");
// }

// if (a>b){
//     console.log("a soni katta");
// }else{
//     console.log("b sonni katta");
// }


// let kun = +prompt("Fasl kiriting ")

// switch (kun) {
//     case 1:
//         console.log("Bahor");
//         break;
//     case 2:
//         console.log("Yoz");
//         break 
//     case 3:
//         console.log("Kuz");
//         break 

//     case 4:
//         console.log("Qish");
//         break 

//     default:
//         console.log("Bunaqa fasl yo'q");
//         break 
// }

// if (kun == 1){
//     console.log("Dushanba");
// }else if(kun == 2){
//     console.log("seshanba");
// }else if(kun == 3){
//     console.log("chorshanba");
// }else if(kun ==4){
//     console.log("Payshanba");
// }else{
//     console.log("bunday kun yo'q");
// }



let birthdate = prompt("tu'gulgan vaqtingizni kiriting (YYYY-MM-DD)")
let birthDataObj = new Date(birthdate);
let currentDate = new Date()


let birthTime = birthDataObj.getTime()
let currentTime = currentDate.getTime()
let timeDifference = currentDate - birthTime


let day = 1000 * 60 * 60 * 24
let hour = 1000 * 60 * 60

let daysLive = Math.floor(timeDifference / day)
let weekLive = Math.floor(daysLive/7)
let hourLive = Math.floor(timeDifference / hour)

let result = "Siz " + daysLive + " kun " + weekLive + " hafta " + hourLive + " soat yashagansiz"
alert(result)
