console.log("hi youlserf");
let a = 0;
let i = 0;
while(i < 100){
    i ++;
    if(i % 3 == 0){
        console.log("fizz");
        console.log(i);
    }
    if(i % 5 == 0){
        console.log("buzz");
        console.log(i);
    }
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
        console.log(i);
    }
};