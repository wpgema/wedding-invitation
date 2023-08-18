const main = document.getElementById('main');
const tombol = document.getElementById('a');

main.classList.add('display');

tombol.addEventListener("click", function(){
    main.classList.remove('display')
})

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        // var revealPoint = 80;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }

}

}

// This is an example with default parameters
    // You'll always have to call simplyCountdown using ID's, no classes.

    simplyCountdown('.simply-countdown', {
        year: 2023, // required
        month: 12, // required
        day: 17, // required
        hours: 8, // Default is 0 [0-23] integer
        words: { //words displayed into the countdown
            days: { singular: 'Hari', plural: 'Hari' },
            hours: { singular: 'Jam', plural: 'Jam' },
            minutes: { singular: 'menit', plural: 'Menit' },
            seconds: { singular: 'Detik', plural: 'Detik' }
        },
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });

