/* =====================================================

   MAIN FORM

===================================================== */



const customerForm =

    document.getElementById("customerForm");



const dateField =

    document.getElementById("date");

	const jointSection = document.getElementById("jointSection");

const saveButton =

    document.getElementById("saveButton");



const cancelButton =

    document.getElementById("cancelButton");



const customerListButton =

    document.getElementById("customerListButton");

console.log("========== NEWLOA.JS LOADED ==========");





/* =====================================================

   LOAN NAME OPTIONS BY TYPE OF LOAN



   "Other Loan"    -> shows ALL general loan names

   "Specific Loan" -> shows the specific deposit

                       linked loan names

===================================================== */



/*const depositLoanNames = [

    "Loan Against Member Share",

    "Loan Against Saving / Current / Other",

    "Loan Against Term Deposit",

    "Loan Against CC Deposit"

];



const loanNamesByType = {



    "5": [

        "Personal Loan",

        "Vehicle Loan",

        "Gold Loan",

        "Housing Loan",

        "Education Loan",

        "Business Loan",

        "Agriculture Loan"

    ],



    "1": depositLoanNames,

    "2": depositLoanNames,

    "3": depositLoanNames,

    "4": depositLoanNames



};

*/



/* =====================================================

   TYPE OF LOAN + LOAN NAME

===================================================== */



const typeOfLoan =

    document.getElementById("typeOfLoan");



const loanName =

    document.getElementById("loanName");
	
	const loanNumber = document.getElementById("loan_no");
const cerno = document.getElementById("cert_no");





/* =====================================================

   SECTION BLOCKS (SHOWN / HIDDEN BASED ON TYPE)

===================================================== */



const otherLoanSection =

    document.getElementById("otherLoanSection");



const depositSection =

    document.getElementById("depositSection");



const specificLoanSection =

    document.getElementById("specificLoanSection");
	
	const otherLoanDetailSection =
	    document.getElementById("otherLoanDetailSection");



const voucherTable =

    document.getElementById("voucherTable");



const loanDetailSection =

    document.querySelector(".loan-detail-section");





/* =====================================================

   POPULATE LOAN NAME DROPDOWN

===================================================== */


/*
function populateLoanName(type) {



    loanName.innerHTML = "";



    if (type === "") {



        loanName.disabled = true;



        const emptyOption =

            document.createElement("option");



        emptyOption.value = "";

        emptyOption.textContent =

            "Select Type Of Loan First";



        loanName.appendChild(emptyOption);



        return;

    }



    loanName.disabled = false;



    const placeholder =

        document.createElement("option");



    placeholder.value = "";

    placeholder.textContent =

        "Select Loan Name";



    loanName.appendChild(placeholder);



    const names =

        loanNamesByType[type] || [];



    names.forEach(function (name) {



        const option =

            document.createElement("option");



        option.value = name;

        option.textContent = name;



        loanName.appendChild(option);



    });



}


*/


/* =====================================================

   SHOW / HIDE SECTIONS BASED ON TYPE OF LOAN

===================================================== */
function updateSections() {

    const type = typeOfLoan.value;
    const isDepositLoan = ["1", "2", "3", "4"].includes(type);

    // =====================================
    // JOINT - ONLY FOR OTHER LOAN
    // =====================================
    if (type === "5") {
        jointSection.classList.remove("hidden");
    } else {
        jointSection.classList.add("hidden");

        // Uncheck when hidden
        jointAccount.checked = false;
    }


    // =====================================
    // OTHER LOAN VOUCHER
    // =====================================
    if (type === "5") {
        otherLoanSection.classList.remove("hidden");
    } else {
        otherLoanSection.classList.add("hidden");
    }


    // =====================================
    // OTHER LOAN DETAILS
    // =====================================
    if (type === "5") {
        otherLoanDetailSection.classList.remove("hidden");
    } else {
        otherLoanDetailSection.classList.add("hidden");
    }


    // =====================================
    // DEPOSIT LOAN
    // =====================================
    if (isDepositLoan) {
        specificLoanSection.classList.remove("hidden");
        depositSection.classList.remove("hidden");
    } else {
        specificLoanSection.classList.add("hidden");
        depositSection.classList.add("hidden");
    }
}


typeOfLoan.addEventListener("change", function () {

    populateLoanName(typeOfLoan.value);

    updateSections();

});




