/* =====================================================
   MASTER TD JAVASCRIPT
===================================================== */


/* =====================================================
   LOAD DEPOSIT
===================================================== */

function loadDeposit() {

    var depositSelect =
        document.getElementById("depositId");

    var selectedOption =
        depositSelect.options[
            depositSelect.selectedIndex
        ];


    /* ---------------------------------------------
       CLEAR SLAB INPUTS
    --------------------------------------------- */

    document.getElementById(
        "fromMonths"
    ).value = "";

    document.getElementById(
        "fromDays"
    ).value = "";

    document.getElementById(
        "toMonths"
    ).value = "";

    document.getElementById(
        "toDays"
    ).value = "";

    document.getElementById(
        "slabInterest"
    ).value = "";


    /* ---------------------------------------------
       CLEAR SLAB DROPDOWN
    --------------------------------------------- */

    var slabSelect =
        document.getElementById("slabName");

    slabSelect.innerHTML =
        '<option value="">Select slab name</option>';


    /* ---------------------------------------------
       CLEAR TABLE
    --------------------------------------------- */

    document.getElementById(
        "slabTableBody"
    ).innerHTML =
        '<tr id="emptySlabRow">' +
            '<td colspan="7" class="empty-row">' +
                'No records found' +
            '</td>' +
        '</tr>';


    /* ---------------------------------------------
       IF NO DEPOSIT SELECTED
    --------------------------------------------- */

    if (depositSelect.value === "") {

        clearDepositDetails();

        return;
    }


    /* ---------------------------------------------
       LOAD LOCAL NAME
    --------------------------------------------- */

    document.getElementById(
        "depositNameLocal"
    ).value =
        selectedOption.getAttribute(
            "data-local"
        ) || "";


    /* ---------------------------------------------
       LOAD LOAN DETAILS
    --------------------------------------------- */

    document.getElementById(
        "loanDeposit"
    ).value =
        selectedOption.getAttribute(
            "data-loan-deposit"
        ) || "";


    document.getElementById(
        "loanInterest"
    ).value =
        selectedOption.getAttribute(
            "data-loan-interest"
        ) || "";


    document.getElementById(
        "panInterest"
    ).value =
        selectedOption.getAttribute(
            "data-pan-interest"
        ) || "";


    /* ---------------------------------------------
       LOAD AUTO RENEWAL
    --------------------------------------------- */

    var autoRenewal =
        selectedOption.getAttribute(
            "data-auto-renewal"
        );


    var autoRenewalCheckbox =
        document.getElementById(
            "autoRenewal"
        );


    if (
        autoRenewal === "true" ||
        autoRenewal === "1"
    ) {

        autoRenewalCheckbox.checked = true;

    } else {

        autoRenewalCheckbox.checked = false;
    }


    /* ---------------------------------------------
       LOAD MATURITY DETAILS
    --------------------------------------------- */

    document.getElementById(
        "interestAfterMaturity"
    ).value =
        selectedOption.getAttribute(
            "data-after-maturity"
        ) || "";


    document.getElementById(
        "maturityDays"
    ).value =
        selectedOption.getAttribute(
            "data-after-maturity-days"
        ) || "";


    /* ---------------------------------------------
       LOAD DEDUCTION
    --------------------------------------------- */

    document.getElementById(
        "deduction"
    ).value =
        selectedOption.getAttribute(
            "data-deduction"
        ) || "";


    /* ---------------------------------------------
       LOAD SLABS
    --------------------------------------------- */

    loadSlabs();
}


/* =====================================================
   CLEAR DEPOSIT DETAILS
===================================================== */

function clearDepositDetails() {

    document.getElementById(
        "depositNameLocal"
    ).value = "";

    document.getElementById(
        "loanDeposit"
    ).value = "";

    document.getElementById(
        "loanInterest"
    ).value = "";

    document.getElementById(
        "panInterest"
    ).value = "";

    document.getElementById(
        "autoRenewal"
    ).checked = false;

    document.getElementById(
        "interestAfterMaturity"
    ).value = "";

    document.getElementById(
        "maturityDays"
    ).value = "";

    document.getElementById(
        "deduction"
    ).value = "";
}


/* =====================================================
   LOAD SLABS
===================================================== */

