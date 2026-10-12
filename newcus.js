
// =====================================================
// CURRENT STEP
// =====================================================

let currentStep = 1;


// =====================================================
// KYC DATA
// =====================================================

let kycData = [];


// =====================================================
// CUSTOMER ID - CHECK ON TAB
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const cusid =
        document.getElementById("cusid");

    if (!cusid) {
        return;
    }

    cusid.dataset.valid = "false";


    // When ID changes, it must be checked again

    cusid.addEventListener("input", function () {

        cusid.dataset.valid = "false";

    });


    // Check ID when TAB is pressed

    cusid.addEventListener("keydown", function (event) {

        if (event.key === "Tab") {

            event.preventDefault();

            checkCustomerId();

        }

    });

});


// =====================================================
// CUSTOMER ID DATABASE CHECK
// =====================================================

function checkCustomerId() {

    const cusid =
        document.getElementById("cusid");

    if (!cusid) {
        return;
    }


    const id =
        cusid.value.trim();


    if (id === "") {

        cusid.dataset.valid = "false";

        alert(
            "PLEASE ENTER CUSTOMER ID"
        );

        cusid.focus();

        return;
    }


    fetch(
        "newcus?checkCustomerId=" +
        encodeURIComponent(id)
    )

    .then(function (response) {

        return response.text();

    })

    .then(function (result) {

        result = result.trim();


        // =================================================
        // CUSTOMER ALREADY EXISTS
        // =================================================

		if (
		    result.startsWith(
		        "CUSTOMER_ALREADY_HAS_ACCOUNT_ON_THIS_ID"
		    )
		) {
		    cusid.dataset.valid = "false";

		    const parts = result.split("|");
		    const lastCusId = parts[1];

		    alert(
		        "CUSTOMER ALREADY HAS AN ACCOUNT ON THIS ID\n\n" +
		        "LAST CUSTOMER ID: " +
		        lastCusId
		    );

		    cusid.focus();
		    return;
		}

        // =================================================
        // AVAILABLE
        // =================================================

        if (result === "AVAILABLE") {

            cusid.dataset.valid =
                "true";

            moveToNextField(cusid);

            return;
        }


        // =================================================
        // UNKNOWN RESPONSE
        // =================================================

        cusid.dataset.valid =
            "false";

        alert(
            "CUSTOMER ID CHECK RESPONSE: " +
            result
        );

        cusid.focus();

    })

    .catch(function (error) {

        console.error(error);

        cusid.dataset.valid =
            "false";

        alert(
            "ERROR CHECKING CUSTOMER ID"
        );

        cusid.focus();

    });

}


// =====================================================
// CUSTOMER NAME - CHECK ON TAB
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const name =
        document.getElementById("name");

    if (!name) {
        return;
    }

    name.dataset.valid =
        "false";


    // When name changes, check again

    name.addEventListener("input", function () {

        name.dataset.valid =
            "false";

    });


    // Check when TAB pressed

    name.addEventListener("keydown", function (event) {

        if (event.key === "Tab") {

            event.preventDefault();

            checkCustomerName();

        }

    });

});


// =====================================================
// CUSTOMER NAME DATABASE CHECK
// =====================================================

function checkCustomerName() {

    const name =
        document.getElementById("name");

    if (!name) {
        return;
    }


    let customerName =
        name.value.trim();


    if (customerName === "") {

        name.dataset.valid =
            "false";

        alert(
            "PLEASE ENTER CUSTOMER NAME"
        );

        name.focus();

        return;
    }


    // CAPITAL LETTER

    customerName =
        customerName.toUpperCase();

    name.value =
        customerName;


    // DATABASE CHECK

    fetch(
        "newcus?checkCustomerName=" +
        encodeURIComponent(customerName)
    )

    .then(function (response) {

        return response.text();

    })

    .then(function (result) {

        result =
            result.trim();


        // =================================================
        // NAME EXISTS
        // =================================================

        if (
            result ===
            "CUSTOMER_ALREADY_HAS_ACCOUNT"
        ) {

            name.dataset.valid =
                "false";

            alert(
                "CUSTOMER ALREADY HAS AN ACCOUNT"
            );

            name.focus();

            return;
        }


        // =================================================
        // AVAILABLE
        // =================================================

        if (result === "AVAILABLE") {

            name.dataset.valid =
                "true";

            moveToNextField(name);

            return;
        }


        name.dataset.valid =
            "false";

        alert(
            "CUSTOMER NAME CHECK RESPONSE: " +
            result
        );

        name.focus();

    })

    .catch(function (error) {

        console.error(error);

        name.dataset.valid =
            "false";

        alert(
            "ERROR CHECKING CUSTOMER NAME"
        );

        name.focus();

    });

}