/* =====================================================

   CUSTOMER LIST BUTTON (PLACEHOLDER)

===================================================== */



if (customerListButton) {



    customerListButton.addEventListener(

        "click",

        function () {



            alert("Customer list will open here.");



        }

    );



}





/* =====================================================

   GENERIC "ADD ROW TO TABLE" HELPER

===================================================== */



function addRow(tableBody, cellsHtml, onRemove) {



    const row =

        document.createElement("tr");



    const slNo =

        tableBody.children.length + 1;



    row.innerHTML =

        "<td>" + slNo + "</td>" + cellsHtml;



    const removeCell =

        document.createElement("td");



    const removeButton =

        document.createElement("button");



    removeButton.type = "button";

    removeButton.className = "remove-btn";

    removeButton.textContent = "Remove";



    removeButton.addEventListener(

        "click",

        function () {



            row.remove();

            renumberRows(tableBody);



            if (onRemove) {

                onRemove();

            }



        }

    );



    removeCell.appendChild(removeButton);

    row.appendChild(removeCell);



    tableBody.appendChild(row);



}





function renumberRows(tableBody) {



    const rows = tableBody.children;



    for (let i = 0; i < rows.length; i++) {



        rows[i].children[0].textContent =

            i + 1;



    }



}





/* =====================================================

   SURETY TABLE

===================================================== */



const suretyId =

    document.getElementById("surety_id");



const suretyName =

    document.getElementById("surety_name");



const addSuretyButton =

    document.getElementById("addSuretyButton");



const suretyTableBody =

    document.getElementById("suretyTableBody");




	addSuretyButton.addEventListener(
	    "click",
	    function () {

	        if (suretyId.value.trim() === "") {
	            alert("Please enter Surety ID.");
	            suretyId.focus();
	            return;
	        }

	        if (suretyName.value === "") {
	            alert("Please select Surety Name.");
	            suretyName.focus();
	            return;
	        }

	        addRow(
	            suretyTableBody,
	            "<td>" + suretyId.value.trim() + "</td>" +
	            "<td>" + suretyName.value + "</td>"
	        );

	        suretyId.value = "";
	        suretyName.value = "";
	        suretyId.focus();

	    }
	);


/* =====================================================

   DIRECTOR TABLE

===================================================== */



const directorName =

    document.getElementById("director_name");



const addDirectorButton =

    document.getElementById("addDirectorButton");



const directorTableBody =

    document.getElementById("directorTableBody");



	addDirectorButton.addEventListener(
	    "click",
	    function () {

	        if (directorName.value === "") {
	            alert("Please select Director Name.");
	            directorName.focus();
	            return;
	        }

	        addRow(
	            directorTableBody,
	            "<td>" + directorName.value + "</td>"
	        );

	        // Get the row just added
	        const rows =
	            directorTableBody.querySelectorAll("tr");

	        const lastRow =
	            rows[rows.length - 1];

	        // Store Director ID in row
	        lastRow.dataset.directorId =
	            directorName.value;

	        directorName.value = "";
	        directorName.focus();

	    }
	);
/* =====================================================
  OTHER LOAN - PL / BS DETAILS
===================================================== */

const voucherTableBody =
    document.getElementById("voucherTableBody");

const loanGrandTotal =
    document.getElementById("loanGrandTotal");

const loanCalcAmount =
    document.getElementById("loanCalcAmount");

// Top total display (kept in sync with the table grand total)
let loanGrandTotalTop =
    document.getElementById("loanGrandTotalTop");

if (!loanGrandTotalTop && voucherTableBody) {
    const tableWrap = voucherTableBody.closest(".table-wrap");

    if (tableWrap) {
        loanGrandTotalTop = document.createElement("div");
        loanGrandTotalTop.id = "loanGrandTotalTop";
        loanGrandTotalTop.style.margin = "10px 0";
        loanGrandTotalTop.style.padding = "10px";
        loanGrandTotalTop.style.textAlign = "right";
        loanGrandTotalTop.style.fontWeight = "bold";
        loanGrandTotalTop.textContent = "TOTAL AMOUNT: 0.00";
        tableWrap.parentNode.insertBefore(loanGrandTotalTop, tableWrap);
    }
}


