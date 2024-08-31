import { registerFunc, getDataFunc, formDateFunc, createOptionsFunc, isConfirmFunc, updateDataFunc} from "../module/module.js";

export const chapterFunc = () =>{
    let data = getDataFunc();
    let category = data ? data.category ? data.category : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let topics = data ? data.topics ? data.topics : [] : [];
    let chapters = data ? data.chapters ? data.chapters : [] : [];
    let chapterEl = document.querySelector(".chapters");
    let modal = chapterEl.querySelector("#chapter-modal")
    let btnClose = modal.querySelector(".btn-close");
    let chapterForm = chapterEl.querySelector(".chapter-form");
    let chapterCatEl = chapterForm.querySelector(".chapter-category");
    let chapterCourseEl = chapterForm.querySelector(".chapter-course");
    let chapterTopiceEl = chapterForm.querySelector(".chapter-topic");
    let chapterList = chapterEl.querySelector(".chapter-list");
    let addChapterBtn = chapterEl.querySelector(".add-chapter-btn");
    let allFormInput = chapterForm.querySelectorAll("input");
    let allFormSelect = chapterForm.querySelectorAll("select");
    let allFormBtn= chapterForm.querySelectorAll("button");
    let chapterCatSEl = chapterEl.querySelector(".chapter-cat-select");
    let chapterCourseSEl = chapterEl.querySelector(".chapter-course-select");
    let chapterTopicSEl = chapterEl.querySelector(".chapter-topic-select");


    // register coding
    chapterForm.onsubmit = (e) => {
        e.preventDefault();
        let chapter = chapters.find((item) => {
            return(
                item.course[0] == allFormSelect[1].value &&
                item.topic == allFormSelect[2].value &&
                item.name == allFormInput[0].value.trim().toLocaleLowerCase()
            )
        });
        if (chapter == undefined) {
            registerFunc(chapterForm, chapters, "chapters");
        setTimeout(()=>{
            btnClose.click();
            readChapterFunc(chapters);
        },100)
        }
        else {
            swal("Chapter Exist", 'This chapter is already registered !', 'warning');
        }
        
    }

    // show category in form select
    createOptionsFunc(category, chapterCatEl, "category");
    // show category in page select 
    createOptionsFunc(category, chapterCatSEl, "category");
    // show course in form select 
    chapterCatEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == chapterCatEl.value));
        createOptionsFunc(filter, chapterCourseEl, "name")
    }
    // show topic in form select 
    chapterCatSEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == chapterCatSEl.value));
        createOptionsFunc(filter, chapterCourseSEl, "name")
    }
    // show course in page select 
    chapterCourseSEl.onchange = () =>{
        let filter = topics.filter((item)=>(item.course == chapterCourseSEl.value));
        createOptionsFunc(filter, chapterTopicSEl, "name")
    }
    // show topic in page select
    chapterCourseEl.onchange = () =>{
        let filter = topics.filter((item)=>(item.course == chapterCourseEl.value));
        createOptionsFunc(filter, chapterTopiceEl, "name");
    }

    // filter chapters at page
    chapterTopicSEl.onchange = () =>{
        let tmp = chapters.map((item,index)=>({...item, index:index}))
        let filter = tmp.filter((item)=>(
            item.course[0] == chapterCourseSEl.value &&
            item.topic == chapterTopicSEl.value
        ));
        readChapterFunc(filter);
    }

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = chapterList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn)=>{
            btn.onclick = async ()=>{
                let index = btn.getAttribute("index");
                let cnf = await isConfirmFunc();
                if(cnf){
                    chapters.splice(index,1);
                    updateDataFunc(chapters,'chapters')
                    readChapterFunc(chapters);
                }
            }
        })
    };
    
    // reset form and form btn
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        chapterForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = chapterList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                addChapterBtn.click();
                let index = btn.getAttribute("index");
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                allFormInput[0].value = data.name;
                allFormInput[1].value = data.notes;
                allFormInput[2].value = data.videos;
                allFormSelect[0].value = data.category;
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`;
                allFormSelect[2].innerHTML = `<option>${data.topic}</option>`;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(chapterForm, chapters, 'chapters', index, readChapterFunc);
                    // window.location.reload();
                    btnClose.click();
                }
            }
        })
    };

    //read course coding
    const readChapterFunc = (array) =>{
        chapterList.innerHTML = '';
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            chapterList.innerHTML +=`
            <td class="text-no-wrap">${index + 1}</td>
                <td class="text-no-wrap">${item.category}</td>
                <td class="text-no-wrap">${item.course}</td>
                <td class="text-no-wrap">${item.topic}</td>
                <td class="text-no-wrap">${item.name}</td>
                <td class="text-no-wrap">
                    <a href="${item.notes}">Link</a>
                </td>
                <td class="text-no-wrap">
                    <a href="${item.videos}">Link</a>
                </td>
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
    readChapterFunc(chapters);
}