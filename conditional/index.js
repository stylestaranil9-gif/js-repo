let age = 18
let dl = true

// nested if elses

if (age>=18 && dl==true) { //if both are true   (age>=18 || dl==true)  if one are true 
    console.log("you aree able to drive")
    if (age==19) {
        console.log("yehh")
    }else{
        console.log("you can drive but slowly")
    }
}else{
    console.log("you are unzble")
}

//if eles ladder

let adhar = false

let pan = true

if (adhar) {
    console.log("you can vote")
} else if (pan){
    console.log("you have pan and yoou can vote")
} else{
    console.log("ypu can not vote")
}


let num =10

if (num>5) {
    console.log("num is greter than 5")    // in if else laddere if first codition match then then its end  
} else if(num>8){
    console.log('num isgreater than 8')
}