function getHeadName(list, id) {

    if (!Array.isArray(list)) {
        return "";
    }

    const item = list.find(function (x) {
        return Number(x.id) === Number(id);
    });

    return item ? item.name : "";
}


function updateEnterAmountVisibility() {

    if (!loanCalcAmount) {
        return;
    }

    const rows = voucherTableBody
        ? voucherTableBody.querySelectorAll("tr")
        : [];

    let hasPercentage = false;

    rows.forEach(function (row) {
        const percentageInput =
            row.querySelector(".other-loan-percentage");

        if (percentageInput) {
            const percentage =
                parseFloat(percentageInput.value) || 0;

            if (percentage > 0) {
                hasPercentage = true;
            }
        }
    });

    const enterAmountContainer =
        loanCalcAmount.closest(".row");

    if (enterAmountContainer) {
        enterAmountContainer.style.display =
            hasPercentage ? "" : "none";
    } else {
        loanCalcAmount.style.display =
            hasPercentage ? "" : "none";
    }
}


function loadOtherLoanDetails() {

    if (!typeOfLoan || typeOfLoan.value !== "5") {
        return;
    }

    if (!voucherTableBody) {
        return;
    }

    voucherTableBody.innerHTML = "";

    if (loanGrandTotal) {
        loanGrandTotal.textContent = "0.00";
    }

    const selectedLoanId = Number(loanName.value);

    console.log("[OTHER LOAN] selectedLoanId =", selectedLoanId);
    console.log("[OTHER LOAN] maspro =", typeof maspro !== "undefined" ? maspro : "UNDEFINED");
    console.log("[OTHER LOAN] masbal =", typeof masbal !== "undefined" ? masbal : "UNDEFINED");

    if (!selectedLoanId) {
        updateEnterAmountVisibility();
        return;
    }

    const plRows =
        Array.isArray(maspro)
            ? maspro.filter(function (row) {
                return Number(row.masloaid) === selectedLoanId;
            })
            : [];

    const bsRows =
        Array.isArray(masbal)
            ? masbal.filter(function (row) {
                return Number(row.masloaid) === selectedLoanId;
            })
            : [];

    console.log("[OTHER LOAN] PL rows =", plRows);
    console.log("[OTHER LOAN] BS rows =", bsRows);

    plRows.forEach(function (row) {

        addOtherLoanRow(
            "PL",
            getHeadName(newprohea, row.headid),
            getHeadName(newprosub, row.subheaid),
            row
        );

    });

    bsRows.forEach(function (row) {

        addOtherLoanRow(
            "BS",
            getHeadName(balhea, row.headid),
            getHeadName(balsub, row.subheaid),
            row
        );

    });

    calculateOtherLoanTotal();
    updateEnterAmountVisibility();
}


function addOtherLoanRow(type, mainHead, subHead, data) {

    if (!voucherTableBody) {
        return;
    }

    const row = document.createElement("tr");

    row.dataset.dbAmount = Number(data.amo) || 0;
    row.dataset.dbPercentage = Number(data.per) || 0;
    row.dataset.sourceType = type;

    let valueHTML = "";

    if (Number(data.per) > 0) {

        valueHTML =
            '<input type="number" ' +
            'class="other-loan-percentage" ' +
            'value="' + Number(data.per) + '" ' +
            'min="0" step="0.01" ' +
            'style="width:80px;"> ' +
            '<span>%</span>';

    } else {

        valueHTML =
            '<input type="number" ' +
            'class="other-loan-amount" ' +
            'value="' + Number(data.amo).toFixed(2) + '" ' +
            'min="0" step="0.01" ' +
            'style="width:100px;">';

    }

    row.innerHTML =
        "<td></td>" +
        "<td>" + type + "</td>" +
        "<td>" + mainHead + "</td>" +
        "<td>" + subHead + "</td>" +
        "<td>" + valueHTML + "</td>" +
        '<td class="other-loan-calculated">0.00</td>' +
        "<td></td>";

    voucherTableBody.appendChild(row);

    renumberRows(voucherTableBody);

    const percentageInput =
        row.querySelector(".other-loan-percentage");

    if (percentageInput) {

        percentageInput.addEventListener(
            "input",
            function () {
                calculateOtherLoanTotal();
                updateEnterAmountVisibility();
            }
        );

    }

    const amountInput =
        row.querySelector(".other-loan-amount");

    if (amountInput) {

        amountInput.addEventListener(
            "input",
            function () {
                calculateOtherLoanTotal();
            }
        );

    }
}


