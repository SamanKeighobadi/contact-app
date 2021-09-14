const fs = require('fs');

const persons = [
    {id:1,fullname:'saman keighobadi'},
    {id:2,fullname:'Ashkan zafarnejad'},
    {id:3,fullname:'Younes Ghorbany'},
]

// fs.writeFileSync('contact.json',JSON.stringify(persons))

const data = fs.readFileSync('contact.json')
const p 
console.log(JSON.parse(data.toString()))