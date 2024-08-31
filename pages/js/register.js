import { 
        getDataFunc,
        createOptionsFunc,
        registerFunc
        }
from "../../admin/pages/module/module.js";

export const register = () => {
    const data = getDataFunc();
    let courses = data && data.courses;
    let users = data && data.users;
    console.log(data);
    // all global variable
    let registerEl = document.querySelector(".register");
    let regForm = registerEl.querySelector(".register-form")
    let rallRegSEl = regForm.querySelectorAll("select");
    let allInput = regForm.querySelectorAll("input");
    let togglePBtn = regForm.querySelector(".toggle-p-btn");

    // show course in form
    createOptionsFunc(courses, rallRegSEl[1], "name");

    // register data
    regForm.onsubmit =(e) =>{
        e.preventDefault();
        let email = users.find((item)=>item.email == allInput[3].value.trim().toLowerCase());
        if(email == undefined)
        {
            registerFunc(regForm, users, 'users'); 
        }
        else{
            swal("User exist", 'This email already registered !', 'warning');
        }
    }

    //toggle password
    togglePBtn.onclick = () =>{
        if(allInput[4].type == "password")
            {
            allInput[4].type = "text";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`
            }
        else{
            allInput[4].type = "password";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
        }
    }
}