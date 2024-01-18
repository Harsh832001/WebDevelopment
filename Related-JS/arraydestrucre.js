//Array Destructuring

// var alphabet = ["a", "b", "c", "d", "e", "f", "g"];

// var [car,name,harsh,...rest] = alphabet;

// // console.log(car);
// // console.log(name)
// // console.log(harsh)
// // console.log(rest)
// console.log(alphabet)

// function sumAndMultiply(a,b){
//     return [a+b, a*b, a/b]
// }

// const [sum,multiply, division="no division"] = sumAndMultiply(10,10);

// console.log(sum)
// console.log(division)

// ---------------------------------------

// Object Destruxctruing 

const Person1 = {
    name : "harsh",
    surname : "Chauhan",
    adderess : {
        city: "Rajkot",
        County:"India",
    } 
}

const Person2 = {
    name : "Nirali",
    surname : "Chudasama",
    adderess : {
        city: "Surat",
        County:"Indiaaaaaaaa",
    } 
}


const{name, surname, adderess:{city}} = Person1;
console.log(name)
console.log(surname)
console.log(city)