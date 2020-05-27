$(window).on("load", function() {
  $("#loading")
    .delay(2000)
    .fadeOut("slow");
});

const window_top = document.getElementById("top");
const select_top = document.getElementById("select");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window_top.offsetTop + 90) {
    document.getElementById("nav").classList.add("nav_active");
  } else {
    document.getElementById("nav").classList.remove("nav_active");
  }
  if (window.scrollY >= select_top.offsetTop) {
    document.getElementById("nav").classList.add("nav_hidden");
  } else {
    document.getElementById("nav").classList.remove("nav_hidden");
  }
});

// 資料
const data = [
  {
    id: 0,
    area: "三峽區",
    area_index: "",
    city: "新北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "九天",
      price: "$40 ~ $179",
      time: "11:00-21:00 (星期二、三公休)",
      tel: "0958-091-799",
      address: "新北市三峽區中山路459巷201號",
      website: "https://www.facebook.com/nineskyniceguy",
      mrt: 0,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 0,
      brunch: 0,
      cafe: 1,
      image: ["0.jpg"],
      lat: 24.9296985,
      lng: 121.3445396
    }
  },
  {
    id: 1,
    area: "信義區",
    area_index: "信義區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "曰曰咖啡",
      price: "$60-$150",
      time: "10:30–19:00 (星期一 ~ 五、日)",
      tel: "02-2727-8871",
      address: "台北市信義區松德路171-5號",
      website: "https://www.facebook.com/loosedaycafe/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 1,
      brunch: 0,
      cafe: 1,
      image: ["1.jpg"],
      lat: 25.0357967,
      lng: 121.5747537
    }
  },
  {
    id: 2,
    area: "南港區",
    area_index: "其他區",
    city: "台北",
    price: "400 元以內",
    price_index: 4,
    detail: {
      name: "Coppii Lumii living coffee 冉冉生活",
      price: "$40-$200",
      time: "09:00–21:00 (星期一 ~ 日)",
      tel: "02-2789-1816",
      address: "台北市南港區經貿二路196-1號",
      website: "https://www.facebook.com/CoppiiLumiiJM/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 0,
      brunch: 1,
      cafe: 1,
      image: ["2.jpg", "2.0.jpg", "2.1.jpg"],
      lat: 25.0599636,
      lng: 121.6145856
    }
  },
  {
    id: 3,
    area: "大安區",
    area_index: "其他區",
    city: "台北",
    price: "300 元以內",
    price_index: 3,
    detail: {
      name: "光一旅集",
      price: "$150-$300",
      time: "10:00–21:00 (星期一 ~ 日)",
      tel: "02-2531-0877",
      address: "羅斯福路三段大安區台北市106",
      website: "https://www.facebook.com/guangyixuji/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 1,
      brunch: 1,
      cafe: 0,
      image: ["3.jpg", "3.0.jpg"],
      lat: 25.0170061,
      lng: 121.5323766
    }
  },
  {
    id: 4,
    area: "中山區",
    area_index: "中山區",
    city: "台北",
    price: "300 元以內",
    price_index: 3,
    detail: {
      name: "好休咖啡",
      price: "$100-$260",
      time: "11:00–21:00 (星期一 ~ 日)",
      tel: "02-2581-4355",
      address: "台北市中山區新生北路一段11-5號",
      website: "https://www.facebook.com/HaoXiuKaffe/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 0,
      brunch: 0,
      cafe: 1,
      image: ["4.jpg"],
      lat: 25.0463783,
      lng: 121.5323573
    }
  },
  {
    id: 5,
    area: "板橋區",
    area_index: "",
    city: "新北",
    price: "100 元以內",
    price_index: 1,
    detail: {
      name: "好初Deˇli",
      price: "$70-$90",
      time: "08:00–16:00 (星期一 ~ 日)",
      tel: "02-2960-0788",
      address: "新北市板橋區建國街118號",
      website: "https://www.facebook.com/pg/hoochuu",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 0,
      brunch: 1,
      cafe: 0,
      image: ["5.jpg", "5.0.jpg"],
      lat: 25.0175679,
      lng: 121.461
    }
  },
  {
    id: 6,
    area: "中山區",
    area_index: "中山區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "Melange Café 米朗琪咖啡館",
      price: "$150-$200",
      time: "07:30–22:00 (星期一 ~ 五。六日: 8:30開使營業)",
      tel: "02-2567-2136",
      address: "台北市中山區中山北路二段16巷23號1樓",
      website: "https://melangecafe.com.tw",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 0,
      lightMeal: 0,
      brunch: 0,
      cafe: 1,
      image: ["6.jpg", "6.0.jpg", "6.1.jpg", "6.2.jpg"],
      lat: 25.053203,
      lng: 121.520874
    }
  },
  {
    id: 7,
    area: "中正區",
    area_index: "其他區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "Miss Energy低GI廚房-台北重慶南店",
      price: "$100-$120",
      time: "11:00-19:30 (星期一 ~ 五)",
      tel: "02-2388-1679",
      address: "台北市中正區重慶南路一段133號",
      website: "https://www.facebook.com/missenergy23881679/",
      mrt: 1,
      wifi: 0,
      noTimeLimit: 0,
      lightMeal: 1,
      brunch: 0,
      cafe: 0,
      image: ["7.jpg", "7.0.jpg"],
      lat: 25.0418392,
      lng: 121.5133113
    }
  },
  {
    id: 8,
    area: "士林區",
    area_index: "其他區",
    city: "台北",
    price: "400 元以內",
    price_index: 4,
    detail: {
      name: "Sprout初芽",
      price: "$200-$350",
      time: "08:30-21:00 (星期一 ~ 日)",
      tel: "02-2876-6080",
      address: "台北市士林區中山北路七段31號",
      website: "https://www.instagram.com/sprout_tianmu/?utm_source=ig_embed",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 1,
      brunch: 1,
      cafe: 0,
      image: ["8.jpg"],
      lat: 25.1193961,
      lng: 121.5306015
    }
  },
  {
    id: 9,
    area: "中山區",
    area_index: "中山區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "拾福青果",
      price: "$100-$150",
      time: "12:00-20:00 (星期一 ~ 五 14:00~17:00 休息)",
      tel: "0911-244-780",
      address: "台北市中山區長春路3巷9號",
      website: "https://www.facebook.com/vegshifu/",
      mrt: 0,
      wifi: 0,
      noTimeLimit: 1,
      lightMeal: 1,
      brunch: 0,
      cafe: 0,
      image: ["9.jpg"],
      lat: 25.0554098,
      lng: 121.5235003
    }
  },
  {
    id: 10,
    area: "三峽區",
    area_index: "",
    city: "新北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "蛋打發號",
      price: "$28-$120",
      time: "07:30-14:00 (星期一 ~ 日)",
      tel: "02-8671-5782",
      address: "新北市三峽區光明路69巷20號",
      website: "https://www.facebook.com/MygogoBreakfast/",
      mrt: 0,
      wifi: 0,
      noTimeLimit: 1,
      lightMeal: 0,
      brunch: 1,
      cafe: 0,
      image: ["10.jpg"],
      lat: 24.9289,
      lng: 121.37636
    }
  },
  {
    id: 11,
    area: "內湖區",
    area_index: "其他區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "Journey Kaffe覺旅咖啡",
      price: "$170-$200",
      time: "08:00-22:00 (星期一 ~ 日)",
      tel: "02-8751-3227",
      address: "台北市內湖區瑞光路583巷24號",
      website: "https://www.journeykaffe.org",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 1,
      lightMeal: 1,
      brunch: 0,
      cafe: 1,
      image: ["11.jpg", "11.0.jpg", "11.1.jpg", "11.2.jpg"],
      lat: 25.080535,
      lng: 121.568211
    }
  },
  {
    id: 12,
    area: "大安區",
    area_index: "其他區",
    city: "台北",
    price: "300 元以內",
    price_index: 3,
    detail: {
      name: "Muko Brunch",
      price: "$150-$300",
      time: "09:00-17:00 (星期一 ~ 日)",
      tel: "02-3393-1699",
      address: "台北市大安區金華街183巷8號",
      website: "https://www.facebook.com/MUKObrunch/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 0,
      lightMeal: 1,
      brunch: 1,
      cafe: 1,
      image: ["12.jpg", "12.0.jpg"],
      lat: 25.030593,
      lng: 121.5271636
    }
  },
  {
    id: 13,
    area: "信義區",
    area_index: "信義區",
    city: "台北",
    price: "200 元以內",
    price_index: 2,
    detail: {
      name: "N+n 喫早餐",
      price: "$60-$190",
      time: "07:30-15:00 (星期二 ~ 日)",
      tel: "02-2727-7786",
      address: "台北市信義區松山路465巷12號",
      website: "https://www.facebook.com/27277786Nn/posts/1996607060430131",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 0,
      lightMeal: 0,
      brunch: 1,
      cafe: 0,
      image: ["13.jpg"],
      lat: 25.039503,
      lng: 121.57878
    }
  },
  {
    id: 14,
    area: "信義區",
    area_index: "信義區",
    city: "台北",
    price: "500 元以內",
    price_index: 5,
    detail: {
      name: "NY BAGELS CAFE",
      price: "$200-$500",
      time: "09:00-22:00 (星期一 ~ 五。六日: 7:30開使營業)",
      tel: "02-2723-7977",
      address: "台北市信義區信義路五段122號",
      website: "http://www.nybagelscafe.com/",
      mrt: 1,
      wifi: 1,
      noTimeLimit: 0,
      lightMeal: 0,
      brunch: 1,
      cafe: 1,
      image: ["14.jpg"],
      lat: 25.0322718,
      lng: 121.5687553
    }
  }
];

