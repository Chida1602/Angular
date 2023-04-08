document.querySelector("#login").addEventListener("click",function(){
    document.querySelector(".pop-up").classList.add("active");
});
document.querySelector(".pop-up .close-button").addEventListener("click",function(){
    document.querySelector(".pop-up").classList.remove("active");
});
