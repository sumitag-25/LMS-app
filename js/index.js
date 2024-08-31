// start golbal variable 
let page = document.querySelector(".page");
let menuItem = document.querySelectorAll(".menu-items");


// import routes form pages folder
import registerEl from "../pages/register.js";
import notFound from "../pages/not-found.js";
import loginEl from "../pages/login.js";
import home from "../pages/home.js";
import coursesEl from "../pages/courses.js";
import syllabusEl from "../pages/syllabus.js";

// import routes js file form pages/js folder
import { register } from "../pages/js/register.js";
import { login } from "../pages/js/login.js";
import { courses } from "../pages/js/courses.js";
import { syllabus } from "../pages/js/syllabus.js";



const routes = {
    '/' : home,
    '/register' : registerEl,
    '/login' : loginEl,
    '/courses' : coursesEl,
    '/syllabus' : syllabusEl,
}



// hangling the routs 

const handelRouts = () =>{
    let path = window.location.hash.replace("#", "") || '/';
    page.innerHTML = routes[path] || notFound;
    if(path == "/"){
        // dashboardFunc();
    }
    else if(path == "/register"){
        register();
    }
    else if(path == "/login"){
        login();
    }
    else if(path == "/courses"){
        courses();
    }
    else if(path == "/syllabus"){
        syllabus();
    }
}

menuItem.forEach(item =>{
    item.onclick = () =>{
        menuItem.forEach(el=>{
            el.classList.remove("active");
        })
        let path = item.getAttribute("to");
        window.location.hash = path;
        item.classList.add("active");
        
    }
})

// handel hash change 

window.onhashchange = () => {
    handelRouts();
}

handelRouts();