function calculateOtherLoanTotal() {

    if (!typeOfLoan || typeOfLoan.value !== "5") {
        return;
    }

    if (!voucherTableBody) {
        return;
    }

    const baseAmount =
        loanCalcAmount
            ? parseFloat(loanCalcAmount.value) || 0
            : 0;

    let grandTotal = 0;

    const rows =
        voucherTableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const dbAmount =
            Number(row.dataset.dbAmount) || 0;

        const dbPercentage =
            Number(row.dataset.dbPercentage) || 0;

        const amountCell =
            row.querySelector(".other-loan-calculated");

        if (!amountCell) {
            return;
        }

        let amount = 0;

        if (dbPercentage > 0) {

            const percentageInput =
                row.querySelector(".other-loan-percentage");

            const percentage =
                percentageInput
                    ? parseFloat(percentageInput.value) || 0
                    : dbPercentage;

            amount =
                baseAmount * percentage / 100;

        } else {

            const amountInput =
                row.querySelector(".other-loan-amount");

            amount = amountInput
                ? parseFloat(amountInput.value) || 0
                : dbAmount;

        }

        amountCell.textContent =
            amount.toFixed(2);

        grandTotal += amount;

    });

    const totalText = grandTotal.toFixed(2);

    if (loanGrandTotal) {
        loanGrandTotal.textContent = totalText;
    }

    if (loanGrandTotalTop) {
        loanGrandTotalTop.textContent =
            "TOTAL AMOUNT: " + totalText;
    }
}


if (loanName) {

    loanName.addEventListener(
        "change",
        function () {

            if (typeOfLoan.value === "5") {
                loadOtherLoanDetails();
            }

        }
    );

}


if (loanCalcAmount) {

    loanCalcAmount.addEventListener(
        "input",
        function () {

            if (typeOfLoan.value === "5") {
                calculateOtherLoanTotal();
            }

        }
    );

}


updateEnterAmountVisibility();


if (typeOfLoan) {

    typeOfLoan.addEventListener(
        "change",
        function () {

            if (typeOfLoan.value !== "5") {

                if (voucherTableBody) {
                    voucherTableBody.innerHTML = "";
                }

                if (loanGrandTotal) {
                    loanGrandTotal.textContent = "0.00";
                }

                if (loanCalcAmount) {
                    loanCalcAmount.value = "";
                    const enterAmountContainer =
                        loanCalcAmount.closest(".row");

                    if (enterAmountContainer) {
                        enterAmountContainer.style.display = "none";
                    }
                }

                if (loanGrandTotalTop) {
                    loanGrandTotalTop.textContent = "TOTAL AMOUNT: 0.00";
                }

            }

        }
    );

}

/* =====================================================

   SELECT DEPOSIT TABLE (OTHER + SPECIFIC LOAN)

===================================================== */



const depAccNo =

    document.getElementById("dep_acc_no");



const depCertAge =

    document.getElementById("dep_cert_age");



const depAmount =

    document.getElementById("dep_amount");



const depMatDate =

    document.getElementById("dep_mat_date");



const depInt =

    document.getElementById("dep_int");



const depSelected =

    document.getElementById("dep_selected");



const addDepositButton =

    document.getElementById("addDepositButton");



const depositTableBody =

    document.getElementById("depositTableBody");



const selectDep =

    document.getElementById("select_dep");





function refreshSelectDepositOptions() {



    if (!selectDep) {

        return;

    }



    selectDep.innerHTML = "";



    const placeholder =

        document.createElement("option");



    placeholder.value = "";

    placeholder.textContent =

        "Select Deposit Added Above";



    selectDep.appendChild(placeholder);



    const rows = depositTableBody.children;



    for (let i = 0; i < rows.length; i++) {



        const accNo =

            rows[i].children[1].textContent;



        const option =

            document.createElement("option");



        option.value = accNo;

        option.textContent = accNo;



        selectDep.appendChild(option);



    }



}





