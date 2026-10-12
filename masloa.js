let popupType = "";
let popupSource = null;


/* =====================================================
   ADD INTEREST
===================================================== */

function addInterest() {

    const interestSelect =
        document.getElementById("interestName");

    if (!interestSelect) {
        return;
    }

    const selectedOption =
        interestSelect.options[interestSelect.selectedIndex];

    if (!selectedOption || !selectedOption.value) {

        alert("Please select Interest Name.");

        interestSelect.focus();

        return;
    }

    const interestId = selectedOption.value;

    const interestCode =
        selectedOption.getAttribute("data-code") || "";

    const interestName =
        selectedOption.textContent.trim();

    const interestType =
        selectedOption.getAttribute("data-type") || "";

    const interestInput =
        document.getElementById("interestPercent");

    const appAfterInput =
        document.getElementById("applicableAfter");

    const interest =
        interestInput ? interestInput.value.trim() : "";

    const appAfter =
        appAfterInput ? appAfterInput.value : "0";


    if (interest === "") {

        alert("Please enter Interest %.");

        if (interestInput) {
            interestInput.focus();
        }

        return;
    }


    if (isNaN(Number(interest))) {

        alert("Please enter a valid Interest %.");

        return;
    }


    if (Number(interest) < 0) {

        alert("Interest % cannot be negative.");

        return;
    }


    let finalAppAfter = 0;


    /* =================================================
       SIMPLE INTEREST
    ================================================= */

    if (interestType.startsWith("SI")) {

        finalAppAfter = 0;
    }


    /* =================================================
       PANEL INTEREST
    ================================================= */

    else if (interestType.startsWith("PI")) {

        finalAppAfter = parseInt(appAfter, 10);

        if (
            isNaN(finalAppAfter) ||
            finalAppAfter < 1 ||
            finalAppAfter > 200
        ) {

            alert(
                "Please select App Af between 1 and 200."
            );

            return;
        }
    }


    const tbody =
        document.getElementById("interestTableBody");

    if (!tbody) {
        return;
    }


    const emptyRow =
        document.getElementById("emptyInterestRow");

    if (emptyRow) {
        emptyRow.remove();
    }


    /* =================================================
       DUPLICATE CHECK
    ================================================= */

    const existingRows =
        tbody.querySelectorAll(
            "tr[data-interest-code]"
        );

    for (let i = 0; i < existingRows.length; i++) {

        const existingCode =
            existingRows[i].getAttribute(
                "data-interest-code"
            );

        if (existingCode === interestCode) {

            alert(
                interestCode +
                " is already added."
            );

            return;
        }
    }


    /* =================================================
       CREATE ROW
    ================================================= */

    const row =
        document.createElement("tr");


    row.setAttribute(
        "data-interest-id",
        interestId
    );

    row.setAttribute(
        "data-interest-code",
        interestCode
    );

    row.setAttribute(
        "data-interest-type",
        interestType
    );

    row.setAttribute(
        "data-interest-percent",
        interest
    );

    row.setAttribute(
        "data-app-after",
        finalAppAfter
    );


    const td1 = document.createElement("td");
    td1.textContent = interestName;

    const td2 = document.createElement("td");
    td2.textContent = interestCode;

    const td3 = document.createElement("td");
    td3.textContent = interest;

    const td4 = document.createElement("td");
    td4.textContent = finalAppAfter;


    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    tbody.appendChild(row);


    /* =================================================
       CLEAR INPUTS
    ================================================= */

    interestSelect.value = "";

    if (interestInput) {
        interestInput.value = "";
    }

    if (appAfterInput) {

        appAfterInput.value = "0";

        appAfterInput.disabled = true;
    }

    interestSelect.focus();
}


/* =====================================================
   INTEREST TYPE CHANGE
===================================================== */

function interestTypeChanged() {

    const interestSelect =
        document.getElementById("interestName");

    const appAfter =
        document.getElementById("applicableAfter");

    if (!interestSelect || !appAfter) {
        return;
    }


    const selectedOption =
        interestSelect.options[
            interestSelect.selectedIndex
        ];


    if (
        !selectedOption ||
        !selectedOption.value
    ) {

        appAfter.value = "0";

        appAfter.disabled = true;

        return;
    }


    const interestType =
        selectedOption.getAttribute(
            "data-type"
        ) || "";


    if (interestType.startsWith("SI")) {

        appAfter.value = "0";

        appAfter.disabled = true;
    }

    else if (interestType.startsWith("PI")) {

        appAfter.disabled = false;

        if (
            appAfter.value === "0" ||
            appAfter.value === ""
        ) {

            appAfter.value = "1";
        }
    }
}


