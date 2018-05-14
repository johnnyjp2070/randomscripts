var promiseResult = new Promise(function(resolve, reject){
    setTimeout(resolve, 2000, [
        {
            name:"Vimal",
            location:"Bangalore"   
        },
        {
            name:"vinay",
            location:"Mangalore"   
        }
    ]);
})
.then(function(data){
    console.log(data[0]);
})
.catch(function(error){
    console.log("There was an error");
})