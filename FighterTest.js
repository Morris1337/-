// const charKratos = document.querySelectorAll("option.Kratos")


const fighterConteiner = document.querySelector(".fighterUl") //Кнопки умений персонажа
const fighterImage = document.querySelector(".fighterImage")// место где создаеться картинка бойца
const createFighterBtn = document.querySelector("#createFighter")//Кнопка открыть форму для создания персонажа
const formCreateFighter = document.querySelector(".openForm") //Форма для создания персонажа
const formCreateFighterClose = document.querySelector("#createFighterClose") //Кнопка закрыть форму для создания персонажа
const healthValue = document.querySelector("#fighterHealthBar") //Панель здоровья персонажа
const submit = document.querySelector("#submit") //Кнопка для отправления формы на сервер
const btnTest = document.querySelector(".testCreate") //Контейнер в котором лежат кнопки для закрытия формы и тестова кнопка
const testButton = document.querySelector("#testButton") //Тестовая кнопка для вызова кнопок умений

const gameChat = document.querySelector("#chat")
const chatInput = document.querySelector("#chatInput")
const chatButton = document.querySelector("#chatButton")

const saveData = localStorage.getItem("fighting")
if(saveData){
    const fightingData = JSON.parse(saveData);
    createFighterImg(fightingData)
    createFighter(fightingData)
    
}

const limbs = [
    { limbName: "Head", limbHealth: 10, gettingDamage: 5}, //добавил голову
    { limbName: "Body", limbHealth: 50, gettingDamage: 10},  //добавил туловеще
    { limbName: "Right Arm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "Left Arm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "Right Leg", limbHealth: 10, gettingDamage: 3 },
    { limbName: "Left Leg", limbHealth: 10, gettingDamage: 3 },
];

// const weapon = [
//     {weaponName: "knife", weaponDamage: 5}
//     {weaponName: "sword", weaponDamage: 10}
//     {weaponName: "spear", weaponDamage: 15}
//     {weaponName: "axe", weaponDamage: 20}
// ]

const fighterHealth = 100

createFighterBtn.addEventListener("click", ()=>{
    formCreateFighter.classList.remove("close")
    formCreateFighterClose.classList.remove("close")
    btnTest.classList.remove("close")
    formCreateFighter.classList.add("open")
    formCreateFighterClose.classList.add("open")
    btnTest.classList.add("open")
})//Открываем форму

formCreateFighterClose.addEventListener("click", ()=>{
    formCreateFighter.classList.remove("open")
    formCreateFighterClose.classList.remove("open")
    btnTest.classList.remove("open")
    formCreateFighter.classList.add("close")
    formCreateFighterClose.classList.add("close")
    btnTest.classList.add("close")
})//закрываем форму

// testButton.addEventListener("click", ()=>{
//     Fighter.createFighter()
// }) 

//По нажатию должны создать кнопки умений 



    // createFighter.addEventListener("click", ()=>{
    //     const input = document.createElement("input")
    //     input.name = "Fighter Name";
    //     // input.addEventListener("input", (event)=>{
    //     //     console.log(event)
    //     // })
    //     createFighter.appendChild(input)
    // })


class Fighter {
    constructor(fighterName, fighterHealth, limbs) {
        this.name = fighterName
        this.health = fighterHealth;
        this.isDefeat = false;
        this.limbs = limbs.map(limb => new Limb(limb) )
    }
    
    getDamage(damage) {
        if (!this.isDefeat) {
            this.health -= damage; //убрал рандомный урон для всего корпуса
            if (this.health > 0) {
                console.log(`У бойца ${this.name} осталось ${this.health} единиц здоровья`);
            } else {
                this.isDefeat = true;
                console.log(`Боец ${this.name} повержен`);
            }
        }
    }



