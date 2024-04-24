
/**
 * ==========================
 * Change theme functionality
 * ==========================
 */

// Først finn <button> elementet
//const buttonElement = document.getElementById("theme-changer")
//console.log(buttonElement)
//console.dir(buttonElement)
//buttonElement.textContent = "Something new"

let buttonElement = document.getElementById("theme-changer")

function changeTheme() {
    // Først finne body elementet
    const body = document.getElementById("body")

    // Så finn ut hva er klassenavnet nå
    const currentTheme = body.className

    //Hvis lyst tema skift til mørkt 
    const isBright = currentTheme === "theme-bright"
    console.log(isBright)

    if (isBright) {
        body.className = "theme-dark"
    } else {
        body.className = "theme-bright"
    }

    //Hvis mørkt tema skift til lyst 
   
}

buttonElement.addEventListener("click", changeTheme)


// Definer variabel
let greeting

// Gi den en verdi
greeting = "En vilkårlig verdi"

/**
   * let er et nøkkelord for å vise at det som kommer etterpå er en variabel, så kan du egentlig velge hva du vil som variablen, så når vi skriver = sier vi til datamaskinen at den skal lagre det som kommer etterpå, altså det som er i hermetegn 
    * vi kan bare skrive litt javascript i html-filen, ikke mye
*/
// Gjøre noe med den variabelen
console.log(greeting)

// Omdefinere verdien til variabel (gi den en ny verdi)
greeting = "En helt ny verdi"
console.log(greeting)

// Definer konstanter
const constantVariabel = "I am Constant"

let changeableVariable = "Testing"

// Nest linje crasher programmet
// constantVariabel = "This does not work"

/**
 * Flere linjer med
 * kommentarer
 */

let notDefined
console.log(notDefined)

let notYetDefined = null
console.log(notYetDefined)

// Komplekse typer
// Array
const numbers = [ 1,  2,  3, 4 ]
console.log(numbers)

const names = [ 
    "Per", 
    "Pål", 
    "Espen" 
]
console.log(names)

// Objects
const person = { 
    email: "lars.gunnar@jobloop.no",
    name: "Lars Gunnar",
    age: 34
 }
console.log(person)