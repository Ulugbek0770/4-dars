// var qoy = +prompt("qo`ylar sonini kriting")
// total = 0
// for (let i = 0; i < qoy; i++) {
//     total = total + 1
//     console.log( total + " qo`ylar");
// }

// let son = +prompt("Son kriting")
// let natija = ""
// for (let i = 0; i < son; i++) {
//     for (let j = 0; j < son; j++) {
//         if( i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1 ){
//         natija += "*"
        
//         } else{
//             natija += "&"
//     }
    
// }
//     console.log(natija) ;
//     natija = ""

    
    
// }
// let chess = ""

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//         if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
//             chess = chess + "🎱"
//         }else{
//             chess += "🏐"
//         }
//     }
//     console.log(chess) ;
//     chess = ""
// }




// function random(min,  max) {
//     num1= Math.floor(Math.random() * (max - min) + min)
//     num2= Math.floor(Math.random() * (max - min) + min)
//     amal=Math.random() + (a)
//     return  num1 + a + num2
    
// }
// alert(random(1, 30))
// console.log(random(1, 30));
    


let son = +prompt("Son kriting")
while(isNaN(son)){
    +prompt("siz son kritishingiz kerak")
}
let starts = " "
for (let i = 0; i < son; i++) {
    for (let j = 0; j < son; j++) {
        if(i == j|| i == 0 || j == 0 || i == (son-1)|| j == (son - 1)){
            starts +=  "*" 
        }
        else{
            starts +=  " "
        }


        
    }
    console.log(start);
    starts= " "
    
}