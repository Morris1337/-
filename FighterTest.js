const limbs = [
    { limbName: "rArm", limbHealth: 20, gettingDamage: 5 },
    { limbName: "lArm", limbHealth: 20, gettingDamage: 5 },
    { limbName: "rLeg", limbHealth: 10, gettingDamage: 3 },
    { limbName: "lLeg", limbHealth: 10, gettingDamage: 3 },
];

const weapon = [
    {weaponName: "knife", weaponDamage: 5}
    {weaponName: "sword", weaponDamage: 10}
    {weaponName: "spear", weaponDamage: 15}
    {weaponName: "axe", weaponDamage: 20}
]

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
                console.log(`Конечность ${this.name} сломана`);
            }
        }
    }
}

const neo = new Fighter("neo", 100, limbs);
const smith = new Fighter("Smith", 100, limbs);
