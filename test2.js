var promise = new Promise(function (resolve){
    console.log("inner promise"); // 1
    resolve(42);
});
promise.then(function(value){
    console.log(value); // 3
    return Promise.resolve(23344)
}).then(function(value){
    console.log(value); // 3
})

// promise


console.log("outer promise"); // 2
