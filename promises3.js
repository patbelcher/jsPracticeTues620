let promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("cajones")
    }, 500)
    
  


});

promise.then((value) => {
    console.log(value);
});

  
