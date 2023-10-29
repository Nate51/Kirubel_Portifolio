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

// For the pricing to change colors
// const yearlySpan = document.getElementById('yearly');
// const quarterlySpan = document.getElementById('quarterly');
// const goldChange = document.querySelector(".gold-change");
// const silverChange = document.querySelector(".silver-change");
// const bronzeChange = document.querySelector(".bronze-price");

// yearlySpan.addEventListener('click', function() {
//     yearlySpan.classList.add('active');
//     quarterlySpan.classList.remove('active');
//
//     goldChange.innerHTML = "60,000 ETB/Year";
//     silverChange.innerHTML = "40,000 ETB/Year";
//     bronzeChange.innerHTML = "20,000 ETB/Year";
//
// });
// quarterlySpan.addEventListener('click', function() {
//     quarterlySpan.classList.add('active');
//     yearlySpan.classList.remove('active');
//     goldChange.innerHTML = "20,000 ETB/Quarter";
//     silverChange.innerHTML = "12,000 ETB/Quarter";
//     bronzeChange.innerHTML = "8,000 ETB/Quarter";
// });
