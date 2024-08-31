import { 
    getDataFunc,
    }
from "../../admin/pages/module/module.js";

// get data
let data = getDataFunc();
const courseAss = data.courses;

export const courses = () =>{
    let courseList = document.querySelector(".course-list");
    courseAss.forEach((item,index) => {
        courseList.innerHTML +=`
        <div class="card flex gap-y-4 p-3 bg-white shadow">
            <img src="${item.profile}" alt="">
            <div class="flex justify-between">
                <h5 class="font-bold capitalize">
                ${item.name}
                </h5>
                <p>
                <i class="fa fa-rupee"></i>
                ${item.price}
                </p>
            </div>
            <div class="d-flex justify-between">
                <button class="btn ${item.free ? 'bg-green-400' : 'bg-pink-400'} text-white">
                ${item.free ? 'Free' : 'Paid'}
                </button>
                <button class="btn ${item.live ? 'bg-red-500' : 'bg-yellow-400'} text-white">
                ${item.live ? 'Live' : 'Completed'}
                </button>
                <a href="${item.link}">
                <button class="btn bg-blue-400 text-white">
                    Course link
                </button>
                </a>
            </div>
            <a href="#/syllabus" class="course-btn" name="${item.name}">
                <button class="btn bg-green-500 text-white w-full">
                    Syllabus
                </button>
            </a>
    </div>
        `
    });
    let allCourseBtn = courseList.querySelectorAll(".course-btn");
    allCourseBtn.forEach((btn,index)=>{
        btn.onclick = () =>{
            let course = btn.getAttribute("name");
            sessionStorage.setItem("course", course)
        }
    })
}