

const limbs = [
    { limbName: "rArm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "lArm", limbHealth: 10, gettingDamage: 5 },
    { limbName: "rLeg", limbHealth: 20, gettingDamage: 3 },
    { limbName: "lLeg", limbHealth: 20, gettingDamage: 3 },
];

// const weapon = [
//     {weaponName: "knife", weaponDamage: 5}
//     {weaponName: "sword", weaponDamage: 10}
//     {weaponName: "spear", weaponDamage: 15}
//     {weaponName: "axe", weaponDamage: 20}
// ]

const fighterHealth = 100

class Fighter {
    constructor(fighterName, fighterHealth, limbs) {
        this.name = fighterName;
        this.health = fighterHealth;
        this.isDefeat = false;
        this.getDamage = this.getDamage.bind(this);
        
        
        for (let i = 0; i < limbs.length; i++) {
            const limbName = limbs[i].limbName
            this[limbName] = new Limb(limbs[i]);
            const getLimbDamage = this[limbName].getLimbDamage.bind(this[limbName])
            this[limbName].getLimbDamage = () => {
                getLimbDamage()
                this.getDamage();
            }
        }
    }
    
    getDamage() {
        if (!this.isDefeat) {
            this.health -= Math.floor(Math.random() * 10) + 1;
            if (this.health > 0) {
                console.log(`У бойца ${this.name} осталось ${this.health} единиц здоровья`);
            } else {
                this.isDefeat = true;
                console.log(`Боец ${this.name} повержен`);
            }
        }
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
        }
    }
}

const neo = new Fighter("neo", fighterHealth, limbs);
const smith = new Fighter("Smith", fighterHealth, limbs);
const fighter1 = document.querySelector("#Fighter-1", "button")
const leftLeg1 = document.querySelector("#Left-leg-1", "button")
const rightLeg1 = document.querySelector("#Right-leg-1", "button")
const leftArm1 = document.querySelector("#Left-arm-1", "button")
const rightArm1 = document.querySelector("#Right-arm-1", "button")
const button = document.querySelector("button")



fighter1.addEventListener("click", function(){
    neo.getDamage()
})

leftLeg1.addEventListener("click", function(){
    neo.lLeg.getLimbDamage()
    if(neo.lLeg.health <= 0){
        leftLeg1.setAttribute("disabled", "")
        leftLeg1.style.background = "red"
    }

})

    rightLeg1.addEventListener("click", function(){
        neo.rLeg.getLimbDamage()
        if(neo.rLeg.heal <= 0)
            rightLeg1.setAttribute("disabled", "")
        if(neo.rLeg.health <= neo.rLeg.health * 0.9){
            rightLeg1.style.background = "yello"
        }else if(neo.rLeg.health <= neo.rLeg.health * 0.5){
            rightLeg1.style.background = "orange"
        }else{
            rightLeg1.style.background = "red"
        }
    }
    )

    