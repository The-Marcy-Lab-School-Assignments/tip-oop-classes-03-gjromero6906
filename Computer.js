class Computer{
    isOn = false;
    constructor(name,system){
        this.name = name;
        this.system = system;
    }
    turnOn(){
        this.isOn = true;
        return `${this.name} started up`
    }
    turnOff(){
        this.isOn =false;
    }
    
}
class Levo extends Computer{
    constructor(name,system){
        super('Levo',system);
    }
    turnOn(){
        super.turnOn();
        return `Smarter technology for all`
    }
}
class Acer extends Computer{
    constructor(name,system){
        super('Acer',system);
    }
    turnOn(){
        super.turnOn();
        return `Explore Beyond Limits`
    }
}
