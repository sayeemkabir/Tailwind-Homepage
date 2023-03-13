
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        margin: 30,
        dots:true,
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        responsiveClass:true,
        responsive:{
            390:{
                items:1,
                nav: true,
        margin: 30,
        dots:true,
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        responsiveClass:true,
            },
            800:{
                 items: 3,
        nav: true,
        margin: 30,
        dots:true,
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        responsiveClass:true
            }
        }



    });
  });
// dropDown()

// function dropDown(){
//     let dropContent = document.querySelector(".dropdownContent")

//     dropContent.style.display = "block"
// }

// console.log(`hello`)

console.log("hello")

// changeImage()

// function changeImage(){
//     if(document.querySelector("#languageOptions option").value === "french"){
//         let imgChange = document.querySelector(".variableImage img")

//         imgChange.src= "media/globe.png"

//     }
// }



    // let selectValue = document.getElementById("languageOptions").value;
    // let imgChange = document.querySelector("#varImage")

    // if(selectValue == "english"){
    //     imgChange.src = "book.png";
    // } 

 
    function facebook(){
        let chngIconFb = document.getElementById("fbImage").src

        chngIconFb = "facebook-hover.svg"

        console.log("seeing")
    }

    

        console.log(`tes`)

        $("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});
    