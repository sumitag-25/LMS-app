import { registerFunc, getDataFunc, formDateFunc, createOptionsFunc, isConfirmFunc, updateDataFunc} from "../module/module.js";

export const settingFunc = () =>{
    let data = getDataFunc();
    let pageNoti = data ? data.pageNoti ? data.pageNoti : [] : [];
    let settingEl = document.querySelector(".settings");
    let modal = settingEl.querySelector("#page-n-modal")
    let btnClose = modal.querySelector(".btn-close");
    let pageNForm = settingEl.querySelector(".page-n-form");
    let allFormInput = pageNForm.querySelectorAll("input");
    let allFormBtn= pageNForm.querySelectorAll("button");
    let textAreaEl= pageNForm.querySelector("textarea");
    let pageNpreview= settingEl.querySelector(".page-n-preview");
    let h1El = pageNpreview.querySelector("h1");
    let pageNList = settingEl.querySelector(".page-n-list");
    let addPageNBtn = settingEl.querySelector(".add-page-n-btn");

    // page notification preview coding
    textAreaEl.oninput = () => {
        h1El.innerHTML = textAreaEl.value;
    }

    allFormInput[1].oninput = () => {
        pageNpreview.style.backgroundColor = allFormInput[1].value;
    }

    allFormInput[2].oninput = () => {
        h1El.style.color = allFormInput[2].value;
    }

    // register coding
    pageNForm.onsubmit = (e) => {
        e.preventDefault();
        registerFunc(pageNForm, pageNoti, "pageNoti");
        setTimeout(() => {
            btnClose.click();
            readPageNFunc(pageNoti);
        }, 100)
    }

    
    

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = pageNList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async ()=>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    pageNoti.splice(index,1);
                    updateDataFunc(pageNoti,'pageNoti')
                    readPageNFunc(pageNoti);
                }
            }
        })
    };

    // reset form and form btn
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        pageNForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = pageNList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn, index)=>{
            btn.onclick = () =>{
                addPageNBtn.click();
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                h1El.innerHTML = data.notification;
                h1El.style.color = data.textColor;
                pageNpreview.style.backgroundColor = data.bgColor;
                allFormInput[0].value = data.page;
                allFormInput[1].value = data.bgColor;
                allFormInput[2].value = data.textColor;
                textAreaEl.value = data.notification
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(pageNForm, pageNoti, 'pageNoti', index, readPageNFunc);
                    // window.location.reload();
                    btnClose.click();
                }
            }
        })
    };

    //read course coding
    const readPageNFunc = (array) =>{
        pageNList.innerHTML = '';
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            pageNList.innerHTML +=`
            <tr>
                <td>${index+1}</td>
                <td>${item.notification}</td>
                <td>${item.page}</td>
                <td>${formDateFunc(item.createdAt)}</td>
                <td>
                    <button  data='${itemString}' class="btn edit-btn text-green-400">
                        <i class="fa fa-edit"></i>
                    </button>

                    <button class="btn del-btn text-red-400">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            `
        });
        deleteFunc();
        editFunc();
    };
    readPageNFunc(pageNoti);
}