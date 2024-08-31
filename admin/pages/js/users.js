import { registerFunc,
     getDataFunc,
      formDateFunc,
     isConfirmFunc,
     updateDataFunc,
     createOptionsFunc,
     } 
from "../module/module.js";

export const usersFunc = () =>{
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [] ;
    let courses = data ? data.courses ? data.courses : [] : [] ;
    let usersMsg = data ? data.usersMsg ? data.usersMsg : [] : [] ;
    let usersEl = document.querySelector(".users");
    let model = usersEl.querySelector("#users-modal");
    let btnClose = model.querySelector(".btn-close");
    let usersForm = usersEl.querySelector(".users-form");
    let userList = usersEl.querySelector(".user-list");
    let addUserBtn = usersEl.querySelector(".add-user-btn");
    let allFormInput = usersForm.querySelectorAll("input");
    let allFormSelect = usersForm.querySelectorAll("select");
    let textAreaEl = usersForm.querySelector("textarea");
    let allFormBtn = usersForm.querySelectorAll("button");
    let togglePBtn = usersForm.querySelector(".toggle-p-btn");
    let userMModal = usersEl.querySelector("#user-m-modal");
    let mBtnClose = userMModal.querySelector(".btn-close");
    let userMForm = userMModal.querySelector(".user-m-form");
    let allUMFormInput = userMForm.querySelectorAll("input");
    let userMList = usersEl.querySelector(".user-msg-list");
    

    // user regiester coding
    usersForm.onsubmit = (e) => {
        e.preventDefault();
        let email = users.find((item)=>item.email == allFormInput[3].value.trim().toLowerCase());
        if(email == undefined){
            registerFunc(usersForm, users, 'users');
            btnClose.click();
            setTimeout(()=>{
                readUserFunc(users);
            },100);
        }
        else{
            swal("User Exist", 'This email is already registered !', 'warning');
        }
    }

    //toggle password
    togglePBtn.onclick = () =>{
        if(allFormInput[4].type == "password")
            {
            allFormInput[4].type = "text";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`
            }
        else{
            allFormInput[4].type = "password";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
        }
    }

    // show course in form select
    createOptionsFunc(courses, allFormSelect[1], 'name');

    // Delete coding
    const deleteFunc = () =>{
        let allDelBtn = userList.querySelectorAll(".del-dtn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async ()=>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    users.splice(index,1);
                    updateDataFunc(users,'users')
                    readUserFunc(users);
                }
            }
        })
    }

    // reset form and form btn 
    btnClose.onclick = () =>{
        allFormBtn[0].classList.remove("d-none");
        allFormBtn[1].classList.add("d-none");
        usersForm.reset()
    }

    // edit coding
    const editFunc = () =>{
        let allEditBtn = userList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn,index)=>{
            btn.onclick = () =>{
                addUserBtn.click();
                let string = btn.getAttribute('data');
                let data = JSON.parse(string);
                allFormInput[1].value = data.name;
                allFormInput[2].value = data.mobile;
                allFormInput[3].value = data.email;
                allFormInput[4].value = data.password;
                allFormInput[5].value = data.father;
                data.status ? allFormInput[6].checked = true : allFormInput[6].checked = false;
                data.type == 'admin' ? allFormInput[7].checked = true : allFormInput[7].checked = false;
                data.type == 'teacher' ? allFormInput[8].checked = true : allFormInput[8].checked = false;
                data.type == 'user' ? allFormInput[9].checked = true : allFormInput[9].checked = false;
                allFormInput[10].value = data.price;
                allFormSelect[0].value = data.qualification;
                let options = allFormSelect[1].querySelectorAll("option");
                options.forEach((op,index)=>{
                    if(data.course && data.course.includes(op.value)){
                        op.selected = true;
                    }
                });
                textAreaEl.value = data.address;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(usersForm, users, 'users', index, readUserFunc);
                    // window.location.reload();
                    btnClose.click();
                }
            }
        })
    }

    // show user message coding
    const showUserMessage = () =>{
        let allStatusBtn = userList .querySelectorAll(".status-btn")
        allStatusBtn.forEach((btn,index)=>{
            btn.onclick = () =>{
                let email = btn.getAttribute("email");
                controlUserAdminMsg(email);
            }
        })
    }

    // control user and admin message

    const controlUserAdminMsg = (email) => {
        // filter all message 
        let filterAllMsg = usersMsg.map((item, index) => (
            { ...item, index: index }
        ))
            .filter((item) => (
                item.email == email 
            ));

        // update status

        const updateStatus = () => {
            {
                let allSBtn = userMList.querySelectorAll(".status-btn");
                allSBtn.forEach((btn, no) => {
                    btn.onclick = () => {
                        let index = btn.getAttribute("index");
                        let obj = usersMsg[index];
                        console.log(obj);
                        obj['status'] = true;
                        usersMsg[index] = obj;
                        updateDataFunc(usersMsg, 'usersMsg');
                        filterAllMsg[no] = obj
                        showUML();
                    }
                })
            }
        }

        // show all message
        const showUML = () => {
            userMList.innerHTML = "";
            filterAllMsg.forEach((item, index) => {
                userMList.innerHTML += `
        <tr>
            <td class="text-nowrap">${index + 1}</td>
            <td class="text-nowrap">${item.type}</td>
            <td class="text-nowrap">${item.title}</td>
            <td class="text-nowrap">${item.messsage}</td>
            <td class="text-nowrap">${formDateFunc(item.createdAt)}</td>
            <td class="text-nowrap">
                ${item.status ?
                        `
                    <button disabled class="btn text-green-500">
                        <i class="fa fa-eye"></i>
                    </button>
                    `
                        :
                        `
                    <button ${item.type == 'admin' ? 'disabled' : ''} index="${item.index}" class="btn status-btn text-gray-500">
                        <i class="fa fa-eye-slash"></i>
                    </button>
                    `
                    }
                ${item.type == 'admin' ?
                        `
                    ${item.status != true ?
                            `
                    <button class="btn text-green-500">
                        <i class="fa fa-edit"></i>
                    </button>
                    `
                            : ``
                        }
                    <button class="btn text-red-500">
                        <i class="fa fa-trash"></i>
                    </button>
                    `
                        : ''
                    }
            </td>
        </tr>
        `
            });
            updateStatus();
        }
        showUML();
    }

    // send user message coding
    const sendUserMsg = () =>{
        let allMBtn = userList.querySelectorAll(".user-m-btn");
        allMBtn.forEach((btn,index)=>{
            btn.onclick = () => {
                let name = btn.getAttribute("name");
                let email = btn.getAttribute("email");
                allUMFormInput[1].value = name;
                allUMFormInput[2].value = email;
            }
        })
    }

    // store user message coding 
    userMForm.onsubmit = (e) =>{
        e.preventDefault();
        registerFunc(userMForm, usersMsg, 'usersMsg');
        mBtnClose.click();
    }

    //read user coding
    const readUserFunc = (array) =>{
        userList.innerHTML = '';
        array.forEach((item, index) => {
            let itemString = JSON.stringify(item);
            // filter message 
            let filterMsg = usersMsg.filter((obj)=>(
                obj.type == 'user' && 
                obj.email == item.email &&
                obj.status != true
            ));
            userList.innerHTML += `
                            <div class="p-4 bg-white shadow-sm">
                    <div class="flex justify-between items-center border-b py-3">
                        <div class="d-flex justify-center items-center gap-3">
                            <img width="50" src="${item.profile}" alt="">
                            <div>
                                <h5 class="font-semibold">${item.name}</h5>
                                <p class="text-sm text-gray-500"> <i class="fa fa-location"></i>${item.address} </p>
                            </div>
                        </div>
                        <div class="dropdown dropstart">
                            <button role="button" data-bs-toggle="dropdown" class="btn bg-gray-100 w-11 h-11 rounded-full">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                ${
                                    filterMsg.length != 0
                                    ?
                                    `
                                    <span class="position-absolute bg-danger text-white rounded top-1 start-100 translate-middle count-msg">
                                        ${filterMsg.length}
                                    </span>
                                    `
                                    :
                                    ``
                                }
                                
                            </button>
                            <div class="dropdown-menu">
                                <button email="${item.email}" data-bs-toggle="modal" data-bs-target="#user-m-l-modal" class="dropdown-item flex align-items-center justify-between w-full text-green-600 status-btn">Status <i class="fa fa-eye"></i></button>
                                <button data='${itemString}' class="dropdown-item flex align-items-center justify-between w-full text-blue-600 edit-btn">Edit <i class="fa-regular fa-pen-to-square"></i></button>
                                <button class="dropdown-item flex align-items-center justify-between w-full text-red-600 del-dtn">Delete <i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="my-4 d-flex items-center justify-between">
                        <div class="d-flex items-center justify-center gap-3">
                            <button class="btn rounded-full bg-green-100 text-green-500">
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                            </button>
                            <h5>Payments</h5>
                        </div>
                        <div>
                            <h5 class=" font-semibold ${item.price ? 'text-gray-500' : 'text-gray-400'}">${item.price ? item.price : 'Select amount'}</h5>
                        </div>
                    </div>
                    <div class="my-4 d-flex items-center justify-between">
                        <div class="d-flex items-center justify-center gap-3">
                            <button class="btn rounded-full w-9 h-9 flex items-center justify-center bg-red-100 text-red-500">
                                <i class="fa-solid fa-video"></i>
                            </button>
                            <h5>Total Course</h5>
                        </div>
                        <div>
                            <h5 class="text-gray-500 font-semibold">${item.course? item.course.length: '0'}</h5>
                        </div>
                    </div>
                    <div class="my-4 d-flex items-center justify-between">
                        <div class="d-flex items-center justify-center gap-3">
                            <button class="btn rounded-full bg-blue-100 text-blue-500">
                                <i class="fa-solid fa-calendar-days"></i>
                            </button>
                            <h5>Joined</h5>
                        </div>
                        <div>
                            <h5 class="text-gray-500 font-semibold">${formDateFunc(item.createdAt, 'time')}</h5>
                        </div>
                    </div>
                    <div class="my-4 d-flex items-center justify-between">
                        <div class="d-flex items-center justify-center gap-3">
                            <button class="btn rounded-full bg-pink-100 text-pink-500">
                                <i class="fa fa-user"></i>
                            </button>
                            <h5>Type</h5>
                        </div>
                        <div>
                            <h5 class="text-gray-500 font-semibold">${item.type ? item.type : 'none'}</h5>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="border-b w-full"></div>
                        <div class=" w-full flex justify-between items-center">
                            <button name="${item.name}" email="${item.email}" data-bs-toggle="modal" data-bs-target="#user-m-modal" class="user-m-btn btn bg-blue-50 text-blue-600 rounded-full">
                                <i class="fa-regular fa-envelope"></i>
                            </button>
                            <div class="border-b w-full"></div>
                            <button class="${item.status ? 'd-none' : ''} btn bg-red-50 text-red-600 rounded-full">
                                <i class="fa-solid fa-ban"></i>
                            </button>
                            <button class="${item.status ? '' : 'd-none'} btn bg-green-50 text-green-600 rounded-full">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                        <div class="border-b w-full"></div>
                    </div>
                    </div>
            `
        });
        deleteFunc();
        editFunc();
        sendUserMsg();
        showUserMessage();
    }
    readUserFunc(users);
    
};