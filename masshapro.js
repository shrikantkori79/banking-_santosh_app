// =====================================================
// GLOBAL VARIABLES
// =====================================================

let selectedType = "";


// =====================================================
// INCOME VARIABLES
// =====================================================

let selectedIncomeMainId = 0;
let selectedIncomeSubId = 0;

let selectedIncomeMainName = "";
let selectedIncomeSubName = "";


// =====================================================
// BALANCE SHEET VARIABLES
// =====================================================

let selectedBalanceMainId = 0;
let selectedBalanceSubId = 0;

let selectedBalanceMainName = "";
let selectedBalanceSubName = "";
let selectedBalanceAccountName = "";


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // INCOME HEAD
    // =================================================

    const incomeHead =
        document.getElementById("incomeHead");


    if (incomeHead) {

        incomeHead.addEventListener("change", function () {

            if (this.value === "") {
                return;
            }


            const option =
                this.options[this.selectedIndex];


            // -----------------------------------------
            // INCOME MAIN HEAD ID
            // -----------------------------------------

            selectedIncomeMainId =
                parseInt(
                    option.getAttribute("data-main-id")
                );


            // -----------------------------------------
            // INCOME SUB HEAD ID
            // -----------------------------------------

            selectedIncomeSubId =
                parseInt(
                    option.getAttribute("data-sub-id")
                );


            // -----------------------------------------
            // INCOME MAIN HEAD NAME
            // -----------------------------------------

            selectedIncomeMainName =
                option.getAttribute("data-main-name") || "";


            // -----------------------------------------
            // INCOME SUB HEAD NAME
            // -----------------------------------------

            selectedIncomeSubName =
                option.getAttribute("data-sub-name") || "";


            // -----------------------------------------
            // TYPE
            // -----------------------------------------

            selectedType = "income";


            // -----------------------------------------
            // OPEN POPUP
            // -----------------------------------------

            openAmountPopup("INCOME / EXPENSE");

        });

    }


    // =================================================
    // BALANCE SHEET
    // ONE DROPDOWN
    // =================================================

    const balanceHead =
        document.getElementById("balanceHead");


    if (balanceHead) {

        balanceHead.addEventListener("change", function () {

            if (this.value === "") {
                return;
            }


            const option =
                this.options[this.selectedIndex];


            // -----------------------------------------
            // MAIN HEAD ID
            // -----------------------------------------

            selectedBalanceMainId =
                parseInt(
                    option.getAttribute("data-main-id")
                );


            // -----------------------------------------
            // SUB HEAD ID
            // -----------------------------------------

            selectedBalanceSubId =
                parseInt(
                    option.getAttribute("data-sub-id")
                );


            // -----------------------------------------
            // MAIN HEAD NAME
            // -----------------------------------------

            selectedBalanceMainName =
                option.getAttribute("data-main-name") || "";


            // -----------------------------------------
            // SUB HEAD NAME
            // -----------------------------------------

            selectedBalanceSubName =
                option.getAttribute("data-sub-name") || "";


            // -----------------------------------------
            // ACCOUNT NAME
            // ONLY ACCNAM
            // -----------------------------------------

            selectedBalanceAccountName =
                option.getAttribute("data-account-id") || "";


            // -----------------------------------------
            // TYPE
            // -----------------------------------------

            selectedType = "balance";


            // -----------------------------------------
            // OPEN POPUP
            // -----------------------------------------

            openAmountPopup("BALANCE SHEET");

        });

    }


    // =================================================
    // PERCENTAGE CHECKBOX
    // =================================================

    const percentage =
        document.getElementById("percentage");

    const amountLabel =
        document.getElementById("amountLabel");

    const amountInput =
        document.getElementById("amountInput");


    if (percentage) {

        percentage.addEventListener("change", function () {

            if (this.checked) {

                amountLabel.innerText =
                    "Enter Percentage";

                amountInput.placeholder =
                    "Enter Percentage";

            } else {

                amountLabel.innerText =
                    "Enter Amount";

                amountInput.placeholder =
                    "Enter Amount";

            }

        });

    }


    // =================================================
    // OK BUTTON
    // =================================================

    const confirmButton =
        document.getElementById("confirmAmountBtn");


    if (confirmButton) {

        confirmButton.addEventListener(
            "click",
            function () {

                confirmAmount();

            }
        );

    }


    // =================================================
    // CANCEL BUTTON
    // =================================================

    const cancelButton =
        document.getElementById("cancelAmountBtn");


    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            function () {

                cancelAmount();

            }
        );

    }

});