/* =====================================================
   SAVE LOAN
===================================================== */

function saveLoan() {

    /* =================================================
       LOAN NAME
    ================================================= */

    const loanNameElement =
        document.getElementById("loanName");

    if (!loanNameElement) {

        alert("Loan Name field not found.");

        return;
    }


    const loanName =
        loanNameElement.value.trim();


    if (loanName === "") {

        alert("Please enter Loan Name.");

        loanNameElement.focus();

        return;
    }


    /* =================================================
       APPLICABLE DATE
    ================================================= */

    const applicableDateElement =
        document.getElementById("applicableDate");

    if (!applicableDateElement) {

        alert("Applicable Date field not found.");

        return;
    }


    const applicableDate =
        applicableDateElement.value;


    if (applicableDate === "") {

        alert("Please select Applicable Date.");

        applicableDateElement.focus();

        return;
    }


    /* =================================================
       INTEREST TABLE
    ================================================= */

    const interestRows =
        document.querySelectorAll(
            "#interestTableBody tr[data-interest-id]"
        );


    if (interestRows.length === 0) {

        alert("Please add at least one Interest.");

        return;
    }


    /* =================================================
       INTEREST VARIABLES
    ================================================= */

    let simint1 = 0;
    let simint2 = 0;
    let panint1 = 0;
    let panint2 = 0;
    let appaff = 0;


    /* =================================================
       READ INTEREST ROWS
    ================================================= */

    interestRows.forEach(function(row) {

        const interestCode =
            row.getAttribute(
                "data-interest-code"
            );

        const percent =
            parseFloat(
                row.getAttribute(
                    "data-interest-percent"
                )
            ) || 0;

        const after =
            parseInt(
                row.getAttribute(
                    "data-app-after"
                ),
                10
            ) || 0;


        if (interestCode === "SI1") {

            simint1 = percent;
        }

        else if (interestCode === "SI2") {

            simint2 = percent;
        }

        else if (interestCode === "PI1") {

            panint1 = percent;

            if (appaff === 0) {
                appaff = after;
            }
        }

        else if (interestCode === "PI2") {

            panint2 = percent;

            if (appaff === 0) {
                appaff = after;
            }
        }
    });


    /* =================================================
       REQUEST PARAMS
    ================================================= */

    const params =
        new URLSearchParams();


    /* =================================================
       LOAN DETAILS
    ================================================= */

    params.append(
        "loanam",
        loanName
    );


    const loanNameLocal =
        document.getElementById("loanNameLocal");

    params.append(
        "loanamkan",
        loanNameLocal
            ? loanNameLocal.value.trim()
            : ""
    );


    /* =================================================
       APPLICABLE DATE
    ================================================= */

    params.append(
        "appdat",
        applicableDate
    );


    /* =================================================
       APP AFTER
    ================================================= */

    params.append(
        "appaff",
        appaff
    );


    /* =================================================
       INTEREST ROWS
    ================================================= */

    interestRows.forEach(function(row) {

        params.append(
            "interestId",
            row.getAttribute(
                "data-interest-id"
            ) || ""
        );

        params.append(
            "interestCode",
            row.getAttribute(
                "data-interest-code"
            ) || ""
        );

        params.append(
            "interestPercent",
            row.getAttribute(
                "data-interest-percent"
            ) || "0"
        );

        params.append(
            "interestAppAfter",
            row.getAttribute(
                "data-app-after"
            ) || "0"
        );
    });


    /* =================================================
       COMPULSORY
    ================================================= */

    const compulsory =
        document.getElementById(
            "compulsory"
        );

    params.append(
        "com",
        compulsory
            ? compulsory.checked
            : false
    );


    /* =================================================
       PLEDGE CHECKBOXES
    ================================================= */

    const pledgeNames = [

        "agrlan",
        "nonagrlan",
        "golass",
        "veh",
        "agaconhou",
        "paysli",
        "dir",
        "sec"
    ];


    pledgeNames.forEach(function(name) {

        const checkbox =
            document.querySelector(
                'input[name="' + name + '"]'
            );

        params.append(
            name,
            checkbox
                ? checkbox.checked
                : false
        );
    });


    /* =================================================
       MAIN LOAN INTEREST VALUES
    ================================================= */

    params.append(
        "simint1",
        simint1
    );

    params.append(
        "simint2",
        simint2
    );

    params.append(
        "panint1",
        panint1
    );

    params.append(
        "panint2",
        panint2
    );


    /* =================================================
       INCOME / EXPENSE DETAILS
    ================================================= */

    const incomeRows =
        document.querySelectorAll(
            "#incomeTableBody tr[data-head-id][data-sub-id]"
        );


    incomeRows.forEach(function(row) {

        const headId =
            row.getAttribute(
                "data-head-id"
            );

        const subId =
            row.getAttribute(
                "data-sub-id"
            );

        const amount =
            row.getAttribute(
                "data-amount"
            ) || "0";

        const percent =
            row.getAttribute(
                "data-percent"
            ) || "0";


        /* ---------------------------------------------
           VALIDATE INCOME IDS
        --------------------------------------------- */

        if (
            !headId ||
            parseInt(headId, 10) <= 0 ||
            !subId ||
            parseInt(subId, 10) <= 0
        ) {

            console.error(
                "Invalid Income row:",
                row
            );

            alert(
                "Income / Expense Head or Sub Head ID is missing."
            );

            return;
        }


        params.append(
            "incomeHeadId",
            headId
        );

        params.append(
            "incomeSubId",
            subId
        );

        params.append(
            "incomeAmount",
            amount
        );

        params.append(
            "incomePercent",
            percent
        );
    });


    /* =================================================
       BALANCE SHEET DETAILS
    ================================================= */

    const balanceRows =
        document.querySelectorAll(
            "#balanceTableBody tr[data-head-id][data-sub-id][data-acc-id]"
        );


    console.log(
        "===================================="
    );

    console.log(
        "BALANCE SHEET ROWS BEFORE SAVE"
    );

    console.log(
        "Total Balance Rows:",
        balanceRows.length
    );


    for (let i = 0; i < balanceRows.length; i++) {

        const row = balanceRows[i];


        const headId =
            row.getAttribute(
                "data-head-id"
            );

        const subId =
            row.getAttribute(
                "data-sub-id"
            );

        const accId =
            row.getAttribute(
                "data-acc-id"
            );

        const amount =
            row.getAttribute(
                "data-amount"
            ) || "0";

        const percent =
            row.getAttribute(
                "data-percent"
            ) || "0";


        console.log(
            "------------------------------------"
        );

        console.log(
            "Balance Row:",
            i + 1
        );

        console.log(
            "Head ID:",
            headId
        );

        console.log(
            "Sub ID:",
            subId
        );

        console.log(
            "Account ID:",
            accId
        );

        console.log(
            "Amount:",
            amount
        );

        console.log(
            "Percent:",
            percent
        );


        /* ---------------------------------------------
           HEAD ID VALIDATION
        --------------------------------------------- */

        if (
            !headId ||
            parseInt(headId, 10) <= 0
        ) {

            alert(
                "Balance Sheet Main Head ID is missing."
            );

            console.error(
                "Invalid Balance Head ID:",
                headId
            );

            return;
        }


        /* ---------------------------------------------
           SUB HEAD ID VALIDATION
        --------------------------------------------- */

        if (
            !subId ||
            parseInt(subId, 10) <= 0
        ) {

            alert(
                "Balance Sheet Sub Head ID is missing."
            );

            console.error(
                "Invalid Balance Sub ID:",
                subId
            );

            return;
        }


        /* ---------------------------------------------
           ACCOUNT ID VALIDATION
        --------------------------------------------- */

        if (
            !accId ||
            parseInt(accId, 10) <= 0
        ) {

            alert(
                "Balance Sheet Account ID is missing."
            );

            console.error(
                "Invalid Balance Account ID:",
                accId
            );

            console.error(
                "Complete Balance Row:",
                row.outerHTML
            );

            return;
        }


        /* ---------------------------------------------
           AMOUNT / PERCENT
        --------------------------------------------- */

        const numericAmount =
            parseFloat(amount) || 0;

        const numericPercent =
            parseFloat(percent) || 0;


        if (
            numericAmount === 0 &&
            numericPercent === 0
        ) {

            alert(
                "Please enter Amount or Percentage for Balance Sheet."
            );

            return;
        }


        /* ---------------------------------------------
           SEND BALANCE DATA
        --------------------------------------------- */

        params.append(
            "balanceHeadId",
            headId
        );

        params.append(
            "balanceSubId",
            subId
        );

        params.append(
            "balanceAccId",
            accId
        );

        params.append(
            "balanceAmount",
            numericAmount
        );

        params.append(
            "balancePercent",
            numericPercent
        );


        console.log(
            "Balance data added to request:",
            headId,
            subId,
            accId,
            numericAmount,
            numericPercent
        );
    }


    console.log(
        "===================================="
    );

    console.log(
        "LOAN SAVE DATA"
    );

    console.log(
        "===================================="
    );

    console.log(
        "Loan Name = ",
        loanName
    );

    console.log(
        "Applicable Date = ",
        applicableDate
    );

    console.log(
        "SI1 = ",
        simint1
    );

    console.log(
        "SI2 = ",
        simint2
    );

    console.log(
        "PI1 = ",
        panint1
    );

    console.log(
        "PI2 = ",
        panint2
    );

    console.log(
        "App After = ",
        appaff
    );

    console.log(
        "Income Rows = ",
        incomeRows.length
    );

    console.log(
        "Balance Rows = ",
        balanceRows.length
    );

    console.log(
        "FINAL REQUEST = ",
        params.toString()
    );


    /* =================================================
       SEND TO SERVLET
    ================================================= */

    fetch(
        "masloa",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8"
            },

            body:
                params.toString()
        }
    )

    .then(function(response) {

        return response.text();
    })

    .then(function(result) {

        result = result.trim();

        console.log(
            "Servlet Response:",
            result
        );


        if (
            result.startsWith("success:")
        ) {

            const masloaid =
                result.substring(8);


            alert(
                "Loan and Interest Details Saved Successfully.\n\n" +
                "Loan ID: " +
                masloaid
            );
        }

        else {

            alert(
                "Loan details could not be saved.\n\n" +
                result
            );
        }
    })

    .catch(function(error) {

        console.error(
            "Save Error:",
            error
        );

        alert(
            "Error while saving Loan details."
        );
    });
}


