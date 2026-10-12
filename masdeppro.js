// =====================================================
// VARIABLES
// =====================================================

let selectedType = "";

let selectedIncomeMainId = "";
let selectedIncomeSubId = "";

let selectedIncomeMainName = "";
let selectedIncomeSubName = "";

let selectedBalanceMainId = "";
let selectedBalanceSubId = "";
let selectedBalanceAccountId = "";

let selectedBalanceMainName = "";
let selectedBalanceSubName = "";
let selectedBalanceAccountName = "";


// =====================================================
// INCOME / EXPENSE HEAD
// =====================================================

document
    .getElementById("incomeExpenseHead")
    .addEventListener("change", function () {

        if (this.value === "") {
            return;
        }


        const option =
            this.options[this.selectedIndex];


        // =============================================
        // MAIN HEAD ID
        // =============================================

        selectedIncomeMainId =
            option.getAttribute("data-main-id");


        // =============================================
        // SUB HEAD ID
        // =============================================

        selectedIncomeSubId =
            option.getAttribute("data-sub-id");


        // =============================================
        // MAIN HEAD NAME
        // =============================================

        selectedIncomeMainName =
            option.getAttribute("data-main-name");


        // =============================================
        // SUB HEAD NAME
        // =============================================

        selectedIncomeSubName =
            option.getAttribute("data-sub-name");


        // =============================================
        // TYPE
        // =============================================

        selectedType = "income";


        // =============================================
        // OPEN POPUP
        // =============================================

        openAmountPopup();

    });


// =====================================================
// BALANCE SHEET HEAD
// =====================================================

document
    .getElementById("balanceSheetHead")
    .addEventListener("change", function () {

        if (this.value === "") {
            return;
        }


        const option =
            this.options[this.selectedIndex];


        // =============================================
        // MAIN HEAD ID
        // =============================================

        selectedBalanceMainId =
            option.getAttribute("data-main-id");


        // =============================================
        // SUB HEAD ID
        // =============================================

        selectedBalanceSubId =
            option.getAttribute("data-sub-id");


        // =============================================
        // ACCOUNT ID
        // =============================================

        selectedBalanceAccountId =
            option.getAttribute("data-acc-id");


        // =============================================
        // MAIN HEAD NAME
        // =============================================

        selectedBalanceMainName =
            option.getAttribute("data-main-name");


        // =============================================
        // SUB HEAD NAME
        // =============================================

        selectedBalanceSubName =
            option.getAttribute("data-sub-name");


        // =============================================
        // ACCOUNT NAME
        // =============================================

        selectedBalanceAccountName =
            option.getAttribute("data-account-name");


        // =============================================
        // TYPE
        // =============================================

        selectedType = "balance";


        // =============================================
        // OPEN POPUP
        // =============================================

        openAmountPopup();

    });


// =====================================================
// OPEN AMOUNT POPUP
// =====================================================

function openAmountPopup() {

    const popup =
        document.getElementById(
            "amountPopup"
        );


    const input =
        document.getElementById(
            "amountInput"
        );


    const percentageCheck =
        document.getElementById(
            "percentageCheck"
        );


    const amountLabel =
        document.getElementById(
            "amountLabel"
        );


    popup.style.display = "block";


    input.value = "";


    // =============================================
    // RESET CHECKBOX
    // =============================================

    if (percentageCheck) {

        percentageCheck.checked = false;

    }


    // =============================================
    // RESET LABEL
    // =============================================

    if (amountLabel) {

        amountLabel.innerText =
            "Enter Amount";

    }


    input.placeholder =
        "Enter amount";


    setTimeout(function () {

        input.focus();

    }, 100);

}


// =====================================================
// PERCENTAGE CHECKBOX
// =====================================================

const percentageCheck =
    document.getElementById(
        "percentageCheck"
    );


