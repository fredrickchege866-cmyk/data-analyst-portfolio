```javascript
// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// ==========================================
// CLOSE MENU AFTER CLICKING A LINK
// ==========================================

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});
```
