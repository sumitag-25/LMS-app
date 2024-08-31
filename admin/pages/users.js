const users = `
<div class="users">
    <div class="user-list animate__animated animate__zoomIn grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow-sm">
            <div class="flex justify-between items-center border-b py-3">
                <div class="d-flex justify-center items-center gap-3">
                    <img src="/assets/images/user.jpg" width="50" class="rounded-full" alt="">
                    <div>
                        <h5 class="font-semibold">Amit</h5>
                        <p class="text-sm text-gray-500"> <i class="fa fa-location"></i> Canada</p>
                    </div>
                </div>
                <div class="dropdown dropstart">
                    <button role="button" data-bs-toggle="dropdown" class="btn bg-gray-100 w-11 h-11 rounded-full">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item flex align-items-center justify-between w-full text-blue-600">Edit <i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="dropdown-item flex align-items-center justify-between w-full text-red-600">Delete <i class="fa-solid fa-trash"></i></button>
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
                <div >
                    <h5 class="text-gray-500 font-semibold">12000</h5>
                </div>
            </div>
            <div class="my-4 d-flex items-center justify-between">
                <div class="d-flex items-center justify-center gap-3">
                    <button class="btn rounded-full w-9 h-9 flex items-center justify-center bg-red-100 text-red-500">
                        <i class="fa-solid fa-video"></i>
                    </button>
                    <h5>Total Course</h5>
                </div>
                <div >
                    <h5 class="text-gray-500 font-semibold">5</h5>
                </div>
            </div>
            <div class="my-4 d-flex items-center justify-between">
                <div class="d-flex items-center justify-center gap-3">
                    <button class="btn rounded-full bg-blue-100 text-blue-500">
                        <i class="fa-solid fa-calendar-days"></i>
                    </button>
                    <h5>Joined</h5>
                </div>
                <div >
                    <h5 class="text-gray-500 font-semibold">July 13, 2024</h5>
                </div>
            </div>
            <div class="my-4 d-flex items-center justify-between">
                <div class="d-flex items-center justify-center gap-3">
                    <button class="btn rounded-full bg-pink-100 text-pink-500">
                        <i class="fa fa-user"></i>
                    </button>
                    <h5>Type</h5>
                </div>
                <div >
                    <h5 class="text-gray-500 font-semibold">User</h5>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="border-b w-full"></div>
                <div class=" w-full flex justify-between items-center">
                    <button class="btn bg-blue-50 text-blue-600 rounded-full">
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                    <div class="border-b w-full"></div>
                    <button class="btn bg-red-50 text-red-600 rounded-full">
                        <i class="fa-solid fa-ban"></i>
                    </button>
                    <button class="d-none btn bg-green-50 text-green-600 rounded-full">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
                <div class="border-b w-full"></div>
            </div>
        </div>
    </div>

    <button class="add-user-btn position-fixed bottom-0 right-0 m-16 bg-red-500 text-white btn w-11 h-11 rounded-full" data-bs-toggle="modal" data-bs-target="#users-modal">
        <i class="fa fa-add"></i>
    </button>

    <div class="modal animate__animated animate__zoomIn" id="users-modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new Users</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="users-form">

                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="name">Profile <sup class="text-red-500">*</sup></label>
                                    <input class="form-control" type="file" name="profile">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Name <sup class="text-red-500">*</sup></label>
                                <input required class="form-control" type="text" name="name">
                            </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Mobile <sup class="text-red-500">*</sup></label>
                                <input required class="form-control" type="number" name="mobile">
                            </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Email <sup class="text-red-500">*</sup></label>
                                <input required class="form-control" type="email" name="email">
                            </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Password <sup class="text-red-500">*</sup></label>
                                <div class="input-group">
                                    <input required class="form-control" type="password" name="password">
                                    <span class="toggle-p-btn input-group-text">
                                        <i class="fa-regular fa-eye-slash"></i>
                                    </span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Father's name <sup class="text-red-500">*</sup></label>
                                <input required class="form-control" type="text" name="father">
                            </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                <label for="name">Qualifications <sup class="text-red-500">*</sup></label>
                                <select class="form-select" name="qualification" id="">
                                    <option value="select qualification">Select qualification</option>
                                    <option value="heighSchool">Height school</option>
                                    <option value="interSchool">Inter school</option>
                                    <option value="ugSchool">UG</option>
                                    <option value="pgSchool">PG</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                                <label for="name">Select course <sup class="text-red-500">*</sup></label>
                                <select multiple class="form-select" name="course" >
                                    
                                </select>
                            </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6 flex gap-3">
                                <div class="form-group">
                                    <div class="form-group">
                                        <input type="checkbox" name="status">
                                        <label name="status" for="name">Is active</label>
                                    </div>
                                </div>
                            <div class="form-group">
                                <input type="radio" name="type" value="admin">
                                <label for="name">Admin</label>
                            </div>

                            <div class="form-group">
                                <input type="radio" name="type" value="teacher">
                                <label for="name">Teacher</label>
                            </div>

                            <div class="form-group">
                                <input type="radio" name="type" value="user">
                                <label for="name">User</label>
                            </div>
                            </div>
                            <div class="col-6">
                                <input name="price" type="number" placeholder="price" class="form-control">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                                <label for="name">Address <sup class="text-red-500">*</sup></label>
                                <textarea class="form-control" name="address"></textarea>
                            </div>
                            </div>
                        </div>

                        <div class="mb-3 form-group">
                            <button class="btn w-full bg-blue-400 text-white">
                                Submit
                            </button>
                            <button type="button" class="d-none btn w-full bg-red-400 text-white">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal animate__animated animate__zoomIn" id="user-m-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new message</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="user-m-form">
                        <div class="mb-3 form-group">
                            <label for="form">From<sup class="text-red-400">*</sup></label>
                            <input required class="form-control" readonly value="admin" type="text" name="type">
                        </div>
                        <div class="mb-3 form-group">
                            <label for="name">User name<sup class="text-red-400">*</sup></label>
                            <input name="name" readonly  class="form-control" type="text" >
                        </div>
                        <div class="mb-3 form-group">
                            <label for="email">User email<sup class="text-red-400">*</sup></label>
                            <input name="email" readonly  class="form-control" type="email" >
                        </div>
                        <div class="mb-3 form-group">
                            <label for="title">Title<sup class="text-red-400">*</sup></label>
                            <input name="title" required class="form-control" type="text" >
                        </div>
                        <div class="mb-3 form-group">
                            <label for="message">Message<sup class="text-red-400">*</sup></label>
                            <textarea name="messsage" class="form-control" id=""></textarea>
                        </div>
                        <div class="mb-3 form-group">
                            <button type="submit" class="btn w-full bg-blue-400 text-white">
                                Submit
                            </button>
                            <button type="button" class="d-none btn w-full bg-red-400 text-white">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal animate__animated animate__zoomIn" id="user-m-l-modal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Message List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="text-nowrap">Sr.</th>
                                <th class="text-nowrap">Type</th>
                                <th class="text-nowrap">Title</th>
                                <th class="text-nowrap">Message</th>
                                <th class="text-nowrap">Date</th>
                                <th class="text-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody class="user-msg-list">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
`

export default users