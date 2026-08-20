// =========================================
// GET HTML ELEMENTS
// =========================================

const loginPage =
    document.getElementById("loginPage");

const homePage =
    document.getElementById("homePage");

const loginForm =
    document.getElementById("loginForm");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const errorMessage =
    document.getElementById("errorMessage");

const togglePassword =
    document.getElementById("togglePassword");

const practiceLogin =
    document.getElementById("practiceLogin");

const logoutButton =
    document.getElementById("logoutButton");

const forgotPassword =
    document.getElementById("forgotPassword");

const registerLink =
    document.getElementById("registerLink");


// =========================================
// NORMAL PRACTICE LOGIN
// =========================================

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredUsername =
        username.value.trim();

    const enteredPassword =
        password.value.trim();


    // Empty field check

    if (
        enteredUsername === "" ||
        enteredPassword === ""
    ) {

        errorMessage.textContent =
            "Please enter a username and password.";

        return;
    }


    // Open Sahil's page

    openHomePage();

});


// =========================================
// PRACTICE LOGIN BUTTON
// =========================================

practiceLogin.addEventListener("click", function() {

    username.value =
        "Practice Student";

    password.value =
        "practice123";


    openHomePage();

});


// =========================================
// OPEN HOME PAGE
// =========================================

function openHomePage() {

    errorMessage.textContent = "";

    loginPage.style.display =
        "none";

    homePage.style.display =
        "block";

    window.scrollTo(
        0,
        0
    );

}


// =========================================
// SHOW / HIDE PASSWORD
// =========================================

togglePassword.addEventListener(
    "click",
    function() {

        if (
            password.type ===
            "password"
        ) {

            password.type =
                "text";

            togglePassword.textContent =
                "🙈";

        } else {

            password.type =
                "password";

            togglePassword.textContent =
                "👁";

        }

    }
);


// =========================================
// LOGOUT
// =========================================

logoutButton.addEventListener(
    "click",
    function() {

        homePage.style.display =
            "none";

        loginPage.style.display =
            "grid";


        username.value = "";

        password.value = "";

        errorMessage.textContent =
            "";

        window.scrollTo(
            0,
            0
        );

    }
);


// =========================================
// FORGOT PASSWORD
// =========================================

forgotPassword.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        alert(
            "Practice Mode: Password recovery is not connected yet."
        );

    }
);


// =========================================
// REGISTER
// =========================================

registerLink.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        alert(
            "Registration page will be added in the next step."
        );

    }
);


// =========================================
// SCROLL FUNCTIONS
// =========================================

function scrollToLearning() {

    document
        .getElementById("learning")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToAbout() {

    document
        .getElementById("about")
        .scrollIntoView({
            behavior: "smooth"
        });

}
