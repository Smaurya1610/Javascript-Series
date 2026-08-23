# JavaScript and Classes

# OOPs

**OOPs = Object-Oriented Programming**

OOP ek programming paradigm hai jisme program ko **objects** ke around organize kiya jata hai.

JavaScript mein OOP ko samajhne ke liye ye concepts important hain:

* Object
* Object Literal
* Constructor Function
* Prototype
* Class
* Instance
* `new`
* `this`
* Four Pillars of OOP

---

# 1. Object

JavaScript mein **Object properties aur methods ka collection hota hai.**

```javascript
const student = {
    name: "Sameer",
    age: 21,

    greet: function() {
        console.log("Hello");
    }
};
```

Yahan:

```text
name  → Property
age   → Property
greet → Method
```

### Property

Property object ke andar stored **data/information** hoti hai.

### Method

Method object ke andar stored **function** hota hai.

```text
Object
 ├── Properties → Data
 └── Methods    → Behaviour
```

---

# 2. Why Use OOP?

Small programs mein simple variables aur functions kaafi hote hain.

Lekin large applications mein OOP useful hota hai.

### OOP ke advantages

* Code ko organize karta hai
* Code reusability provide karta hai
* Duplicate code reduce karta hai
* Large applications ko manage karna easy banata hai
* Data aur behaviour ko ek unit mein rakhta hai
* Existing code ko extend karna easy hota hai

### Without OOP

```javascript
const student1Name = "Sameer";
const student1Age = 21;

const student2Name = "Rahul";
const student2Age = 22;
```

Agar 100 students honge to code difficult ho jayega.

### With OOP

```javascript
const student1 = new Student("Sameer", 21);
const student2 = new Student("Rahul", 22);
```

Same structure ko repeatedly use kar sakte hain.

---

# 3. Parts of OOP in JavaScript

JavaScript mein objects create karne ke different ways hain:

```text
Object
   │
   ├── Object Literal
   │
   ├── Constructor Function
   │
   ├── Prototype
   │
   └── Class
```

`new` aur `this` bhi JavaScript OOP mein bahut important hain.

---

# 4. Object Literal

Object create karne ka simplest way **Object Literal** hai.

```javascript
const student = {
    name: "Sameer",
    age: 21,

    introduce: function() {
        console.log(`My name is ${this.name}`);
    }
};
```

Method call:

```javascript
student.introduce();
```

Output:

```text
My name is Sameer
```

### Syntax

```javascript
const objectName = {
    property: value,

    method: function() {
        // code
    }
};
```

---

# 5. Problem with Object Literal

Agar multiple students create karne hon:

```javascript
const student1 = {
    name: "A",
    age: 20
};

const student2 = {
    name: "B",
    age: 21
};

const student3 = {
    name: "C",
    age: 22
};
```

Har object manually create karna padega.

Is problem ko solve karne ke liye **Constructor Function** use kar sakte hain.

---

# 6. Constructor Function

Constructor Function ek function hota hai jiska use objects create karne ke liye kiya ja sakta hai.

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

Ab objects create kar sakte hain:

```javascript
const student1 = new Student("Sameer", 21);
const student2 = new Student("Rahul", 22);
```

Check:

```javascript
console.log(student1.name);
console.log(student2.name);
```

Output:

```text
Sameer
Rahul
```

---

# 7. `this` Keyword

`this` generally current object/context ko refer karta hai.

Example:

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

Jab:

```javascript
const student1 = new Student("Sameer", 21);
```

execute hota hai, constructor ke andar `this` newly created object ko refer karta hai.

Conceptually:

```text
this
 ↓
student1
```

Therefore:

```javascript
this.name = name;
```

means:

```javascript
student1.name = "Sameer";
```

---

# 8. `new` Keyword

Constructor Function ke saath `new` keyword use hota hai.

```javascript
const student1 = new Student("Sameer", 21);
```

`new` approximately:

1. Ek new object create karta hai
2. `this` ko us object se bind karta hai
3. Constructor function execute karta hai
4. New object return karta hai

Conceptually:

```text
new Student()
      ↓
New Object
      ↓
this → New Object
      ↓
Constructor executes
      ↓
Object returned
```

---

# 9. Prototype

JavaScript ek **prototype-based language** hai.

Prototype ka use properties aur methods ko objects ke beech share karne ke liye kiya ja sakta hai.

