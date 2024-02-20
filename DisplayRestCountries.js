var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var res=JSON.parse(request.response);

//Question 2: Using rest countries API url display all the country flags in the console

for(var i=0;i<res.length;i++){
console.log(res[i].flags.png)
    }
    
//Question 3: Using rest countries print all countries,names,regions,sub-region,populations

for(var i=0;i<res.length;i++){
    console.log("name :" +res[i].name.common+" "+"Region: "+res[i].region+" "+
    "Sub-Region : "+res[i].subregion+" "+"Population:"+res[i].population)
        }
     }
