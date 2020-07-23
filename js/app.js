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
const navBar = document.querySelector(".navbar__menu");
const navBarUl = navBar.querySelector("ul")
const navBarList = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");

console.log(allSections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Function to get the ID for a section
const getId = (section) => {
    let text = section.querySelector("h2").textContent;
    let finalID = text.replace(/ /g, "_");
    return finalID;
}
//Function to get the ID of a section
const transID = (txt) => {
    let tid = txt.replace(/ /g, "_");
    let string = `#${tid}`;
    return string;
}
//Function to add HTML link code for seach section
const addSectionItem = (section) => {
    let text = section.querySelector("h2").textContent
    let iD = getId(section);
    navBarList.insertAdjacentHTML("beforeend", `<li ><a id="${iD}" href=${section.id}><h3>${text}</h3></a></li>`)
}
//Function to Add/Remove classes and turn the nav bar link green if a section is in view
const inView = (section) => {
    window.addEventListener("scroll", function(){
        let bounding = section.getBoundingClientRect();
        if (bounding.bottom >=500 && bounding.bottom <= 1200) {
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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

allSections.forEach(addSectionItem)

// Add class 'active' to section when near top of viewport

allSections.forEach(inView);

// Scroll to anchor ID using scrollTO event


for (sect of allSections) {
    let txt = sect.querySelector("h2").textContent;
    let idForLink = transID(txt);
    let idForNav = transID(sect.id);
    let linkNav = document.querySelector(idForLink);
    let sectionNav = document.querySelector(idForNav);
    linkNav.addEventListener('click', function (event) {
        event.preventDefault();
        sectionNav.scrollIntoView(true);})}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

