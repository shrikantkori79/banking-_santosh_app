/* =====================================================
   ADD INSTALLMENT
===================================================== */

function addInstallment() {

    const fromMonth =
        document.getElementById("fromMonth").value;

    const fromDay =
        document.getElementById("fromDay").value;

    const toMonth =
        document.getElementById("toMonth").value;

    const toDay =
        document.getElementById("toDay").value;

    const interest =
        document.getElementById("interest").value.trim();


    /* =================================================
       VALIDATION
    ================================================= */

    if (interest === "") {
        alert("Please enter Int %.");
        document.getElementById("interest").focus();
        return;
    }


    /* =================================================
       GET SELECTED INTEREST TYPE
    ================================================= */

    const interestTypeElement =
        document.querySelector(
            'input[name="interestType"]:checked'
        );

    let interestType = "";

    if (interestTypeElement) {
        interestType = interestTypeElement.value;
    }


    /* =================================================
       CONVERT INTEREST TYPE TO BOOLEAN
    ================================================= */

    let payint = "false";
    let reccom = "false";

    if (interestType === "interest") {

        payint = "true";
        reccom = "false";

    } else if (interestType === "commission") {

        payint = "false";
        reccom = "true";

    }


    /* =================================================
       TABLE BODY
    ================================================= */

    const tableBody =
        document.getElementById("installmentTableBody");

    const emptyRow =
        document.getElementById("emptyInstallmentRow");


    if (emptyRow) {
        emptyRow.remove();
    }


    /* =================================================
       CREATE ROW
    ================================================= */

    const row =
        document.createElement("tr");


    /*
       IMPORTANT:
       payint and reccom are stored INSIDE THIS ROW.

       Therefore changing the radio button later
       will NOT change this row.
    */

    row.innerHTML = `
        <td>${fromMonth}</td>
        <td>${fromDay}</td>
        <td>${toMonth}</td>
        <td>${toDay}</td>
        <td>${interest}</td>

        <input type="hidden"
               name="payint"
               value="${payint}">

        <input type="hidden"
               name="reccom"
               value="${reccom}">

        <td style="display:none;">
            ${interestType}
        </td>

        <td>
            <button type="button"
                    onclick="removeInstallment(this)">
                Remove
            </button>
        </td>
    `;


    tableBody.appendChild(row);


    /* =================================================
       CLEAR INPUTS
    ================================================= */

    document.getElementById("fromMonth").value = "";
    document.getElementById("fromDay").value = "";
    document.getElementById("toMonth").value = "";
    document.getElementById("toDay").value = "";
    document.getElementById("interest").value = "";

    document.getElementById("fromMonth").focus();
}


/* =====================================================
   REMOVE INSTALLMENT
===================================================== */

function removeInstallment(button) {

    const row =
        button.closest("tr");

    if (row) {
        row.remove();
    }


    /* =================================================
       IF NO ROWS, SHOW EMPTY MESSAGE
    ================================================= */

    const tableBody =
        document.getElementById("installmentTableBody");

    const rows =
        tableBody.querySelectorAll("tr");


    if (rows.length === 0) {

        tableBody.innerHTML = `
            <tr id="emptyInstallmentRow">
                <td colspan="5" class="empty-row">
                    No records found
                </td>
            </tr>
        `;
    }
}


/* =====================================================
   ADD AGENT COMMISSION
===================================================== */

