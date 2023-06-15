// function Fighter(){
//     this.bodyHealth = 100
//         this.bodyHit = function(){
//             this.bodyHealth -= 10
//         }
// }


// function LeftLeg(){
//     this.lLeg = 10
//     this.getHitL = function(){
//         this.lLeg -=3
//     }
// }


// function RightLeg(){
//         this.rLeg = 10
//     this.getHitR = function(){
//         this.rLeg -= 3
//     }
// }


// function LeftArm(){
//     this.lArm = 10
//     this.gettHitL = function(){
//         this.lLeg -= 2
//     }
// }


// function RightArm(){
//         this.rArm = 10
//     this.gettHitR = function(){
//         this.rArm -= 2
//         this.bodyHealth -= 2
//     }
// }


// LeftLeg.prototype = new Fighter()
// RightLeg.prototype = new Fighter()
// LeftArm.prototype = new Fighter()
// RightArm.prototype = new Fighter()


// const fighter = new Fighter()
// const lLeg = new LeftLeg()
// const rLeg = new RightLeg()
// const lArm = new LeftArm()
// const rArm = new RightArm()



// rArm.gettHitR()
// console.log(rArm.rArm, rArm.bodyHealth)



//вариант с классами




class Fighter{
    constructor(name){
      this.name = name
      this.bodyHealth = 100
    }
    bodyHit(){
      if(this.bodyHealth <= 0){
        console.log("Боец проиграл!")
      }else{
        this.bodyHealth -= 10
        console.log(`У бойца ${this.name} осталось ${this.bodyHealth} здоровья.`)
      }
   }
  }
  
  
  class LeftLeg extends Fighter{
    constructor(name){
      super(name)
      this.lLeg = 10
    }
    getHitL(){
        if(this.bodyHealth <= 0){
            console.log("Боец проиграл!")
        }else if(this.lLeg <= 0){
            console.log("Левая нога травмированна и неможет функционировать!")
        }else{
            this.lLeg -= 3
            this.bodyHealth -= 3
            console.log(`У бойца ${this.name} осталось ${this.bodyHealth} здоровья.`)
        }
      }
  }
  
  
  class RightLeg extends Fighter{
      constructor(name){
      super(name)
      this.rLeg = 10
      }
      getHitR(){
        if(this.rLeg <= 0){
      console.log("Левая нога травмированна и неможет функционировать!")
    }else{
      this.rLeg -= 3
      this.bodyHealth -= 3
      console.log(`У бойца ${this.name} осталось ${this.bodyHealth} здоровья.`)
    }
}
}
  
  
  class LeftArm extends Fighter{
      constructor(name){
      super(name)
      this.lArm = 10
      }
      gettHitL(){
        if(this.lArm <= 0){
      console.log("Левая рука травмированна и неможет функционировать!")
    }else{
      this.lArm -= 2
      this.bodyHealth -= 2
      console.log(`У бойца ${this.name} осталось ${this.bodyHealth} здоровья.`)
    }
   }
}
  
  
  class RightArm extends Fighter{
      constructor(name){
      super(name)
      this.rArm = 10
      }
      gettHitR(){
        if(this.rArm <= 0){
      console.log("Правая рука травмированна и неможет функционировать!")
    }else{
      this.rArm -= 2
      this.bodyHealth -= 2
      console.log(`У бойца ${this.name} осталось ${this.bodyHealth} здоровья.`)
    }
}
}
  
  const name1 = "Neo"
  const name2 = "Smith"
  
  const fighter1 = new Fighter(name1)
  const fighter2 = new Fighter(name2)
  const lLeg1 = new LeftLeg(name1)
  const lLeg2 = new LeftLeg(name2)
  const rLeg1 = new RightLeg(name1)
  const rLeg2 = new RightLeg(name2)
  const lArm1 = new LeftArm(name1)
  const lArm2 = new LeftArm(name2)
  const rArm1 = new RightArm(name1)
  const rArm2 = new RightArm(name2)
  
  
  // rArm.gettHitR()
  // console.log(rArm.rArm, rArm.bodyHealth)
  
//   fighter1.bodyHit()
//   fighter1.bodyHit()
//   fighter1.bodyHit()
//   fighter1.bodyHit()
//   fighter1.bodyHit()
  
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()
//   fighter2.bodyHit()