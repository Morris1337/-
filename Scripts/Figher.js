import Limb from "./Limb.js";
import{FIGHTER_HEALTH}from "./constants.js"
import { randomDmg, getPercent } from "./functions.js";

const fighterConteiner = document.querySelector(".fighterUl") //Кнопки умений персонажа
const gameChat = document.querySelector("#chat")


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


    }   
    createFighterImg(){
      const selectElement = document.querySelector("#char") // находим элемент со значениями(value) персонажей
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

export default Fighter