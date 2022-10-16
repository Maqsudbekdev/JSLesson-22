// IF ELSE || SWITCH CASE

// let  age = 1;
// if(age== 10){
//     console.log("Yosh 10 ga teng!");
// }
// else if(age == 11){
//     console.log("Yosh 11ga teng");
// }
// else{
//     console.log("Yosh 10 ga teng emas!");
// }


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(inp.value.toLOwerCase === "dushanba"  ){
        console.log("Monday");
    }
    else if(inp.value.toLOwerCase === "seshanba"){
        console.log("Tuesday");
    }
    else if(inp.value.toLOwerCase === "chorshanba"){
        console.log("Wednesday");
    }
    else if(inp.value.toLOwerCase === "payshanba"){
        console.log("Thursday");
    }
    else if(inp.value.toLOwerCase === "juma"){
        console.log("Friday");
    }
    else if(inp.value.toLOwerCase === "shanba"){
        console.log("Saturday");
    }
    else if(inp.value.toLOwerCase === "yakshanba"){
        console.log("Sunday");
    }
    else{
        console.log("Hafta kunini to'gri katta harf bilan yozing !");
    }

})

let age = 23;
if(age<25){
    console.log("Hali kredit bermaymiz!");
}
else if(age >=25 && age <=30){
    console.log("Kreditni oldingiz qarzga botdingiz!");
}
else{
    console.log("Keling kattaroq oling");
}


let today = "Sunday";
let weather  = "sunny"

if(today === "Sunday"){
    console.log("Let's have a rest");
    if(weather === "sunny"){
        console.log("Let's go to the beach!");
    }
    else{
        console.log("Let's go to the cinema!");
    }
}
else{
    console.log("Hurry up to the work!");
}

const lamp = false;
lamp === true ? console.log("SVET BOR") : console.log("SVET YOQ");
// if(lamp === true){
//     console.log("SVET BOR");
// }
// else{
//     console.log("SVET YOQ");
// }





let word  = "Hello"
let letter = word.split("o")
console.log(letter);