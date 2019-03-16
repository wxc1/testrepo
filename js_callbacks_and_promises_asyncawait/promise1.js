"use strict";

let a = new Promise(function(resolve, reject){
    setTimeout(function(){  //goes from PromiseStatus "pending" -> "resolved"
        //resolve("has resolved");  //goes from PromiseValue: undefined -> "has resovled
        reject("has rejected");  //goes from PromiseValue: undefined -> "has rejected


    }, 4000)
});


//console.log(a);

a.then(function(val) {
    console.log(val);  //val is passed in from resolve("has resolved
}, function(val) {
    console.log("rejected: " + val); //val is passed in from reject("has rejected"
})

console.log("see this is async code");