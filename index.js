let name = "Petrus";
let age = "24";
let type = "1"; // put your class/type here (warrior, mage, monk or ninja)

class typeOfClass {
	constructor (type){
	this.type = type
}
	attack() {
    if (this.type === "warrior") {
		return "using sword" ;
	} else if (this.type === "mage") {
		return "using spell";
	} else if (this.type === "monk") {
		return "using martial arts";	
	} else if (this.type === "ninja") {
		return "using shuriken";
	} else { 
		return "please, select your type"; 
	}
    }
}
let skill = new typeOfClass(type);

if (skill.attack() !== "please, select your type") {
	console.log(`The ${type} attacks ${skill.attack()} `)
} else {
	console.log ("please, select your type")
}
