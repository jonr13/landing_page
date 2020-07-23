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
const navBarUl = navBar.querySelector("ul")
const navText = navBarUl.querySelectorAll("h3")
const navBarList = document.querySelector("#navbar__list");

const getId = (section) => {
    let text = section.querySelector("h2").textContent;
    let finalID = text.replace(" ", "_");
    return finalID;
} 


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
const allSections = document.querySelectorAll("section");

const addSectionItem = (section) => {
    let text = section.querySelector("h2").textContent
    let iD = getId(section);
    console.log(iD);
    navBarList.insertAdjacentHTML("beforeend", `<li ><a id="${iD}" href=${section.id}><h3>${text}</h3></a></li>`)
}
allSections.forEach(addSectionItem)




// Add class 'active' to section when near top of viewport

const inView = (section) => {
    window.addEventListener("scroll", function(){
        let bounding = section.getBoundingClientRect();
        if (bounding.bottom >= 700 && bounding.bottom <= 1050) {
            section.classList.add("your-active-class");
            let nID = `#${getId(section)}`;
            let editingID = document.querySelector(nID);
            editingID.style.setProperty("color", "green");
        } else {
            section.classList.remove("your-active-class");
            let nID = `#${getId(section)}`;
            let editingID = document.querySelector(nID);
            editingID.style.setProperty("color", "black");
        }
    })};

allSections.forEach(inView)



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