/* =====================================================
   RESET
===================================================== */

function resetLoan() {

    if (
        !confirm(
            "Are you sure you want to reset?"
        )
    ) {

        return;
    }


    const form =
        document.querySelector("form");

    if (form) {
        form.reset();
    }


    /* =================================================
       INTEREST TABLE
    ================================================= */

    const interestTableBody =
        document.getElementById(
            "interestTableBody"
        );

    if (interestTableBody) {

        interestTableBody.innerHTML = "";

        const row =
            document.createElement("tr");

        row.id = "emptyInterestRow";

        const td =
            document.createElement("td");

        td.colSpan = 4;

        td.className = "empty-row";

        td.textContent =
            "No records found";

        row.appendChild(td);

        interestTableBody.appendChild(row);
    }


    /* =================================================
       INCOME TABLE
    ================================================= */

    const incomeTableBody =
        document.getElementById(
            "incomeTableBody"
        );

    if (incomeTableBody) {

        incomeTableBody.innerHTML = "";

        const row =
            document.createElement("tr");

        const td =
            document.createElement("td");

        td.colSpan = 4;

        td.className = "empty-row";

        td.textContent =
            "No records found";

        row.appendChild(td);

        incomeTableBody.appendChild(row);
    }


    /* =================================================
       BALANCE TABLE
    ================================================= */

    const balanceTableBody =
        document.getElementById(
            "balanceTableBody"
        );

    if (balanceTableBody) {

        balanceTableBody.innerHTML = "";

        const row =
            document.createElement("tr");

        const td =
            document.createElement("td");

        td.colSpan = 5;

        td.className = "empty-row";

        td.textContent =
            "No records found";

        row.appendChild(td);

        balanceTableBody.appendChild(row);
    }


    /* =================================================
       APP AFTER
    ================================================= */

    const appAfter =
        document.getElementById(
            "applicableAfter"
        );

    if (appAfter) {

        appAfter.value = "0";

        appAfter.disabled = true;
    }


    closePopup();
}


