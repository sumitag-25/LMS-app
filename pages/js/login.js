import { 
    getDataFunc,
    }
from "../../admin/pages/module/module.js";


export const login = () =>{
    const data = getDataFunc();
    const users = data && data.users;
    
    // all global variable
    let loginEl = document.querySelector(".login");
    let loginForm = loginEl.querySelector(".login-form");
    let allInput = loginForm.querySelectorAll("input");
    let togglePBtn = loginForm.querySelector(".toggle-p-btn");

    // login now coding
    loginForm.onsubmit = (e) =>{
        e.preventDefault();
        let email = users.find((item)=>item.email == allInput[0].value.trim().toLowerCase());
        console.log(email);
        if(email !=undefined){
            if(email.password == allInput[1].value.trim().toLowerCase()){
                if(email.status == 'on'){
                    if(email.type =="user"){
                        window.location = "../../user/user.html";
                        sessionStorage.setItem("__au__",JSON.stringify(email));
                    }
                    if(email.type =="teacher"){
                        window.location = "../../admin/admin.html";
                        sessionStorage.setItem("__au__",JSON.stringify(email));
                    }
                    if(email.type =="admin"){
                        window.location = "../../admin/admin.html";
                        sessionStorage.setItem("__au__",JSON.stringify(email));
                    }
                }
                else {
                    swal("Your are blocked", 'Contact your branch', 'warning');
                }
            }
            else{
                swal("wrong password", 'Contact your branch', 'warning');
            }
        }
        else{
            swal("wrong email", 'Contact your branch', 'warning');
        }
    }

    //toggle password
    togglePBtn.onclick = () =>{
        if(allInput[1].type == "password")
            {
            allInput[1].type = "text";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`
            }
        else{
            allInput[1].type = "password";
            togglePBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
        }
    }
}