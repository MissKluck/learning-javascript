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
	«Per», 
	«Pål», 
	«Espen» 
]
console.log(names)

// Objects
const person = { 
	email: «lars.gunnar@jobloop.no»
	name: «Lars Gunnar»
	age: 34
 }
console.log(person)