    createFighter(){
        const div = document.createElement("div")
        div.classList.add("limbsButtons")
        const fighterName = document.createElement("h2")
        fighterName.textContent = this.name
        div.appendChild(fighterName)

        this.limbs.forEach(limb =>{
            const button = document.createElement("button")
            button.textContent = limb.name
            button.addEventListener("click", ()=>{
                console.log(fighterName.textContent)
                limb.getLimbDamage()
                localStorage.setItem("fightingData", JSON.stringify(fightingData))
                switch (true) {
                    case (getPercent(limb.fullHealth, limb.health) >= 75):
                      button.style.backgroundColor = "green";
                      break;
                    case (getPercent(limb.fullHealth, limb.health) >= 50):
                      button.style.backgroundColor = "-webkit-linear-gradient(top, green, yellow)";
                      break;
                    case (getPercent(limb.fullHealth, limb.health) >= 25):
                      button.style.backgroundColor = "yellow";
                      break;
                    case (getPercent(limb.fullHealth, limb.health) >= 10):
                      button.style.backgroundColor = "red";
                      break;
                    case (getPercent(limb.fullHealth, limb.health) <= 0):
                      button.setAttribute("disabled", "");
                      break;
                }
                // пытался спомощью switch изменять кнопки
                healthValue.value = this.health //вывод урона на панель progress
            })
            div.appendChild(button)
        })
        fighterConteiner.appendChild(div)

    }   
    createFighterImg(){
      const selectElement = document.querySelector("#char")
      const div = document.createElement("div")
      div.classList.add("fighterImage")
        const selectedCharacter = selectElement.value
        if(selectedCharacter === "kratos"){
          const img = document.createElement("img")
          img.classList.add("fighter1")
          img.src = "fighter/21425_kratos-removebg-preview.png";
          div.appendChild(img)
      }else if(selectedCharacter === "Sasuke"){
          const img = document.createElement("img")
          img.classList.add("fighter1")
          img.src = "fighter/fighter2-1-removebg-preview.png"
          div.appendChild(img)
      }else if(selectedCharacter === "GORO"){
          const img = document.createElement("img")
          img.classList.add("fighter1")
          img.src = "fighter/4083864-9971075880-Princ-removebg-preview.png"
          div.appendChild(img)
      }else if(selectedCharacter === "Saitama"){
          const img = document.createElement("img")
          img.classList.add("fighter1")
          img.src = "fighter/png-clipart-clark-kent-goku-one-punch-man-saitama-anime-one-punch-s-comics-superhero-removebg-preview.png"
          div.appendChild(img);
      }
      
      
      fighterImage.appendChild(div)
    }
}




testButton.addEventListener("click", () => {
  let fighter = new Fighter(document.querySelector("#fighterName").value, fighterHealth, limbs);
  fighter.createFighter();
  fighter.createFighterImg()
});


class Limb {
    constructor({ limbName, limbHealth, gettingDamage }) {
        this.name = limbName;
        this.health = limbHealth;
        this.gettingDamage = gettingDamage
        this.fullHealth = limbHealth;
        this.isBroken = false;
    }
    
    getLimbDamage() {
        if (!this.isBroken) {
            this.gettingDamage = Math.floor(Math.random() * 3) + 1;
            this.health -= this.gettingDamage;
            if (this.health > 0) {
                const chatText = document.createElement("p")
                chatText.classList.add("chatText")
                chatText.textContent = `У конечности ${this.name} осталось ${this.health} единиц здоровья`;
                gameChat.appendChild(chatText)
            } else {
                this.isBroken = true;
            }
            fighter.getDamage(this.gettingDamage) //Обьеденил общий урон и урон который проходит по конечностям
        }
    }
}


// chatButton.addEventListener("click", sendMessage)
// chatInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         sendMessage();
//     }
//     });





const smith = new Fighter("Smith", fighterHealth, limbs);
const fighter1 = document.querySelector("#Fighter-1", ".button")
const leftLeg1 = document.querySelector("#Left-leg-1", ".button")
const rightLeg1 = document.querySelector("#Right-leg-1", ".button")
const leftArm1 = document.querySelector("#Left-arm-1", ".button")
const rightArm1 = document.querySelector("#Right-arm-1", ".button")

function getPercent(fullNumber, chapterNumber) {
    return fullNumber * (chapterNumber / 100) * 100
}