// =====================================================
// MOVE TO NEXT FIELD
// =====================================================

function moveToNextField(currentField) {

    const fields =
        Array.from(
            document.querySelectorAll(
                "#step1 input:not([type='hidden']), " +
                "#step1 select, " +
                "#step1 textarea"
            )
        );


    const currentIndex =
        fields.indexOf(currentField);


    if (
        currentIndex >= 0 &&
        currentIndex + 1 < fields.length
    ) {

        fields[
            currentIndex + 1
        ].focus();

    }

}


// =====================================================
// NEXT STEP
// =====================================================

function nextStep(step) {

    console.log(
        "NEXT:",
        currentStep,
        "->",
        step
    );


    // =================================================
    // STEP 1 VALIDATION
    // =================================================

    if (currentStep === 1) {

        const cusid =
            document.getElementById("cusid");

        const name =
            document.getElementById("name");


        // ID

        if (!cusid) {

            alert(
                "CUSTOMER ID FIELD NOT FOUND"
            );

            return;
        }


        if (
            cusid.value.trim() === ""
        ) {

            alert(
                "PLEASE ENTER CUSTOMER ID"
            );

            cusid.focus();

            return;
        }


        if (
            cusid.dataset.valid !== "true"
        ) {

            alert(
                "PLEASE CHECK CUSTOMER ID FIRST"
            );

            cusid.focus();

            return;
        }


        // NAME

        if (!name) {

            alert(
                "CUSTOMER NAME FIELD NOT FOUND"
            );

            return;
        }


        if (
            name.value.trim() === ""
        ) {

            alert(
                "PLEASE ENTER CUSTOMER NAME"
            );

            name.focus();

            return;
        }


        if (
            name.dataset.valid !== "true"
        ) {

            alert(
                "PLEASE CHECK CUSTOMER NAME FIRST"
            );

            name.focus();

            return;
        }

    }


    // =================================================
    // STEP 2 VALIDATION
    // =================================================

    if (currentStep === 2) {

        const step2 =
            document.getElementById("step2");


        if (!step2) {

            alert(
                "STEP 2 NOT FOUND"
            );

            return;
        }


        const requiredFields =
            step2.querySelectorAll(
                "input[required], " +
                "select[required], " +
                "textarea[required]"
            );


        for (
            let i = 0;
            i < requiredFields.length;
            i++
        ) {

            const field =
                requiredFields[i];


            if (
                field.value.trim() === ""
            ) {

                alert(
                    "PLEASE FILL ALL REQUIRED FIELDS"
                );

                field.focus();

                return;
            }

        }

    }


    // =================================================
    // SHOW NEXT STEP
    // =================================================

    showStep(step);

}


// =====================================================
// PREVIOUS STEP
// =====================================================

function previousStep(step) {

    showStep(step);

}


// =====================================================
// SHOW STEP
// =====================================================

function showStep(step) {

    console.log(
        "SHOWING STEP:",
        step
    );


    const steps =
        document.querySelectorAll(
            ".form-step"
        );


    // Hide every step

    steps.forEach(function (element) {

        element.style.display =
            "none";

        element.classList.remove(
            "active"
        );

    });


    // Get requested step

    const selectedStep =
        document.getElementById(
            "step" + step
        );


    if (!selectedStep) {

        console.error(
            "STEP NOT FOUND: step" + step
        );

        return;
    }


    // Show requested step

    selectedStep.style.display =
        "block";

    selectedStep.classList.add(
        "active"
    );


    // Set current step

    currentStep =
        step;


    // Progress

    updateProgress(step);

}


