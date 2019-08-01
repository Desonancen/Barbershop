var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var map = document.querySelector(".contacts-button");
var popmap = document.querySelector(".modal-map");
var closemap = popmap.querySelector(".modal-close");

link.addEventListener("click", function (evt){
evt.preventDefault();
popup.classList.add("modal-show");
if (storage) {
    login.value=storage;
    password.focus();
}
else {
    login.focus();
}
});

close.addEventListener("click", function (evt){
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt){
if(!login.value || !password.value) {
    evt.preventDefault();
   popup.classList.add("modal-error");
}
else {
    localStorage.setItem("login",login.value);
}
});

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode===27) {
        if(popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
        }
    }
});

map.addEventListener("click", function (evt){
    evt.preventDefault();
    popmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt){
    evt.preventDefault();
    popmap.classList.remove("modal-show");
 });

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode===27) {
        if(popmap.classList.contains("modal-show")) {
            popmap.classList.remove("modal-show");
        }
    }
});    

