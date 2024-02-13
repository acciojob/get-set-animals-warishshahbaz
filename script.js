class Animal {
    protected species: string;

    constructor(species: string) {
        this.species = species;
    }

    getSpecies(): string {
        return this.species;
    }

    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    purr(): void {
        console.log("purr");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("woof");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
