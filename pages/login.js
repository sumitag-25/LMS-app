const register = `
<div class="login flex justify-center animate__animated animate__zoomIn">
    <div class="md:w-7/12 bg-white p-4 shadow">
        <h1 class="font-bold mb-3">Login Now</h1>
        <form class="login-form">

            <div class="mb-3 grid md:grid-cols-2 gap-3">
                <div>
                    <div class="form-group">
                        <label for="name">Email <sup class="text-red-500">*</sup></label>
                        <input required class="form-control" type="email" name="email">
                    </div>
                </div>
                <div>
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

            

            <div class="mb-3 form-group">
                <button class="btn w-full bg-blue-400 text-white">
                    Login now
                </button>
            </div>
            <div class="text-center">
                <a href="#/register">Don't have an account ?</a>
            </div>
        </form>
    </div>
</div>
`

export default  register;