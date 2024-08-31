let data = {};

// get data form localstorage
export const getDataFunc = () => {
    if(localStorage.getItem("data") != null){
        data = JSON.parse(localStorage.getItem("data"));
        return data;
    }
}

getDataFunc();


// formate date coding
export const formDateFunc = (data, isTime) =>{
    let date = new Date(data);
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yy = date.getFullYear();
    let time = date.toLocaleTimeString();
    dd = dd < 10 ? '0'+dd : dd;
    mm = mm < 10 ? '0'+mm : mm;
    return `${dd}-${mm}-${yy} ${isTime ? time : ''}`
}

//image process coding
export const processImage = (img, array, index) => {
    let data = array[index];
    return new Promise((resolve, reject)=> {
        if(index == undefined){
            if(img.name){
                let url = '';
                let freader = new FileReader();
                freader.readAsDataURL(img);
                freader.onload = (e) => {
                    url = e.target.result;
                    resolve(url);
                }
                
            } else {
                resolve("../assets/images/dummy.jpg");
            }
        }
        else {
            if(img.name){
                let url = '';
                let freader = new FileReader();
                freader.readAsDataURL(img);
                freader.onload = (e) => {
                    url = e.target.result;
                    resolve(url);
                }
                
            } else {
                resolve(data.profile);
            }
        }
    });
};


//register coding
export const registerFunc = async (form, array, key, index, readDataFunc) =>{
    let formDate = new FormData(form);
    let courses = [];
    let tmp = {
        createdAt : new Date()
    };
    for(let data of formDate.entries())
        {
            let props = data[0];
            let value = data[1];

            let imgUrl = typeof(value) == 'object' && await processImage(value, array, index);
            // console.log(imgUrl);

            
            props == 'course' && courses.push(value);
            
            if(props == 'course'){
                tmp[props] = courses
            }
            else if (imgUrl){
                tmp[props] = imgUrl
            }
            else{
                tmp[props] = value = value.trim().toLowerCase();
            }

        }
        if(index == undefined){
            array.push(tmp);
            data[key] = array;
            localStorage.setItem('data', JSON.stringify(data));
            form.reset('');
            swal("Data inserted", "succesfully", 'success');
        } else{
            array[index] = tmp;
            data[key] = array;
            localStorage.setItem('data', JSON.stringify(data));
            form.reset('');
            swal("Data updated", "succesfully", 'success');
            readDataFunc(array)
        }
};

// update coding

export const updateDataFunc = (array,key) =>{
    data[key] = array;
    localStorage.setItem('data', JSON.stringify(data));
}

// create options in select tag
export const createOptionsFunc = (data,element, key) =>{
    element.innerHTML = `<option value="select" hidden>select</option>`
    data.forEach((item, index)=>{
        element.innerHTML += `
        <option value="${item[key]}">${item[key]}</option>
        `
    })
}

// conformation coding

export const isConfirmFunc = () =>{
    return new Promise ((resolve,reject)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                resolve(true);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
                swal("Your imaginary file is safe!");
            }
          });
    });
}