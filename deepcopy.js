// let obj1={name:"meenu"}
// let obj2=obj1
// obj2.name="abc"
// console.log(obj1);
// console.log(obj2);
//shallow copy

//deepcopy
let obj1={name:"meenu",skills:{primary:"frontennd",sec:"sql"}}
let obj2=JSON.parse(JSON.stringify(obj1));//creating another obj reference
obj2.name="abc"
obj2.skills.primary="backend"
console.log(obj1);
console.log(obj2);
console.log(typeof(obj1));

//In summary, shallow copy creates a new object that references the original object's properties, while deep copy creates an independent copy of the original object and its nested objects. Depending on your requirements, you can choose the appropriate method to create copies of objects in JavaScript.




