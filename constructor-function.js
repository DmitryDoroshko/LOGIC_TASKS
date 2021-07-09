function User(firstName = '', lastName = '', age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.print = function () {
            console.log(`Name: ${this.firstName}, last name: ${this.lastName}, age: ${this.age}.`);
        }
}

