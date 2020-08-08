console.log("Loading Index.js");

function id(idName) {
    return document.getElementById(idName)
}

//var navIconIds = ["nav-icon-1", "nav-icon-2", "nav-icon-3", "nav-icon-4", "nav-icon-5"]
//var sectionIds = ["welcome-section", "project-section", "experience-section", "about-section", "contact-section"]
var navIconIds = ["nav-icon-1", "nav-icon-2"]
var sectionIds = ["welcome-section", "project-section"]

var height = screen.height
var width = screen.width

function changeSelectedNavIcon(nextNavIcon) {

    //If the nextNavIcon is already selected, then do not change its class as it will reanimate in.
    if (id(nextNavIcon).classList.contains("nav-dot-selected")) {
        return
    }

    //Iterate through the navigation icons and remove the class for any that are selected.
    for (navIcon of navIconIds) {
        if (id(navIcon).classList.contains("nav-dot-selected")) {
            id(navIcon).className = "nav-dot-unselected"
        }
    }

    //Set the selected one to the right class.
    id(nextNavIcon).className = "nav-dot-selected"
}

function determineCurrentScreen(ev) {

    var targetDistance = height * 0.4
    var currentSectionIndex = 0
    var currentDistance = 99999999999

    //for (sectionName of sectionIds) {
    for (index = 0; index < sectionIds.length; index++) {

        //Get the distance to the top of the screen for the given section.
        var divName = id(sectionIds[index]);
        var distanceToTop = divName.getBoundingClientRect().top;

        //Check if that is the closest screen to whose top is above and closest to the target distance.
        if (distanceToTop <= targetDistance && targetDistance - distanceToTop < currentDistance) {
            currentDistance = targetDistance - distanceToTop
            currentSectionIndex = index
        }
    }
    changeSelectedNavIcon(navIconIds[currentSectionIndex])

}

determineCurrentScreen()
window.addEventListener('scroll', determineCurrentScreen);
