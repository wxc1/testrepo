//callback is simply a function that is called after something else happens


let callLog = function(){
    
    console.log("callLog called back");
}

//setTimeout(callLog,3000)  //callLog is called back after 3000ms passes, note the lack of () when passing the function

setTimeout(function(){
    console.log("anonymous function called back");
}
,3000)  
