const settings = `
<div class="settings">
    <div class="grid gap-4 animate__animated animate__zoomIn">
        <div class="grid">
            <div class="table-responsive md:col-span-2 p-4 bg-white shadow-sm">
                <div class="flex justify-between items-center border-b py-2">
                    <h5 class="text-xl font-semibold">
                        Page notification List
                    </h5>
                    <button data-bs-toggle="modal" data-bs-target="#page-n-modal" class="add-page-n-btn btn bg-red-400 text-white rounded-full">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div class="mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Notification</th>
                                <th>Page</th>
                                <th class="text-nowrap">Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="page-n-list">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>



    <div class="modal animate__animated animate__zoomIn" id="page-n-modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new notification</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <input type="text">
                <div class="modal-body">
                    <div class="page-n-preview flex justify-center items-center p-4 my-3">
                        <h1 class="text-xl font-semibold"></h1>
                    </div>
                    <form class="page-n-form">
                        <div class="mb-3 form-group">
                            <textarea name="notification" id="" class="form-control" placeholder="Notification"></textarea>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4 mt-3">
                                <input name="page" type="text" placeholder="Page name" class="form-control">
                            </div>
                            <div class="col-4">
                                <label for="">Bg Color</label>
                                <input name="bgColor" type="color" class="form-control">
                            </div>
                            <div class="col-4">
                                <label for="textcolotr">Text Color</label>
                                <input name="textColor" type="color" class="form-control">
                            </div>
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

export default settings