function loadSlabs() {

    var depositId =
        document.getElementById(
            "depositId"
        ).value;


    var slabSelect =
        document.getElementById(
            "slabName"
        );


    /* ---------------------------------------------
       CLEAR OLD SLABS
    --------------------------------------------- */

    slabSelect.innerHTML =
        '<option value="">Select slab name</option>';


    if (depositId === "") {

        return;
    }


    /* ---------------------------------------------
       FILTER SLABS BY DEPOSIT ID
    --------------------------------------------- */

    var filteredSlabs =
        allSlabs.filter(
            function(slab) {

                return String(slab.depid) ===
                       String(depositId);

            }
        );


    /* ---------------------------------------------
       ADD SLABS TO DROPDOWN
    --------------------------------------------- */

    filteredSlabs.forEach(
        function(slab) {

            var option =
                document.createElement(
                    "option"
                );


            option.value =
                slab.id;


            option.text =
                slab.slanam;


            option.setAttribute(
                "data-slanam",
                slab.slanam
            );


            option.setAttribute(
                "data-fromon",
                slab.fromon
            );


            option.setAttribute(
                "data-froday",
                slab.froday
            );


            option.setAttribute(
                "data-tomon",
                slab.tomon
            );


            option.setAttribute(
                "data-today",
                slab.today
            );


            slabSelect.appendChild(
                option
            );

        }
    );
}


/* =====================================================
   LOAD SLAB DETAILS
===================================================== */

function loadSlabDetails() {

    var slabSelect =
        document.getElementById(
            "slabName"
        );


    var selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];


    /* ---------------------------------------------
       CLEAR DETAILS
    --------------------------------------------- */

    document.getElementById(
        "fromMonths"
    ).value = "";

    document.getElementById(
        "fromDays"
    ).value = "";

    document.getElementById(
        "toMonths"
    ).value = "";

    document.getElementById(
        "toDays"
    ).value = "";


    if (slabSelect.value === "") {

        return;
    }


    /* ---------------------------------------------
       GET SLAB VALUES
    --------------------------------------------- */

    var fromMonth =
        selectedOption.getAttribute(
            "data-fromon"
        );

    var fromDay =
        selectedOption.getAttribute(
            "data-froday"
        );

    var toMonth =
        selectedOption.getAttribute(
            "data-tomon"
        );

    var toDay =
        selectedOption.getAttribute(
            "data-today"
        );


    /* ---------------------------------------------
       DISPLAY VALUES
    --------------------------------------------- */

    document.getElementById(
        "fromMonths"
    ).value =
        fromMonth;


    document.getElementById(
        "fromDays"
    ).value =
        fromDay;


    document.getElementById(
        "toMonths"
    ).value =
        toMonth;


    document.getElementById(
        "toDays"
    ).value =
        toDay;
}


/* =====================================================
   ADD SLAB
===================================================== */

function addSlab() {

    var fromMonth =
        document.getElementById(
            "fromMonths"
        ).value;

    var fromDay =
        document.getElementById(
            "fromDays"
        ).value;

    var toMonth =
        document.getElementById(
            "toMonths"
        ).value;

    var toDay =
        document.getElementById(
            "toDays"
        ).value;

    var interest =
        document.getElementById(
            "slabInterest"
        ).value.trim();

    var slabSelect =
        document.getElementById(
            "slabName"
        );


    /* ---------------------------------------------
       GET SELECTED OPTION
    --------------------------------------------- */

    var selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];


    var slabName = "";


    if (selectedOption) {

        slabName =
            selectedOption.text;

    }


    /* ---------------------------------------------
       VALIDATION
    --------------------------------------------- */

    if (fromMonth === "") {

        alert(
            "Please select From Month."
        );

        document
            .getElementById("fromMonths")
            .focus();

        return;
    }


    if (fromDay === "") {

        alert(
            "Please select From Day."
        );

        document
            .getElementById("fromDays")
            .focus();

        return;
    }


    if (toMonth === "") {

        alert(
            "Please select To Month."
        );

        document
            .getElementById("toMonths")
            .focus();

        return;
    }


    if (toDay === "") {

        alert(
            "Please select To Day."
        );

        document
            .getElementById("toDays")
            .focus();

        return;
    }


    if (slabSelect.value === "") {

        alert(
            "Please select Slab Name."
        );

        slabSelect.focus();

        return;
    }


    if (interest === "") {

        alert(
            "Please enter Interest %."
        );

        document
            .getElementById("slabInterest")
            .focus();

        return;
    }


    /* ---------------------------------------------
       FLOAT INTEREST
    --------------------------------------------- */

    var interestValue =
        parseFloat(interest);


    if (isNaN(interestValue)) {

        alert(
            "Please enter a valid Interest %."
        );

        document
            .getElementById("slabInterest")
            .focus();

        return;
    }


    /* ---------------------------------------------
       TABLE BODY
    --------------------------------------------- */

    var tableBody =
        document.getElementById(
            "slabTableBody"
        );


    var emptyRow =
        document.getElementById(
            "emptySlabRow"
        );


    /* ---------------------------------------------
       REMOVE EMPTY ROW
    --------------------------------------------- */

    if (emptyRow) {

        emptyRow.remove();

    }


    /* ---------------------------------------------
       CREATE ROW
    --------------------------------------------- */

    var row =
        document.createElement(
            "tr"
        );


    row.innerHTML =
        '<td>' +
            fromMonth +
        '</td>' +

        '<td>' +
            fromDay +
        '</td>' +

        '<td>' +
            toMonth +
        '</td>' +

        '<td>' +
            toDay +
        '</td>' +

        '<td>' +
            interestValue.toFixed(2) +
        '</td>' +

        '<td>' +
            slabName +
        '</td>' +

        '<td>' +

            '<button ' +
                'type="button" ' +
                'class="btn reset" ' +
                'onclick="removeSlab(this)">' +

                'Remove' +

            '</button>' +

        '</td>';


    /* ---------------------------------------------
       STORE DATA IN ROW
    --------------------------------------------- */

    row.setAttribute(
        "data-slaid",
        slabSelect.value
    );


    row.setAttribute(
        "data-slanam",
        slabName
    );


    row.setAttribute(
        "data-fromon",
        fromMonth
    );


    row.setAttribute(
        "data-froday",
        fromDay
    );


    row.setAttribute(
        "data-tomon",
        toMonth
    );


    row.setAttribute(
        "data-today",
        toDay
    );


    row.setAttribute(
        "data-interest",
        interestValue
    );


    tableBody.appendChild(
        row
    );


    /* ---------------------------------------------
       CLEAR INPUTS
    --------------------------------------------- */

    document.getElementById(
        "fromMonths"
    ).value = "";

    document.getElementById(
        "fromDays"
    ).value = "";

    document.getElementById(
        "toMonths"
    ).value = "";

    document.getElementById(
        "toDays"
    ).value = "";

    document.getElementById(
        "slabInterest"
    ).value = "";

    document.getElementById(
        "slabName"
    ).value = "";


    /* ---------------------------------------------
       FOCUS
    --------------------------------------------- */

    document
        .getElementById("slabName")
        .focus();
}