let newslider;
let initial = 1;

// 取得使用者的選擇（當select 變動時）
function getInput() {
  // 預設 input
  let input = {
    area_index: "",
    city: "",
    price_index: 6
  };

  // 取select的值
  let city = $("#city + .select-selected")[0].innerHTML;
  let price = $("#price + .select-selected")[0].innerHTML;

  // 判斷下拉選單
  if (city === "新北-全部區") {
    input.city = "新北";
    input.area_index = "";
  } else if (city === "-全部-") {
    input.city = "";
    input.area_index = "";
  } else if (city === "台北-信義區") {
    input.city = "台北";
    input.area_index = "信義區";
  } else if (city === "台北-中山區") {
    input.city = "台北";
    input.area_index = "中山區";
  } else if (city === "台北-其他區") {
    input.city = "台北";
    input.area_index = "其他區";
  } else {
    input.city = "台北";
  }
  if (price != "-全部-") {
    input.price_index = 6;
  }
  if (price === "500 元以內") {
    input.price_index = 5;
  }
  if (price === "400 元以內") {
    input.price_index = 4;
  }
  if (price === "300 元以內") {
    input.price_index = 3;
  }
  if (price === "200 元以內") {
    input.price_index = 2;
  }
  if (price === "100 元以內") {
    input.price_index = 1;
  }

  // 呼叫過濾的function "multiFilter"" 並給 display function 更新畫面
  update(multiFilter(data, input));
}