// =====================================================
// UPDATE PROGRESS
// =====================================================

function updateProgress(step) {

    const step1 =
        document.getElementById(
            "progressStep1"
        );

    const step2 =
        document.getElementById(
            "progressStep2"
        );

    const step3 =
        document.getElementById(
            "progressStep3"
        );

    const line1 =
        document.getElementById(
            "progressLine1"
        );

    const line2 =
        document.getElementById(
            "progressLine2"
        );


    if (
        !step1 ||
        !step2 ||
        !step3
    ) {

        return;
    }


    // RESET

    step1.classList.remove(
        "active",
        "completed"
    );

    step2.classList.remove(
        "active",
        "completed"
    );

    step3.classList.remove(
        "active",
        "completed"
    );


    if (line1) {

        line1.classList.remove(
            "completed"
        );

    }


    if (line2) {

        line2.classList.remove(
            "completed"
        );

    }


    // STEP 1

    if (step === 1) {

        step1.classList.add(
            "active"
        );

    }


    // STEP 2

    else if (step === 2) {

        step1.classList.add(
            "completed"
        );

        step2.classList.add(
            "active"
        );


        if (line1) {

            line1.classList.add(
                "completed"
            );

        }

    }


    // STEP 3

    else if (step === 3) {

        step1.classList.add(
            "completed"
        );

        step2.classList.add(
            "completed"
        );

        step3.classList.add(
            "active"
        );


        if (line1) {

            line1.classList.add(
                "completed"
            );

        }


        if (line2) {

            line2.classList.add(
                "completed"
            );

        }

    }

}


// =====================================================
// INITIAL STEP
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        currentStep = 1;

        showStep(1);

    }
);


// =====================================================
// INTRODUCER ID → NAME
// =====================================================

function getIntroducerName() {

    const idField =
        document.getElementById("indid");

    const nameField =
        document.getElementById("indname");

    if (
        !idField ||
        !nameField
    ) {
        return;
    }

    const id =
        idField.value.trim();


    // =================================================
    // INTRODUCER ID EMPTY
    // =================================================

    if (id === "") {

        idField.value = "0";
        nameField.value = "0";

        return;
    }


    fetch(
        "newcus?id=" +
        encodeURIComponent(id)
    )
    .then(function (response) {

        return response.text();

    })
    .then(function (name) {

        name = name.trim();


        // =================================================
        // INTRODUCER NOT FOUND
        // =================================================

        if (
            name === "" ||
            name === "0"
        ) {

            // BOTH ID AND NAME BECOME 0
            idField.value = "0";
            nameField.value = "0";

            // No alert
            // No focus
            // Form can continue
            return;
        }


        // =================================================
        // INTRODUCER FOUND
        // =================================================

        nameField.value =
            name.toUpperCase();

    })
    .catch(function (error) {

        console.error(
            "Introducer error:",
            error
        );


        // =================================================
        // ERROR → BOTH BECOME 0
        // =================================================

        idField.value = "0";
        nameField.value = "0";

    });
}


// =====================================================
// UPDATE AVAILABLE KYC TYPES
// =====================================================

// Prevent the same KYC type from being selected again.

function updateKycOptions() {

    const kycSelect =
        document.getElementById("kycid");


    if (!kycSelect) {

        return;
    }


    // Get all KYC IDs which are already added

    const selectedKycIds =
        kycData.map(function (kyc) {

            return String(
                kyc.kycid
            );

        });


    // Check every KYC option

    Array.from(
        kycSelect.options
    ).forEach(function (option) {

        // "Select KYC" should always remain available

        if (option.value === "") {

            option.disabled = false;

            return;
        }


        // Disable already-added KYC

        if (
            selectedKycIds.includes(
                String(option.value)
            )
        ) {

            option.disabled = true;

        } else {

            option.disabled = false;

        }

    });


    // Make dropdown ready for next KYC

    kycSelect.value = "";

}


