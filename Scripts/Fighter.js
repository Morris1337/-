// const charKratos = document.querySelectorAll("option.Kratos")


const fighterConteiner = document.querySelector(".fighterUl") //Кнопки умений персонажа
const fighterImage = document.querySelector(".fighterImage")// место где создаеться картинка бойца
const createFighterBtn = document.querySelector("#createFighter")//Кнопка открыть форму для создания персонажа
const formCreateFighter = document.querySelector(".openForm") //Форма для создания персонажа
const formCreateFighterClose = document.querySelector("#createFighterClose") //Кнопка закрыть форму для создания персонажа
const btnTest = document.querySelector(".testCreate") //Контейнер в котором лежат кнопки для закрытия формы и тестова кнопка
const testButton = document.querySelector("#testButton") //Тестовая кнопка для вызова кнопок умений

const gameChat = document.querySelector("#chat")
const chatInput = document.querySelector("#chatInput")
const chatButton = document.querySelector("#chatButton")

const limbs = [
    { limbName: "Head", limbHealth: 10, gettingDamage: 5}, //добавил голову
    { limbName: "Body", limbHealth: 50, gettingDamage: 10},  //добавил туловеще
    { limbName: "Right Arm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "Left Arm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "Right Leg", limbHealth: 10, gettingDamage: 3 },
    { limbName: "Left Leg", limbHealth: 10, gettingDamage: 3 },
];

const skills = [
    {skillName: "Jab", energy: 3, hitDamage: 5},
    {skillName: "Cross", energy: 4, hitDamage: 6},
    {skillName: "Upper cord", energy: 5, hitDamage: 8},
    {skillName: "Low kick", energy: 8, hitDamage: 9},
    {skillName: "Midle kick", energy: 8, hitDamage: 8},
    {skillName: "Hight kick", energy: 9, hitDamage: 11}
]

//TODO добавить оружие для бойца
// const weapon = [
//     {weaponName: "knife", weaponDamage: 5}
//     {weaponName: "sword", weaponDamage: 10}
//     {weaponName: "spear", weaponDamage: 15}
//     {weaponName: "axe", weaponDamage: 20}
// ]



const FIGHTER_HEALTH = 100;

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

class Fighter {
    constructor(fighterName, FIGHTER_HEALTH, limbs) {
        this.name = fighterName
        this.health = FIGHTER_HEALTH;
        this.isDefeat = false;
        this.limbs = limbs.map(limb => new Limb(limb) )
    }
    
    getDamage() {
        if (!this.isDefeat) {
            const healthBar = document.getElementById(`${this.name}-healthBar`)//находим id который назначаем персонажам в переменной createHealthValue() через setAttribute
            const damage = randomDmg()
            this.health -= damage; //убрал рандомный урон для всего корпуса
            healthBar.value -= damage;

            const chatText = document.createElement("p")
            chatText.classList.add("chatText")
            if (this.health > 0) {
                chatText.textContent = `У бойца ${this.name} осталось ${this.health} единиц здоровья`;
            } else {
                this.isDefeat = true;
                chatText.textContent = `Боец ${this.name} повержен`;
            }
            gameChat.appendChild(chatText)
            gameChat.insertBefore(chatText, gameChat.firstChild);
        }
    }

    createFighterButtons(){
        const buttonsContainer = document.createElement("div")
        buttonsContainer.classList.add("limbsButtons")
        const fighterName = document.createElement("h2")
        fighterName.textContent = this.name
        buttonsContainer.appendChild(fighterName)

        this.limbs.forEach(limb =>{
            const button = document.createElement("button")
            button.textContent = limb.name
            button.addEventListener("click", ()=>{
                console.log(fighterName.textContent)
                limb.getLimbDamage()
                this.getDamage(randomDmg())
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
            })
            buttonsContainer.appendChild(button)
        })
        return buttonsContainer
        // fighterConteiner.appendChild(div)  


    }   
    createFighterImg(){
      const selectElement = document.querySelector("#char") // находим элемент со значениями(value) персонажей
    //   const div = document.createElement("div") //создаем новый элемент
    //   div.classList.add("fighterImage") //добовляем класс элементу и в css расписываем как далеко и как персонажи будут стоять
        const selectedCharacter = selectElement.value // инициализируем значение. Приводим его к готовности использования
        const fighterImg = document.createElement("img") //тогда создаеться новый элемент img
        fighterImg.classList.add("fighter__img") // Назначаем класс для img
        switch(true){
            case selectedCharacter === "kratos": //если мы в списке выбираем значение kratos
                fighterImg.src = "fighter/21425_kratos-removebg-preview.png" //и вызываем фотографию
                break;
            case selectedCharacter === "Sasuke":
                fighterImg.src = "fighter/fighter2-1-removebg-preview.png"
                break;
            case selectedCharacter === "GORO":
                fighterImg.src = "fighter/4083864-9971075880-Princ-removebg-preview.png"
                break;
            case selectedCharacter === "Saitama":
                fighterImg.src = "fighter/png-clipart-clark-kent-goku-one-punch-man-saitama-anime-one-punch-s-comics-superhero-removebg-preview.png"
                break;
        }
        return fighterImg
    //   div.appendChild(fighterImg); //img дочерний элемент div 
    //   fighterImage.appendChild(div)//так же указываем что ранее созданый элемент дочерний элемента который мы нашли через document в нашем html, 
    }