/* =====================================================
   REMOVE SLAB
===================================================== */

function removeSlab(button) {

    var row =
        button.parentNode.parentNode;


    if (row) {

        row.remove();

    }


    /* ---------------------------------------------
       CHECK TABLE
    --------------------------------------------- */

    var tableBody =
        document.getElementById(
            "slabTableBody"
        );


    var rows =
        tableBody.getElementsByTagName(
            "tr"
        );


    if (rows.length === 0) {

        tableBody.innerHTML =
            '<tr id="emptySlabRow">' +

                '<td ' +
                    'colspan="7" ' +
                    'class="empty-row">' +

                    'No records found' +

                '</td>' +

            '</tr>';
    }
}


/* =====================================================
   SAVE TD MASTER
===================================================== */

function saveTD() {

    /* ---------------------------------------------
       GET DEPOSIT ID
    --------------------------------------------- */

    var depositId =
        document.getElementById(
            "depositId"
        ).value;


    /* ---------------------------------------------
       GET INTEREST DATE
    --------------------------------------------- */

    var interestDate =
        document.getElementById(
            "interestDate"
        ).value;


    /* ---------------------------------------------
       VALIDATE DEPOSIT
    --------------------------------------------- */

    if (depositId === "") {

        alert(
            "Please select Deposit Name."
        );

        document
            .getElementById("depositId")
            .focus();

        return;
    }


    /* ---------------------------------------------
       VALIDATE DATE
    --------------------------------------------- */

    if (interestDate === "") {

        alert(
            "Please select Interest Applicable Date."
        );

        document
            .getElementById("interestDate")
            .focus();

        return;
    }


    /* ---------------------------------------------
       GET TABLE
    --------------------------------------------- */

    var tableBody =
        document.getElementById(
            "slabTableBody"
        );


    var rows =
        tableBody.getElementsByTagName(
            "tr"
        );


    /* ---------------------------------------------
       COUNT ACTUAL SLABS
    --------------------------------------------- */

    var slabCount = 0;

    var i;

    for (
        i = 0;
        i < rows.length;
        i++
    ) {

        if (
            rows[i].id !==
            "emptySlabRow"
        ) {

            slabCount++;

        }
    }


    /* ---------------------------------------------
       VALIDATE SLABS
    --------------------------------------------- */

    if (slabCount === 0) {

        alert(
            "Please add at least one slab."
        );

        return;
    }


    /* ---------------------------------------------
       GET FORM
    --------------------------------------------- */

    var form =
        document.getElementById(
            "mastertdForm"
        );


    /* ---------------------------------------------
       REMOVE OLD HIDDEN INPUTS
    --------------------------------------------- */

    var oldInputs =
        document.querySelectorAll(
            ".dynamic-input"
        );


    for (
        i = 0;
        i < oldInputs.length;
        i++
    ) {

        oldInputs[i].remove();

    }


    /* ---------------------------------------------
       ADD SLAB DATA
    --------------------------------------------- */

    for (
        i = 0;
        i < rows.length;
        i++
    ) {

        var row =
            rows[i];


        if (
            row.id ===
            "emptySlabRow"
        ) {

            continue;
        }


        /* -----------------------------------------
           SLA ID
        ----------------------------------------- */

        addHidden(
            form,
            "slaid",
            row.getAttribute(
                "data-slaid"
            )
        );


        /* -----------------------------------------
           SLAB NAME
        ----------------------------------------- */

        addHidden(
            form,
            "slanam",
            row.getAttribute(
                "data-slanam"
            )
        );


        /* -----------------------------------------
           FROM MONTH
        ----------------------------------------- */

        addHidden(
            form,
            "fromon",
            row.getAttribute(
                "data-fromon"
            )
        );


        /* -----------------------------------------
           FROM DAY
        ----------------------------------------- */

        addHidden(
            form,
            "froday",
            row.getAttribute(
                "data-froday"
            )
        );


        /* -----------------------------------------
           TO MONTH
        ----------------------------------------- */

        addHidden(
            form,
            "tomon",
            row.getAttribute(
                "data-tomon"
            )
        );


        /* -----------------------------------------
           TO DAY
        ----------------------------------------- */

        addHidden(
            form,
            "today",
            row.getAttribute(
                "data-today"
            )
        );


        /* -----------------------------------------
           FLOAT INTEREST
        ----------------------------------------- */

        addHidden(
            form,
            "int",
            row.getAttribute(
                "data-interest"
            )
        );
    }


    /* ---------------------------------------------
       DEPOSIT ID
    --------------------------------------------- */

    /*
       The select already has:
       name="depid"

       Therefore we don't add another
       hidden depid here.
    */


    /* ---------------------------------------------
       INTEREST DATE
    --------------------------------------------- */

    /*
       The date input already has:
       name="intdate"
    */


    /* ---------------------------------------------
       AUTO RENEWAL
    --------------------------------------------- */

    var autoRenewal =
        document.getElementById(
            "autoRenewal"
        ).checked;


    console.log(
        "AUTO RENEWAL = " +
        autoRenewal
    );


    /* ---------------------------------------------
       DEBUG
    --------------------------------------------- */

    console.log(
        "DEPOSIT ID = " +
        depositId
    );


    console.log(
        "INTEREST DATE = " +
        interestDate
    );


    console.log(
        "SLAB COUNT = " +
        slabCount
    );


    /* ---------------------------------------------
       SUBMIT FORM
    --------------------------------------------- */

    form.submit();
}