// =====================================================
// ADD KYC
// =====================================================

function addKyc() {

    const kycSelect =
        document.getElementById("kycid");

    const kycNumber =
        document.getElementById(
            "kyc-number"
        );

    const issueDate =
        document.getElementById(
            "issuedat"
        );

    const expiryDate =
        document.getElementById(
            "expdat"
        );

    const imageInput =
        document.getElementById(
            "kycImage"
        );

    const tbody =
        document.getElementById(
            "kycBody"
        );


    if (
        !kycSelect ||
        !kycNumber ||
        !issueDate ||
        !expiryDate ||
        !imageInput ||
        !tbody
    ) {

        alert(
            "KYC FIELD NOT FOUND"
        );

        return;
    }


    // =================================================
    // VALIDATION
    // =================================================

    if (
        kycSelect.value === ""
    ) {

        alert(
            "PLEASE SELECT KYC"
        );

        kycSelect.focus();

        return;
    }


    // =================================================
    // DUPLICATE KYC CHECK
    // =================================================

    const duplicateKyc =
        kycData.some(function (kyc) {

            return String(kyc.kycid) ===
                String(kycSelect.value);

        });


    if (duplicateKyc) {

        alert(
            "THIS KYC TYPE IS ALREADY ADDED"
        );

        kycSelect.value = "";

        updateKycOptions();

        kycSelect.focus();

        return;
    }


    if (
        kycNumber.value.trim() === ""
    ) {

        alert(
            "PLEASE ENTER KYC NUMBER"
        );

        kycNumber.focus();

        return;
    }


    if (
        issueDate.value === ""
    ) {

        alert(
            "PLEASE SELECT ISSUE DATE"
        );

        issueDate.focus();

        return;
    }


    if (
        expiryDate.value === ""
    ) {

        alert(
            "PLEASE SELECT EXPIRY DATE"
        );

        expiryDate.focus();

        return;
    }


    /*if (
        !imageInput.files ||
        imageInput.files.length === 0
    ) {

        alert(
            "PLEASE SELECT KYC DOCUMENT"
        );

        return;
    }*/

	// =================================================
	// GET VALUES
	// =================================================

	const selectedKycId =
	    kycSelect.value;

	const selectedKycName =
	    kycSelect.options[
	        kycSelect.selectedIndex
	    ].text.trim();

	const number =
	    kycNumber.value
	        .trim()
	        .toUpperCase();

	const issue =
	    issueDate.value;

	const expiry =
	    expiryDate.value;

	const file =
	    (
	        imageInput.files &&
	        imageInput.files.length > 0
	    )
	        ? imageInput.files[0]
	        : null;


	// =================================================
	// STORE KYC
	// =================================================

	kycData.push({

	    kycid:
	        selectedKycId,

	    kycName:
	        selectedKycName,

	    kycNumber:
	        number,

	    issueDate:
	        issue,

	    expdat:
	        expiry,

	    image:
	        file
	});


	// =================================================
	// UPDATE KYC OPTIONS
	// =================================================

	updateKycOptions();


	// =================================================
	// CREATE TABLE ROW
	// =================================================

	const row =
	    tbody.insertRow(-1);

	row.dataset.index =
	    kycData.length - 1;


	// KYC TYPE
	const cell1 =
	    row.insertCell(0);

	cell1.textContent =
	    selectedKycName;


	// NUMBER
	const cell2 =
	    row.insertCell(1);

	cell2.textContent =
	    number;


	// ISSUE
	const cell3 =
	    row.insertCell(2);

	cell3.textContent =
	    issue;


	// EXPIRY
	const cell4 =
	    row.insertCell(3);

	cell4.textContent =
	    expiry;


	// STATUS
	const cell5 =
	    row.insertCell(4);

	if (file) {

	    cell5.textContent =
	        "UPLOADED SUCCESSFULLY";

	    cell5.classList.add(
	        "upload-cell",
	        "success"
	    );

	} else {

	    cell5.textContent =
	        "NOT UPLOADED";

	    cell5.classList.add(
	        "upload-cell",
			"error"
	    );
	}


	// ACTION
	const cell6 =
	    row.insertCell(5);

	cell6.innerHTML =
	    '<button type="button" ' +
	    'class="btn cancel" ' +
	    'onclick="removeKyc(this)">' +
	    'Remove' +
	    '</button>';


    // =================================================
    // CLEAR INPUTS
    // =================================================

    kycSelect.value = "";

    kycNumber.value = "";

    issueDate.value = "";

    expiryDate.value = "";

    imageInput.value = "";


    const fileName =
        document.getElementById(
            "kycFileName"
        );


    if (fileName) {

        fileName.textContent =
            "Choose File";

        fileName.classList.remove(
            "selected"
        );

    }


    const preview =
        document.getElementById(
            "kycPreview"
        );


    if (preview) {

        preview.src = "";

        preview.style.display =
            "none";

    }


    // Make sure dropdown remains updated

    updateKycOptions();


    console.log(
        "KYC ADDED:",
        kycData
    );

}


