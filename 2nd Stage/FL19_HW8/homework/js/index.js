/*⦁	Create abstract class Toy which has “name” and “price” properties and method “getToyInfo()” which returns string “The toy name is [toy name]. It costs [toy price] dollars.”.
*/
let woodenInstance;
class Toy {
   constructor(name, price){
      this.name = name;
      this.price = price;
   }
   getToyInfo(){
      return `The toy name is ${this.name}. It cost ${this.price} dollars`
   }
}

class Teddy extends Toy{
   constructor(name, price){
      super(name, price)
      this.material = 'cotton';
   }
   getToyInfo(){
      return `The toy name is ${this.name}. It cost ${this.price} dollars`
   }
   getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material} `
   }
}
class Wooden extends Toy {
   constructor(name, price){
      super(name, price)
      this.material = 'wood'
      if (!woodenInstance) {
         woodenInstance = this;
         return woodenInstance;
     } 
     return woodenInstance;
      
   }
   getToyInfo(){
      return `The toy name is ${this.name}. It cost ${this.price} dollars`
   }
   getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material} `
   }
}
class Plastic extends Toy {
   constructor(name, price){
      super(name, price)
      this.material = 'plastik'
   }
   getToyInfo(){
      return `The toy name is ${this.name}. It cost ${this.price} dollars`
   }
   getMaterialInfo(){
      return `The toy ${this.name} was made of ${this.material} `
   }
}

/* Task 1.1 Factory:
⦁	Should has “produce” method which creates new instance of toy;
⦁	Receives type and according to this produces teddy, wooden or plastic toy.
⦁	Uses classes of toys inside
⦁	Make “type” parameter optional and when there is no type factory creates plastic toy (see example).
*/
class Factory{
   constructor(){
      this.toys = []
   }
   produce(name, price, material = 'plastic'){
     switch(material){
      case 'teddy' :
         if(this.toys[name]){
            return this.toys[name]
         }
         break;
      case 'wooden' :
         return woodenInstance || new Wooden(name, price)
     default:
      if(this.toys[name]){
         return this.toys[name]
      }
      this.toys[name] = new Teddy(name, price);
        return this.toys[name];
     }
   }
}
const factory = new Factory()
const teddyBear = factory.produce('Bear', 200, 'cotton');
console.log('Task 1.1')
console.log(teddyBear.getToyInfo())
console.log(teddyBear.getMaterialInfo());
const plasticCar = factory.produce('Car', 100);
console.log(plasticCar.getToyInfo())
console.log(plasticCar.getMaterialInfo())
/* Task 1.2 ⦁	In this task it is necessary to extend our factory and allow it to create only unique toys (by name). 
For it extend factory using Flyweight js pattern*/
console.log('Task 1.2')
console.log(teddyBear.getToyInfo())
console.log(teddyBear.getMaterialInfo());
const plasticBear = factory.produce('Bear', 150, 'plastic')
console.log(plasticBear.getToyInfo())
console.log(plasticBear.getMaterialInfo());
/*⦁ Task 1.3	But customer of our factory needs only one wooden toy, so we need to create only one instance of wooden toy. Use Singleton js pattern to achieve this.
*/
console.log('Task 1.3')
const woodenHorse = factory.produce('Horse', 400,'wooden');
console.log(woodenHorse.getToyInfo())
const woodenBear = factory.produce('Bear', 400,'wooden');
console.log(woodenBear.getToyInfo())
/*

/*Imagine a doctor who has “Mercedes” car and who drives to hospital every day. But he lives in city and has to drive through traffic jams. In that way he is late on hospital and patients suffer. So we need to help him and extend his “Mercedes” by ambulance siren. To help doctor we need:
⦁	Create Car class which has properties of car name and car host. Also add “carSound()” method which returns string “Usual car sound.”
⦁	Create Decorator pattern which will extend our car class and add it “ambulanceSound” method which return string “Siren sound.”.
⦁	Decorator should be appliable to another cars
*/
class Car {
   constructor(name, host){
      this.name = name
      this.host = host
   }
   carSoun(){
      return `Usual car sound.`
   }
}
class AmbulanceCar extends Car {
   constructor({name, host}){
      super(name, host)
   }
   ambulanceSound(){
      return `Siren sound.`
   }
}
console.log('Task 2')
const mercedes = new Car('Mercedes', 'Doctor');
const ambulanceMercedes = new AmbulanceCar(mercedes);
console.log(ambulanceMercedes.ambulanceSound());
const toyota = new Car('Toyota', 'Doctor2');
const ambulanceToyota = new AmbulanceCar(toyota);
console.log(ambulanceToyota.ambulanceSound());