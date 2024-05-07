const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const number = characters.slice(52, 62);
const numberandletter = characters.slice(0, 62);
let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2")

function gen(length, arry) {
    passWord1.textContent = ""
    let input = document.getElementById("myInput").value
    if (input <= 0 ){
        input = 15
    }
    for (let i = 0; i < input; i++){
        let word = Math.floor(Math.random() * length)
        let pass = arry[word]
        passWord1.textContent += pass
    }
    passWord2.textContent = ""
    for (let i = 0; i < input; i++){
        let word = Math.floor(Math.random() *length)
        let pass = arry[word]
        passWord2.textContent += pass
    }
}

function generate() {
    let check = document.getElementById("mycheck").checked
    let his = document.getElementById("hischeck").checked
    
    if (check === true && his === true){
        gen(62, numberandletter)
    }
    else if (check === true) {
        gen(52, characters)
    }
    else if ( his === true){
        gen(10, number)
    }
    else {
        gen(characters.length, characters)
    }
}


function toogle() {
   let h1El = document.querySelector("body")
   if (h1El.classList.contains("darkmode")) {
    h1El.classList.remove("darkmode")
   }
   else {
    h1El.classList.add("darkmode")
   }
}