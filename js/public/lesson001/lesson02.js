//工厂方法
function createPerson(name, age, job) {
    var person={
        name:name,
        age:age,
        job:job,
        sayName:function(){
            console.log(this.name);
        }
    };
    return person;
}
var person = createPerson("Greg", 22, "Doctor");
person.sayName();