// =====================================================
// OPEN POPUP
// =====================================================

function openAmountPopup(title) {

    const popup =
        document.getElementById("amountPopup");

    const popupTitle =
        document.getElementById("popupTitle");

    const amountInput =
        document.getElementById("amountInput");

    const percentage =
        document.getElementById("percentage");

    const amountLabel =
        document.getElementById("amountLabel");


    if (!popup) {

        console.error("amountPopup not found.");

        return;
    }


    // =================================================
    // SET TITLE
    // =================================================

    if (popupTitle) {

        popupTitle.innerText = title;

    }


    // =================================================
    // RESET INPUT
    // =================================================

    if (amountInput) {

        amountInput.value = "";

        amountInput.placeholder =
            "Enter Amount";

    }


    // =================================================
    // RESET PERCENTAGE
    // =================================================

    if (percentage) {

        percentage.checked = false;

    }


    // =================================================
    // RESET LABEL
    // =================================================

    if (amountLabel) {

        amountLabel.innerText =
            "Enter Amount";

    }


    // =================================================
    // SHOW POPUP
    // =================================================

    popup.style.display = "flex";


    // =================================================
    // FOCUS INPUT
    // =================================================

    setTimeout(function () {

        if (amountInput) {

            amountInput.focus();

        }

    }, 100);

}


// =====================================================
// CONFIRM POPUP
// =====================================================

function confirmAmount() {

    const amountInput =
        document.getElementById("amountInput");

    const percentage =
        document.getElementById("percentage");

    const popup =
        document.getElementById("amountPopup");


    if (!amountInput || !percentage || !popup) {

        console.error("Popup elements not found.");

        return;
    }


    // =================================================
    // GET VALUE
    // =================================================

    const value =
        amountInput.value.trim();


    // =================================================
    // VALIDATION
    // =================================================

    if (value === "") {

        if (percentage.checked) {

            alert("Please enter percentage.");

        } else {

            alert("Please enter amount.");

        }

        amountInput.focus();

        return;
    }


    // =================================================
    // CONVERT VALUE
    // =================================================

    const enteredValue =
        parseFloat(value);


    if (
        isNaN(enteredValue) ||
        enteredValue < 0
    ) {

        alert("Please enter a valid value.");

        amountInput.focus();

        return;
    }


    // =================================================
    // AMOUNT / PERCENTAGE
    // =================================================

    let amount = 0;
    let per = 0;


    if (percentage.checked) {

        // User entered percentage

        amount = 0;

        per = enteredValue;

    } else {

        // User entered amount

        amount = enteredValue;

        per = 0;

    }


    // =================================================
    // ADD INCOME ROW
    // =================================================

    if (selectedType === "income") {

        addIncomeRow(
            amount,
            per
        );

    }


    // =================================================
    // ADD BALANCE SHEET ROW
    // =================================================

    else if (selectedType === "balance") {

        addBalanceRow(
            amount,
            per
        );

    }


    else {

        alert(
            "Please select Income Head or Balance Sheet Head."
        );

        return;
    }


    // =================================================
    // CLOSE POPUP
    // =================================================

    popup.style.display = "none";


    // =================================================
    // RESET POPUP
    // =================================================

    amountInput.value = "";

    percentage.checked = false;


    document.getElementById(
        "amountLabel"
    ).innerText = "Enter Amount";


    amountInput.placeholder =
        "Enter Amount";


    // =================================================
    // RESET SELECTED DROPDOWN
    // =================================================

    if (selectedType === "income") {

        const incomeHead =
            document.getElementById("incomeHead");


        if (incomeHead) {

            incomeHead.value = "";

        }

    }


    if (selectedType === "balance") {

        const balanceHead =
            document.getElementById("balanceHead");


        if (balanceHead) {

            balanceHead.value = "";

        }

    }

}