// 過濾資料
function multiFilter(data, input) {
  const filterKeys = Object.keys(input); // 抓取input物件屬性 ex: name, city, price.....
  const DataKeys = Object.keys(data[0]); // 抓取data物件屬性 ex: name, city, price, mrt, wifi.....
  return data.filter(item => {
    // (1)篩選整個資料陣列 (item = 每筆資料)
    return filterKeys.every(key => {
      // (2)陣列裡每筆資料都針對各個屬性去篩選 (key = 每個屬性)
      if (key == "price_index") return input[key] >= item[key];
      if (!input[key].length) return true; // 若該屬性為空值 -> 代表使用者選擇"全部" 故直接回傳true
      return input[key] === item[key]; // 若input的該屬性與(拿來比較的該筆資料)的屬性相同 回傳true，反之 回傳false
    });
  });
}

// 更新畫面
function update(filted_data) {
  if ($("#slider .foodCard_card").length > 1) {
    if (!initial) {
      newslider.destroy();
    }
    if (initial) {
      slider.destroy();
      initial = 0;
    }
    $("#slider").empty();
  }
  if ($("#nocard")) {
    $("#nocard").remove();
  }
  if (filted_data.length == 0) {
    $("#slider").after(`
      <div class="noCard" id="nocard">很抱歉沒有符合此篩選條件的餐廳 : (</div>
    `);
  }
  for (let i = 0; i < filted_data.length; i++) {
    $("#slider").append(
      '<div class="foodCard_card"><a href="#map" onclick="update2(' +
        filted_data[i].id +
        ')"><div class="foodCard_box"><div class="pic"><img src="images/' +
        filted_data[i].id +
        '.jpg" alt=""></div><div class="text">' +
        filted_data[i].detail.name +
        "</div></div></a></div>"
    );
  }
  newslider = slider.rebuild();
}

// -- Google map START --
var map,
  marker,
  markers = [];

function initialize(id) {
  var myLatlng = new google.maps.LatLng(
    data[id].detail.lat,
    data[id].detail.lng
  );
  var mapOptions = {
    maxZoom: 18,
    minZoom: 12,
    zoom: 15,
    center: myLatlng,
    zoomControl: true,
    scaleControl: false,
    rotateControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(data[id].detail.lat, data[id].detail.lng),
    map: map
  });

  markers.push(marker);
}

initialize(0);
// -- Google map END --

// 客製化下拉選單
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
      getInput();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// 最開始 顯示全部15筆資料