Example:

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.introduce = function() {
    console.log(`My name is ${this.name}`);
};
```

Ab:

```javascript
const student1 = new Student("Sameer", 21);
const student2 = new Student("Rahul", 22);
```

Dono `introduce()` use kar sakte hain:

```javascript
student1.introduce();
student2.introduce();
```

Concept:

```text
student1
   │
   ↓
Student.prototype
   │
   └── introduce()

student2
   │
   ↓
Student.prototype
   │
   └── introduce()
```

---

# 10. Classes

Modern JavaScript mein objects create karne ke liye `class` syntax commonly use kiya jata hai.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}
```

Object create:

```javascript
const student1 = new Student("Sameer", 21);
```

Method call:

```javascript
student1.introduce();
```

Output:

```text
My name is Sameer
```

> **Important:** JavaScript mein `class` syntax internally prototype-based system par work karta hai.

---

# 11. Constructor in Class

Class ke andar `constructor()` ek special method hai.

Ye object create hone par automatically execute hota hai.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

Jab:

```javascript
const student = new Student("Sameer", 21);
```

execute hota hai, constructor automatically call hota hai.

---

# 12. Instance

Class ko **blueprint/template** samajh sakte hain.

Class se bana actual object **instance** kehlata hai.

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }
}
```

Class:

```text
Student
```

Instances:

```javascript
const s1 = new Student("Sameer");
const s2 = new Student("Rahul");
```

Yahan:

```text
Student → Class

s1 → Instance
s2 → Instance
```

Check:

```javascript
console.log(s1 instanceof Student);
```

Output:

```text
true
```

---

# 13. Class vs Instance

```text
Class
 ↓
Blueprint / Template
 ↓
new
 ↓
Instance
```

Example:

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }
}

const s1 = new Student("Sameer");
```

Here:

```text
Student → Class
s1      → Instance
```

---

# 14. Four Pillars of OOP

OOP ke four main pillars hain:

1. **Abstraction**
2. **Encapsulation**
3. **Inheritance**
4. **Polymorphism**

```text
                 OOP
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
Abstraction  Encapsulation
       ↓          ↓
Inheritance  Polymorphism
```

---

# 15. Abstraction

**Abstraction ka matlab unnecessary implementation details ko hide karna aur sirf important functionality provide karna hai.**

Real-world example:

Car drive karte waqt humein engine ke internal working ka knowledge nahi chahiye.

Humein simply:

```text
Start
Accelerate
Brake
```

use karna hai.

### JavaScript Example

```javascript
class Car {

    start() {
        this.#checkEngine();
        console.log("Car Started");
    }

    #checkEngine() {
        console.log("Checking Engine...");
    }
}
```

Use:

```javascript
const car = new Car();

car.start();
```

User ko `#checkEngine()` ki internal implementation jaanne ki zarurat nahi hai.

### Simple Definition

> **Abstraction = Hide unnecessary implementation details.**

---

# 16. Encapsulation

**Encapsulation ka matlab data aur methods ko ek single unit mein bundle karna aur internal data ko controlled access dena hai.**

Example:

```javascript
class BankAccount {

    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
```

Use:

```javascript
const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
1000
```

Lekin:

```javascript
account.#balance;
```

directly access nahi kar sakte.

### Simple Definition

> **Encapsulation = Data + Methods ko bundle karna aur data access ko control karna.**

---

# 17. Abstraction vs Encapsulation

Dono ko confuse nahi karna.

### Abstraction

Focus:

> **What to show?**

Unnecessary implementation details hide karta hai.

### Encapsulation

Focus:

> **How to protect/control data?**

Data aur methods ko bundle karta hai aur access control provide karta hai.

### Example

```javascript
class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

```text
#balance
   ↓
Encapsulation
```

```text
User only uses:
deposit()
getBalance()

   ↓
Abstraction
```

---

# 18. Inheritance

**Inheritance mein ek class doosri class ke properties aur methods ko inherit karti hai.**

Example:

```javascript
class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}
```

Object:

```javascript
const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Animal is eating
Dog is barking
```

`Dog` ne `Animal` se `eat()` inherit kiya.

```text
Animal
   │
   │ extends
   ↓
  Dog
```

---

# 19. `extends`

Inheritance ke liye `extends` keyword use hota hai.

```javascript
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
```

Yahan:

```text
Animal → Parent Class / Superclass

