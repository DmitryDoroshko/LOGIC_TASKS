class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}

class Admin extends User {
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }

    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}; role: ${this.role}`);
    }
}


const admin = new Admin('John', 'Connor', '32', "moderator");
admin.print();