/* =====================================================
   ADD HIDDEN INPUT
===================================================== */

function addHidden(
    form,
    name,
    value
) {

    var input =
        document.createElement(
            "input"
        );


    input.type =
        "hidden";


    input.name =
        name;


    input.value =
        value;


    input.className =
        "dynamic-input";


    form.appendChild(
        input
    );
}


/* =====================================================
   RESET
===================================================== */

function resetTD() {

    if (
        !confirm(
            "Are you sure you want to reset?"
        )
    ) {

        return;
    }


    /* ---------------------------------------------
       RESET FORM
    --------------------------------------------- */

    document
        .getElementById(
            "mastertdForm"
        )
        .reset();


    /* ---------------------------------------------
       CLEAR DEPOSIT DETAILS
    --------------------------------------------- */

    clearDepositDetails();


    /* ---------------------------------------------
       CLEAR SLAB DROPDOWN
    --------------------------------------------- */

    document.getElementById(
        "slabName"
    ).innerHTML =
        '<option value="">Select slab name</option>';


    /* ---------------------------------------------
       CLEAR SLAB DETAILS
    --------------------------------------------- */

    document.getElementById(
        "fromMonths"
    ).value = "";

    document.getElementById(
        "fromDays"
    ).value = "";

    document.getElementById(
        "toMonths"
    ).value = "";

    document.getElementById(
        "toDays"
    ).value = "";

    document.getElementById(
        "slabInterest"
    ).value = "";


    /* ---------------------------------------------
       CLEAR TABLE
    --------------------------------------------- */

    document.getElementById(
        "slabTableBody"
    ).innerHTML =
        '<tr id="emptySlabRow">' +

            '<td ' +
                'colspan="7" ' +
                'class="empty-row">' +

                'No records found' +

            '</td>' +

        '</tr>';
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