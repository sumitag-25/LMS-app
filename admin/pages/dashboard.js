const dashboard = `
<div class="dashboard">
    <div class="animate__animated animate__zoomIn grid md:grid-cols-4 gap-4">
        <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
            <div class="flex flex-column items-center border-r gap-3">
                <button class="btn bg-red-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i> 
                </button>
                <h5 class="text-xl font-semibold text-red-500">Students</h5>
            </div>
            <div class="flex flex-column items-center gap-3">
                <h5 class="text-5xl font-semibold text-red-400"> 36k</h5>
                <p class="text-lg" text-grey>35,565</p>
            </div>
        </div>
    
        <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
            <div class="flex flex-column items-center border-r gap-3">
                <button class="btn bg-green-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i> 
                </button>
                <h5 class="text-xl font-semibold text-green-500">Courses</h5>
            </div>
            <div class="flex flex-column items-center gap-3">
                <h5 class="text-5xl font-semibold text-green-400"> 13k</h5>
                <p class="text-lg" text-grey>11,565</p>
            </div>
        </div>
    
    
        <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
            <div class="flex flex-column items-center border-r gap-3">
                <button class="btn bg-pink-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i> 
                </button>
                <h5 class="text-xl font-semibold text-pink-500">Files</h5>
            </div>
            <div class="flex flex-column items-center gap-3">
                <h5 class="text-5xl font-semibold text-pink-400"> 16k</h5>
                <p class="text-lg" text-grey>15,565</p>
            </div>
        </div>
    
        <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
            <div class="flex flex-column items-center border-r gap-3">
                <button class="btn bg-blue-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i> 
                </button>
                <h5 class="text-xl font-semibold text-blue-500">Students</h5>
            </div>
            <div class="flex flex-column items-center gap-3">
                <h5 class="text-5xl font-semibold text-blue-400"> 65k</h5>
                <p class="text-lg" text-grey>64,565</p>
            </div>
        </div>
    
        <div class="p-4 column-chart md:col-span-4 bg-white"></div>
    
        <div class="p-4 area-chart md:col-span-2 bg-white"></div>
    
        <div class="p-4 bg-white shadown-sm">
            <div class="border-b my-3">
                <h5 class="mb-3 font-semibold">Recent Students</h5>
            </div>
            <div class="recent-students">
                
            </div>
        </div>
    
        <div class="p-4 bg-white shadown-sm">
            <div class="border-b my-3">
                <h5 class="mb-3 font-semibold">Recent Courses</h5>
            </div>

            <div class="recent-courses">
                
            </div>
            
        </div>
    
    </div>
</div>
`

export default dashboard