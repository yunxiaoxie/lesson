//工厂方法
function createPerson(name, age, job) {
    var person=new Object();
    person.name=name;
    person.age=age;
    person.job=job;
    person.sayName= function () {
        console.log(this.name);
    }
    return person;

}
var person = createPerson("Greg", 22, "Doctor");
person.sayName();