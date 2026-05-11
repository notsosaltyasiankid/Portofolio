
const buttonProjects = document.getElementById("ProjectsButton");
const buttonProjects2 = document.getElementById("ProjectsButton2");
const aboutButton = document.getElementById("AboutButton");
const backButton = document.getElementById("Buttons");
const nav = document.getElementById("ProjectsMenu");
const body = document.getElementById("Body");
const Project = document.getElementById("projects");
const About = document.getElementById("AboutMe")

buttonProjects.onclick = function(){
    nav.scrollIntoView({ behavior: "smooth" })
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    body.style.overflow = "hidden";
    body.style.visibility = "hidden";
}

backButton.onclick = function(){
    body.style.overflow = "visible";
    body.style.visibility = "visible";
    body.style.opacity = 1;
    nav.style.opacity = 0;
    nav.style.visibility = "hidden";
}

buttonProjects2.onclick = function(){
    Project.scrollIntoView({ behavior: "smooth"})
}

aboutButton.onclick = function(){
    About.scrollIntoView({ behavior: "smooth"})
}