    createHealthValue(){
        // const healthBar = document.querySelector(".healthValue")
        const healthValue = document.createElement("progress")
        healthValue.max = FIGHTER_HEALTH;
        healthValue.value = this.health //вывод урона на панель progress
        healthValue.classList.add("fighterHealthBar")
        healthValue.setAttribute("id", this.name+ "-healthBar") //что бы отражалось здоровье мы даем уникальное значение id которое будет создаваться указывая имя игрока + healthBar
        return healthValue
        // healthBar.appendChild(healthValue)
    }

    createFighter(){
        const fighterDiv = document.createElement("div")
        fighterDiv.classList.add("fighterUl__fighter")
        fighterDiv.appendChild(this.createHealthValue())
        fighterDiv.appendChild(this.createFighterImg())
        fighterDiv.appendChild(this.createFighterButtons())
        fighterConteiner.appendChild(fighterDiv)
    }
}

let callCount = 0;
const maxCalls = 2;


testButton.addEventListener("click", () => {
    let fighter = new Fighter(document.querySelector("#fighterName").value, FIGHTER_HEALTH, limbs);
    if(callCount < maxCalls){
        callCount++;
        fighter.createFighter()
    };
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
            this.gettingDamage = randomDmg();
            this.health -= this.gettingDamage;
            if (this.health > 0) {
                // const chatText = document.createElement("p")
                // chatText.classList.add("chatText")
                // chatText.textContent = `У конечности ${this.name} осталось ${this.health} единиц здоровья`;
                // gameChat.appendChild(chatText)
                //отражает урон конечности, на данный момент нету необходимости!
            } else {
                this.isBroken = true;
            }
        }
    }
}

function getPercent(fullNumber, chapterNumber) {
    return fullNumber * (chapterNumber / 100) * 100
}

function randomDmg(){
    return Math.floor(Math.random() * 3) + 1;
}

formCreateFighter.ondragStart = () => false;


const getCoords = (elem) => {
    const box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};

const fighterName = document.getElementById("fighterName")

fighterName.addEventListener("dragover", (e) => {
    e.preventDefault();
})

fighterName.addEventListener("drop", (e) => {
    e.preventDefault();
})

formCreateFighter.addEventListener("mousedown", (e) => {
    const coords = getCoords(formCreateFighter);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    const moveAt = (e) => {
        formCreateFighter.style.left = e.pageX - shiftX + "px";
        formCreateFighter.style.top = e.pageY - shiftY + "px";
    };

    const theEnd = () => {
        document.removeEventListener("mousemove", moveAt);
        document.removeEventListener("mouseup", theEnd);
    };

    formCreateFighter.style.position = "absolute";

    moveAt(e);
    formCreateFighter.style.zIndex = 1000;

    document.addEventListener("mousemove", moveAt);
    document.addEventListener("mouseup", theEnd);
});


function notifyMe() {
    // Проверяем наличие Notification API в браузере
    if (!("Notification" in window)) {
      console.log("Нет поддержки Notification API");
  
    // Если Notification API и разрешение на отправку
    // есть, то отправим уведомление
    } else if (Notification.permission === "granted") {
       new Notification("Hello!");
  
    // Если Notification API есть, но нет разрешения и нет
    // запрета, то можно запросить разрешение
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission()
        .then(function (permission) {
           if (permission === "granted") {
             var notification = new Notification("Hi there!");
           }
        });
      }
    }