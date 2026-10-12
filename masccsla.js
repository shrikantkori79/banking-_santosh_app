/* =====================================================
   SHOW KANNADA NAME
===================================================== */

function showKannadaName() {

    const deposit =
        document.getElementById("depositId");

    const localName =
        document.getElementById("depositNameLocal");

    if (deposit.selectedIndex > 0) {

        const selectedOption =
            deposit.options[deposit.selectedIndex];

        const kannadaName =
            selectedOption.getAttribute("data-local");

        localName.value =
            kannadaName || "";

    } else {

        localName.value = "";

    }
}


/* =====================================================
   CLEAR LOCAL NAME ON RESET
===================================================== */

function clearLocalName() {

    document.getElementById(
        "depositNameLocal"
    ).value = "";

}


/* =====================================================
   VALIDATE SLAB MASTER
===================================================== */

function validateSlab() {

    const deposit =
        document.getElementById("depositId").value;

    const slabName =
        document.getElementById("slabName").value.trim();

    const month =
        document.getElementById("fromMonths").value;

    const day =
        document.getElementById("fromDays").value;


    /* ---------------------------------------------
       DEPOSIT VALIDATION
    --------------------------------------------- */

    if (deposit === "") {

        alert("Please select Deposit Name.");

        document
            .getElementById("depositId")
            .focus();

        return false;
    }


    /* ---------------------------------------------
       SLAB NAME VALIDATION
    --------------------------------------------- */

    if (slabName === "") {

        alert("Please enter Slab Name.");

        document
            .getElementById("slabName")
            .focus();

        return false;
    }


    /* ---------------------------------------------
       MONTH VALIDATION
    --------------------------------------------- */

    if (month === "") {

        alert("Please select Month.");

        document
            .getElementById("fromMonths")
            .focus();

        return false;
    }


    /* ---------------------------------------------
       DAY VALIDATION
    --------------------------------------------- */

    if (day === "") {

        alert("Please select Day.");

        document
            .getElementById("fromDays")
            .focus();

        return false;
    }


    return true;
}


/* =====================================================
   EXIT
===================================================== */

function exitTD() {

    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {

        window.history.back();

    }

}