
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

// Objects
//const person = { 
    email: "lars.gunnar@jobloop.no"
    name: "Lars Gunnar"
    age: 34
 //}
//console.log(person.age)