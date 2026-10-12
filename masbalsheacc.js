
document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("customerForm");

    const mainHead =
        document.getElementById("main_head");

    const subHead =
        document.getElementById("sub_head");

    const mainHeadKn =
        document.getElementById("main_head_kn");

    const subHeadKn =
        document.getElementById("sub_head_kn");

    const accountName =
        document.getElementById("acc_name");

    const cancelButton =
        document.getElementById("cancelButton");


    // =========================================
    // MAIN HEAD CHANGE
    // =========================================

    mainHead.addEventListener("change", function () {

        const selectedOption =
            mainHead.options[mainHead.selectedIndex];


        // =====================================
        // MAIN HEAD KANNADA
        // =====================================

        const kannada =
            selectedOption.getAttribute("data-kannada");


        if (kannada) {

            mainHeadKn.value = kannada;

        } else {

            mainHeadKn.value = "";

        }


        // =====================================
        // GET SELECTED MAIN HEAD ID
        // =====================================

        const selectedMainId =
            mainHead.value;


        // =====================================
        // RESET SUB HEAD
        // =====================================

        subHead.value = "";

        subHeadKn.value = "";


        // =====================================
        // GET ALL SUB HEAD OPTIONS
        // =====================================

        const subOptions =
            subHead.querySelectorAll("option");


        // =====================================
        // FILTER SUB HEADS
        // =====================================

        subOptions.forEach(function (option, index) {


            // Keep first option visible
            if (index === 0) {

                option.style.display = "";

                return;
            }


            // Get Main Head ID of this Sub Head
            const subMainId =
                option.getAttribute("data-main-id");


            // =================================
            // SHOW ONLY MATCHING SUB HEAD
            // =================================

            if (subMainId === selectedMainId) {

                option.style.display = "";

            } else {

                option.style.display = "none";

            }

        });

    });



    // =========================================
    // SUB HEAD CHANGE
    // =========================================

    subHead.addEventListener("change", function () {

        const selectedOption =
            subHead.options[subHead.selectedIndex];


        const kannada =
            selectedOption.getAttribute("data-kannada");


        if (kannada) {

            subHeadKn.value = kannada;

        } else {

            subHeadKn.value = "";

        }

    });



    // =========================================
    // FORM VALIDATION
    // =========================================

    form.addEventListener("submit", function (event) {


        if (mainHead.value === "") {

            event.preventDefault();

            alert("Please select Main Head.");

            mainHead.focus();

            return;

        }


        if (subHead.value === "") {

            event.preventDefault();

            alert("Please select Sub Head.");

            subHead.focus();

            return;

        }


        if (accountName.value.trim() === "") {

            event.preventDefault();

            alert("Please enter Account Name.");

            accountName.focus();

            return;

        }

    });



    // =========================================
    // CANCEL
    // =========================================

    cancelButton.addEventListener("click", function () {

        form.reset();

        mainHeadKn.value = "";

        subHeadKn.value = "";

        accountName.focus();


        // =====================================
        // SHOW ALL SUB HEADS AGAIN
        // =====================================

        const subOptions =
            subHead.querySelectorAll("option");


        subOptions.forEach(function (option) {

            option.style.display = "";

        });

    });



    // =========================================
    // SAVE RESULT POPUP
    // =========================================

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const status =
        urlParams.get("status");


    if (status === "success") {

        alert("Saved successfully!");

    }

    else if (status === "duplicate") {

        alert("Account already exists!");

    }

    else if (status === "error") {

        alert("Data not saved!");

    }



    // =========================================
    // REMOVE STATUS FROM URL
    // =========================================

    if (status !== null) {

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );

    }

});

