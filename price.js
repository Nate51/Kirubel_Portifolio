const goldYear = document.getElementById('gold-year');
const goldQuarter = document.getElementById('gold-half-year');
const goldMonth = document.getElementById('gold-quarter');
const yearGoldChange = document.querySelector('.gold-change');
const changeGoldP = document.querySelector('.change-gold-p');

goldYear.addEventListener('click', function() {
    goldYear.classList.add('active');
    goldQuarter.classList.remove('active');
    goldMonth.classList.remove('active');
    yearGoldChange.innerHTML = "60,000 ETB/Year";
    changeGoldP.innerHTML = "96 videos and 192 pictures";

});
goldQuarter.addEventListener('click', function() {
    goldQuarter.classList.add('active');
    goldYear.classList.remove('active');
    goldMonth.classList.remove('active');

    yearGoldChange.innerHTML = "30,000 ETB/Half-Year";
    changeGoldP.innerHTML = "48 videos and 96 pictures";

});
goldMonth.addEventListener('click', function() {
    goldMonth.classList.add('active');
    goldYear.classList.remove('active');
    goldQuarter.classList.remove('active');

    yearGoldChange.innerHTML = "10,000 ETB/Quarter";
    changeGoldP.innerHTML = "24 videos and 48 pictures";


});

const silverHalfY= document.getElementById('silver-half-year');
const silverQuarter= document.getElementById('silver-quarter');
const silverChange = document.querySelector('.quarter-change');
const silverChangeP = document.querySelector('.change-silver-p');

silverHalfY.addEventListener('click', function() {
    silverHalfY.classList.add('active');
    silverQuarter.classList.remove('active');

    silverChange.innerHTML = "35,000ETB/Half-year";
    silverChangeP.innerHTML= "48 videos and 48 pictures";


});

silverQuarter.addEventListener('click', function() {
    silverQuarter.classList.add('active');
    silverHalfY.classList.remove('active');
    silverChange.innerHTML = "15,000ETB/Half-year";
    silverChangeP.innerHTML= "24 videos and 24 pictures";

});