// =====================================================
// CANCEL POPUP
// =====================================================

function cancelAmount() {

    const popup =
        document.getElementById("amountPopup");

    const amountInput =
        document.getElementById("amountInput");

    const percentage =
        document.getElementById("percentage");

    const amountLabel =
        document.getElementById("amountLabel");


    // =================================================
    // CLOSE POPUP
    // =================================================

    if (popup) {

        popup.style.display = "none";

    }


    // =================================================
    // RESET INPUT
    // =================================================

    if (amountInput) {

        amountInput.value = "";

        amountInput.placeholder =
            "Enter Amount";

    }


    // =================================================
    // RESET PERCENTAGE
    // =================================================

    if (percentage) {

        percentage.checked = false;

    }


    // =================================================
    // RESET LABEL
    // =================================================

    if (amountLabel) {

        amountLabel.innerText =
            "Enter Amount";

    }


    // =================================================
    // RESET INCOME DROPDOWN
    // =================================================

    const incomeHead =
        document.getElementById("incomeHead");


    if (incomeHead) {

        incomeHead.value = "";

    }


    // =================================================
    // RESET BALANCE DROPDOWN
    // =================================================

    const balanceHead =
        document.getElementById("balanceHead");


    if (balanceHead) {

        balanceHead.value = "";

    }

}


// =====================================================
// ADD INCOME ROW
// =====================================================

function addIncomeRow(amount, per) {

    const tbody =
        document.getElementById("incomeTableBody");


    if (!tbody) {

        console.error(
            "incomeTableBody not found."
        );

        return;
    }


    // =================================================
    // REMOVE EMPTY ROW
    // =================================================

    const emptyRow =
        tbody.querySelector(".empty-row");


    if (emptyRow) {

        emptyRow.parentElement.remove();

    }


    // =================================================
    // CREATE ROW
    // =================================================

    const tr =
        document.createElement("tr");


    // =================================================
    // MAIN HEAD
    // =================================================

    const tdMain =
        document.createElement("td");


    tdMain.innerText =
        selectedIncomeMainName;


    // =================================================
    // SUB HEAD
    // =================================================

    const tdSub =
        document.createElement("td");


    tdSub.innerText =
        selectedIncomeSubName;


    // =================================================
    // AMOUNT
    // =================================================

    const tdAmount =
        document.createElement("td");


    tdAmount.innerText =
        amount;


    // =================================================
    // PERCENTAGE
    // =================================================

    const tdPer =
        document.createElement("td");


    tdPer.innerText =
        per;


    // =================================================
    // ADD VISIBLE CELLS
    // =================================================

    tr.appendChild(tdMain);

    tr.appendChild(tdSub);

    tr.appendChild(tdAmount);

    tr.appendChild(tdPer);


    // =================================================
    // HIDDEN MAIN HEAD
    // =================================================

    const hiddenMain =
        document.createElement("input");


    hiddenMain.type = "hidden";

    hiddenMain.name =
        "incomeMainHead";

    hiddenMain.value =
        selectedIncomeMainId;


    // =================================================
    // HIDDEN SUB HEAD
    // =================================================

    const hiddenSub =
        document.createElement("input");


    hiddenSub.type = "hidden";

    hiddenSub.name =
        "incomeSubHead";

    hiddenSub.value =
        selectedIncomeSubId;


    // =================================================
    // HIDDEN AMOUNT
    // =================================================

    const hiddenAmount =
        document.createElement("input");


    hiddenAmount.type = "hidden";

    hiddenAmount.name =
        "incomeAmount";

    hiddenAmount.value =
        amount;


    // =================================================
    // HIDDEN PERCENTAGE
    // =================================================

    const hiddenPercentage =
        document.createElement("input");


    hiddenPercentage.type = "hidden";

    hiddenPercentage.name =
        "incomePercentage";

    hiddenPercentage.value =
        per;


    // =================================================
    // ADD HIDDEN INPUTS
    // =================================================

    tr.appendChild(hiddenMain);

    tr.appendChild(hiddenSub);

    tr.appendChild(hiddenAmount);

    tr.appendChild(hiddenPercentage);


    // =================================================
    // ADD ROW TO TABLE
    // =================================================

    tbody.appendChild(tr);

}


