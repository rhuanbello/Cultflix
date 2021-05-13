/*  $('.owl-carousel').owlCarousel({
    loop:true, // navegação infinita
    margin:7, // margem entre cada box
    nav: false, // botão de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3 // quando a tela tiver 600 px ou menos, só exiba 5 itens na tela
        },
        1000:{ // quando a tela tiver 1000 px ou mais, só exiba 5 itens na tela
            items:5
        }
    }
})

*/

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})