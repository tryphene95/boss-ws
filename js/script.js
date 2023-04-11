exercie4

function objecToArray(obj) {
    return Object.entries(obj); 
    console.log(objecToArray({D: 1, B: 2, C: 3})); //[["D", 1],["B, 2"],["C, 3"]]
    console.log(objecToArray({likes: 2, dislikes: 3, followers: 10})); // [["likes",2],["dislikes",3] ,["followers", 10]]
}

exercie5

function greetGuest(name) {
    const GUEST_LIST = {
        Randy: " Germany",
        Karla: "France" ,
        Wendy: "Japan" ,
        Norman: "England",
        Sam:"Argentina"
    };
    if (GUEST_LIST.hasOwnProperty(name)) {
        return "Hi I'm ${name}, and I'm from ${GUEST_LIST [name]}. ";
    } else {
        return "sorry, you name is not on the guest list.";
    }
}

exercie1


function countTrue(arr) { 
    let cout = 0;
    for (let i = 0; i< arr. length;i++) {
        if ( arr[i] === true) {
            count++;
        }
    }
   return count;
}

exercie6

function isSameNum(num1, num2) {
    return num1 === num2

    console.log(isSameNum(4, 8)); // fasle
    console.log(isSameNum(2, 2)); // true
    console.log(isSameNum(2, "2")); // false
}

exercie7

function getBudgets(arr) {
    let totalBudget = 0;
    for ( let i = 0; i < arr.length; i++) {
        totalBudget += arr[i].budget;
    }
    return totalBudget
}
console.log(getBudgets)[
    { name: "john" , age: 21, budget: 23000 },
    {name: "steve", age: 32, budget:40000 },
    {name:"martin", age: 16, budget:27000 }
]  // 65700
console.log(getBudgets([
    {name: "john" , age: 21, budget: 29000 },
    {name:"steve" , age :32 , budget:32000},
    {name:"martin" ,age: 16, budget: 1600},
])); //62600