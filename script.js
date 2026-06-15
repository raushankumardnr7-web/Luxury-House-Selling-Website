// ==============================
// DreamHome - JavaScript
// ==============================


// Dark / Light Mode Toggle

const modeBtn = document.getElementById("mode");

modeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        modeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
    else{
        modeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }

});



// ==============================
// EMI Calculator
// Formula:
// EMI = P × R × (1+R)^N / ((1+R)^N - 1)
// ==============================

function calculateEMI(){

    let amount =
    document.getElementById("amount").value;

    let rate =
    document.getElementById("rate").value;

    let years =
    document.getElementById("years").value;


    if(amount === "" || rate === "" || years === ""){

        alert("Please fill all EMI details");

        return;
    }


    let P = parseFloat(amount);

    let R = parseFloat(rate) / 12 / 100;

    let N = parseFloat(years) * 12;


    let emi =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);


    document.getElementById("result")
    .innerHTML =
    "Monthly EMI: ₹" +
    emi.toFixed(0).toLocaleString();

}


// ==============================
// Property Search Button
// ==============================

const searchBtn =
document.querySelector(".search-box button");


searchBtn.addEventListener("click", () => {

    let location =
    document.querySelector(
        ".search-box input"
    ).value;


    if(location === ""){

        alert(
            "Please enter a location to search properties"
        );

    }
    else{

        alert(
            "Searching luxury homes in " +
            location + " 🏡"
        );

    }

});




// ==============================
// Property Card Animation
// ==============================


const cards =
document.querySelectorAll(".card");


const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry)=> {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

});


cards.forEach((card)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(60px)";

    card.style.transition =
    "0.8s";

    observer.observe(card);

});




// ==============================
// Contact Form Validation
// ==============================


const form =
document.querySelector("form");


form.addEventListener("submit", (e)=>{

    e.preventDefault();


    const name =
    form.querySelector(
        'input[type="text"]'
    ).value;


    const email =
    form.querySelector(
        'input[type="email"]'
    ).value;


    const message =
    form.querySelector("textarea").value;



    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        alert(
            "Please complete the contact form."
        );

    }

    else{

        alert(
            "Thank you " + name +
            "! Our agent will contact you soon."
        );


        form.reset();

    }

});



// ==============================
// Welcome Animation
// ==============================


window.addEventListener("load", ()=>{

    setTimeout(()=>{

        alert(
        "🏡 Welcome to DreamHome - Find Your Perfect Luxury House!"
        );

    }, 800);

});