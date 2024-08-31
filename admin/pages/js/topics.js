import { registerFunc, getDataFunc, formDateFunc, createOptionsFunc, isConfirmFunc, updateDataFunc} from "../module/module.js";

export const topicFunc = () =>{
    let data = getDataFunc();
    let category = data ? data.category ? data.category : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let topics = data ? data.topics ? data.topics : [] : [];
    let topiceEl = document.querySelector(".topics");
    let modal = topiceEl.querySelector("#topics-modal")
    let btnClose = modal.querySelector(".btn-close");
    let topicForm = topiceEl.querySelector(".topic-form");
    let topicCatEl = topicForm.querySelector(".topic-category");
    let topicCourseEl = topicForm.querySelector(".topic-course");
    let topicList = topiceEl.querySelector(".topics-list");
    let addTopicBtn = topiceEl.querySelector(".add-topic-btn");
    let allFormInput = topicForm.querySelectorAll("input");
    let allFormSelect = topicForm.querySelectorAll("select");
    let allFormBtn= topicForm.querySelectorAll("button");
    let topicCatSEl = topiceEl.querySelector(".topic-cat-select");
    let topicCourseSEl = topiceEl.querySelector(".topic-course-select");


    // register coding
    topicForm.onsubmit = (e) => {
        e.preventDefault();
        let topic = topics.find((item) => {
            return(
                item.course[0] == allFormSelect[1].value &&
                item.name == allFormInput[0].value.trim().toLowerCase()
            )
        });
        if (topic == undefined) {
            registerFunc(topicForm, topics, "topics");
            setTimeout(() => {
                btnClose.click();
                readTopicFunc(topics);
            }, 100)
        }
        else {
            swal("Topic Exist", 'This topic is already registered !', 'warning');
        }
    }

    // show category in select select
    createOptionsFunc(category, topicCatEl, "category");
    // show category in page select 
    createOptionsFunc(category, topicCatSEl, "category");
    // filter course in form select 
    topicCatEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatEl.value));
        createOptionsFunc(filter, topicCourseEl, "name")
    }
    // filter course in page select 
    topicCatSEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatSEl.value));
        createOptionsFunc(filter, topicCourseSEl, "name")
    }
    // filter topic at page
    topicCourseSEl.onchange = () =>{
        let tmp = topics.map((item,index)=>({...item, index:index}))
        let filter = tmp.filter((item)=>item.course == topicCourseSEl.value);
        readTopicFunc(filter);
    }

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = topicList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn)=>{
            let index = btn.getAttribute("index");
            btn.onclick = async ()=>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    topics.splice(index,1);
                    updateDataFunc(topics,'topics')
                    readTopicFunc(topics);
                }
            }
        })
    };

    // reset form and form btn
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        topicForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = topicList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                let index = btn.getAttribute("index");
                addTopicBtn.click();
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                allFormInput[0].value = data.name;
                allFormSelect[0].value = data.category;
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(topicForm, topics, 'topics', index, readTopicFunc);
                    // window.location.reload();
                    btnClose.click();
                }
            }
        })
    };

    //read course coding
    const readTopicFunc = (array) =>{
        topicList.innerHTML = '';
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            topicList.innerHTML +=`
            <td class="text-no-wrap">${index + 1}</td>
                <td class="text-no-wrap">${item.category}</td>
                <td class="text-no-wrap">${item.course}</td>
                <td class="text-no-wrap">${item.name}</td>
                <td class="text-no-wrap">${formDateFunc(item.createdAt)}</td>
                <td class="text-no-wrap">
                    <button index="${item.index ? item.index : index}" data='${itemString}' class="edit-btn text-green-400">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button index="${item.index ? item.index : index}" class="del-btn text-red-400">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>

            `
        });
        deleteFunc();
        editFunc();
    };
    readTopicFunc(topics);
}