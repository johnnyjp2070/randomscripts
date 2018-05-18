let students = [{name: "Mary",score: 90,school: "East"},
{name: "Varsha",score: 100,school: "West"},
{name: "Varun",score: 40,school: "East"},
{name: "Peter",score: 70,school: "West"},
{name: "Aishwarya",score: 80,school: "South"},
{name: "Aasha",score: 35,school: "North"},
{name: "Nandan",score: 87,school: "South"},
{name: "Anju",score: 77,school: "North"}]

let processStudents = function(data, callback){
    for (let index = 0; index < data.length; index++){
        if(data[index].school.toLowerCase() === 'east'){
            if(typeof callback === 'function'){
                callback(data[index])
            }
        }
    }
}

processStudents(students, function(filtered){
    if(filtered.score > 60){
        console.log(filtered.name + "passed.")
    }
})

let determineTotal = function() {
    let total = 0;
        count = 0;
        processStudents(students, function(filtered){
            total = total + filtered.score;
            count++;
        })
        console.log("Total score: "+ total + " Total Count: "+ count)
}
determineTotal()