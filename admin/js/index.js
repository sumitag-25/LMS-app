// start golbal variable 
let toggleBtn = document.querySelector(".toggle-btn");
let sideNav = document.querySelector(".side-nav");
let pageContent = document.querySelector(".page-content");
let page = document.querySelector(".page");
let imageItem = document.querySelectorAll(".image-items");

// end golbal variable 

// start toggler coding
toggleBtn.addEventListener('click', ()=>{
    sideNav.classList.toggle("active")
    pageContent.classList.toggle("active")
})
// end toggler coding

// import routes form pages folder
import dashboard from "../pages/dashboard.js";
import courses from "../pages/courses.js";
import users from "../pages/users.js";
import topics from "../pages/topics.js";
import chapters from "../pages/chapters.js";
import settings from "../pages/settings.js";
import notFound from "../pages/not-found.js";

// import routes js file form pages/js folder
import { dashboardFunc } from "../pages/js/dashboard.js";
import { usersFunc } from "../pages/js/users.js";
import { categoryFunc,courseFunc } from "../pages/js/courses.js";
import { topicFunc } from "../pages/js/topics.js";
import { chapterFunc } from "../pages/js/chapters.js";
import { settingFunc } from "../pages/js/settings.js";



const routes = {
    '/' : dashboard,
    '/courses' : courses,
    '/topics' : topics,
    '/chapters' : chapters,
    '/users' : users,
    '/settings' : settings,
}



// hangling the routs 

const handelRouts = () =>{
    let path = window.location.hash.replace("#", "") || '/';
    page.innerHTML = routes[path] || notFound;
    if(path == "/"){
        dashboardFunc();
    }

    else if(path == "/users"){
        usersFunc();
    }

    else if(path == "/courses"){
        categoryFunc();
        courseFunc()
    }
    
    else if(path == "/topics"){
        topicFunc();
    }

    else if(path == "/chapters"){
        chapterFunc();
    }

    else if(path == "/settings"){
        settingFunc();
    }
}

imageItem.forEach(item =>{
    item.onclick = () =>{
        imageItem.forEach(el=>{
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
