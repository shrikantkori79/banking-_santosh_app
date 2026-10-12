/* =====================================================
   MAS RD JAVASCRIPT
   ===================================================== */


/* =====================================================
   ADD INSTALLMENT DETAILS
   ===================================================== */

function addInstallment() {

    // =============================================
    // GET VALUES
    // =============================================

    const monthElement =
        document.getElementById("month");

    const typofinsElement =
        document.getElementById("typofins");

    const interestElement =
        document.getElementById("intPercent");


    const month =
        monthElement.value.trim();

    const typofins =
        typofinsElement.value.trim();

    const typofinsName =
        typofinsElement.options[
            typofinsElement.selectedIndex
        ].text;

    const interest =
        interestElement.value.trim();


    // =============================================
    // MONTH VALIDATION
    // =============================================

    if (month === "") {

        alert("Please enter Month.");

        monthElement.focus();

        return;
    }


    // =============================================
    // TYPE OF INSTALLMENT VALIDATION
    // =============================================

    if (typofins === "") {

        alert("Please select the type of Instalment.");

        typofinsElement.focus();

        return;
    }


    // =============================================
    // INTEREST VALIDATION
    // =============================================

    if (interest === "") {

        alert("Please enter Int %.");

        interestElement.focus();

        return;
    }


    // =============================================
    // GET TABLE BODY
    // =============================================

    const tbody =
        document.getElementById(
            "installmentTableBody"
        );


    // =============================================
    // REMOVE EMPTY ROW
    // =============================================

    const emptyRow =
        document.getElementById(
            "emptyInstallmentRow"
        );

    if (emptyRow) {

        emptyRow.remove();

    }


    // =============================================
    // CREATE NEW ROW
    // =============================================

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>

            ${month}

            <input
                type="hidden"
                name="month"
                value="${month}"
            >

        </td>


        <td>

            ${typofinsName}

            <!--
                IMPORTANT:
                Visible name = Monthly / Quarterly / etc.
                Hidden value = ID
            -->

            <input
                type="hidden"
                name="typofins"
                value="${typofins}"
            >

        </td>


        <td>

            ${interest}

            <input
                type="hidden"
                name="intPercent"
                value="${interest}"
            >

        </td>


        <td>

            <button
                type="button"
                onclick="removeInstallment(this)"
            >
                Remove
            </button>

        </td>

    `;


    // =============================================
    // ADD ROW TO TABLE
    // =============================================

    tbody.appendChild(row);


    // =============================================
    // CLEAR INPUTS
    // =============================================

    monthElement.value = "0";

    typofinsElement.value = "";

    interestElement.value = "";


    // =============================================
    // FOCUS
    // =============================================

    interestElement.focus();

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


    // =============================================
    // IF NO ROWS LEFT
    // =============================================

    const tbody =
        document.getElementById(
            "installmentTableBody"
        );


    const rows =
        tbody.querySelectorAll(
            "tr"
        );


    if (rows.length === 0) {

        tbody.innerHTML = `

            <tr id="emptyInstallmentRow">

                <td
                    colspan="4"
                    class="empty-row"
                >
                    No records found
                </td>

            </tr>

        `;

    }

}


/* =====================================================
   ADD AGENT COMMISSION DETAILS
   ===================================================== */

function addCommission() {

    // =============================================
    // GET VALUES
    // =============================================

    const minAmount =
        document.getElementById(
            "minAmount"
        ).value.trim();


    const maxAmount =
        document.getElementById(
            "maxAmount"
        ).value.trim();


    const agentInt =
        document.getElementById(
            "agentInt"
        ).value.trim();


    // =============================================
    // MIN AMOUNT VALIDATION
    // =============================================

    if (minAmount === "") {

        alert("Please enter Min Amount.");

        document
            .getElementById("minAmount")
            .focus();

        return;

    }


    // =============================================
    // MAX AMOUNT VALIDATION
    // =============================================

    if (maxAmount === "") {

        alert("Please enter Max Amount.");

        document
            .getElementById("maxAmount")
            .focus();

        return;

    }


    // =============================================
    // AGENT INTEREST VALIDATION
    // =============================================

    if (agentInt === "") {

        alert("Please enter Int %.");

        document
            .getElementById("agentInt")
            .focus();

        return;

    }


    // =============================================
    // AMOUNT VALIDATION
    // =============================================

    if (
        parseFloat(minAmount) >
        parseFloat(maxAmount)
    ) {

        alert(
            "Min Amount cannot be greater than Max Amount."
        );

        document
            .getElementById("minAmount")
            .focus();

        return;

    }


    // =============================================
    // GET TABLE BODY
    // =============================================

    const tbody =
        document.getElementById(
            "commissionTableBody"
        );


    // =============================================
    // REMOVE EMPTY ROW
    // =============================================

    const emptyRow =
        document.getElementById(
            "emptyCommissionRow"
        );

    if (emptyRow) {

        emptyRow.remove();

    }


    // =============================================
    // CREATE NEW ROW
    // =============================================

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>

            ${minAmount}

            <input
                type="hidden"
                name="minAmount"
                value="${minAmount}"
            >

        </td>


        <td>

            ${maxAmount}

            <input
                type="hidden"
                name="maxAmount"
                value="${maxAmount}"
            >

        </td>


        <td>

            ${agentInt}

            <input
                type="hidden"
                name="agentInt"
                value="${agentInt}"
            >

        </td>


        <td>

            <button
                type="button"
                onclick="removeCommission(this)"
            >
                Remove
            </button>

        </td>

    `;


    // =============================================
    // ADD ROW
    // =============================================

    tbody.appendChild(row);


    // =============================================
    // CLEAR INPUTS
    // =============================================

    document
        .getElementById("minAmount")
        .value = "";


    document
        .getElementById("maxAmount")
        .value = "";


    document
        .getElementById("agentInt")
        .value = "";


    // =============================================
    // FOCUS
    // =============================================

    document
        .getElementById("minAmount")
        .focus();

}