Dog → Child Class / Subclass
```

---

# 20. `super`

`super` parent class ko access karne ke liye use hota hai.

Example:

```javascript
class Animal {

    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
```

Yahan:

```javascript
super(name);
```

parent class ke constructor ko call karta hai.

---

# 21. Polymorphism

**Polymorphism ka meaning hai "many forms".**

Same method different objects mein different behaviour de sakta hai.

Example:

```javascript
class Animal {

    speak() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {

    speak() {
        console.log("Bark");
    }
}

class Cat extends Animal {

    speak() {
        console.log("Meow");
    }
}
```

Now:

```javascript
const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();
```

Output:

```text
Bark
Meow
```

Same method:

```text
speak()
```

Different behaviour:

```text
Dog → Bark
Cat → Meow
```

This is **Polymorphism**.

---

# 22. Method Overriding

Jab child class parent ke same method ko apne according redefine karti hai, ise **Method Overriding** kehte hain.

```javascript
class Animal {

    speak() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {

    speak() {
        console.log("Bark");
    }
}
```

Parent:

```text
speak() → Animal Sound
```

Child:

```text
speak() → Bark
```

Dog ne parent ke `speak()` method ko override kiya.

---

# 23. Complete Example

```javascript
class BankAccount {

    #balance = 0;

    constructor(name) {
        this.name = name;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
```

Create instance:

```javascript
const account = new BankAccount("Sameer");

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
1000
```

### Is example mein:

```text
BankAccount
     ↓
    Class

constructor()
     ↓
Initialize object

new BankAccount()
     ↓
Create instance

this.name
     ↓
Current instance

#balance
     ↓
Encapsulation

deposit()
getBalance()
     ↓
Controlled interface
```

---

# 24. Complete OOP Flow

```text
                    OOP
                     │
                     ↓
                   Object
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
   Object Literal  Constructor  Class
                      │           │
                      ↓           ↓
                  Prototype      new
                                  │
                                  ↓
                               Instance
                                  │
                                  ↓
                                this
```

Four Pillars:

```text
                 OOP
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
 Abstraction  Encapsulation
       ↓          ↓
 Inheritance  Polymorphism
```

---

# 25. Quick Revision

| Concept              | Meaning                                   |
| -------------------- | ----------------------------------------- |
| Object               | Properties + Methods                      |
| Property             | Object ka data                            |
| Method               | Object ke andar function                  |
| Object Literal       | `{}` se object create karna               |
| Constructor Function | Objects create karne ke liye function     |
| Prototype            | Shared properties/methods ka mechanism    |
| Class                | Object creation ka blueprint/syntax       |
| Constructor          | Object initialize karta hai               |
| `new`                | New instance create karta hai             |
| `this`               | Current object/context ko refer karta hai |
| Instance             | Class se bana actual object               |
| `extends`            | Inheritance ke liye                       |
| `super`              | Parent class ko access/call karne ke liye |
| Abstraction          | Unnecessary details hide karna            |
| Encapsulation        | Data ko bundle aur control karna          |
| Inheritance          | Parent se properties/methods lena         |
| Polymorphism         | Same method, different behaviour          |
| Method Overriding    | Child ka parent method ko redefine karna  |

---

# 26. One-Line Definitions

### Object

> Object is a collection of properties and methods.

### OOP

> OOP is a programming paradigm based on objects and their interactions.

### Object Literal

> Object literal is a simple way to create an object using `{}`.

### Constructor Function

> Constructor function is used with `new` to create objects.

### Prototype

> Prototype is an object from which other objects can inherit properties and methods.

### Class

> Class is a convenient syntax for creating objects using JavaScript's prototype-based system.

### Instance

> Instance is an object created from a class.

### Abstraction

> Abstraction hides unnecessary implementation details and exposes essential functionality.

### Encapsulation

> Encapsulation bundles data and methods together and controls access to internal data.

### Inheritance

> Inheritance allows a class to acquire properties and methods from another class.

### Polymorphism

> Polymorphism allows the same method/interface to have different behaviour for different objects.

---

# Important Point

JavaScript fundamentally **prototype-based** language hai.

`class` JavaScript mein prototype system ke upar ek **cleaner and easier syntax** provide karta hai.

```text
JavaScript
    ↓
Prototype-based
    ↓
class syntax
    ↓
Easy way to work with OOP
```
