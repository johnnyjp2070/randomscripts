var employee = [{name:'Aishwarya', age:25, sex:'female', city: 'vellore', state: 'Tamilnadu'},
{name:'Pawan', age:21, sex:'male', city: 'hyderabad', state: 'Andra Pradesh'},
{name:'Varsha', age:25, sex:'female', city: 'bangalore', state: 'Karnataka'},
{name:'Varun', age:32, sex:'male', city: 'chennai', state: 'Tamilnadu'},
{name:'Ramya', age:29, sex:'female', city: 'delhi', state: 'Delhi'},
{name:'Naren', age:26, sex:'male', city: 'cochin', state: 'Kerala'},
{name:'Evelyn', age:40, sex:'female', city: 'trivandram', state: 'Kerala'},
{name:'Richard', age:39, sex:'male', city: 'bangalore', state: 'Karnataka'},
{name:'Pallavi', age:24, sex:'female', city: 'jaipur', state: 'Rajasthan'},
{name:'Sushanth', age:19, sex:'male', city: 'pune', state: 'Maharastra'}]

let processEmp = function(list, callBk){
    for(var i = 0; i < list.length; i++){
        if(list[i].age < 30) {
            if(typeof callBk === 'function'){
                callBk(list[i])
            }
        }
    }
}

processEmp(employee, function(filtered){
    if(filtered.sex === 'male'){
        console.log(filtered)
    }
})