function addCommission() {

    const minAmount =
        document.getElementById("minAmount").value.trim();

    const maxAmount =
        document.getElementById("maxAmount").value.trim();

    const commission =
        document.getElementById("commission").value.trim();


    /* =================================================
       VALIDATION
    ================================================= */

    if (minAmount === "") {

        alert("Please enter Min Amount.");
        document.getElementById("minAmount").focus();
        return;
    }


    if (maxAmount === "") {

        alert("Please enter Max Amount.");
        document.getElementById("maxAmount").focus();
        return;
    }


    if (commission === "") {

        alert("Please enter Commission %.");
        document.getElementById("commission").focus();
        return;
    }


    /* =================================================
       TABLE BODY
    ================================================= */

    const tableBody =
        document.getElementById("commissionTableBody");

    const emptyRow =
        document.getElementById("emptyCommissionRow");


    if (emptyRow) {
        emptyRow.remove();
    }


    /* =================================================
       CREATE COMMISSION ROW
    ================================================= */

    const row =
        document.createElement("tr");


    row.innerHTML = `
        <td>${minAmount}</td>
        <td>${maxAmount}</td>
        <td>${commission}</td>

        <td>
            <button type="button"
                    onclick="removeCommission(this)">
                Remove
            </button>
        </td>
    `;


    tableBody.appendChild(row);


    /* =================================================
       CLEAR INPUTS
    ================================================= */

    document.getElementById("minAmount").value = "";
    document.getElementById("maxAmount").value = "";
    document.getElementById("commission").value = "";

    document.getElementById("minAmount").focus();
}


/* =====================================================
   REMOVE COMMISSION
===================================================== */

function removeCommission(button) {

    const row =
        button.closest("tr");

    if (row) {
        row.remove();
    }


    /* =================================================
       IF NO ROWS, SHOW EMPTY MESSAGE
    ================================================= */

    const tableBody =
        document.getElementById("commissionTableBody");

    const rows =
        tableBody.querySelectorAll("tr");


    if (rows.length === 0) {

        tableBody.innerHTML = `
            <tr id="emptyCommissionRow">
                <td colspan="3" class="empty-row">
                    No records found
                </td>
            </tr>
        `;
    }
}


/* =====================================================
   SAVE PIGMY
===================================================== */

