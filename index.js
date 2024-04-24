const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2")



function generate() {
    passWord1.textContent = " "
    let input = document.getElementById("myInput").value
    if (input <= 0 ){
        input = 15
    }
for (let i = 0; i < input; i++){
    let word = Math.floor(Math.random() * 90)
    let pass = characters[word]
    passWord1.textContent += pass
}
passWord2.textContent = " "
for (let i = 0; i < input; i++){
    let word = Math.floor(Math.random() * 90)
    let pass = characters[word]
    passWord2.textContent += pass
}

}
