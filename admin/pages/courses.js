const courses = `
<div class="courses ">
        <div class="grid gap-4 animate__animated animate__zoomIn">
            <div class="grid">
                <div class="table-responsive md:col-span-2 p-4 bg-white shadow-sm">
                    <div class="flex justify-between items-center border-b py-2">
                        <h5 class="text-xl font-semibold">Category List</h5>
                        <button data-bs-toggle="modal" data-bs-target="#category-modal" class="add-category-btn btn bg-red-400 text-white rounded-full">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div class="mt-3">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Category</th>
                                    <th class="text-nowrap">Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody class="category-list">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="md:col-span-3 p-4 bg-white shadow-sm table-responsive">
                    <div class="grid md:grid-cols-3 justify-between items-center border-b pt-2 pb-4">
                        <h5 class="text-xl font-semibold">Course List</h5>
                        <select class="course-cat-select form-select" name="" id="">
                            <option value="choose category">Choose category</option>
                        </select>
                        <div class="text-right">
                            <button data-bs-toggle="modal" data-bs-target="#course-modal" class="add-course-btn btn bg-red-400 text-white rounded-full">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Thumbnaik</th>
                                    <th>Category</th>
                                    <th class="text-nowrap">Course Name</th>
                                    <th class="text-nowrap">Course Link</th>
                                    <th>Price</th>
                                    <th>Duration</th>
                                    <th class="text-nowrap">Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody class="course-list">
                                <tr>
                                    <td class="text-no-wrap">1</td>
                                    <td class="text-no-wrap">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRcCjn7WDibDapX8pqlCU08yr_qGJnLzOdg&s" alt="thumb" width="40px">
                                        </t class="text-no-wrap" d>
                                    <td class="text-no-wrap">Front-End</td>
                                    <td class="text-no-wrap">
                                        Javascript
                                    </td>
                                    <td class="text-no-wrap"><a href="#">Link</a></td>
                                    <td class="text-no-wrap">3000</td>
                                    <td class="text-no-wrap">4 months</td>
                                    <td class="text-no-wrap">12-07-2024</td>
                                    <td class="text-no-wrap">
                                        <button class="text-green-400">
                                            <i class="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button class="text-red-400">
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        

    <div class="modal animate__animated animate__zoomIn" id="course-modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new course</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="course-form">
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="thumb">Thumbnail</label>
                                    <input class="form-control" type="file" name="profile">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="thumb">Course Name</label>
                                    <input class="form-control" type="text" name="name">
                                </div>
    
                            </div>
                        </div>
    
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <select class="form-select course-category" name="category" id="">
                                        <option value="choose Category">choose Category</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="duration" placeholder="4 month">
                                </div>
                            </div>
                        </div>
    
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="link">Course link</label>
                                    <input name="link" class="form-control" type="url">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="link">Course Price</label>
                                    <input class="form-control" type="number" name="price">
                                </div>
                            </div>
                        </div>
    
                        <div class="mb-3 form-group">
                            <label for="link">Course Description</label>
                            <textarea class="form-control" name="desc"></textarea>
                        </div>
    
                        <div class="row mb-3">
                            <div class="col-12 flex gap-3">
                                <div class="form-group">
                                    <input type="checkbox" name="live">
                                    <label for="live">Is live</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="free">
                                    <label for="free">Is free</label>
                                </div>
                            </div>
                        </div>
    
                        <div class="mb-3 form-group">
                            <button class="btn w-full bg-blue-400 text-white">
                                Submit
                            </button>
                            <button type="buttom" class="d-none btn w-full bg-red-400 text-white">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal animate__animated animate__zoomIn" id="category-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="category-form">
                        <div class="mb-3 form-group">
                            <label for="thumb">Category Name <sup class="text-red-400">*</sup></label>
                            <input required class="form-control" type="text" name="category">
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

</div>










`

export default courses