function savePigmy() {

    /* =================================================
       PIGMY NAME
    ================================================= */

    const pigmyName =
        document.getElementById("pigmyName").value.trim();


    if (pigmyName === "") {

        alert("Please enter Pigmy Name.");
        document.getElementById("pigmyName").focus();
        return;
    }


    /* =================================================
       PIGMY NAME LOCAL
    ================================================= */

    const pigmyNameLocal =
        document.getElementById("pigmyNameLocal").value.trim();


    /* =================================================
       INTEREST TYPE
    ================================================= */

    const interestTypeElement =
        document.querySelector(
            'input[name="interestType"]:checked'
        );


    let interestType = "";


    if (interestTypeElement) {
        interestType = interestTypeElement.value;
    }


    /* =================================================
       FORM DATA
    ================================================= */

    const formData =
        new URLSearchParams();


    /* =================================================
       INSTALLMENT TABLE DATA
    ================================================= */

    const installmentRows =
        document.querySelectorAll(
            "#installmentTableBody tr"
        );


    installmentRows.forEach(function(row) {

        if (row.id === "emptyInstallmentRow") {
            return;
        }


        const cells =
            row.querySelectorAll("td");


        /*
         * Actual data columns:
         *
         * 0 = From Month
         * 1 = From Day
         * 2 = To Month
         * 3 = To Day
         * 4 = Interest
         */


        if (cells.length >= 5) {

            /* =========================================
               FROM MONTH
            ========================================= */

            formData.append(
                "fromMonth",
                cells[0].textContent.trim()
            );


            /* =========================================
               FROM DAY
            ========================================= */

            formData.append(
                "fromDay",
                cells[1].textContent.trim()
            );


            /* =========================================
               TO MONTH
            ========================================= */

            formData.append(
                "toMonth",
                cells[2].textContent.trim()
            );


            /* =========================================
               TO DAY
            ========================================= */

            formData.append(
                "toDay",
                cells[3].textContent.trim()
            );


            /* =========================================
               INTEREST
            ========================================= */

            formData.append(
                "interest",
                cells[4].textContent.trim()
            );


            /* =========================================
               GET ROW-SPECIFIC PAY INTEREST
            ========================================= */

            const payintInput =
                row.querySelector(
                    'input[name="payint"]'
                );


            let payint = "false";


            if (payintInput) {
                payint = payintInput.value;
            }


            formData.append(
                "payint",
                payint
            );


            /* =========================================
               GET ROW-SPECIFIC RECEIVE COMMISSION
            ========================================= */

            const reccomInput =
                row.querySelector(
                    'input[name="reccom"]'
                );


            let reccom = "false";


            if (reccomInput) {
                reccom = reccomInput.value;
            }


            formData.append(
                "reccom",
                reccom
            );
        }

    });


    /* =================================================
       AGENT COMMISSION TABLE DATA
    ================================================= */

    const commissionRows =
        document.querySelectorAll(
            "#commissionTableBody tr"
        );


    commissionRows.forEach(function(row) {

        if (row.id === "emptyCommissionRow") {
            return;
        }


        const cells =
            row.querySelectorAll("td");


        /*
         * 0 = Min Amount
         * 1 = Max Amount
         * 2 = Commission
         *
         * 3 = Remove button
         */


        if (cells.length >= 3) {

            formData.append(
                "minAmount",
                cells[0].textContent.trim()
            );


            formData.append(
                "maxAmount",
                cells[1].textContent.trim()
            );


            formData.append(
                "commission",
                cells[2].textContent.trim()
            );
        }

    });


    /* =================================================
       MASTER DATA
    ================================================= */

    formData.append(
        "pigmyName",
        pigmyName
    );


    formData.append(
        "pigmyNameLocal",
        pigmyNameLocal
    );


    formData.append(
        "interestDate",
        document.getElementById("interestDate").value
    );


    formData.append(
        "interestType",
        interestType
    );


    formData.append(
        "dayBase",
        document.getElementById("dayBase").checked
    );


    formData.append(
        "production",
        document.getElementById("production").checked
    );


    formData.append(
        "loanDeposit",
        document.getElementById("loanDeposit").value
    );


    formData.append(
        "loanInterest",
        document.getElementById("loanInterest").value
    );


    formData.append(
        "panInterest",
        document.getElementById("panInterest").value
    );


    /* =================================================
       DEBUG
    ================================================= */

    console.log(
        "Sending Pigmy Master Data..."
    );

    console.log(
        formData.toString()
    );


    /* =================================================
       SEND DATA TO SERVLET
    ================================================= */

    fetch("maspig", {

        method: "POST",

        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },

        body: formData.toString()

    })

    .then(function(response) {

        return response.text();

    })

    .then(function(result) {

        console.log(
            "Servlet Response:",
            result
        );


        if (result.startsWith("SUCCESS:")) {

            const pignamid =
                result.substring(8);


            alert(
                "Pigmy Master saved successfully.\nPigmy ID: "
                + pignamid
            );


            resetPigmy();

        } else {

            alert(result);
        }

    })

    .catch(function(error) {

        console.error(
            "Error:",
            error
        );


        alert(
            "Error while saving Pigmy Master."
        );

    });
}


/* =====================================================
   RESET
===================================================== */

function resetPigmy() {

    if (
        !confirm(
            "Are you sure you want to reset?"
        )
    ) {
        return;
    }


    /* =================================================
       RESET FORM
    ================================================= */

    document
        .querySelector("form")
        .reset();


    /* =================================================
       RESET INSTALLMENT TABLE
    ================================================= */

    document
        .getElementById("installmentTableBody")
        .innerHTML = `
            <tr id="emptyInstallmentRow">
                <td
                    colspan="5"
                    class="empty-row">
                    No records found
                </td>
            </tr>
        `;


    /* =================================================
       RESET COMMISSION TABLE
    ================================================= */

    document
        .getElementById("commissionTableBody")
        .innerHTML = `
            <tr id="emptyCommissionRow">
                <td
                    colspan="3"
                    class="empty-row">
                    No records found
                </td>
            </tr>
        `;
}


/* =====================================================
   EXIT
===================================================== */

function exitPigmy() {

    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {

        window.history.back();
    }
}