/* =====================================================
   EXIT
===================================================== */

function exitLoan() {

    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {

        window.history.back();
    }
}


/* =====================================================
   OPEN AMOUNT / PERCENT POPUP
===================================================== */

function openAmountPopup(
    type,
    source
) {

    popupType = type;

    popupSource = source;


    const popup =
        document.getElementById(
            "amountPopup"
        );

    const input =
        document.getElementById(
            "amountInput"
        );

    const checkbox =
        document.getElementById(
            "amountPercentCheck"
        );

    const label =
        document.getElementById(
            "amountInputLabel"
        );

    const title =
        document.getElementById(
            "popupTitle"
        );


    if (!popup || !input) {
        return;
    }


    input.value = "";


    if (checkbox) {
        checkbox.checked = false;
    }


    if (label) {

        label.textContent =
            "Enter Amount";
    }


    input.placeholder =
        "Enter amount";


    /* =================================================
       TITLE
    ================================================= */

    if (title) {

        if (type === "income") {

            title.textContent =
                "INCOME / EXPENSE";
        }

        else if (type === "balance") {

            title.textContent =
                "BALANCE SHEET";
        }

        else {

            title.textContent =
                "LOAN";
        }
    }


    popup.style.display =
        "block";


    setTimeout(function() {

        input.focus();

    }, 50);
}


