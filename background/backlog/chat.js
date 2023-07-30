// const gameChat = document.querySelector("#chat")
// const chatInput = document.querySelector("#chatInput")
// const chatButton = document.querySelector("#chatButton")

// function pageLoad(){ //функция обработки данных для чата
// let inputMessage = chatInput.value
// let sendButton = chatButton
// let outputChat = gameChat

// sendButton.addEventListener("click", sendRequest) 

//     function sendRequest(){ //проверка на правильный запрос(валидация)
//         if(validateInput()){
//             let xhr = new XMLHttpRequest();
//             xhr.open("GET", `indexTest.html`)
//             xhr.onload = function(){
//                 if(xhr.status === 200){
//                     let data = JSON.parse(xhr.response);
//                     outputChat.textContent = data
//                     outputChat.textContent += data.message + "\n"
//                 }
//             }
//             xhr.onerror = function(){
//                 outputChat.textContent = "Произошла ошибка"
//             }
//             xhr.send();
//         }else{
//             outputChat.textContent = "Введите текс"
//         }
//     }   
    
// function validateInput() {
//   let validated = true;
//   if (!inputMessage) { // проверка, что inputMessage не пустой
//     validated = false; // отметить, что ввод не прошел валидацию
//   }
// }
// }

// document.addEventListener("DOMContentLoaded", pageLoad)