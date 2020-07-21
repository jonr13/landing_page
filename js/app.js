/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const mainHeader = document.querySelector(".main__hero");
const navBar = document.querySelector(".navbar__menu");
const navBarMenu = document.querySelector(".navbar__menu");
const navBarList = document.querySelector("#navbar__list");

const oneDesc = document.getElementById("section1").querySelector("h2").textContent;
const twoDesc = document.getElementById('section2').querySelector("h2").textContent;
const threeDesc = document.getElementById('section3').querySelector("h2").textContent;

let sectDescriptions = ["Top"]

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//Step 1: Add section descriptions to an array
const addDescriptions = (oneDesc, twoDesc, threeDesc) => {
    sectDescriptions.push(oneDesc);
    sectDescriptions.push(twoDesc);
    sectDescriptions.push(threeDesc);
    return sectDescriptions;
}
console.log(addDescriptions(oneDesc, twoDesc, threeDesc));
//Step 2: Add a list item with for every section including "Top", add a a description for each list item

const addListItem = (sectDescriptions) => {
    for (item of sectDescriptions) {
        let li = document.createElement("li");
        let liText = document.createElement("h3");
        liText.textContent = item;
        li.appendChild(liText);
        navBarList.insertAdjacentElement("beforeend", li);
    }
}
addListItem(sectDescriptions);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