/* =====================================================
   AMOUNT / PERCENT CHECKBOX CHANGE
===================================================== */

function amountTypeChanged() {

    const checkbox =
        document.getElementById(
            "amountPercentCheck"
        );

    const label =
        document.getElementById(
            "amountInputLabel"
        );

    const input =
        document.getElementById(
            "amountInput"
        );


    if (!checkbox || !input) {
        return;
    }


    if (checkbox.checked) {

        if (label) {

            label.textContent =
                "Enter Percent";
        }

        input.placeholder =
            "Enter percentage";
    }

    else {

        if (label) {

            label.textContent =
                "Enter Amount";
        }

        input.placeholder =
            "Enter amount";
    }


    input.focus();
}


/* =====================================================
   CONFIRM AMOUNT / PERCENT
===================================================== */

function confirmAmount() {

    const input =
        document.getElementById(
            "amountInput"
        );

    const checkbox =
        document.getElementById(
            "amountPercentCheck"
        );


    if (!input) {
        return;
    }


    const value =
        input.value.trim();


    /* =================================================
       EMPTY
    ================================================= */

    if (value === "") {

        if (
            checkbox &&
            checkbox.checked
        ) {

            alert(
                "Please enter percentage."
            );
        }

        else {

            alert(
                "Please enter amount."
            );
        }

        input.focus();

        return;
    }


    /* =================================================
       NUMBER
    ================================================= */

    const numberValue =
        Number(value);


    if (
        isNaN(numberValue) ||
        numberValue < 0
    ) {

        alert(
            "Please enter a valid value."
        );

        input.focus();

        return;
    }


    /* =================================================
       PERCENT VALIDATION
    ================================================= */

    if (
        checkbox &&
        checkbox.checked &&
        numberValue > 100
    ) {

        alert(
            "Percentage cannot be greater than 100."
        );

        input.focus();

        return;
    }


    /* =================================================
       PERCENT
    ================================================= */

    if (
        checkbox &&
        checkbox.checked
    ) {

        const amount = 0;

        const percent =
            numberValue;


        if (
            popupType === "income"
        ) {

            addIncomeRow(
                popupSource,
                amount,
                percent
            );
        }

        else if (
            popupType === "balance"
        ) {

            addBalanceRow(
                popupSource,
                amount,
                percent
            );
        }
    }


    /* =================================================
       AMOUNT
    ================================================= */

    else {

        const amount =
            numberValue;

        const percent = 0;


        if (
            popupType === "income"
        ) {

            addIncomeRow(
                popupSource,
                amount,
                percent
            );
        }

        else if (
            popupType === "balance"
        ) {

            addBalanceRow(
                popupSource,
                amount,
                percent
            );
        }
    }


    closePopup();
}


/* =====================================================
   CANCEL
===================================================== */

function cancelAmount() {

    closePopup();
}


/* =====================================================
   CLOSE POPUP
===================================================== */

