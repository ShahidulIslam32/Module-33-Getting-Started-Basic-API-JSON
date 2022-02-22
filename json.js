// js own object
let user = {name: 'shovon',roll: 20,department: 'CSE',addres: 'Narayanganj',designation: 'MERN Developer',salary: 500000
}

console.log(user);

// JSON 

let stringfy = JSON.stringify(user)
console.log(stringfy);

//JSON multiline object

const company = {
    name: 'MERN IT Farm', place: 'Dhaka', address: 'Mirpur Dhaka',
    category: 'IT Farm',
    CEO:{
        name: 'shahidul islam khan', salary: 500000
    },
    technology: 'React',
    port:{
        firstPort: 8803, secondPort : 3306
    }   
}


// let stringfyTwo = JSON.stringify(company)
// console.log(stringfyTwo);


let stringfyTwo = JSON.parse(company)
console.log(stringfyTwo);