// =====================================================
// REMOVE KYC
// =====================================================

function removeKyc(button) {

    const row =
        button.closest("tr");


    if (!row) {

        return;
    }


    const index =
        Number(
            row.dataset.index
        );


    if (
        Number.isNaN(index)
    ) {

        row.remove();

        // Refresh KYC options

        updateKycOptions();

        return;
    }


    kycData.splice(
        index,
        1
    );


    row.remove();


    // Re-index

    const rows =
        document.querySelectorAll(
            "#kycBody tr"
        );


    rows.forEach(
        function (row, newIndex) {

            row.dataset.index =
                newIndex;

        }
    );


    // =================================================
    // RE-ENABLE REMOVED KYC
    // =================================================

    updateKycOptions();

}


// =====================================================
// KYC FILE SELECT
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById(
                "kycImage"
            );

        const fileName =
            document.getElementById(
                "kycFileName"
            );


        if (!input) {

            return;
        }


        input.addEventListener(
            "change",
            function () {

                if (
                    this.files &&
                    this.files.length > 0
                ) {

                    if (fileName) {

                        fileName.textContent =
                            "FILE SELECTED";

                        fileName.classList.add(
                            "selected"
                        );

                    }


                    const preview =
                        document.getElementById(
                            "kycPreview"
                        );


                    if (preview) {

                        preview.src = "";

                        preview.style.display =
                            "none";

                    }

                }

            }
        );

    }
);


// =====================================================
// PHOTO / SIGNATURE VALIDATION
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("customerForm");

    if (!form) {
        return;
    }

    let photoWarningShown = false;
    let signatureWarningShown = false;

    form.addEventListener("submit", function (event) {

        const photo = document.getElementById("photo");
        const signature = document.getElementById("signature");

        // =========================================
        // PHOTO
        // =========================================
        if (
            photo &&
            (!photo.files || photo.files.length === 0) &&
            !photoWarningShown
        ) {

            photoWarningShown = true;

            const addPhoto = confirm(
                "PHOTO NOT UPLOADED.\n\n" +
                "DO YOU WANT TO ADD PHOTO?"
            );

            if (addPhoto) {
                event.preventDefault();

                photoWarningShown = false;

                photo.click();

                return;
            }

            // CANCEL = continue with blank photo
        }

        // =========================================
        // SIGNATURE
        // =========================================
        if (
            signature &&
            (!signature.files || signature.files.length === 0) &&
            !signatureWarningShown
        ) {

            signatureWarningShown = true;

            const addSignature = confirm(
                "SIGNATURE NOT UPLOADED.\n\n" +
                "DO YOU WANT TO ADD SIGNATURE?"
            );

            if (addSignature) {
                event.preventDefault();

                signatureWarningShown = false;

                signature.click();

                return;
            }

            // CANCEL = continue with blank signature
        }

    }, true);

});


