
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

document.querySelector(".projects-btn").addEventListener("click", function() 
{
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

<button id="ProjectsButton" class="MoreProjects">More projects</button> 