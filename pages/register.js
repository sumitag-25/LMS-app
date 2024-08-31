const register = `
<div class="register flex justify-center animate__animated animate__zoomIn">
    <div class="md:w-7/12 bg-white p-4 shadow">
        <h1 class="font-bold mb-3">Register Now</h1>
        <form class="register-form">
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
                        <select multiple class="form-select" name="course">
                            
                        </select>
                    </div>
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
            <input type="radio" name="type" hidden checked value="user">
            <div class="mb-3 form-group">
                <button class="btn w-full bg-blue-400 text-white">
                    Submit
                </button>
            </div>
        </form>
        <div class="text-center">
            <a href="#/login">Already have an account ?</a>
        </div>
    </div>
</div>
`

export default  register;