function writeCards(array, eventName){
let result = [];
    for (let i = 0; i < array.length; i++) 
    {
        result.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }

    return result;
}


function countDown(number){
    while(number >= 0){
        console.log(number);
        number--
    }
}