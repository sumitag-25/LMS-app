import { 
    getDataFunc,
    }
from "../../admin/pages/module/module.js";

export const syllabus = () =>{
    // get data from local storage
    let data = getDataFunc();
    let {courses} = data;
    let {topics} = data;
    let {chapters} = data;
    
    // get course from session
    let courseName = sessionStorage.getItem("course");
    let filterCourse = courses.filter((item)=>item.name == courseName);
    let filterTopics = topics.filter((item)=>item.course == courseName);
    
    // global variables
    let syllabusEl = document.querySelector(".syllabus");
    let courseNEl = syllabusEl.querySelector(".course-name");
    let courseDEl = syllabusEl.querySelector(".course-desc");
    let topicList = syllabusEl.querySelector(".topic-list");

    // show course name and description
    courseNEl.innerHTML = filterCourse[0].name;
    courseDEl.innerHTML = filterCourse[0].desc;
    
    // show topics
    filterTopics.forEach((item,index) => {
        // filter chapter thats belong to current topic
        const filterChpaters = chapters.filter((chapter)=>chapter.topic == item.name);
        const chapterHtml = filterChpaters.map((ch)=>`
            <p class="my-1">${ch.name}</p>
        `).join(" ");
        topicList.innerHTML += `
        <div class="bg-white mt-2 p-4">
            <h2 class="capitalize font-bold text-2xl">${item.name}</h2>
            ${chapterHtml}
        </div>
        `
    });
}