function closePopup() {

    const popup =
        document.getElementById(
            "amountPopup"
        );


    if (popup) {

        popup.style.display =
            "none";
    }


    const input =
        document.getElementById(
            "amountInput"
        );


    if (input) {

        input.value = "";

        input.placeholder =
            "Enter amount";
    }


    const checkbox =
        document.getElementById(
            "amountPercentCheck"
        );


    if (checkbox) {

        checkbox.checked =
            false;
    }


    const label =
        document.getElementById(
            "amountInputLabel"
        );


    if (label) {

        label.textContent =
            "Enter Amount";
    }


    popupType = "";

    popupSource = null;
}


/* =====================================================
   INCOME HEAD
===================================================== */

function selectIncomeHead(
    selectElement
) {

    if (!selectElement) {
        return;
    }


    const selectedOptions =
        Array.from(
            selectElement.selectedOptions
        );


    if (
        selectedOptions.length === 0
    ) {

        return;
    }


    const option =
        selectedOptions[
            selectedOptions.length - 1
        ];


    const headId =
        option.getAttribute(
            "data-head-id"
        ) || "0";

    const subId =
        option.getAttribute(
            "data-sub-id"
        ) || "0";

    const headName =
        option.getAttribute(
            "data-head-name"
        ) || "";

    const subName =
        option.getAttribute(
            "data-sub-name"
        ) || "";

    const headKannada =
        option.getAttribute(
            "data-head-kannada"
        ) || "";

    const subKannada =
        option.getAttribute(
            "data-sub-kannada"
        ) || "";

    const fullName =
        option.textContent.trim();


    popupSource = {

        fullName: fullName,

        headId: headId,

        subId: subId,

        headName: headName,

        subName: subName,

        headKannada: headKannada,

        subKannada: subKannada
    };


    openAmountPopup(
        "income",
        popupSource
    );
}


/* =====================================================
   BALANCE HEAD
===================================================== */

function selectBalanceHead(
    selectElement
) {

    if (!selectElement) {
        return;
    }


    const selectedOptions =
        Array.from(
            selectElement.selectedOptions
        );


    if (
        selectedOptions.length === 0
    ) {

        return;
    }


    const option =
        selectedOptions[
            selectedOptions.length - 1
        ];


    /* =================================================
       READ IDS DIRECTLY FROM OPTION
    ================================================= */

    const headId =
        option.getAttribute(
            "data-head-id"
        );

    const subId =
        option.getAttribute(
            "data-sub-id"
        );

    const accId =
        option.getAttribute(
            "data-acc-id"
        );


    const headName =
        option.getAttribute(
            "data-head-name"
        ) || "";

    const subName =
        option.getAttribute(
            "data-sub-name"
        ) || "";

    const accName =
        option.getAttribute(
            "data-acc-name"
        ) || "";


    const headKannada =
        option.getAttribute(
            "data-head-kannada"
        ) || "";

    const subKannada =
        option.getAttribute(
            "data-sub-kannada"
        ) || "";

    const accKannada =
        option.getAttribute(
            "data-acc-kannada"
        ) || "";


    const fullName =
        option.textContent.trim();


    /* =================================================
       DEBUG
    ================================================= */

    console.log(
        "===================================="
    );

    console.log(
        "BALANCE SHEET OPTION SELECTED"
    );

    console.log(
        "Option Value:",
        option.value
    );

    console.log(
        "Head ID:",
        headId
    );

    console.log(
        "Sub ID:",
        subId
    );

    console.log(
        "Account ID:",
        accId
    );

    console.log(
        "Account Name:",
        accName
    );

    console.log(
        "===================================="
    );


    /* =================================================
       ACCOUNT ID MUST EXIST
    ================================================= */

    if (
        !accId ||
        parseInt(accId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Account ID is missing."
        );

        console.error(
            "Account ID missing from selected option."
        );

        console.error(
            "Selected option:",
            option.outerHTML
        );

        return;
    }


    /* =================================================
       MAIN HEAD ID
    ================================================= */

    if (
        !headId ||
        parseInt(headId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Main Head ID is missing."
        );

        return;
    }


    /* =================================================
       SUB HEAD ID
    ================================================= */

    if (
        !subId ||
        parseInt(subId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Sub Head ID is missing."
        );

        return;
    }


    /* =================================================
       CREATE POPUP SOURCE
    ================================================= */

    popupSource = {

        fullName: fullName,

        headId: headId,

        subId: subId,

        accId: accId,

        headName: headName,

        subName: subName,

        accName: accName,

        headKannada: headKannada,

        subKannada: subKannada,

        accKannada: accKannada
    };


    console.log(
        "Balance popupSource:",
        popupSource
    );


    openAmountPopup(
        "balance",
        popupSource
    );
}


