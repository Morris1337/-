// const charKratos = document.querySelectorAll("option.Kratos")


const fighterConteiner = document.querySelector(".fighterUl") //Кнопки умений персонажа
const createFighterBtn = document.querySelector("#createFighter")//Кнопка открыть форму для создания персонажа
const formCreateFighter = document.querySelector(".openForm") //Форма для создания персонажа
const formCreateFighterClose = document.querySelector("#createFighterClose") //Кнопка закрыть форму для создания персонажа
const healthValue = document.querySelector("#fighterHealthBar") //Панель здоровья персонажа
const submit = document.querySelector("#submit") //Кнопка для отправления формы на сервер
const btnTest = document.querySelector(".testCreate") //Контейнер в котором лежат кнопки для закрытия формы и тестова кнопка
const testButton = document.querySelector("#testButton") //Тестовая кнопка для вызова кнопок умений

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
    formCreateFighter.classList.add("open")
    formCreateFighterClose.classList.add("open")
    btnTest.classList.add("open")
})//Открываем форму

formCreateFighterClose.addEventListener("click", ()=>{
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
        this.name = document.querySelector("#fighterName").value;
        this.health = fighterHealth;
        this.isDefeat = false;
        this.limbs = limbs.map(limb => new Limb(limb) )
        // this.getDamage = this.getDamage.bind(this);
        
        
        // for (let i = 0; i < limbs.length; i++) {
        //     const limbName = limbs[i].limbName
        //     this[limbName] = new Limb(limbs[i]);
        //     const getLimbDamage = this[limbName].getLimbDamage.bind(this[limbName])
        //     this[limbName].getLimbDamage = () => {
        //         getLimbDamage()
        //         this.getDamage();
        //     }
        // }
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
        this.limbs.forEach(limb =>{
            div.classList.add("limbsButtons")
            const button = document.createElement("button")
            const progress = document.createElement("progress")

            progress
            button.textContent = limb.name
            button.addEventListener("click", ()=>{
                limb.getLimbDamage()
                // switch (true) {
                //     case (fighterHealth <= 100):
                //       button.style.background = "green";
                //       break;
                //     case (fighterHealth <= 80):
                //       button.style.background = "-webkit-linear-gradient(top, green, yellow)";
                //       break;
                //     case (fighterHealth <= 60):
                //       button.style.background = "yellow";
                //       break;
                //     case (fighterHealth <= 40):
                //       button.style.background = "-webkit-linear-gradient(top, yellow, red)";
                //       break;
                //     case (fighterHealth <= 20):
                //       button.style.background = "red";
                //       break;
                //     case (fighterHealth <= 0):
                //       button.setAttribute("disabled", "");
                //       break;
                // }
                // пытался спомощью switch изменять кнопки
                healthValue.value = this.health //вывод урона на панель progress
            })
            div.appendChild(button)
        })
        fighterConteiner.appendChild(div)

    }   
}
testButton.addEventListener("click", () => {
    createFighter(); // с помощью кнопки вызывать метод в котором создаються кнопки для персонажа
  })


class Limb {
    constructor({ limbName, limbHealth, gettingDamage }) {
        this.name = limbName;
        this.health = limbHealth;
        this.gettingDamage = gettingDamage

        this.isBroken = false;
    }
    
    getLimbDamage() {
        if (!this.isBroken) {
            this.gettingDamage = Math.floor(Math.random() * 3) + 1;
            this.health -= this.gettingDamage;
            if (this.health > 0) {
                console.log(`У конечности ${this.name} осталось ${this.health} единиц здоровья`);
            } else {
                this.isBroken = true;
            }
            fighter.getDamage(this.gettingDamage) //Обьеденил общий урон и урон который проходит по конечностям
        }
    }
}




let fighter = new Fighter("fighterName", fighterHealth, limbs);
fighter.createFighter()
const smith = new Fighter("Smith", fighterHealth, limbs);
const fighter1 = document.querySelector("#Fighter-1", ".button")
const leftLeg1 = document.querySelector("#Left-leg-1", ".button")
const rightLeg1 = document.querySelector("#Right-leg-1", ".button")
const leftArm1 = document.querySelector("#Left-arm-1", ".button")
const rightArm1 = document.querySelector("#Right-arm-1", ".button")

