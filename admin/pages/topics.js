const topics =`
<div class="topics">
    <div class="grid gap-4 animate__animated animate__zoomIn">
        <div class="grid">
            <div class="table-responsive md:col-span-2 p-4 bg-white shadow-sm">
                <div class="grid md:grid-cols-4 gap-4 justify-between items-center border-b pt-2 pb-4">
                    <h5 class="text-xl font-semibold">Topics List</h5>
                    <select name="" id="" class="form-select topic-cat-select">
                        <option hidden value="choose category">Choose category</option>
                    </select>
                    <select name="" id="" class="form-select topic-course-select">
                        <option hidden value="choose course">Choose course</option>
                    </select>
                    <div class="text-right">
                        <button data-bs-toggle="modal" data-bs-target="#topics-modal" class="add-topic-btn btn bg-red-400 text-white rounded-full">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Category</th>
                                <th>Course</th>
                                <th>Topic name</th>
                                <th class="text-nowrap">Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="topics-list">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    

<div class="modal animate__animated animate__zoomIn" id="topics-modal">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="text-xl font-semibold">Create new topic</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="topic-form">
                    <div class="row mb-3">
                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-select topic-category" name="category" id="">
                                    <option value="choose Category" hidden>Choose category</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-select topic-course" name="course" id="">
                                    <option value="choose course" hidden>Choose course</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <input type="text" name="name" placeholder="topic-name" class="form-control">
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

export default topics