/* =====================================================
   INCOME ROW
===================================================== */

function addIncomeRow(
    source,
    amount,
    percent
) {

    const tbody =
        document.getElementById(
            "incomeTableBody"
        );


    if (!tbody) {
        return;
    }


    const emptyRow =
        tbody.querySelector(
            ".empty-row"
        );


    if (emptyRow) {

        emptyRow.parentElement.remove();
    }


    if (!source) {
        return;
    }


    const headId =
        source.headId || "0";

    const subId =
        source.subId || "0";


    /* =================================================
       DUPLICATE CHECK
    ================================================= */

    const existingRows =
        tbody.querySelectorAll(
            "tr[data-head-id][data-sub-id]"
        );


    for (
        let i = 0;
        i < existingRows.length;
        i++
    ) {

        const existingHeadId =
            existingRows[i].getAttribute(
                "data-head-id"
            );

        const existingSubId =
            existingRows[i].getAttribute(
                "data-sub-id"
            );


        if (
            existingHeadId === headId &&
            existingSubId === subId
        ) {

            existingRows[i].setAttribute(
                "data-amount",
                amount
            );

            existingRows[i].setAttribute(
                "data-percent",
                percent
            );


            const cells =
                existingRows[i].children;


            if (cells.length >= 4) {

                cells[2].textContent =
                    amount;

                cells[3].textContent =
                    percent;
            }


            return;
        }
    }


    /* =================================================
       CREATE ROW
    ================================================= */

    const row =
        document.createElement("tr");


    row.setAttribute(
        "data-head-id",
        headId
    );

    row.setAttribute(
        "data-sub-id",
        subId
    );

    row.setAttribute(
        "data-head-name",
        source.headName || ""
    );

    row.setAttribute(
        "data-sub-name",
        source.subName || ""
    );

    row.setAttribute(
        "data-amount",
        amount
    );

    row.setAttribute(
        "data-percent",
        percent
    );


    /* =================================================
       MAIN HEAD
    ================================================= */

    const headCell =
        document.createElement("td");

    headCell.textContent =
        source.headName || "";


    /* =================================================
       SUB HEAD
    ================================================= */

    const subCell =
        document.createElement("td");

    subCell.textContent =
        source.subName || "";


    /* =================================================
       AMOUNT
    ================================================= */

    const amountCell =
        document.createElement("td");

    amountCell.textContent =
        amount;


    /* =================================================
       PERCENT
    ================================================= */

    const percentCell =
        document.createElement("td");

    percentCell.textContent =
        percent;


    row.appendChild(headCell);

    row.appendChild(subCell);

    row.appendChild(amountCell);

    row.appendChild(percentCell);


    tbody.appendChild(row);
}


/* =====================================================
   BALANCE ROW
===================================================== */

