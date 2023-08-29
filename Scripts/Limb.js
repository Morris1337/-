import { randomDmg } from "./functions.js";

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

export default Limb