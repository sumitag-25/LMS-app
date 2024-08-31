import { getDataFunc ,formDateFunc } from "../module/module.js"

var options1 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 300,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};


var options2 = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };




export const dashboardFunc = () => {
  let data = getDataFunc();
  let users = data ? data.users ? data.users : [] : [] ;
  let courses = data ? data.courses ? data.courses : [] : [] ;
  let recentStudents = users.slice(0,5);
  let recentCourses = courses.slice(0,5);
  // global variable
    let dashboardEl= document.querySelector(".dashboard")
    let areaChart = dashboardEl.querySelector(".area-chart");
    let columnChart = dashboardEl.querySelector(".column-chart");
    let recentStuEl = dashboardEl.querySelector(".recent-students");
    let recentCourseEl = dashboardEl.querySelector(".recent-courses");

  // create chart coding
    var chart = new ApexCharts(areaChart, options1);
    chart.render();
    var chart = new ApexCharts(columnChart, options2);
    chart.render();

    //recent students coding
    recentStudents.forEach((item,index) => {
      recentStuEl.innerHTML += `
      <div class="grid grid-cols-4 gap-2 border-b pb-2">
            <img src="${item.profile}" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2 ">
                <h5 class="mb-1">${item.name}</h5>
                <p class="text-sm text-gray-400">${formDateFunc(item.createdAt)}</p>
            </div>
            ${
              item.status ? 
              `
              <div class="btn bg-green-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
              <button class="">
                <i class="fa-regular fa-circle-check"></i>
               </button>
              </div>
               `
               :
               `
               <div class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
               <button>
                <i class="fa-regular fa-circle-xmark"></i>
                </button>
                </div>
               `
            }
            
        </div>
      `
    });


    //recent courses coding
    recentCourses.forEach((item,index) => {
      recentCourseEl.innerHTML += `
      <div class="grid grid-cols-4 gap-2 border-b pb-2">
            <img src="${item.profile}" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2 ">
                <h5 class="mb-1">${item.name}</h5>
                <p class="text-sm text-gray-400">${formDateFunc(item.createdAt)}</p>
            </div>
            ${
              item.live ? 
              `
              <div class="btn bg-green-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
              <button class="">
                <i class="fa-regular fa-circle-check"></i>
               </button>
              </div>
               `
               :
               `
               <div class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
               <button>
                <i class="fa-regular fa-circle-xmark"></i>
                </button>
                </div>
               `
            }
            
        </div>
      `
    });
}