if (percentageCheck) {

    percentageCheck.addEventListener(
        "change",
        function () {

            const label =
                document.getElementById(
                    "amountLabel"
                );


            const input =
                document.getElementById(
                    "amountInput"
                );


            input.value = "";


            if (this.checked) {

                label.innerText =
                    "Enter Percentage";


                input.placeholder =
                    "Enter percentage";

            } else {

                label.innerText =
                    "Enter Amount";


                input.placeholder =
                    "Enter amount";

            }


            input.focus();

        }
    );

}


// =====================================================
// CONFIRM AMOUNT / PERCENTAGE
// =====================================================

function confirmAmount() {

    const input =
        document.getElementById(
            "amountInput"
        );


    const percentageCheck =
        document.getElementById(
            "percentageCheck"
        );


    const value =
        input.value.trim();


    // =============================================
    // EMPTY
    // =============================================

    if (value === "") {

        if (
            percentageCheck &&
            percentageCheck.checked
        ) {

            alert(
                "Please enter percentage."
            );

        } else {

            alert(
                "Please enter amount."
            );

        }


        input.focus();

        return;

    }


    // =============================================
    // INVALID
    // =============================================

    if (
        isNaN(value) ||
        Number(value) <= 0
    ) {

        if (
            percentageCheck &&
            percentageCheck.checked
        ) {

            alert(
                "Please enter a valid percentage."
            );

        } else {

            alert(
                "Please enter a valid amount."
            );

        }


        input.focus();

        return;

    }


    // =============================================
    // PERCENTAGE
    // =============================================

    if (
        percentageCheck &&
        percentageCheck.checked
    ) {

        const per =
            Number(value).toFixed(2);


        const amount =
            "0.00";


        // =========================================
        // INCOME
        // =========================================

        if (selectedType === "income") {

            addIncomeRow(
                selectedIncomeMainId,
                selectedIncomeSubId,
                selectedIncomeMainName,
                selectedIncomeSubName,
                amount,
                per
            );


            alert(
                "Income / Expense percentage added successfully."
            );

        }


        // =========================================
        // BALANCE
        // =========================================

        if (selectedType === "balance") {

            addBalanceRow(
                selectedBalanceMainId,
                selectedBalanceSubId,
                selectedBalanceAccountId,
                selectedBalanceMainName,
                selectedBalanceSubName,
                selectedBalanceAccountName,
                amount,
                per
            );


            alert(
                "Balance Sheet percentage added successfully."
            );

        }

    }


    // =============================================
    // AMOUNT
    // =============================================

    else {

        const amount =
            Number(value).toFixed(2);


        const per =
            "0.00";


        // =========================================
        // INCOME
        // =========================================

        if (selectedType === "income") {

            addIncomeRow(
                selectedIncomeMainId,
                selectedIncomeSubId,
                selectedIncomeMainName,
                selectedIncomeSubName,
                amount,
                per
            );


            alert(
                "Income / Expense amount added successfully."
            );

        }


        // =========================================
        // BALANCE
        // =========================================

        if (selectedType === "balance") {

            addBalanceRow(
                selectedBalanceMainId,
                selectedBalanceSubId,
                selectedBalanceAccountId,
                selectedBalanceMainName,
                selectedBalanceSubName,
                selectedBalanceAccountName,
                amount,
                per
            );


            alert(
                "Balance Sheet amount added successfully."
            );

        }

    }


    // =============================================
    // CLOSE POPUP
    // =============================================

    closePopupAfterSave();

}


// =====================================================
// ADD INCOME ROW
// =====================================================

