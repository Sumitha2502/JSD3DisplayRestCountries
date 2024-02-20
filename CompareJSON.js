var obj1 = { name:"Person 1",age:5 };
var obj2 = { age:10,name:"Person 1"};


let flag=true;

for(let e in obj1)
{
    if(obj1[e] !== obj2[e])
    {
        flag= false
        break
    }
}
flag?console.log("Equal"):console.log("Not Equal")


//JSON stringify prints- order
// if(JSON.stringify(obj1) === JSON.stringify(obj2)){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal")
// }