// =====================================================
// SUBMIT - ADD ALL KYC FILES TO FORM
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "customerForm"
            );


        if (!form) {

            console.warn(
                "customerForm not found"
            );

            return;
        }


        form.addEventListener(
            "submit",
            function (event) {




                console.log(
                    "SUBMITTING KYC:",
                    kycData.length
                );


                // =========================================
                // REMOVE GENERATED FIELDS
                // =========================================

                form.querySelectorAll(
                    ".generated-kyc-field"
                ).forEach(
                    function (element) {

                        element.remove();

                    }
                );


                // =========================================
                // KYC ID + EXPIRY
                // =========================================

                kycData.forEach(
                    function (kyc) {


                        const idInput =
                            document.createElement(
                                "input"
                            );


                        idInput.type =
                            "hidden";

                        idInput.name =
                            "kycid";

                        idInput.value =
                            kyc.kycid;

                        idInput.className =
                            "generated-kyc-field";


                        form.appendChild(
                            idInput
                        );


                        const expiryInput =
                            document.createElement(
                                "input"
                            );


                        expiryInput.type =
                            "hidden";

                        expiryInput.name =
                            "expdat";

                        expiryInput.value =
                            kyc.expdat;

                        expiryInput.className =
                            "generated-kyc-field";


                        form.appendChild(
                            expiryInput
                        );

                    }
                );


                // =========================================
                // KYC FILES
                // =========================================

                kycData.forEach(
                    function (kyc) {

                        if (!kyc.image) {

                            return;
                        }


                        const transfer =
                            new DataTransfer();


                        transfer.items.add(
                            kyc.image
                        );


                        const fileInput =
                            document.createElement(
                                "input"
                            );


                        fileInput.type =
                            "file";

                        fileInput.name =
                            "kycImage";

                        fileInput.className =
                            "generated-kyc-field";

                        fileInput.style.display =
                            "none";


                        fileInput.files =
                            transfer.files;


                        form.appendChild(
                            fileInput
                        );

                    }
                );


                console.log(
                    "KYC fields prepared for submit"
                );

            }
        );

    }
);



// =====================================================
// =====================================================
// MASTER TABLE - ADD NEW RECORD
// =====================================================
// =====================================================
//
// This section is NEW.
//
// It does NOT change:
// - Customer ID checking
// - Customer name checking
// - Step navigation
// - Introducer
// - KYC
// - Photo
// - Signature
// - Customer submit
//
// It only handles:
// Place
// Qualification
// Caste
// Occupation
// Sub-caste
//
// =====================================================


// =====================================================
// CURRENT MASTER TYPE
// =====================================================

let currentMasterType = "";


// =====================================================
// OPEN MASTER MODAL
// =====================================================

function openMasterModal(type) {

    currentMasterType =
        type;


    const modal =
        document.getElementById(
            "masterModal"
        );

    const nameInput =
        document.getElementById(
            "masterName"
        );

    const title =
        document.getElementById(
            "masterModalTitle"
        );


    if (
        !modal ||
        !nameInput ||
        !title
    ) {

        alert(
            "MASTER MODAL NOT FOUND"
        );

        return;
    }


    // =================================================
    // MODAL TITLE
    // =================================================

    if (
        type === "place"
    ) {

        title.textContent =
            "Add Place";

    }

    else if (
        type === "qualification"
    ) {

        title.textContent =
            "Add Qualification";

    }

    else if (
        type === "caste"
    ) {

        title.textContent =
            "Add Caste";

    }

    else if (
        type === "occupation"
    ) {

        title.textContent =
            "Add Occupation";

    }

    else if (
        type === "subcaste"
    ) {

        title.textContent =
            "Add Sub-caste";

    }

    else {

        alert(
            "INVALID MASTER TYPE"
        );

        currentMasterType =
            "";

        return;
    }


    // Clear previous value

    nameInput.value = "";


    // Show modal

    modal.style.display =
        "flex";


    // Focus input

    setTimeout(
        function () {

            nameInput.focus();

        },
        100
    );

}


// =====================================================
// CLOSE MASTER MODAL
// =====================================================