function addIncomeRow(
    mainId,
    subId,
    mainName,
    subName,
    amount,
    per
) {

    const tbody =
        document.getElementById(
            "incomeTableBody"
        );


    // =============================================
    // REMOVE EMPTY ROW
    // =============================================

    const emptyRow =
        tbody.querySelector(
            ".empty-row"
        );


    if (emptyRow) {

        emptyRow
            .closest("tr")
            .remove();

    }


    // =============================================
    // CREATE ROW
    // =============================================

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>

            ${escapeHTML(mainName)}

            <input
                type="hidden"
                name="incomeMainHead"
                value="${escapeHTML(mainId)}">

        </td>


        <td>

            ${escapeHTML(subName)}

            <input
                type="hidden"
                name="incomeSubHead"
                value="${escapeHTML(subId)}">

        </td>


        <td>

            ${formatAmount(amount)}

            <input
                type="hidden"
                name="incomeAmount"
                value="${escapeHTML(amount)}">

        </td>


        <td>

            ${formatAmount(per)}

            <input
                type="hidden"
                name="incomepercent"
                value="${escapeHTML(per)}">

        </td>

    `;


    tbody.appendChild(row);

}


// =====================================================
// ADD BALANCE SHEET ROW
// =====================================================

function addBalanceRow(
    mainId,
    subId,
    accountId,
    mainName,
    subName,
    accountName,
    amount,
    per
) {

    const tbody =
        document.getElementById(
            "balanceTableBody"
        );


    // =============================================
    // REMOVE EMPTY ROW
    // =============================================

    const emptyRow =
        tbody.querySelector(
            ".empty-row"
        );


    if (emptyRow) {

        emptyRow
            .closest("tr")
            .remove();

    }


    // =============================================
    // CREATE ROW
    // =============================================

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>

            ${escapeHTML(mainName)}

            <input
                type="hidden"
                name="balanceMainHead"
                value="${escapeHTML(mainId)}">

        </td>


        <td>

            ${escapeHTML(subName)}

            <input
                type="hidden"
                name="balanceSubHead"
                value="${escapeHTML(subId)}">

        </td>


        <td>

            ${escapeHTML(accountName)}

            <input
                type="hidden"
                name="balanceAccouunt"
                value="${escapeHTML(accountId)}">

        </td>


        <td>

            ${formatAmount(amount)}

            <input
                type="hidden"
                name="balanceAmount"
                value="${escapeHTML(amount)}">

        </td>


        <td>

            ${formatAmount(per)}

            <input
                type="hidden"
                name="balanacepercent"
                value="${escapeHTML(per)}">

        </td>

    `;


    tbody.appendChild(row);

}


// =====================================================
// FORMAT AMOUNT
// =====================================================

function formatAmount(amount) {

    return Number(amount)
        .toFixed(2);

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// =====================================================
// CANCEL POPUP
// =====================================================

function cancelAmount() {

    closeAmountPopup();


    // =============================================
    // CLEAR INCOME SELECT
    // =============================================

    if (
        selectedType === "income"
    ) {

        document
            .getElementById(
                "incomeExpenseHead"
            )
            .value = "";

    }


    // =============================================
    // CLEAR BALANCE SELECT
    // =============================================

    if (
        selectedType === "balance"
    ) {

        document
            .getElementById(
                "balanceSheetHead"
            )
            .value = "";

    }


    // =============================================
    // CLEAR VARIABLES
    // =============================================

    clearSelectedValues();

}


// =====================================================
// CLOSE POPUP AFTER SAVE
// =====================================================

function closePopupAfterSave() {

    document
        .getElementById(
            "amountPopup"
        )
        .style.display = "none";


    document
        .getElementById(
            "amountInput"
        )
        .value = "";


    const percentageCheck =
        document.getElementById(
            "percentageCheck"
        );


    if (percentageCheck) {

        percentageCheck.checked = false;

    }


    const amountLabel =
        document.getElementById(
            "amountLabel"
        );


    if (amountLabel) {

        amountLabel.innerText =
            "Enter Amount";

    }


    document
        .getElementById(
            "amountInput"
        )
        .placeholder =
            "Enter amount";


    // =============================================
    // CLEAR TEMPORARY VALUES
    // =============================================

    clearSelectedValues();

}


// =====================================================
// CLEAR SELECTED VALUES
// =====================================================

function clearSelectedValues() {

    selectedType = "";

    selectedIncomeMainId = "";
    selectedIncomeSubId = "";

    selectedIncomeMainName = "";
    selectedIncomeSubName = "";

    selectedBalanceMainId = "";
    selectedBalanceSubId = "";
    selectedBalanceAccountId = "";

    selectedBalanceMainName = "";
    selectedBalanceSubName = "";
    selectedBalanceAccountName = "";

}


// =====================================================
// CLOSE POPUP
// =====================================================

function closeAmountPopup() {

    document
        .getElementById(
            "amountPopup"
        )
        .style.display = "none";


    document
        .getElementById(
            "amountInput"
        )
        .value = "";


    const percentageCheck =
        document.getElementById(
            "percentageCheck"
        );


    if (percentageCheck) {

        percentageCheck.checked = false;

    }

}


// =====================================================
// ENTER / ESCAPE
// =====================================================

document
    .getElementById(
        "amountInput"
    )
    .addEventListener(
        "keydown",
        function (event) {

            // =========================================
            // ENTER = OK
            // =========================================

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                confirmAmount();

            }


            // =========================================
            // ESCAPE = CANCEL
            // =========================================

            if (
                event.key === "Escape"
            ) {

                event.preventDefault();

                cancelAmount();

            }

        }
    );


