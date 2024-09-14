let name = "Petrus";
let age = "24";
let type = []; // put your class/type here

class typeOfClass {
	constructor (type){
	this.type = type
}
	atack() {
    if (this.type === "warrior") {
		return "using sword" ;
	} else if (this.type === "mage") {
		return "using spell";
	} else if (this.type === "monk") {
		return "using martial arts";	
	} else if (this.type === "ninja") {
		return "using shurikeen";
	} else { 
		return "please, select your type"; 
	}
    }
}
let skill = new typeOfClass(type);

console.log(`the ${type} atack ${skill.atack()} `)