if (addDepositButton) {



    addDepositButton.addEventListener(

        "click",

        function () {



            if (depAccNo.value === "") {



                alert("Please select Acc No.");

                depAccNo.focus();

                return;



            }



            if (depAmount.value === "") {



                alert("Please enter Dep Amount.");

                depAmount.focus();

                return;



            }



            addRow(

                depositTableBody,

                "<td>" + depAccNo.value + "</td>" +

                "<td>" + depCertAge.value.trim() + "</td>" +

                "<td>" + depAmount.value + "</td>" +

                "<td>" + depMatDate.value + "</td>" +

                "<td>" + depInt.value + "</td>" +

                "<td>" + (depSelected.checked ? "Selected" : "Unselected") + "</td>",

                refreshSelectDepositOptions

            );



            refreshSelectDepositOptions();



            depAccNo.value = "";

            depCertAge.value = "";

            depAmount.value = "";

            depMatDate.value = "";

            depInt.value = "";

            depSelected.checked = false;



            depAccNo.focus();



        }

    );



}





/* =====================================================

   SAVE ACCOUNT

===================================================== */


/* =====================================================
   SAVE ACCOUNT
===================================================== */

saveButton.addEventListener("click", function () {

    // -------------------------------
    // BASIC VALIDATION
    // -------------------------------

    const loaid = loanName.value.trim();
    const loanum = loanNumber.value.trim();
    const cernoValue = cerno.value.trim();

    const sanloa = document.getElementById("san_loan").value.trim();
    const noofins = document.getElementById("no_instal").value.trim();
    const intyp = document.getElementById("instal_type").value.trim();
    const days = document.getElementById("after_every").value.trim();
    const insamo = document.getElementById("instal_amt").value.trim();
    const gapins = document.getElementById("gap_instal").value.trim();

    // -------------------------------
    // MAIN LOAN VALIDATION
    // -------------------------------

    if (loaid === "") {
        alert("Please select Loan Name.");
        loanName.focus();
        return;
    }

    if (loanum === "") {
        alert("Loan Number is required.");
        loanNumber.focus();
        return;
    }

    if (cernoValue === "") {
        alert("Certificate Number is required.");
        cerno.focus();
        return;
    }

    // -------------------------------
    // OTHER LOAN DETAILS
    // -------------------------------

    if (sanloa === "" || parseFloat(sanloa) <= 0) {
        alert("Please enter valid Sanctioned Loan.");
        document.getElementById("san_loan").focus();
        return;
    }

    if (noofins === "" || parseInt(noofins) <= 0) {
        alert("Please enter valid No of Instalment.");
        document.getElementById("no_instal").focus();
        return;
    }

    if (intyp === "") {
        alert("Please select Instalment Type.");
        document.getElementById("instal_type").focus();
        return;
    }

    if (days === "" || parseInt(days) <= 0) {
        alert("Please enter valid After Every.");
        document.getElementById("after_every").focus();
        return;
    }

    if (insamo === "" || parseFloat(insamo) <= 0) {
        alert("Instalment Amount is invalid.");
        return;
    }

    if (gapins === "" || parseInt(gapins) < 0) {
        alert("Please enter valid Gap Instalment.");
        document.getElementById("gap_instal").focus();
        return;
    }

    // -------------------------------
    // CUSTOMER TABLE VALIDATION
    // -------------------------------

    const customerRows =
        customerTableBody.querySelectorAll("tr");

    if (jointAccount.checked) {

        if (customerRows.length < 2) {
            alert("Joint account requires minimum 2 customers.");
            return;
        }

    } else {

        if (customerRows.length !== 1) {
            alert("Please add one customer.");
            return;
        }
    }

    // -------------------------------
    // GET FIRST CUSTOMER
    // -------------------------------

    const firstCustomerRow = customerRows[0];

    const cusid =
        firstCustomerRow.dataset.customerId;

    // -------------------------------
    // GET SURETY
    // -------------------------------

    let surid = 0;

    const suretyRows =
        suretyTableBody.querySelectorAll("tr");

    if (suretyRows.length > 0) {

        const suretyRow = suretyRows[0];

        if (suretyRow.dataset.suretyId) {
            surid = parseInt(
                suretyRow.dataset.suretyId
            );
        }
    }

    // -------------------------------
    // GET DIRECTOR
    // -------------------------------

    let dirid = 0;

    const directorRows =
        directorTableBody.querySelectorAll("tr");

    if (directorRows.length > 0) {

        const directorRow = directorRows[0];

        if (directorRow.dataset.directorId) {
            dirid = parseInt(
                directorRow.dataset.directorId
            );
        }
    }

    // -------------------------------
    // PREPARE DATA
    // -------------------------------

    const formData = new URLSearchParams();

    formData.append("loaid", loaid);
    formData.append("loanum", loanum);
    formData.append("cerno", cernoValue);

    formData.append("sanloa", sanloa);
    formData.append("intyp", intyp);
    formData.append("days", days);
    formData.append("noofins", noofins);
    formData.append("insamo", insamo);
    formData.append("gapins", gapins);

    formData.append("cusid", cusid);
    formData.append("surid", surid);
    formData.append("dirid", dirid);

    // -------------------------------
    // SAVE TO SERVLET
    // -------------------------------

    fetch("newloa", {
        method: "POST",
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: formData.toString()
    })
    .then(response => response.text())
    .then(data => {

        const result = data.trim();

        if (result.startsWith("SUCCESS")) {

            alert("Loan account saved successfully.");

            console.log("Server Response:", result);

        } else if (result === "DUPLICATE") {

            alert(
                "Loan Number and Certificate Number already exist."
            );

        } else {

            alert(
                "Loan account could not be saved.\n" +
                result
            );

            console.error("Save failed:", result);
        }

    })
    .catch(error => {

        console.error("Save Error:", error);

        alert(
            "Error while saving Loan Account."
        );
    });

});




