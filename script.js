
const buttonProjects = document.getElementById("ProjectsButton");
const opacityButton = document.getElementById("Buttons")
const nav = document.getElementById("ProjectsMenu");
const body = document.getElementById("Body")

buttonProjects.onclick = function(){
    nav.scrollIntoView({ behavior: "instant" })
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    body.style.overflow = "hidden";
    body.style.visibility = "hidden";
}