window.addEventListener("scroll",function(){
    var header = document.querySelector("#navs");
    header.classList.toggle('sticky', window.scrollY > 0);
});