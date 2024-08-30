// variables 1

{


let firstName;
let lastName;
firstName = "irtaza"
lastName = "ahmed"

let address = "main street"
address = "first street"

console.log(firstName)
console.log(lastName)
console.log(address)

}
// Concatenate string

{
    let street;
    let country;
    street = "karachi"
    country = "Pakistan"

    let fullMailingAddress = street + country
    console.log(fullMailingAddress)
}

// Numbers

{
    let score1 = 23
    let score2 = 45
    let score3 = 67

    let totalScore = score1 + score2 + score3
    let avgScore = (score1 + score2 + score3) / 3

    console.log(totalScore)
    console.log(avgScore)

    let plates = 20
    let people = 7
    let remainingPlates = plates % people
    remainingPlates++

    let message = "There are " +  remainingPlates + " plates available"

    console.log(message)

}

// Arrays

{
    let fruits = ["apple", "banana", "grapes", "mango", 34]
    let firstFruits = fruits[0]
    fruits[4] = "orange"
    console.log(firstFruits)
    console.log(fruits)
}

// Functions

{
    function calculateTotal(subTotal, tax) {
        return subTotal + tax
    }

    let order1= calculateTotal(12, 56)
    let order2= calculateTotal(8, 32)
    let order3= calculateTotal(76, 59)

    calculateTotal(23, 45)
    console.log(order1, order2, order3)
}