getInput();

var counter = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
  slide = document.querySelector("#slide"),
  items = slide.querySelectorAll("img"), // 抓取所有 img
  itemsCount = items.length, // 圖片總數
  prevBtn = document.createElement("a"), // 上一張按鈕
  nextBtn = document.createElement("a"), // 下一張按鈕
  timer = 4000, // 4 秒換圖
  interval = window.setInterval(showNext, timer); // 設定循環

prevBtn.classList.add("prev"); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
nextBtn.classList.add("next"); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
slide.appendChild(prevBtn); // 將按鈕加到 #slide 裡
slide.appendChild(nextBtn);

// 帶入目前要顯示第幾張圖
var showCurrent = function() {
  var itemToShow = Math.abs(counter % itemsCount); // 取餘數才能無限循環
  [].forEach.call(items, function(el) {
    el.classList.remove("show"); // 將所有 img 的 class="show" 移除
  });
  items[itemToShow].classList.add("show"); // 將要顯示的 img 加入 class="show"
};

function showNext() {
  counter++; // 將 counter+1 指定下一張圖
  showCurrent();
}

function showPrev() {
  counter--; // 將 counter－1 指定上一張圖
  showCurrent();
}

// 滑鼠移到 #slider 上方時，停止循環計時
slide.addEventListener("mouseover", function() {
  interval = clearInterval(interval);
});

// 滑鼠離開 #slider 時，重新開始循環計時
slide.addEventListener("mouseout", function() {
  interval = window.setInterval(showNext, timer);
});

// 綁定點擊上一張，下一張按鈕的事件
nextBtn.addEventListener("click", showNext, false);
prevBtn.addEventListener("click", showPrev, false);

// 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
items[0].classList.add("show");

function update2(id) {
  markers[0].setMap(null);
  markers = [];
  initialize(id);

  $("#slide").empty();
  $("#select_item").empty();
  $("#slide").append('<img src="images/' + id + '.jpg" />');
  for (let i = 0; i < data[id].detail.image.length - 1; i++) {
    $("#slide").append('<img src="images/' + id + "." + i + '.jpg" />');
  }
  slide = document.querySelector("#slide");
  items = slide.querySelectorAll("img"); // 抓取所有 img
  itemsCount = items.length; // 圖片總數
  prevBtn = document.createElement("a"); // 上一張按鈕
  nextBtn = document.createElement("a"); // 下一張按鈕
  prevBtn.classList.add("prev"); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
  nextBtn.classList.add("next"); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
  timer = 4000; // 4 秒換圖
  interval = clearInterval(interval);
  interval = window.setInterval(showNext, timer); // 設定循環
  slide.appendChild(prevBtn); // 將按鈕加到 #slide 裡
  slide.appendChild(nextBtn);

  // 滑鼠移到 #slider 上方時，停止循環計時
  slide.addEventListener("mouseover", function() {
    interval = clearInterval(interval);
  });

  // 滑鼠離開 #slider 時，重新開始循環計時
  slide.addEventListener("mouseout", function() {
    interval = window.setInterval(showNext, timer);
  });

  // 綁定點擊上一張，下一張按鈕的事件
  nextBtn.addEventListener("click", showNext, false);
  prevBtn.addEventListener("click", showPrev, false);

  // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
  items[0].classList.add("show");

  $("#detail_box h2")[0].innerHTML = data[id].detail.name;
  $("#detail_box p")[0].innerHTML = "價位：" + data[id].detail.price;
  $("#detail_box p")[1].innerHTML = "營業時間：" + data[id].detail.time;
  $("#detail_box p")[2].innerHTML = "聯絡電話：" + data[id].detail.tel;
  $("#detail_box p")[3].innerHTML = "地址：" + data[id].detail.address;

  $("#detail_box a")[0].href = data[id].detail.website;

  if (data[id].detail.mrt) {
    $("#select_item").append(`<label class="container">近捷運站
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
  if (data[id].detail.wifi) {
    $("#select_item").append(`<label class="container">提供wifi
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
  if (data[id].detail.noTimeLimit) {
    $("#select_item").append(`<label class="container">不限時
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
  if (data[id].detail.lightMeal) {
    $("#select_item").append(`<label class="container">輕食
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
  if (data[id].detail.brunch) {
    $("#select_item").append(`<label class="container">早午餐
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
  if (data[id].detail.cafe) {
    $("#select_item").append(`<label class="container">咖啡廳
    <input type="checkbox" onclick="return false" checked>
    <span class="checkmark"></span>
  </label>`);
  }
}
