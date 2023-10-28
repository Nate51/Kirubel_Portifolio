let underline = document.querySelectorAll(".underline-effect");

// The underline effect for the navbar so when you click it, it stays on a single <a>
underline.forEach(underLine=>{
    underLine.addEventListener('click', function (e){
    underline.forEach(underLine =>{
        underLine.classList.remove('effect');
    });
    this.classList.add('effect');
    });
});

//
header3=document.getElementById("menu_btn");
header3.onclick = function(){
    navBar=document.querySelector(".navbar");
    navBar.classList.toggle("active");
}