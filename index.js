// Code your solutions in this file
const names = [`Gregory`, `Andrew`, `Viscount`]

function writeCards(names){
    for (let i = 0; i < names.length; i++){
      console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`)
      debugger;
    }
    return names;
}

writeCards(names);


function countDown(){
let countDown = 11;
while (countDown --){
    console.log(countDown)
}
return countDown;
}

countDown()