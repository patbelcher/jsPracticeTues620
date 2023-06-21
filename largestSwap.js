const largestSwap = (number) => {
    const reversedString = number.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString);
    if(number >= reversedNumber) {
        return true;
    } else {
        return false;
    }
}

const mySwap = largestSwap(99);
console.log(mySwap);

//i understood the problem but not how to 
//reverse, split, and join string
