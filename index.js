// Code your solutions in this file
function writeCards(names,event){
    let messages = [
        "Thank you, dad, for the wonderful gift!"
    ];

    for(let i=0; i < names.length; i++){
    let message = `Thanks, ${names[i]}, for the wonderful ${event} gift!`
    messages = [...messages,message];
    }

    return messages;
}


function countDown(number = 10){
    while(number >= 0){
        number--;
        console.log(number);
    }
}