// =====================================================
// ADD BALANCE SHEET ROW
// =====================================================

function addBalanceRow(amount, per) {

    const tbody =
        document.getElementById("balanceTableBody");


    if (!tbody) {

        console.error(
            "balanceTableBody not found."
        );

        return;
    }


    // =================================================
    // REMOVE EMPTY ROW
    // =================================================

    const emptyRow =
        tbody.querySelector(".empty-row");


    if (emptyRow) {

        emptyRow.parentElement.remove();

    }


    // =================================================
    // CREATE ROW
    // =================================================

    const tr =
        document.createElement("tr");


    // =================================================
    // MAIN HEAD
    // =================================================

    const tdMain =
        document.createElement("td");


    tdMain.innerText =
        selectedBalanceMainName;


    // =================================================
    // SUB HEAD
    // =================================================

    const tdSub =
        document.createElement("td");


    tdSub.innerText =
        selectedBalanceSubName;


    // =================================================
    // ACCOUNT NAME
    // ONLY ACCNAM
    // =================================================

    const tdAccount =
        document.createElement("td");


    tdAccount.innerText =
        selectedBalanceAccountName;


    // =================================================
    // AMOUNT
    // =================================================

    const tdAmount =
        document.createElement("td");


    tdAmount.innerText =
        amount;


    // =================================================
    // PERCENTAGE
    // =================================================

    const tdPer =
        document.createElement("td");


    tdPer.innerText =
        per;


    // =================================================
    // ADD VISIBLE CELLS
    // =================================================

    tr.appendChild(tdMain);

    tr.appendChild(tdSub);

    tr.appendChild(tdAccount);

    tr.appendChild(tdAmount);

    tr.appendChild(tdPer);


    // =================================================
    // HIDDEN MAIN HEAD
    // =================================================

    const hiddenMain =
        document.createElement("input");


    hiddenMain.type = "hidden";

    hiddenMain.name =
        "balanceMainHead";

    hiddenMain.value =
        selectedBalanceMainId;


    // =================================================
    // HIDDEN SUB HEAD
    // =================================================

    const hiddenSub =
        document.createElement("input");


    hiddenSub.type = "hidden";

    hiddenSub.name =
        "balanceSubHead";

    hiddenSub.value =
        selectedBalanceSubId;


    // =================================================
    // HIDDEN ACCOUNT NAME
    // =================================================

    const hiddenAccount =
        document.createElement("input");


    hiddenAccount.type = "hidden";

    hiddenAccount.name =
        "balanceAccountName";

    hiddenAccount.value =
        selectedBalanceAccountName;


    // =================================================
    // HIDDEN AMOUNT
    // =================================================

    const hiddenAmount =
        document.createElement("input");


    hiddenAmount.type = "hidden";

    hiddenAmount.name =
        "balanceAmount";

    hiddenAmount.value =
        amount;


    // =================================================
    // HIDDEN PERCENTAGE
    // =================================================

    const hiddenPercentage =
        document.createElement("input");


    hiddenPercentage.type = "hidden";

    hiddenPercentage.name =
        "balancePercentage";

    hiddenPercentage.value =
        per;


    // =================================================
    // ADD HIDDEN INPUTS
    // =================================================

    tr.appendChild(hiddenMain);

    tr.appendChild(hiddenSub);

    tr.appendChild(hiddenAccount);

    tr.appendChild(hiddenAmount);

    tr.appendChild(hiddenPercentage);


    // =================================================
    // ADD ROW TO TABLE
    // =================================================

    tbody.appendChild(tr);

}


// =====================================================
// SAVE SHARE
// =====================================================

