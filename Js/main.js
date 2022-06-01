function onload(){
    window.location.href = "#home";
    window.scrollTo(0, 0);
}
window.onload(onload);

window.addEventListener("scroll", function(){
    if(window.scrollY==0){
        window.location.href = "#home";
    }
});