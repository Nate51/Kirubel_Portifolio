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

const sections = document.querySelectorAll('.section');
window.addEventListener('scroll',()=>{
    const scrollY = window.scrollY + 110; //the distance of how long the window moved

    sections.forEach((section,index) =>{
        const sectionTop = section.offsetTop;
        // the distance between the top of the section to the top of the parent(body in this instance)
        if(scrollY>=sectionTop){
            underline.forEach(underLine=>{
                underLine.classList.remove('effect');
            });
            underline[index].classList.add('effect');
        }
    });
});



//for screens less than 768px for the navbar to be active when clicked on the menu btn
header3=document.getElementById("menu_btn");
header3.onclick = function(){
    navBar=document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