function closeMasterModal() {

    const modal =
        document.getElementById(
            "masterModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    currentMasterType =
        "";

}


// =====================================================
// SAVE MASTER
// =====================================================

function saveMaster() {

    const nameInput =
        document.getElementById(
            "masterName"
        );


    if (!nameInput) {

        alert(
            "NAME FIELD NOT FOUND"
        );

        return;
    }


    // =================================================
    // GET NAME
    // =================================================

    const name =
        nameInput.value.trim();


    // =================================================
    // VALIDATION
    // =================================================

    if (name === "") {

        alert(
            "PLEASE ENTER NAME"
        );

        nameInput.focus();

        return;
    }


    if (
        currentMasterType === ""
    ) {

        alert(
            "INVALID MASTER TYPE"
        );

        return;
    }


    // =================================================
    // SEND DATA TO SERVLET
    // =================================================

    const formData =
        new URLSearchParams();


    formData.append(
        "action",
        "addMaster"
    );


    formData.append(
        "masterType",
        currentMasterType
    );


    formData.append(
        "masterName",
        name
    );


    fetch(
        "newcus",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body:
                formData.toString()
        }
    )

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {


        // =================================================
        // DATABASE ERROR
        // =================================================

        if (!data.success) {

            alert(
                data.message ||
                "UNABLE TO ADD RECORD"
            );

            return;
        }


        // =================================================
        // FIND CORRECT DROPDOWN
        // =================================================

        let selectId = "";


        if (
            currentMasterType ===
            "place"
        ) {

            selectId =
                "place";

        }

        else if (
            currentMasterType ===
            "qualification"
        ) {

            selectId =
                "qualification";

        }

        else if (
            currentMasterType ===
            "caste"
        ) {

            selectId =
                "caste";

        }

        else if (
            currentMasterType ===
            "occupation"
        ) {

            selectId =
                "occupation";

        }

        else if (
            currentMasterType ===
            "subcaste"
        ) {

            selectId =
                "subcaste";

        }


        // =================================================
        // GET DROPDOWN
        // =================================================

        const select =
            document.getElementById(
                selectId
            );


        if (!select) {

            alert(
                "RECORD ADDED BUT DROPDOWN NOT FOUND"
            );

            closeMasterModal();

            return;
        }


        // =================================================
        // CREATE NEW OPTION
        // =================================================

        const option =
            document.createElement(
                "option"
            );


        // Database generated ID

        option.value =
            data.id;


        // Name returned by servlet

        option.textContent =
            data.name.toUpperCase();


        // Add to dropdown

        select.appendChild(
            option
        );


        // Automatically select new record

        select.value =
            String(data.id);


        // =================================================
        // CLOSE MODAL
        // =================================================

        closeMasterModal();


        // =================================================
        // SUCCESS MESSAGE
        // =================================================

        alert(
            data.name.toUpperCase() +
            " ADDED SUCCESSFULLY"
        );

    })

    .catch(function (error) {

        console.error(
            "MASTER ADD ERROR:",
            error
        );

        alert(
            "DATABASE ERROR"
        );

    });

}




/* =====================================================
   MASTER ADD - SAFE OVERRIDE
   Does not affect existing customer/KYC JavaScript
   ===================================================== */

