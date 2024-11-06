var user = {
    name : 'momin',
    age: 23
}

function getUserName(name){
this.user.name = name
}

getUserName('khan');

console.log(user);