function saveShare() {

    const form =
        document.getElementById("shareForm");


    const shareName =
        document.getElementById("shareName");


    const faceValue =
        document.getElementById("faceValue");


    const incomeTable =
        document.getElementById("incomeTableBody");


    const balanceTable =
        document.getElementById("balanceTableBody");


    // =================================================
    // SHARE NAME
    // =================================================

    if (
        !shareName ||
        shareName.value.trim() === ""
    ) {

        alert("Please enter Share Name.");

        if (shareName) {

            shareName.focus();

        }

        return;
    }


    // =================================================
    // FACE VALUE
    // =================================================

    if (
        !faceValue ||
        faceValue.value.trim() === ""
    ) {

        alert("Please enter Face Value.");

        if (faceValue) {

            faceValue.focus();

        }

        return;
    }


    // =================================================
    // CHECK INCOME ROWS
    // =================================================

 /*    let incomeRows = 0;


    if (incomeTable) {

        incomeRows =
            incomeTable.querySelectorAll(
                "tr:not(:has(.empty-row))"
            ).length;

    }


    // =================================================
    // CHECK BALANCE ROWS
    // =================================================

    let balanceRows = 0;


    if (balanceTable) {

        balanceRows =
            balanceTable.querySelectorAll(
                "tr:not(:has(.empty-row))"
            ).length;

    }


    // =================================================
    // AT LEAST ONE REQUIRED
    // =================================================

   if (
        incomeRows === 0 &&
        balanceRows === 0
    ) {

        alert(
            "Please add at least one Income/Expense or Balance Sheet Head."
        );

        return;
    }*/


    // =================================================
    // SUBMIT
    // =================================================

    if (form) {

        form.submit();

    }

}


// =====================================================
// RESET SHARE
// =====================================================

function resetShare() {

    const form =
        document.getElementById("shareForm");


    if (form) {

        form.reset();

    }


    // =================================================
    // CLEAR INCOME TABLE
    // =================================================

    const incomeTable =
        document.getElementById("incomeTableBody");


    if (incomeTable) {

        incomeTable.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    class="empty-row">

                    No records found

                </td>

            </tr>

        `;

    }


    // =================================================
    // CLEAR BALANCE TABLE
    // =================================================

    const balanceTable =
        document.getElementById("balanceTableBody");


    if (balanceTable) {

        balanceTable.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    class="empty-row">

                    No records found

                </td>

            </tr>

        `;

    }


    // =================================================
    // CLOSE POPUP
    // =================================================

    const popup =
        document.getElementById("amountPopup");


    if (popup) {

        popup.style.display = "none";

    }


    // =================================================
    // RESET POPUP
    // =================================================

    const amountInput =
        document.getElementById("amountInput");


    const percentage =
        document.getElementById("percentage");


    const amountLabel =
        document.getElementById("amountLabel");


    if (amountInput) {

        amountInput.value = "";

        amountInput.placeholder =
            "Enter Amount";

    }


    if (percentage) {

        percentage.checked = false;

    }


    if (amountLabel) {

        amountLabel.innerText =
            "Enter Amount";

    }


    // =================================================
    // RESET VARIABLES
    // =================================================

    selectedType = "";

    selectedIncomeMainId = 0;
    selectedIncomeSubId = 0;

    selectedIncomeMainName = "";
    selectedIncomeSubName = "";


    selectedBalanceMainId = 0;
    selectedBalanceSubId = 0;

    selectedBalanceMainName = "";
    selectedBalanceSubName = "";

    selectedBalanceAccountName = "";

}
// =====================================================
// EXIT
// =====================================================

function exitShare() {

    const popup =
        document.getElementById("amountPopup");

    if (popup) {
        popup.style.display = "none";
    }

    window.history.back();
}


// =====================================================
// SAVE SUCCESS / FAILED POPUP
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const params =
        new URLSearchParams(window.location.search);

    const status =
        params.get("status");


    // =================================================
    // SUCCESS POPUP
    // =================================================

    if (status === "success") {

        alert("Share saved successfully.");

        // Remove status from URL
        // so popup will not appear again on refresh

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );
    }


    // =================================================
    // FAILED POPUP
    // =================================================

    else if (status === "failed") {

        alert("Share could not be saved.");

        // Remove status from URL

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );
    }

});