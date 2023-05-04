// FAQs Section Home Page Start
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activeBtn");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// FAQs Section Home Page End



// Course Detail Page Start
// Course Content Section 
var faq = document.getElementsByClassName("course-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activeBtncourse");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// Course Content Section 

//Course Detail Page End

// let submitData = [];
// let inputData = [];

// var nameInput = document.getElementById('mrp');

// nameInput.addEventListener('input', function () {
//     var input = this.value;
//     inputData.push(input);
// });

// document.querySelector('#pure-form').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     var submit = nameInput.value;
//     submitData.push(submit);

//     console.log(submitData + " , " + inputData);
//     if (Number(submitData) === Number(inputData)) {
//         setTimeout(function () {
//             autoAlert();
//         }, 10)
//         function AutoRefresh( t ) {
//             setTimeout("location.reload(true);", t);
//         }
//         AutoRefresh(2000);
//         submitData = [];
//         inputData = [];
//     } else {
//         alert("Try again ! Data not uploaded successfully");
//         submitData = [];
//         inputData = [];
//     }
// });

// function autoAlert() {
//     var alert =document.getElementById("alertauto");
//     alert.style.visibility = "visible";
//     alert.style.width = "50%";
//     alert.style.textAlign = "center";
//     alert.style.marginTop = "1rem";
// }



// Course Navigation - Course Detail Page - Start

// var buttonNavigation = document.querySelectorAll("a");
// for (var i = 0; i < buttonNavigation; i++) {
//     buttonNavigation[i].addEventListener("click", function () {
//         this.classList.add("activeBtn")
//     })
// }



// Course Navigation - Course Detail Page - End 