function addBalanceRow(
    source,
    amount,
    percent
) {

    const tbody =
        document.getElementById(
            "balanceTableBody"
        );


    if (!tbody) {
        return;
    }


    if (!source) {

        alert(
            "Balance Sheet information is missing."
        );

        return;
    }


    /* =================================================
       GET IDS
    ================================================= */

    const headId =
        String(
            source.headId || ""
        ).trim();

    const subId =
        String(
            source.subId || ""
        ).trim();

    const accId =
        String(
            source.accId || ""
        ).trim();


    console.log(
        "===================================="
    );

    console.log(
        "ADDING BALANCE SHEET ROW"
    );

    console.log(
        "Head ID:",
        headId
    );

    console.log(
        "Sub ID:",
        subId
    );

    console.log(
        "Account ID:",
        accId
    );

    console.log(
        "Amount:",
        amount
    );

    console.log(
        "Percent:",
        percent
    );

    console.log(
        "===================================="
    );


    /* =================================================
       VALIDATE HEAD
    ================================================= */

    if (
        headId === "" ||
        parseInt(headId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Main Head ID is missing."
        );

        return;
    }


    /* =================================================
       VALIDATE SUB HEAD
    ================================================= */

    if (
        subId === "" ||
        parseInt(subId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Sub Head ID is missing."
        );

        return;
    }


    /* =================================================
       VALIDATE ACCOUNT
    ================================================= */

    if (
        accId === "" ||
        parseInt(accId, 10) <= 0
    ) {

        alert(
            "Balance Sheet Account ID is missing."
        );

        console.error(
            "Invalid balance source:",
            source
        );

        return;
    }


    /* =================================================
       REMOVE EMPTY ROW
    ================================================= */

    const emptyRow =
        tbody.querySelector(
            ".empty-row"
        );


    if (emptyRow) {

        emptyRow.parentElement.remove();
    }


    /* =================================================
       DUPLICATE CHECK
    ================================================= */

    const existingRows =
        tbody.querySelectorAll(
            "tr[data-head-id][data-sub-id][data-acc-id]"
        );


    for (
        let i = 0;
        i < existingRows.length;
        i++
    ) {

        const existingHeadId =
            existingRows[i].getAttribute(
                "data-head-id"
            );

        const existingSubId =
            existingRows[i].getAttribute(
                "data-sub-id"
            );

        const existingAccId =
            existingRows[i].getAttribute(
                "data-acc-id"
            );


        if (
            existingHeadId === headId &&
            existingSubId === subId &&
            existingAccId === accId
        ) {

            existingRows[i].setAttribute(
                "data-amount",
                amount
            );

            existingRows[i].setAttribute(
                "data-percent",
                percent
            );


            const cells =
                existingRows[i].children;


            if (cells.length >= 5) {

                cells[3].textContent =
                    amount;

                cells[4].textContent =
                    percent;
            }


            console.log(
                "Existing Balance row updated."
            );

            return;
        }
    }


    /* =================================================
       CREATE NEW ROW
    ================================================= */

    const row =
        document.createElement("tr");


    /* =================================================
       STORE ALL IDS IN ROW
    ================================================= */

    row.setAttribute(
        "data-head-id",
        headId
    );

    row.setAttribute(
        "data-sub-id",
        subId
    );

    row.setAttribute(
        "data-acc-id",
        accId
    );


    row.setAttribute(
        "data-head-name",
        source.headName || ""
    );

    row.setAttribute(
        "data-sub-name",
        source.subName || ""
    );

    row.setAttribute(
        "data-acc-name",
        source.accName || ""
    );


    row.setAttribute(
        "data-amount",
        amount
    );

    row.setAttribute(
        "data-percent",
        percent
    );


    /* =================================================
       MAIN HEAD
    ================================================= */

    const headCell =
        document.createElement("td");

    headCell.textContent =
        source.headName || "";


    /* =================================================
       SUB HEAD
    ================================================= */

    const subCell =
        document.createElement("td");

    subCell.textContent =
        source.subName || "";


    /* =================================================
       ACCOUNT
    ================================================= */

    const accountCell =
        document.createElement("td");

    accountCell.textContent =
        source.accName || "";


    /* =================================================
       AMOUNT
    ================================================= */

    const amountCell =
        document.createElement("td");

    amountCell.textContent =
        amount;


    /* =================================================
       PERCENT
    ================================================= */

    const percentCell =
        document.createElement("td");

    percentCell.textContent =
        percent;


    row.appendChild(headCell);

    row.appendChild(subCell);

    row.appendChild(accountCell);

    row.appendChild(amountCell);

    row.appendChild(percentCell);


    tbody.appendChild(row);


    /* =================================================
       FINAL DEBUG
    ================================================= */

    console.log(
        "===================================="
    );

    console.log(
        "BALANCE ROW CREATED"
    );

    console.log(
        "data-head-id:",
        row.getAttribute("data-head-id")
    );

    console.log(
        "data-sub-id:",
        row.getAttribute("data-sub-id")
    );

    console.log(
        "data-acc-id:",
        row.getAttribute("data-acc-id")
    );

    console.log(
        "data-amount:",
        row.getAttribute("data-amount")
    );

    console.log(
        "data-percent:",
        row.getAttribute("data-percent")
    );

    console.log(
        "===================================="
    );
}


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /* =============================================
           ESCAPE
        ============================================= */

        if (
            event.key === "Escape" &&
            popupType !== ""
        ) {

            closePopup();

            return;
        }


        /* =============================================
           ENTER
        ============================================= */

        if (
            event.key === "Enter" &&
            popupType !== ""
        ) {

            event.preventDefault();

            confirmAmount();
        }
    }
);