(function () {

    window.masterTypeForAdd = "";

    window.openMasterModal = function (type) {

        window.masterTypeForAdd = type;

        var modal = document.getElementById("masterModal");
        var nameInput = document.getElementById("masterName");
        var title = document.getElementById("masterModalTitle");

        if (!modal || !nameInput || !title) {
            alert("MASTER ADD MODAL NOT FOUND");
            return;
        }

        var titleText = "";

        if (type === "place") {
            titleText = "Add Place";
        }
        else if (type === "qualification") {
            titleText = "Add Qualification";
        }
        else if (type === "caste") {
            titleText = "Add Caste";
        }
        else if (type === "occupation") {
            titleText = "Add Occupation";
        }
        else if (type === "subcaste") {
            titleText = "Add Sub-Caste";
        }
        else {
            alert("INVALID MASTER TYPE");
            return;
        }

        title.innerText = titleText;

        nameInput.value = "";

        modal.style.display = "flex";

        setTimeout(function () {
            nameInput.focus();
        }, 100);
    };


    window.closeMasterModal = function () {

        var modal =
            document.getElementById("masterModal");

        if (modal) {
            modal.style.display = "none";
        }

        window.masterTypeForAdd = "";
    };


    window.saveMaster = function () {

        var nameInput =
            document.getElementById("masterName");

        if (!nameInput) {
            alert("MASTER NAME FIELD NOT FOUND");
            return;
        }

        var name =
            nameInput.value.trim();

        if (name === "") {
            alert("PLEASE ENTER NAME");
            nameInput.focus();
            return;
        }

        var masterType =
            window.masterTypeForAdd;

        if (!masterType) {
            alert("MASTER TYPE NOT SELECTED");
            return;
        }

        /* ---------------------------------------------
           SEND TO SERVLET
           --------------------------------------------- */

        var formData =
            new URLSearchParams();

        formData.append(
            "action",
            "addMaster"
        );

        formData.append(
            "masterType",
            masterType
        );

        formData.append(
            "masterName",
            name
        );

        fetch(
            "newcus",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded; charset=UTF-8"
                },

                body:
                    formData.toString()
            }
        )
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "HTTP ERROR " +
                    response.status
                );
            }

            return response.text();
        })
        .then(function (text) {

            console.log(
                "MASTER SERVER RESPONSE:",
                text
            );

            var data;

            try {
                data = JSON.parse(text);
            }
            catch (e) {

                console.error(
                    "INVALID JSON FROM SERVLET:",
                    text
                );

                alert(
                    "SERVER RESPONSE ERROR:\n" +
                    text
                );

                return;
            }


            /* -----------------------------------------
               SERVER ERROR
               ----------------------------------------- */

            if (!data.success) {

                alert(
                    data.message ||
                    "UNABLE TO ADD RECORD"
                );

                return;
            }


            /* -----------------------------------------
               FIND DROPDOWN
               ----------------------------------------- */

            var selectId = "";

            if (masterType === "place") {
                selectId = "place";
            }
            else if (masterType === "qualification") {
                selectId = "qualification";
            }
            else if (masterType === "caste") {
                selectId = "caste";
            }
            else if (masterType === "occupation") {
                selectId = "occupation";
            }
            else if (masterType === "subcaste") {
                selectId = "subcaste";
            }


            var select =
                document.getElementById(selectId);

            if (!select) {

                alert(
                    "DROPDOWN NOT FOUND: " +
                    selectId
                );

                window.closeMasterModal();

                return;
            }


            /* -----------------------------------------
               CREATE NEW OPTION
               ----------------------------------------- */

            var option =
                document.createElement("option");

            option.value =
                String(data.id);

            option.text =
                data.name;

            select.appendChild(option);


            /* -----------------------------------------
               SELECT NEW RECORD
               ----------------------------------------- */

            select.value =
                String(data.id);


            /* -----------------------------------------
               CLOSE MODAL
               ----------------------------------------- */

            window.closeMasterModal();


            /* -----------------------------------------
               SUCCESS
               ----------------------------------------- */

            alert(
                data.name +
                " ADDED SUCCESSFULLY"
            );

        })
        .catch(function (error) {

            console.error(
                "MASTER ADD ERROR:",
                error
            );

            alert(
                "ERROR ADDING RECORD:\n" +
                error.message
            );
        });
    };


    /* =================================================
       CLOSE MODAL WHEN CLICKING OUTSIDE
       ================================================= */

    window.addEventListener(
        "click",
        function (event) {

            var modal =
                document.getElementById("masterModal");

            if (
                modal &&
                event.target === modal
            ) {
                window.closeMasterModal();
            }
        }
    );


    /* =================================================
       ENTER KEY = SAVE
       ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            var modal =
                document.getElementById("masterModal");

            if (
                modal &&
                modal.style.display === "flex" &&
                event.key === "Enter"
            ) {

                event.preventDefault();

                window.saveMaster();
            }

            if (
                modal &&
                modal.style.display === "flex" &&
                event.key === "Escape"
            ) {

                event.preventDefault();

                window.closeMasterModal();
            }
        }
    );

})();





