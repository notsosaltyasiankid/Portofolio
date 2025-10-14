
const button = document.getElementById("ProjectsButton");
const nav = document.getElementById("ProjectsMenu");
const body = document.getElementById("Body")

button.onclick = function(){
    nav.scrollIntoView({ behavior: "instant" })
    nav.style.visibility = "visible";
    body.style.overflow = "hidden";
    body.style.visibility = "hidden";
}

document.querySelector(".projects-btn").addEventListener("click", function() 
{
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});