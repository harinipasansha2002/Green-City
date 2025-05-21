let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function() {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    }
    //event prev click
prev.onclick = function() {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    }
    // auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})




const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx) => {
    item.addEventListener('click', function() {
        let click = 0
        ratingValue.value = idx + 1

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active')
        })
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            } else {
                allStar[i].style.setProperty('--i', click)
                click++
            }
        }
    })
})




// to nav bar
var navlink = document.getElementById("navlink");

// show menu 
function showmenu() {
    navlink.style.right = "0";

}

function hidemenu() {
    navlink.style.right = "-290px";
}





let dropdownbtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let Input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".list-item");



dropdownbtn.onclick = function() {
    if (list.classList.contains("show")) {
        icon.style.rotate = "0deg";
    } else {
        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};

window.onclick = function(e) {
    if (e.target.id !== "drop-text" && e.target.id !== "span" && e.target.id !== "icon") {
        list.classList.remove("show");

        icon.style.rotate = "0deg";
    }
};

for (item of listItems) {
    item.onclick = function(e) {
        span.innerText = e.target.innerText;
    };
}




const Wrapper = document.querySelector('.Wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const popupbtnpop = document.querySelector('.btn-s .Log-in');
const iconclose = document.querySelector('.icon-close');
const popupbtnsign = document.querySelector('.btn-s .sign-in');


registerlink.addEventListener('click', () => {
    Wrapper.classList.add('active');
});

popupbtnsign.addEventListener('click', () => {
    Wrapper.classList.add('active');
    Wrapper.classList.add('active-popupbtn');

});

loginlink.addEventListener('click', () => {
    Wrapper.classList.remove('active');
});

popupbtnpop.addEventListener('click', () => {
    Wrapper.classList.remove('active');
    Wrapper.classList.add('active-popupbtn');
});


iconclose.addEventListener('click', () => {
    Wrapper.classList.remove('active');
    Wrapper.classList.remove('active-popupbtn');
});