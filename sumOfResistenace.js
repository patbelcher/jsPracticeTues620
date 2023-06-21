const seriesResistance = (array) =>{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        }
    return sum;
}

let myResistance =  seriesResistance([16, 3.5, 6]);
console.log(`${myResistance} ohms`);

//still need the help of chatgpt