/* =====================================================

   CANCEL

===================================================== */



cancelButton.addEventListener(

    "click",

    function () {



        const confirmCancel =

            confirm("Are you sure you want to cancel?");



        if (confirmCancel) {



            customerForm.reset();



            suretyTableBody.innerHTML = "";

            directorTableBody.innerHTML = "";

            voucherTableBody.innerHTML = "";

            depositTableBody.innerHTML = "";



            refreshSelectDepositOptions();



            populateLoanName("");

            updateSections();

            setDateToToday();



        }



    }

);





function populateLoanName(type) {

    loanName.innerHTML = "";

    if (type === "") {

        loanName.disabled = true;

        const emptyOption = document.createElement("option");

        emptyOption.value = "";
        emptyOption.textContent = "Select Type Of Loan First";

        loanName.appendChild(emptyOption);

        return;
    }

    loanName.disabled = false;

    const placeholder = document.createElement("option");

    placeholder.value = "";
    placeholder.textContent = "Select Loan Name";

    loanName.appendChild(placeholder);

    let selectedList = [];

    // TYPE 1 - Term Deposit Loan
    if (type === "1") {
        selectedList = master;
    }

    // TYPE 2 - CC Deposit Loan
    else if (type === "2") {
        selectedList = mascc;
    }

    // TYPE 3 - Pigmy Deposit Loan
    else if (type === "3") {
        selectedList = maspig;
    }

    // TYPE 4 - RD Deposit Loan
    else if (type === "4") {
        selectedList = masrd;
    }

    // TYPE 5 - Other Loan
    else if (type === "5") {
        selectedList = masloa;
    }

    if (Array.isArray(selectedList)) {

        selectedList.forEach(function(item) {

            const option = document.createElement("option");

            option.value = item.id;
            option.textContent = item.name;

            loanName.appendChild(option);
        });
    }
}

// customer table 

const jointAccount = document.getElementById("jointAccount");
const addCustomerButton = document.getElementById("addCustomerButton");
const customerTableBody = document.getElementById("customerTableBody");


// ===============================
// ADD CUSTOMER
// ===============================
addCustomerButton.addEventListener("click", function () {

    const customerId = document.getElementById("cust_id");
    const customerName = document.getElementById("customer_name");

    const id = customerId.value.trim();
    const name = customerName.value.trim();

    // Customer ID required
    if (id === "") {
        alert("Please enter Customer ID.");
        customerId.focus();
        return;
    }

    // Customer name must be found
    if (name === "") {
        alert("Please enter a valid Customer ID.");
        customerId.focus();
        return;
    }

    const rows = customerTableBody.querySelectorAll("tr");

    // NON-JOINT = ONLY ONE CUSTOMER
    if (!jointAccount.checked && rows.length >= 1) {
        alert("Non-Joint account allows only one customer.");
        return;
    }

    // Prevent duplicate customer
    for (let i = 0; i < rows.length; i++) {

        const existingId = rows[i].dataset.customerId;

        if (existingId === id) {
            alert("This customer is already added.");
            return;
        }
    }

    // Add customer
    const row = document.createElement("tr");

    row.dataset.customerId = id;

    row.innerHTML =
        "<td>" + (rows.length + 1) + "</td>" +
        "<td>" + id + "</td>" +
        "<td>" + name + "</td>" +
        "<td><button type='button' class='removeCustomer'>Remove</button></td>";

    customerTableBody.appendChild(row);

    // Clear fields
    customerId.value = "";
    customerName.value = "";

    customerId.focus();

    updateCustomerSlNo();
});


