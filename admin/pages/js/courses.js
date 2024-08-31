import { registerFunc, getDataFunc, formDateFunc, createOptionsFunc, isConfirmFunc, updateDataFunc} from "../module/module.js";

let data = getDataFunc();
let category = data ? data.category ? data.category : [] : [];
export const categoryFunc = () =>{
    // global variables
    let courseEl = document.querySelector(".courses");
    let modal = courseEl.querySelector("#category-modal");
    let btnClose = modal.querySelector(".btn-close");
    let categoryList = courseEl.querySelector(".category-list");
    let categoryForm = courseEl.querySelector(".category-form");
    let courseForm = courseEl.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");
    let addCatBtn = courseEl.querySelector(".add-category-btn");
    let allFormInput = categoryForm.querySelectorAll("input");
    let allFormBtn = categoryForm.querySelectorAll("button")

    // store category coding
    categoryForm.onsubmit = (e) => {
        e.preventDefault();
        let cat = category.find((item)=>item.category == allFormInput[0].value.trim().toLowerCase());
        if(cat == undefined){
            registerFunc(categoryForm, category, 'category');
            setTimeout(()=>{
                btnClose.click();
                readCatFunc(category);
            },100)
            // show category in select
            createOptionsFunc(category, courseCategoryEl)
        }
        else {
            swal("Category Exist", 'This category is already registered !', 'warning');
        }

    }

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = categoryList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async ()=>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    category.splice(index,1);
                    updateDataFunc(category,'category')
                    readCatFunc(category);
                }
            }
        })
    }

    // reset form and form btn 
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        categoryForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = categoryList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn,index)=>{
            btn.onclick = () =>{
                addCatBtn.click();
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                allFormInput[0].value = data.category;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(categoryForm, category, 'category', index, readCatFunc);
                    // window.location.reload();
                    btnClose.click();
                }
            }
        })
    };

    

    // read category coding
    const readCatFunc = (array) =>{
        categoryList.innerHTML = '';
        array.forEach((item,index) => {
            let itemString = JSON.stringify(item);
            categoryList.innerHTML += `
            <tr>
                <td class="text-no-wrap">${index + 1}</td>
                <td class="text-no-wrap">${item.category}</td>
                <td class="text-no-wrap">${formDateFunc(item.createdAt)}</td>
                <td class="text-no-wrap">
                    <button data='${itemString}' class="edit-btn text-green-400">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="del-btn text-red-400">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `
        });
        deleteFunc();
        editFunc();
    }
    readCatFunc(category);
}

export const courseFunc = () =>{
    let data = getDataFunc();
    let courses = data ? data.courses ? data.courses : [] : [];
    let courseEl = document.querySelector(".courses");
    let modal = courseEl.querySelector("#course-modal")
    let btnClose = modal.querySelector(".btn-close");
    let courseForm = courseEl.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");
    let courseList = courseEl.querySelector(".course-list");
    let addCourseBtn = courseEl.querySelector(".add-course-btn");
    let allFormInput = courseForm.querySelectorAll("input");
    let allFormSelect = courseForm.querySelectorAll("select");
    let textAreaEl= courseForm.querySelector("textarea");
    let allFormBtn= courseForm.querySelectorAll("button");
    let couserCatSEl = courseEl.querySelector(".course-cat-select")


    // register coding
    courseForm.onsubmit = (e) => {
        e.preventDefault();
        let course = courses.find((item) => item.name == allFormInput[1].value.trim().toLowerCase());
        if (course == undefined) {
            registerFunc(courseForm, courses, 'courses');
            setTimeout(() => {
                btnClose.click();
                readCourseFunc(courses);
            }, 100)
        }
        else {
            swal("Course Exist", 'This course is already registered !', 'warning');
        }

    }

    // show category in select
    createOptionsFunc(category, courseCategoryEl, "category");
    createOptionsFunc(category, couserCatSEl, "category");
    // filter data for page 
    couserCatSEl.onchange = () =>{
        console.log(courses);
        let tmp = courses.map((item,index)=>({...item, index:index}))
        let filter = tmp.filter((item)=>item.category == couserCatSEl.value);
        readCourseFunc(filter);
    }

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = courseList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn)=>{
            btn.onclick = async ()=>{
                let index =btn.getAttribute("index");
                let cnf = await isConfirmFunc();
                if(cnf){
                    courses.splice(index,1);
                    updateDataFunc(courses,'courses')
                    readCourseFunc(courses);
                }
            }
        })
    };

    // reset form and form btn 
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        courseForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = courseList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                addCourseBtn.click();
                let index =btn.getAttribute("index");
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                allFormInput[1].value = data.name;
                allFormInput[2].value = data.duration;
                allFormInput[3].value = data.link;
                allFormInput[4].value = data.price;
                data.live ? allFormInput[5].checked = true : allFormInput[5].checked = false;
                data.free ? allFormInput[6].checked = true : allFormInput[6].checked = false;
                allFormSelect[0].value = data.category;
                textAreaEl.value = data.desc;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(courseForm, courses, 'courses', index, readCourseFunc);
                    // window.location.reload();
                    readCourseFunc(courses)
                    btnClose.click();
                }
            }
        })
    };

    //read course coding
    const readCourseFunc = (array) =>{
        courseList.innerHTML = '';
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            courseList.innerHTML +=`
            <tr>
            <td class="text-no-wrap">${index + 1}</td>
            <td class="text-no-wrap">
                <img src="${item.profile}" alt="thumb" width="40px">
            </td>
            <td class="text-no-wrap">${item.category}</td>
            <td class="text-no-wrap">${item.name}</td>
            <td class="text-no-wrap text-red-400">
                <a href="${item.link}">link</a>
            </td>
            <td class="text-no-wrap">${item.price}</td>
            <td class="text-no-wrap">${item.duration}</td>
            <td class="text-no-wrap">${formDateFunc(item.createdAt)}</td>
            <td class="text-no-wrap">
                <button index="${item.index ? item.index : index}" data='${itemString}' class="edit-btn text-green-400">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button index="${item.index ? item.index : index}" class="del-btn text-red-400">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
            </tr>

            `
        });
        deleteFunc();
        editFunc();
    };
    readCourseFunc(courses);
}