// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    } 
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
         super(health, strength);
         this.name = name;
    }
    receiveDamage (damage) {
         this.health = this.health - damage;
         if (this.health > 0) return `${this.name} has received ${damage} points of damage`
         else return `${this.name} has died in act of combat`
     }
    battleCry () {
         return 'Odin Owns You All!'
     }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return 'A Saxon has died in combat'
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    

    }
    vikingAttack() {
        let armySize = this.vikingArmy.length
        let attacker = Math.floor(armySize*Math.random());

        let victimSize =this.saxonArmy.length
        let victim = Math.floor(victimSize*Math.random());
       
        let output = this.saxonArmy[victim].receiveDamage(this.vikingArmy[attacker].strength)
        // we check that the saxon is still alive, if not we bury the saxon
        if(this.saxonArmy[victim].health<0) this.saxonArmy.splice(victim,1)

        return output;
    }
    saxonAttack() {
        let armySize = this.saxonArmy.length
        let attacker = Math.floor(armySize*Math.random());

        let victimSize =this.vikingArmy.length
        let victim = Math.floor(victimSize*Math.random());
       
        // console.log(this.saxonArmy[attacker].strength)
        // console.log(this.vikingArmy[victim])

        let output = this.vikingArmy[victim].receiveDamage(this.saxonArmy[attacker].strength);
        // we check that the viking is still alive, if not we bury the viking
        // I dont understand why I fail this test
        if(this.vikingArmy[victim].health<0) this.vikingArmy.splice(victim,1);
        // console.log(this.vikingArmy)

        return output;

    }
    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
        else if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return 'Vikings and Saxons are still in the thick of battle.'
    }


    //this function attack is not finshed - I tried to variabilize the name of the array based on the argument viking or saxon but it does not work haha
    attack(attackerBarbar) {
        if (attackerBarbar !== 'viking' || attackerBarbar !== 'saxon') return 'Only viking or saxon are accepted as argument to this function'
        else  {
            let armySize = this.`${attackerBarbar}`Army.length
            console.log(armySize)
    }    
}

let viking1 = new Viking('Brutaly',10,2)
let viking2 = new Viking('Deadly',20,1)
let viking3 = new Viking('Killy',12,3)
let war1 = new War;
let saxon1 = new Saxon(20,21);
let saxon2 = new Saxon(20,22);
let saxon3 = new Saxon(5,23);

war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);

// console.log(war1);
// war1.vikingAttack();
// war1.attack('viking');


war1.showStatus();
