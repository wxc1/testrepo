let students  = [{name:"Mary",score:90, school:"East"},
{name:"James",score:90, school:"East"},
{name:"Steve",score:90, school:"East"},
{name:"Gabe",score:90, school:"West"},
{name:"Rachel",score:90, school:"East"},
{name:"Rochelle",score:90, school:"West"},
{name:"Lynette",score:90, school:"East"}];


let processStudents = function(data, callback) {
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
    
}

processStudents(students, function(data_item) {  // callback gets passed data[i]
    if (data_item.score > 60) {
        console.log(data_item)
    }
})

let determineTotal = function() {
    let total = 0,
        count = 0;
    processStudents(students, function(data_item) {
        total = total + data_item.score;
        count++
        
    })
    console.log("Total score: " + total + " Total Count: " + count);
}

determineTotal()