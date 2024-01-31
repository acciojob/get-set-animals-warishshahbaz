//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get makeSound(){
		console.log(this.species);
	}
}

class Dog extends Animal {
	purr(){
		console.log('purr')
	}
}

class Cat extends Animal {
	bark(){
		console.log('woof')
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