// ===============================
// REMOVE CUSTOMER
// ===============================
customerTableBody.addEventListener("click", function (e) {

    if (e.target.classList.contains("removeCustomer")) {

        e.target.closest("tr").remove();

        updateCustomerSlNo();
    }

});


// ===============================
// UPDATE SERIAL NUMBER
// ===============================
function updateCustomerSlNo() {

    const rows = customerTableBody.querySelectorAll("tr");

    rows.forEach(function (row, index) {

        row.children[0].textContent = index + 1;

    });
}
saveButton.addEventListener("click", function () {

    if (!customerForm.checkValidity()) {
        customerForm.reportValidity();
        return;
    }


    // ===============================
    // CUSTOMER VALIDATION
    // ===============================

    const customerRows =
        customerTableBody.querySelectorAll("tr");


    // JOINT ACCOUNT
    if (jointAccount.checked) {

        if (customerRows.length < 2) {

            alert("Joint account requires minimum 2 customers.");
            return;
        }

    }

    // NON-JOINT ACCOUNT
    else {

        if (customerRows.length !== 1) {

            alert("Please add one customer.");
            return;
        }
    }


    // SAVE
    alert("Loan account saved.");

});

// =========================================================
// GENERATING LOAN NUMBER AND CERTIFICATE NUMBER
// =========================================================

function loadNextLoanNumber() {

    const loaid = loanName.value;

    if (loaid === "") {
        loanNumber.value = "";
        cerno.value = "";
        return;
    }

    fetch("newloa?action=nextLoanNumber&loaid=" + encodeURIComponent(loaid))
        .then(response => response.text())
        .then(data => {

            const nextNumber = data.trim();

            if (nextNumber !== "") {

                loanNumber.value = nextNumber;

                // Get certificate number
                loadNextCerno(loaid, nextNumber);
            }

        })
        .catch(error => {
            console.error("Error getting Loan Number:", error);
        });
}


// =========================================================
// GENERATE CERTIFICATE NUMBER
// =========================================================

function loadNextCerno(loaid, loanum) {

    if (loaid === "" || loanum === "") {
        cerno.value = "";
        return;
    }

    fetch(
        "newloa?action=nextCerno"
        + "&loaid=" + encodeURIComponent(loaid)
        + "&loanum=" + encodeURIComponent(loanum)
    )
        .then(response => response.text())
        .then(data => {

            const nextCerno = data.trim();

            if (nextCerno !== "") {
                cerno.value = nextCerno;
            }

        })
        .catch(error => {
            console.error("Error getting Certificate Number:", error);
        });
}


// =========================================================
// LOAN NUMBER CHANGED MANUALLY
// =========================================================

loanNumber.addEventListener("change", function () {

    const loaid = loanName.value;
    const loanum = this.value.trim();

    if (loaid === "" || loanum === "") {
        return;
    }

    // Check database and get certificate number
    loadNextCerno(loaid, loanum);

});

loanName.addEventListener("change", function () {

    loadNextLoanNumber();

});
//other loan calculation sanloa
const sanctionedLoan = document.getElementById("san_loan");
const noOfInstalment = document.getElementById("no_instal");
const instalmentAmount = document.getElementById("instal_amt");

function calculateInstalmentAmount() {

    const loan = parseFloat(sanctionedLoan.value);
    const instalments = parseInt(noOfInstalment.value);

    if (isNaN(loan) || loan <= 0 ||
        isNaN(instalments) || instalments <= 0) {

        instalmentAmount.value = "";
        return;
    }

    const amount = loan / instalments;

    instalmentAmount.value = amount.toFixed(2);
}

sanctionedLoan.addEventListener("input", calculateInstalmentAmount);
noOfInstalment.addEventListener("input", calculateInstalmentAmount);