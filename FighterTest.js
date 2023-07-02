// const charKratos = document.querySelectorAll("option.Kratos")


const fighterConteiner = document.querySelector(".fighterUl")
const createFighter = document.querySelector("#createFighter")
const formCreateFighter = document.querySelector(".openForm")
const formCreateFighterClose = document.querySelector("#createFighterClose")
const healthValue = document.querySelector("#fighterHealthBar")
const submit = document.querySelector("#submit")

const limbs = [
    { limbName: "Head", limbHealth: 10, gettingDamage: 5},
    { limbName: "Body", limbHealth: 50, gettingDamage: 10},  
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

createFighter.addEventListener("click", ()=>{
    formCreateFighter.classList.add("open")
    formCreateFighterClose.classList.add("open")
})

formCreateFighterClose.addEventListener("click", ()=>{
    formCreateFighter.classList.add("close")
    formCreateFighterClose.classList.add("close")
})

submit.addEventListener("click", ()=>{
    if()
} )




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
        this.name = document.querySelector("#fighterName");
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
            this.health -= damage;
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
            const button = document.createElement("button")
            const progress = document.createElement("progress")

            progress
            button.textContent = limb.name
            button.addEventListener("click", ()=>{
                limb.getLimbDamage()
                switch (true) {
                    case (fighterHealth <= 100):
                      button.style.background = "green";
                      break;
                    case (fighterHealth <= 80):
                      button.style.background = "-webkit-linear-gradient(top, green, yellow)";
                      break;
                    case (fighterHealth <= 60):
                      button.style.background = "yellow";
                      break;
                    case (fighterHealth <= 40):
                      button.style.background = "-webkit-linear-gradient(top, yellow, red)";
                      break;
                    case (fighterHealth <= 20):
                      button.style.background = "red";
                      break;
                    case (fighterHealth <= 0):
                      button.setAttribute("disabled", "");
                      break;
                }
            })
            div.appendChild(button)
        })
        fighterConteiner.appendChild(div)
    }

    
}

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
            fighter.getDamage(this.gettingDamage)
        }
    }
}




// submitForm.addEventListener("click", ()=>{
//     formCreateFighter.classList.add("open")
//     formCreateFighterClose.classList.add("open")
//     console.log(submitForm)
// })


let fighter = new Fighter("fighterName", fighterHealth, limbs);
fighter.createFighter()
const smith = new Fighter("Smith", fighterHealth, limbs);
const fighter1 = document.querySelector("#Fighter-1", ".button")
const leftLeg1 = document.querySelector("#Left-leg-1", ".button")
const rightLeg1 = document.querySelector("#Right-leg-1", ".button")
const leftArm1 = document.querySelector("#Left-arm-1", ".button")
const rightArm1 = document.querySelector("#Right-arm-1", ".button")


// fighter1.addEventListener("click", function(){
//     neo.getDamage()
//     if(neo.health <= 100)
//     fighter1.style.background =  "green"
//     if(neo.health <= 80)
//     fighter1.style.background =  ("-webkit-linear-gradient(top, green, yellow)")
//     if(neo.health <= 60)
//     fighter1.style.background = "yellow"
//     if(neo.health <= 40)
//     fighter1.style.background =  ("-webkit-linear-gradient(top, yellow, red)")
//     if(neo.health <= 20)
//     fighter1.style.background = "red"
//     if(neo.health <= 0)
//     fighter1.setAttribute("disabled", "")
// })


// leftLeg1.addEventListener("click", function(){
//     neo.lLeg.getLimbDamage()
//     if(neo.lLeg.health <= 20)
//     leftLeg1.style.background = "green"
//     if(neo.lLeg.health <= 13)
//     leftLeg1.style.background = "yellow"
//     if(neo.lLeg.health <= 7)
//     leftLeg1.style.background = "red"
//     if(neo.lLeg.health <= 0)
//     leftLeg1.setAttribute("disabled", "")

// })


// leftLeg1.addEventListener("click", function(){
//     neo.lLeg.getLimbDamage()
//     if(neo.lLeg.health <= 20)
//     leftLeg1.style.background = "green"
//     if(neo.lLeg.health <= 13)
//     leftLeg1.style.background = "yellow"
//     if(neo.lLeg.health <= 7)
//     leftLeg1.style.background = "red"
//     if(neo.lLeg.health <= 0)
//     leftLeg1.setAttribute("disabled", "")

// })

// buttons.forEach(button => {
//     button.addEventListener("click", function(){
//         neo.limbHealth.getLimbDamage()
//         if(limbs.limbHealth <= 20)
//         button.style.background = "green"
//         if(limbs.limbHealth.health <= 13)
//         button.style.background = "yellow"
//         if(limbs.limbHealth.health <= 7)
//         button.style.background = "red"
//         if(limbs.limbHealth.health <= 0)
//         button.setAttribute("disabled", "")

// })})

    // rightLeg1.addEventListener("click", function(){
    // neo.rLeg.getLimbDamage()
    // if(neo.rLeg.health <= 20)
    //     rightLeg1.style.background = "green"
    // if(neo.rLeg.health <= 13)
    //     rightLeg1.style.background = "yellow"
    // if(neo.rLeg.health <= 7)
    //     rightLeg1.style.background = "red"
    // if(neo.rLeg.health <= 0)
    //     rightLeg1.setAttribute("disabled", "")
        
    // }
    // )

    // leftArm1.addEventListener("click", function(){
    //     neo.lArm.getLimbDamage()
    //     if(neo.lArm.health <= 20)
    //     leftArm1.style.background = "green"
    //     if(neo.lArm.health <= 13)
    //     leftArm1.style.background = "yellow"
    //     if(neo.lArm.health <= 7)
    //     leftArm1.style.background = "red"
    //     if(neo.lArm.health <= 0)
    //     leftArm1.setAttribute("disabled", "")
        
    // }
    // )

    // rightArm1.addEventListener("click", function(){
    //     neo.rArm.getLimbDamage()
    //     if(neo.rArm.health <= 20)
    //     rightArm1.style.background = "green"
    //     if(neo.rArm.health <= 13)
    //     rightArm1.style.background = "yellow"
    //     if(neo.rArm.health <= 7)
    //     rightArm1.style.background = "red"
    //     if(neo.rArm.health <= 0)
    //     rightArm1.setAttribute("disabled", "")
        
    // }
    // )