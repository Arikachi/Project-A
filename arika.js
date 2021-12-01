main = document.querySelector(".main");
sec1 = document.querySelector(".sec1");
sec2 = document.querySelector(".sec2");
sec3 = document.querySelector(".sec3");

main.addEventListener("click", function(){
    main.classList.add("gone");
    setTimeout(function(){
        sec1.classList.add("appear");
        sec2.classList.add("appear");
        sec3.classList.add("appear");
    }, 1000);
});

var plage = document.getElementById("plage");
var playing = false;

function audioFunction() {
    playing ? plage.pause() : plage.play();
};

plage.onplaying = function() {
    playing = true;
};
plage.onpause = function() {
    playing = false;
}

menu = document.querySelector(".mainmenu");
icon = document.querySelector(".micon");
icon1 = document.querySelector(".micon1");
icon2 = document.querySelector(".micon2");
items1 = document.querySelector(".mitems1");
items2 = document.querySelector(".mitems2");
console.log(icon2);

menu.addEventListener("mouseover", function(){
    icon.classList.add("appear2");
})

menu.addEventListener("mouseleave", function(){
    icon.classList.remove("appear2");
})

menu.addEventListener("click", function(){
    items1.classList.toggle("appear2");
    setTimeout(function(){
        items2.classList.toggle("appear2")
    }, 100);
})

items1.addEventListener("mouseover", function(){
    icon1.classList.add("appear2");
})

items1.addEventListener("mouseleave", function(){
    icon1.classList.remove("appear2");
})

items2.addEventListener("mouseover", function(){
    icon2.classList.add("appear2");
})

items2.addEventListener("mouseleave", function(){
    icon2.classList.remove("appear2");
})

items2.addEventListener("click", function(){
    sec1.classList.remove("appear");
    sec2.classList.remove("appear");
    sec3.classList.remove("appear");
    setTimeout(function(){
        main.classList.remove("gone");
    }, 1000);
})
