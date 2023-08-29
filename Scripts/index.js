import{FIGHTER_HEALTH, FIGHTER_ENERGY}from "./constants.js"
import Fighter from "./Figher.js"


// const fighterConteiner = document.querySelector(".fighterUl") //Кнопки умений персонажа
const btnTest = document.querySelector(".testCreate") //Контейнер в котором лежат кнопки для закрытия формы и тестова кнопка
const createBtn = document.querySelector("#createBtn") //Тестовая кнопка для вызова кнопок умений

// const gameChat = document.querySelector("#chat")
const chatInput = document.querySelector("#chatInput")
const chatButton = document.querySelector("#chatButton")

//TODO добавить оружие для бойца
// const weapon = [
//     {weaponName: "knife", weaponDamage: 5}
//     {weaponName: "sword", weaponDamage: 10}
//     {weaponName: "spear", weaponDamage: 15}
//     {weaponName: "axe", weaponDamage: 20}
// ]

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

const openProfileLog = document.getElementById("profile")
const profileLog = document.querySelector(".profile-log")

openProfileLog.addEventListener("click", ()=>{
    profileLog.classList.toggle("open")
})

const openShop = document.getElementById("openShop")
const buyElements = document.querySelector(".shop")

openShop.addEventListener("click", ()=>{
    buyElements.classList.toggle("open")
})

skills.forEach(skill =>{
    const skillItem = document.createElement("div")
    skillItem.classList.add("skill")
    skillItem.innerHTML = `
    <p>Skill Name: ${skill.skillName}</p>
    <p>Energy Cost: ${skill.energy}</p>
    <p>Hit Damage: ${skill.hitDamage}</p>
    <button>Buy</button>`;
    buyElements.appendChild(skillItem)
})

let USER_MONEY = 1000

const createFighterBtn = document.querySelector("#createFighter")//Кнопка открыть форму для создания персонажа
const formCreateFighter = document.querySelector(".openForm") //Форма для создания персонажа
const formCreateFighterClose = document.querySelector("#createFighterClose") //Кнопка закрыть форму для создания персонажа

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

let callCount = 0;
const maxCalls = 2;


createBtn.addEventListener("click", () => {
    let fighterName = document.querySelector("#fighterName")
    if(fighterName.value.length > 0){
        let fighter = new Fighter(fighterName.value, FIGHTER_HEALTH, limbs);
        if(callCount < maxCalls){
            callCount++;
            fighter.createFighter()
        };
        fighterName.value = "";
    }else{
        alert("Введите имя бойца")
    }

});


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

// formCreateFighter.addEventListener("mousedown", (e) => {
//     const coords = getCoords(formCreateFighter);
//     const shiftX = e.pageX - coords.left;
//     const shiftY = e.pageY - coords.top;

//     const moveAt = (e) => {
//         formCreateFighter.style.left = e.pageX - shiftX + "px";
//         formCreateFighter.style.top = e.pageY - shiftY + "px";
//     };

//     const theEnd = () => {
//         document.removeEventListener("mousemove", moveAt);
//         document.removeEventListener("mouseup", theEnd);
//     };

//     formCreateFighter.style.position = "absolute";

//     moveAt(e);
//     formCreateFighter.style.zIndex = 1000;

//     document.addEventListener("mousemove", moveAt);
//     document.addEventListener("mouseup", theEnd);
// });