// =====================================================
// SAVE DEPOSIT
// =====================================================

function saveDeposit() {

    const form =
        document.querySelector(
            ".customer-form"
        );


    if (!form) {

        return false;

    }


    // =============================================
    // DEPOSIT NAME
    // =============================================

    const depositName =
        document
            .getElementById(
                "depositName"
            )
            .value
            .trim();


    if (
        depositName === ""
    ) {

        alert(
            "Please enter Deposit Name."
        );


        document
            .getElementById(
                "depositName"
            )
            .focus();


        return false;

    }


    // =============================================
    // BALANCE WITH CHEQUE
    // =============================================

    const balanceWithCheque =
        document
            .getElementById(
                "balanceWithCheque"
            )
            .value
            .trim();


    // =============================================
    // WITHOUT CHEQUE
    // =============================================

    const withoutCheque =
        document
            .getElementById(
                "withoutCheque"
            )
            .value
            .trim();


    // =============================================
    // MIN TRANSACTION
    // =============================================

    const minTransaction =
        document
            .getElementById(
                "minTransaction"
            )
            .value
            .trim();


    // =============================================
    // MAX CASH LIMIT
    // =============================================

    const maxCashLimit =
        document
            .getElementById(
                "maxCashLimit"
            )
            .value
            .trim();


    // =============================================
    // MIN APPLICABLE DAYS
    // =============================================

    const minApplicableDays =
        document
            .getElementById(
                "minApplicableDays"
            )
            .value
            .trim();


    // =============================================
    // INTEREST
    // =============================================

    const interest =
        document
            .getElementById(
                "interestPercent"
            )
            .value
            .trim();


    // =============================================
    // CHECK INCOME ROWS
    // =============================================

    const incomeRows =
        document.querySelectorAll(
            "#incomeTableBody tr"
        );


    // =============================================
    // CHECK BALANCE ROWS
    // =============================================

    const balanceRows =
        document.querySelectorAll(
            "#balanceTableBody tr"
        );


    /*
     * Do not force the user to select a head here.
     * Master deposit can be saved even when there
     * are no child rows.
     */


    // =============================================
    // SUBMIT FORM
    // =============================================

    return true;

}


// =====================================================
// RESET DEPOSIT
// =====================================================

function resetDeposit() {

    const form =
        document.querySelector(
            ".customer-form"
        );


    if (form) {

        form.reset();

    }


    // =============================================
    // CLEAR INCOME TABLE
    // =============================================

    const incomeTable =
        document.getElementById(
            "incomeTableBody"
        );


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


    // =============================================
    // CLEAR BALANCE TABLE
    // =============================================

    const balanceTable =
        document.getElementById(
            "balanceTableBody"
        );


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


    // =============================================
    // CLEAR VARIABLES
    // =============================================

    clearSelectedValues();


    // =============================================
    // CLOSE POPUP
    // =============================================

    closeAmountPopup();

}


// =====================================================
// EXIT
// =====================================================

function exitDeposit() {

    window.history.back();

}