/* =====================================================
   REMOVE AGENT COMMISSION
   ===================================================== */

function removeCommission(button) {

    const row =
        button.closest("tr");


    if (row) {

        row.remove();

    }


    // =============================================
    // IF NO ROWS LEFT
    // =============================================

    const tbody =
        document.getElementById(
            "commissionTableBody"
        );


    const rows =
        tbody.querySelectorAll(
            "tr"
        );


    if (rows.length === 0) {

        tbody.innerHTML = `

            <tr id="emptyCommissionRow">

                <td
                    colspan="4"
                    class="empty-row"
                >
                    No records found
                </td>

            </tr>

        `;

    }

}


/* =====================================================
   SAVE RD
   ===================================================== */

function saveRD() {

    // =============================================
    // GET RD NAME
    // =============================================

    const rdName =
        document
            .getElementById("rdName")
            .value
            .trim();


    // =============================================
    // RD NAME REQUIRED
    // =============================================

    if (rdName === "") {

        alert("Please enter RD Name.");

        document
            .getElementById("rdName")
            .focus();

        return false;

    }


    // =============================================
    // GET RD NAME KANNADA
    // =============================================

    const rdNameKnd =
        document
            .getElementById("rdNameKnd")
            .value
            .trim();


    // =============================================
    // RD NAME KANNADA REQUIRED
    // =============================================

    if (rdNameKnd === "") {

        alert("Please enter RD Name (Knd).");

        document
            .getElementById("rdNameKnd")
            .focus();

        return false;

    }


    // =============================================
    // CHECK INSTALLMENT ROWS
    // =============================================

    const installmentRows =
        document.querySelectorAll(
            '#installmentTableBody input[name="month"]'
        );


    // =============================================
    // CHECK AGENT ROWS
    // =============================================

    const agentRows =
        document.querySelectorAll(
            '#commissionTableBody input[name="minAmount"]'
        );


    /*
     * =================================================
     * INSTALLMENT IS OPTIONAL
     * =================================================
     *
     * AGENT IS OPTIONAL
     *
     * We do NOT require either one.
     *
     */


    // =============================================
    // INTEREST DATE
    // =============================================

    /*
     * Interest Application Date is required
     * ONLY when installment rows exist.
     */

    if (installmentRows.length > 0) {

        const interestAppDate =
            document
                .getElementById(
                    "interestAppDate"
                )
                .value;


        if (interestAppDate === "") {

            alert(
                "Please select Interest App Date."
            );

            document
                .getElementById(
                    "interestAppDate"
                )
                .focus();

            return false;

        }

    }


    // =============================================
    // SUBMIT FORM
    // =============================================

    document
        .getElementById("rdForm")
        .submit();


    return true;

}


/* =====================================================
   SUCCESS / ERROR POPUP
   ===================================================== */

window.addEventListener(
    "load",
    function () {

        // =============================================
        // GET URL PARAMETERS
        // =============================================

        const params =
            new URLSearchParams(
                window.location.search
            );


        const status =
            params.get("status");


        const rdid =
            params.get("rdid");


        // =============================================
        // SUCCESS
        // =============================================

        if (status === "success") {

            alert(
                "RD Master saved successfully.\n\n" +
                "RD ID = " +
                rdid
            );


            // =========================================
            // REMOVE PARAMETERS FROM URL
            // =========================================

            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );

        }


        // =============================================
        // ERROR
        // =============================================

        if (status === "error") {

            alert(
                "RD Master could not be saved."
            );


            // =========================================
            // REMOVE PARAMETERS FROM URL
            // =========================================

            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );

        }

    }
);


/* =====================================================
   RESET RD
   ===================================================== */

function resetRD() {

    // =============================================
    // CONFIRM RESET
    // =============================================

    if (
        !confirm(
            "Are you sure you want to reset?"
        )
    ) {

        return;

    }


    // =============================================
    // RESET FORM
    // =============================================

    document
        .getElementById("rdForm")
        .reset();


    // =============================================
    // RESET INSTALLMENT TABLE
    // =============================================

    document
        .getElementById(
            "installmentTableBody"
        )
        .innerHTML = `

        <tr id="emptyInstallmentRow">

            <td
                colspan="4"
                class="empty-row"
            >
                No records found
            </td>

        </tr>

    `;


    // =============================================
    // RESET AGENT TABLE
    // =============================================

    document
        .getElementById(
            "commissionTableBody"
        )
        .innerHTML = `

        <tr id="emptyCommissionRow">

            <td
                colspan="4"
                class="empty-row"
            >
                No records found
            </td>

        </tr>

    `;

}


/* =====================================================
   EXIT RD
   ===================================================== */

function exitRD() {

    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {

        window.history.back();

    }

}