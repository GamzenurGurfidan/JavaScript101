class person {
    constructor(fullname,age,occupation){
        this.fullname = fullname
        this.age = age
        this.occupation = occupation
    }

    great(){
        return `Merhaba ben ${this.fullname}.`
    }
    getAge(){
        return `${this.age} yasindayim.`
    }
    getJob(){
        return `Meslegim ${this.occupation}.`
    }
}

// bu classtan bir obje olusturma ve ogelere ulasma (instance)

const person1 = new person('Ahmet',30,'QA')

console.log(person1.great());
console.log(person1.getAge());
console.log(person1.getJob());