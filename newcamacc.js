// =============================================================
// CURRENT STEP
// =============================================================

let currentStep = 1;


// =============================================================
// DIRECTOR ARRAY
// =============================================================

let directorList = [];


// =============================================================
// KYC ARRAY
// =============================================================

let kycList = [];


// =============================================================
// SHOW STEP
// =============================================================

function showStep(step) {

    document
        .querySelectorAll(".form-step")
        .forEach(function(element) {

            element.classList.remove("active");

        });


    const selectedStep =
        document.getElementById("step" + step);


    if (selectedStep) {

        selectedStep.classList.add("active");

    }


    updateProgress(step);

    currentStep = step;

}


// =============================================================
// NEXT STEP
// =============================================================

function nextStep(step) {

    showStep(step);

}


// =============================================================
// STEP 2 - KYC NEXT VALIDATION
// =============================================================

function validateStep2AndNext() {

    // No KYC added
    if (!kycList || kycList.length === 0) {

        alert("PLEASE ADD AT LEAST ONE KYC");

        showStep(2);

        return false;
    }


    // Validate all added KYC
    for (let i = 0; i < kycList.length; i++) {

        const item = kycList[i];


        // KYC TYPE
        if (!item.kycid ||
            item.kycid.trim() === "") {

            alert("KYC TYPE IS REQUIRED");

            showStep(2);

            return false;
        }


        // KYC NUMBER
        if (!item.kycNumber ||
            item.kycNumber.trim() === "") {

            alert("KYC NUMBER IS REQUIRED");

            showStep(2);

            return false;
        }


        // ISSUE DATE
        if (!item.issueDate ||
            item.issueDate.trim() === "") {

            alert("ISSUE DATE IS REQUIRED");

            showStep(2);

            return false;
        }


        // EXPIRY DATE
        if (!item.expdat ||
            item.expdat.trim() === "") {

            alert("EXPIRY DATE IS REQUIRED");

            showStep(2);

            return false;
        }
    }


    // =========================================================
    // KYC VALID → GO TO STEP 3
    // =========================================================

    showStep(3);

    return true;
}


// =============================================================
// PREVIOUS STEP
// =============================================================

function previousStep(step) {

    showStep(step);

}


// =============================================================
// PROGRESS BAR
// =============================================================

function updateProgress(step) {

    const step1 =
        document.getElementById("progressStep1");

    const step2 =
        document.getElementById("progressStep2");

    const step3 =
        document.getElementById("progressStep3");

    const line1 =
        document.getElementById("progressLine1");

    const line2 =
        document.getElementById("progressLine2");


    if (
        !step1 ||
        !step2 ||
        !step3 ||
        !line1 ||
        !line2
    ) {

        return;

    }


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

    line1.classList.remove("completed");

    line2.classList.remove("completed");


    if (step === 1) {

        step1.classList.add("active");

    }

    else if (step === 2) {

        step1.classList.add("completed");

        step2.classList.add("active");

        line1.classList.add("completed");

    }

    else if (step === 3) {

        step1.classList.add("completed");

        step2.classList.add("completed");

        step3.classList.add("active");

        line1.classList.add("completed");

        line2.classList.add("completed");

    }

}


// =============================================================
// CUSTOMER ID CHECK
// =============================================================

function checkCustomerId() {

    const cid =
        document.getElementById("cid");


    if (!cid) {

        return;

    }


    const customerId =
        cid.value.trim();


    if (customerId === "") {

        alert(
            "PLEASE ENTER CUSTOMER ID"
        );

        cid.dataset.valid = "false";

        cid.focus();

        return;

    }


    fetch(
        "newcamacc?checkCustomerId=" +
        encodeURIComponent(customerId)
    )

    .then(function(response) {

        return response.text();

    })

    .then(function(result) {

        result = result.trim();


        if (
            result.startsWith(
                "CUSTOMER_ALREADY_HAS_ACCOUNT"
            )
        ) {

            const parts =
                result.split("|");


            const lastCusId =
                parts.length > 1
                    ? parts[1]
                    : "";


            alert(
                "CUSTOMER ALREADY HAS AN ACCOUNT\n\n" +
                "LAST CUSTOMER ID : " +
                lastCusId
            );


            cid.dataset.valid = "false";

            cid.focus();

            cid.select();

            return;

        }


        if (result === "AVAILABLE") {

            cid.dataset.valid = "true";


            const name =
                document.getElementById("full-name");


            if (name) {

                name.focus();

            }


            return;

        }


        if (
            result === "INVALID_CUSTOMER_ID"
        ) {

            alert(
                "INVALID CUSTOMER ID"
            );


            cid.dataset.valid = "false";

            cid.focus();

            return;

        }


        alert(
            "CUSTOMER ID CHECK FAILED\n\n" +
            "SERVER RESPONSE : " +
            result
        );


        cid.dataset.valid = "false";

    })

    .catch(function(error) {

        console.error(error);


        alert(
            "ERROR WHILE CHECKING CUSTOMER ID"
        );


        cid.dataset.valid = "false";

    });

}


// =============================================================
// CUSTOMER NAME CHECK
// =============================================================

function checkCustomerName() {

    const name =
        document.getElementById("full-name");


    if (!name) {

        return;

    }


    name.value =
        name.value.toUpperCase();


    const customerName =
        name.value.trim();


    if (customerName === "") {

        alert(
            "PLEASE ENTER CUSTOMER NAME"
        );


        name.dataset.valid = "false";

        name.focus();

        return;

    }


    fetch(
        "newcamacc?checkCustomerName=" +
        encodeURIComponent(customerName)
    )

    .then(function(response) {

        return response.text();

    })

    .then(function(result) {

        result = result.trim();


        if (
            result ===
            "CUSTOMER_ALREADY_HAS_AN_ACCOUNT"
        ) {

            alert(
                "CUSTOMER ALREADY HAS AN ACCOUNT"
            );


            name.dataset.valid = "false";

            name.focus();

            name.select();

            return;

        }


        if (result === "AVAILABLE") {

            name.dataset.valid = "true";


            const introducer =
                document.getElementById(
                    "introducer_no"
                );


            if (introducer) {

                introducer.focus();

            }


            return;

        }


        alert(
            "CUSTOMER NAME CHECK FAILED\n\n" +
            "SERVER RESPONSE : " +
            result
        );


        name.dataset.valid = "false";

    })

    .catch(function(error) {

        console.error(error);


        alert(
            "ERROR WHILE CHECKING CUSTOMER NAME"
        );


        name.dataset.valid = "false";

    });

}


// =============================================================
// CUSTOMER ID + NAME TAB EVENTS
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const cid =
            document.getElementById("cid");

        const name =
            document.getElementById("full-name");


        if (cid) {

            cid.dataset.valid = "false";


            cid.addEventListener(
                "input",
                function() {

                    cid.dataset.valid = "false";

                }
            );


            cid.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Tab") {

                        event.preventDefault();

                        checkCustomerId();

                    }

                }
            );

        }


        if (name) {

            name.dataset.valid = "false";


            name.addEventListener(
                "input",
                function() {

                    name.value =
                        name.value.toUpperCase();

                    name.dataset.valid = "false";

                }
            );


            name.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Tab") {

                        event.preventDefault();

                        checkCustomerName();

                    }

                }
            );

        }


        showStep(1);

    }
);


// =============================================================
// STEP 1 VALIDATION
// =============================================================

function validateStep1AndNext() {

    const step1 =
        document.getElementById("step1");


    if (!step1) {

        return;

    }


    const fields =
        step1.querySelectorAll(
            "input, select, textarea"
        );


    for (const field of fields) {

        if (field.disabled) {

            continue;

        }


        if (
            field.hasAttribute("required") &&
            !field.value.trim()
        ) {

            field.reportValidity();

            field.focus();

            return;

        }

    }


    const cid =
        document.getElementById("cid");

    const name =
        document.getElementById("full-name");


    if (
        !cid ||
        cid.dataset.valid !== "true"
    ) {

        alert(
            "PLEASE CHECK CUSTOMER ID FIRST"
        );


        if (cid) {

            cid.focus();

        }


        return;

    }


    if (
        !name ||
        name.dataset.valid !== "true"
    ) {

        alert(
            "PLEASE CHECK CUSTOMER NAME FIRST"
        );


        if (name) {

            name.focus();

        }


        return;

    }


    showStep(2);

}


// =============================================================
// INTRODUCER ID - AUTOMATIC CHECK
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const introducerId =
            document.getElementById("introducer_no");

        const introducerName =
            document.getElementById("introducer_name");


        if (!introducerId || !introducerName) {

            return;

        }


        let introducerTimer = null;

        let requestNumber = 0;


        introducerId.addEventListener(
            "input",
            function() {

                const typedId =
                    introducerId.value.trim();


                introducerName.value = "";


                if (introducerTimer) {

                    clearTimeout(
                        introducerTimer
                    );

                }


                if (typedId === "") {

                    return;

                }


                requestNumber++;


                const currentRequest =
                    requestNumber;


                introducerTimer =
                    setTimeout(
                        function() {

                            fetch(
                                "newcamacc?checkIntroducer=" +
                                encodeURIComponent(
                                    typedId
                                )
                            )

                            .then(
                                function(response) {

                                    return response.text();

                                }
                            )

                            .then(
                                function(result) {

                                    if (
                                        currentRequest !==
                                        requestNumber
                                    ) {

                                        return;

                                    }


                                    result =
                                        result.trim();


                                    console.log(
                                        "Introducer response:",
                                        result
                                    );


                                    if (
                                        result ===
                                        "NOT_FOUND"
                                    ) {

                                        introducerName.value =
                                            "";

                                        alert(
                                            "INTRODUCER NOT FOUND"
                                        );

                                        return;

                                    }


                                    introducerName.value =
                                        result;

                                }
                            )

                            .catch(
                                function(error) {

                                    console.error(
                                        error
                                    );

                                    introducerName.value =
                                        "";

                                }
                            );

                        },
                        300
                    );

            }
        );

    }
);


// =============================================================
// ADD KYC
// =============================================================

function addKyc() {

    const kycSelect =
        document.getElementById("kyc");


    if (!kycSelect) {

        return;

    }


    const kycId =
        kycSelect.value.trim();


    const selectedOption =
        kycSelect.options[
            kycSelect.selectedIndex
        ];


    const kycName =
        selectedOption
            ? selectedOption.text.trim()
            : "";


    const numberElement =
        document.getElementById(
            "kyc-number"
        );


    const issueDateElement =
        document.getElementById(
            "issue-date"
        );


    const expDateElement =
        document.getElementById(
            "expiry-date"
        );


    const fileInput =
        document.getElementById(
            "kycImage"
        );


    const number =
        numberElement
            ? numberElement.value.trim()
            : "";


    const issueDate =
        issueDateElement
            ? issueDateElement.value
            : "";


    const expDate =
        expDateElement
            ? expDateElement.value
            : "";


    if (!kycId) {

        alert(
            "PLEASE SELECT KYC TYPE"
        );

        return;

    }


    if (!number) {

        alert(
            "PLEASE ENTER KYC NUMBER"
        );


        if (numberElement) {

            numberElement.focus();

        }


        return;

    }


    const duplicate =
        kycList.some(
            function(item) {

                return item.kycid === kycId;

            }
        );


    if (duplicate) {

        alert(
            "THIS KYC TYPE IS ALREADY ADDED"
        );

        return;

    }


    let file = null;


    if (
        fileInput &&
        fileInput.files &&
        fileInput.files.length > 0
    ) {

        file =
            fileInput.files[0];

    }


    const kycObject = {

        kycid: kycId,

        kycName: kycName,

        kycNumber: number,

        issueDate: issueDate,

        expdat: expDate,

        image: file

    };


    kycList.push(
        kycObject
    );


    renderKycTable();


    kycSelect.value = "";


    if (numberElement) {

        numberElement.value = "";

    }


    if (issueDateElement) {

        issueDateElement.value = "";

    }


    if (expDateElement) {

        expDateElement.value = "";

    }


    if (fileInput) {

        fileInput.value = "";

    }


    const kycFileName =
        document.getElementById(
            "kycFileName"
        );


    const kycIcon =
        document.getElementById(
            "kycIcon"
        );


    if (kycFileName) {

        kycFileName.textContent =
            "Upload KYC Document";

    }


    if (kycIcon) {

        kycIcon.textContent =
            "📄";

    }

}


// =============================================================
// RENDER KYC TABLE
// =============================================================

function renderKycTable() {

    const tbody =
        document.getElementById(
            "kycBody"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    kycList.forEach(
        function(item, index) {

            const row =
                document.createElement("tr");


            const typeCell =
                document.createElement("td");

            typeCell.textContent =
                item.kycName;

            row.appendChild(
                typeCell
            );


            const numberCell =
                document.createElement("td");

            numberCell.textContent =
                item.kycNumber;

            row.appendChild(
                numberCell
            );


            const issueCell =
                document.createElement("td");

            issueCell.textContent =
                item.issueDate || "-";

            row.appendChild(
                issueCell
            );


            const expCell =
                document.createElement("td");

            expCell.textContent =
                item.expdat || "-";

            row.appendChild(
                expCell
            );


            const fileCell =
                document.createElement("td");


            if (item.image) {

                fileCell.textContent =
                    item.image.name;

            }

            else {

                fileCell.textContent =
                    "No File";

            }


            row.appendChild(
                fileCell
            );


            const actionCell =
                document.createElement("td");


            const deleteButton =
                document.createElement(
                    "button"
                );


            deleteButton.type =
                "button";


            deleteButton.className =
                "btn delete-kyc";


            deleteButton.textContent =
                "Delete";


            deleteButton.addEventListener(
                "click",
                function() {

                    kycList.splice(
                        index,
                        1
                    );


                    renderKycTable();

                }
            );


            actionCell.appendChild(
                deleteButton
            );


            row.appendChild(
                actionCell
            );


            tbody.appendChild(
                row
            );

        }
    );

}


// =============================================================
// DIRECTOR - ADD
// =============================================================

function addDirector() {

    const nameElement =
        document.getElementById(
            "director-name-en"
        );

    const nameKnElement =
        document.getElementById(
            "director-name-kn"
        );

    const placeSelect =
        document.getElementById(
            "place"
        );

    const qualificationSelect =
        document.getElementById(
            "qualification"
        );

    const genderSelect =
        document.getElementById(
            "gender"
        );

    const casteSelect =
        document.getElementById(
            "caste"
        );

    const subcasteSelect =
        document.getElementById(
            "subcaste"
        );

    const occupationSelect =
        document.getElementById(
            "occupation"
        );

    const dobElement =
        document.getElementById(
            "dob"
        );

    const designationSelect =
        document.getElementById(
            "designation"
        );

    const transportElement =
        document.getElementById(
            "transport-permission"
        );

    const photoInput =
        document.getElementById(
            "director-photo"
        );

    const signatureInput =
        document.getElementById(
            "director-sign"
        );


    const name =
        nameElement
            ? nameElement.value.trim()
            : "";


    const nameKn =
        nameKnElement
            ? nameKnElement.value.trim()
            : "";


    const place =
        placeSelect
            ? placeSelect.value.trim()
            : "";


    const placeName =
        placeSelect &&
        placeSelect.selectedIndex >= 0
            ? placeSelect.options[
                placeSelect.selectedIndex
              ].text.trim()
            : "";


    const qualification =
        qualificationSelect
            ? qualificationSelect.value.trim()
            : "";


    const qualificationName =
        qualificationSelect &&
        qualificationSelect.selectedIndex >= 0
            ? qualificationSelect.options[
                qualificationSelect.selectedIndex
              ].text.trim()
            : "";


    const gender =
        genderSelect
            ? genderSelect.value.trim()
            : "";


    const genderName =
        genderSelect &&
        genderSelect.selectedIndex >= 0
            ? genderSelect.options[
                genderSelect.selectedIndex
              ].text.trim()
            : "";


    const caste =
        casteSelect
            ? casteSelect.value.trim()
            : "";


    const casteName =
        casteSelect &&
        casteSelect.selectedIndex >= 0
            ? casteSelect.options[
                casteSelect.selectedIndex
              ].text.trim()
            : "";


    const subcaste =
        subcasteSelect
            ? subcasteSelect.value.trim()
            : "";


    const subcasteName =
        subcasteSelect &&
        subcasteSelect.selectedIndex >= 0
            ? subcasteSelect.options[
                subcasteSelect.selectedIndex
              ].text.trim()
            : "";


    const occupation =
        occupationSelect
            ? occupationSelect.value.trim()
            : "";


    const occupationName =
        occupationSelect &&
        occupationSelect.selectedIndex >= 0
            ? occupationSelect.options[
                occupationSelect.selectedIndex
              ].text.trim()
            : "";


    const dob =
        dobElement
            ? dobElement.value
            : "";


    const designation =
        designationSelect
            ? designationSelect.value.trim()
            : "";


    const designationName =
        designationSelect &&
        designationSelect.selectedIndex >= 0
            ? designationSelect.options[
                designationSelect.selectedIndex
              ].text.trim()
            : "";


    const transport =
        transportElement
            ? transportElement.checked
            : false;


    const photo =
        photoInput &&
        photoInput.files &&
        photoInput.files.length > 0
            ? photoInput.files[0]
            : null;


    const signature =
        signatureInput &&
        signatureInput.files &&
        signatureInput.files.length > 0
            ? signatureInput.files[0]
            : null;


    // =========================================================
    // VALIDATION
    // =========================================================

    if (!name) {

        alert(
            "PLEASE ENTER DIRECTOR NAME"
        );

        if (nameElement) {

            nameElement.focus();

        }

        return;

    }


    if (!place) {

        alert(
            "PLEASE SELECT PLACE"
        );

        if (placeSelect) {

            placeSelect.focus();

        }

        return;

    }


    if (!qualification) {

        alert(
            "PLEASE SELECT QUALIFICATION"
        );

        if (qualificationSelect) {

            qualificationSelect.focus();

        }

        return;

    }


    if (!gender) {

        alert(
            "PLEASE SELECT GENDER"
        );

        if (genderSelect) {

            genderSelect.focus();

        }

        return;

    }


    if (!caste) {

        alert(
            "PLEASE SELECT CASTE"
        );

        if (casteSelect) {

            casteSelect.focus();

        }

        return;

    }


    if (!subcaste) {

        alert(
            "PLEASE SELECT SUB CASTE"
        );

        if (subcasteSelect) {

            subcasteSelect.focus();

        }

        return;

    }


    if (!occupation) {

        alert(
            "PLEASE SELECT OCCUPATION"
        );

        if (occupationSelect) {

            occupationSelect.focus();

        }

        return;

    }


    if (!dob) {

        alert(
            "PLEASE SELECT DATE OF BIRTH"
        );

        if (dobElement) {

            dobElement.focus();

        }

        return;

    }


    if (!designation) {

        alert(
            "PLEASE SELECT DESIGNATION"
        );

        if (designationSelect) {

            designationSelect.focus();

        }

        return;

    }


/*    if (!photo) {

        alert(
            "PLEASE UPLOAD DIRECTOR PHOTO"
        );

        return;

    }


    if (!signature) {

        alert(
            "PLEASE UPLOAD DIRECTOR SIGNATURE"
        );

        return;

    }*/


    // =========================================================
    // DUPLICATE DIRECTOR
    // =========================================================

    const duplicate =
        directorList.some(
            function(item) {

                return (
                    item.name.toUpperCase() ===
                    name.toUpperCase()
                );

            }
        );


    if (duplicate) {

        alert(
            "THIS DIRECTOR IS ALREADY ADDED"
        );

        return;

    }


    // =========================================================
    // DIRECTOR OBJECT
    // =========================================================

    const directorObject = {

        name: name,

        nameKn: nameKn,

        place: place,

        placeName: placeName,

        qualification: qualification,

        qualificationName:
            qualificationName,

        gender: gender,

        genderName: genderName,

        caste: caste,

        casteName: casteName,

        subcaste: subcaste,

        subcasteName: subcasteName,

        occupation: occupation,

        occupationName: occupationName,

        dob: dob,

        designation: designation,

        designationName:
            designationName,

        transport: transport,

        photo: photo,

        signature: signature

    };


    directorList.push(
        directorObject
    );


    renderDirectorTable();


    // =========================================================
    // CLEAR FIELDS
    // =========================================================

    if (nameElement) {

        nameElement.value = "";

    }


    if (nameKnElement) {

        nameKnElement.value = "";

    }


    if (placeSelect) {

        placeSelect.value = "";

    }


    if (qualificationSelect) {

        qualificationSelect.value = "";

    }


    if (genderSelect) {

        genderSelect.value = "";

    }


    if (casteSelect) {

        casteSelect.value = "";

    }


    if (subcasteSelect) {

        subcasteSelect.value = "";

    }


    if (occupationSelect) {

        occupationSelect.value = "";

    }


    if (dobElement) {

        dobElement.value = "";

    }


    if (designationSelect) {

        designationSelect.value = "";

    }


    if (transportElement) {

        transportElement.checked = false;

    }


    if (photoInput) {

        photoInput.value = "";

    }


    if (signatureInput) {

        signatureInput.value = "";

    }


    const directorPhotoName =
        document.getElementById(
            "directorPhotoName"
        );


    const directorPhotoIcon =
        document.getElementById(
            "directorPhotoIcon"
        );


    if (directorPhotoName) {

        directorPhotoName.textContent =
            "Upload Director Photo";

    }


    if (directorPhotoIcon) {

        directorPhotoIcon.textContent =
            "📷";

    }


    const directorSignName =
        document.getElementById(
            "directorSignName"
        );


    const directorSignIcon =
        document.getElementById(
            "directorSignIcon"
        );


    if (directorSignName) {

        directorSignName.textContent =
            "Upload Signature";

    }


    if (directorSignIcon) {

        directorSignIcon.textContent =
            "✍️";

    }

}


// =============================================================
// RENDER DIRECTOR TABLE
// =============================================================

function renderDirectorTable() {

    const tbody =
        document.getElementById(
            "directorBody"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    directorList.forEach(
        function(item, index) {

            const row =
                document.createElement("tr");


            const nameCell =
                document.createElement("td");

            nameCell.textContent =
                item.name || "-";

            row.appendChild(
                nameCell
            );


            const nameKnCell =
                document.createElement("td");

            nameKnCell.textContent =
                item.nameKn || "-";

            row.appendChild(
                nameKnCell
            );


            const placeCell =
                document.createElement("td");

            placeCell.textContent =
                item.placeName || "-";

            row.appendChild(
                placeCell
            );


            const qualificationCell =
                document.createElement("td");

            qualificationCell.textContent =
                item.qualificationName || "-";

            row.appendChild(
                qualificationCell
            );


            const genderCell =
                document.createElement("td");

            genderCell.textContent =
                item.genderName || "-";

            row.appendChild(
                genderCell
            );


            const casteCell =
                document.createElement("td");

            casteCell.textContent =
                item.casteName || "-";

            row.appendChild(
                casteCell
            );


            const subcasteCell =
                document.createElement("td");

            subcasteCell.textContent =
                item.subcasteName || "-";

            row.appendChild(
                subcasteCell
            );


            const occupationCell =
                document.createElement("td");

            occupationCell.textContent =
                item.occupationName || "-";

            row.appendChild(
                occupationCell
            );


            const dobCell =
                document.createElement("td");

            dobCell.textContent =
                item.dob || "-";

            row.appendChild(
                dobCell
            );


            const designationCell =
                document.createElement("td");

            designationCell.textContent =
                item.designationName || "-";

            row.appendChild(
                designationCell
            );


            const transportCell =
                document.createElement("td");

            transportCell.textContent =
                item.transport
                    ? "YES"
                    : "NO";

            row.appendChild(
                transportCell
            );


            const photoCell =
                document.createElement("td");

            photoCell.textContent =
                item.photo
                    ? item.photo.name
                    : "No File";

            row.appendChild(
                photoCell
            );


            const signatureCell =
                document.createElement("td");

            signatureCell.textContent =
                item.signature
                    ? item.signature.name
                    : "No File";

            row.appendChild(
                signatureCell
            );


            const actionCell =
                document.createElement("td");


            const deleteButton =
                document.createElement(
                    "button"
                );


            deleteButton.type =
                "button";


            deleteButton.className =
                "btn delete-btn";


            deleteButton.textContent =
                "Remove";


            deleteButton.onclick =
                function() {

                    removeDirector(index);

                };


            actionCell.appendChild(
                deleteButton
            );


            row.appendChild(
                actionCell
            );


            tbody.appendChild(
                row
            );

        }
    );

}


// =============================================================
// REMOVE DIRECTOR
// =============================================================

function removeDirector(index) {

    directorList.splice(
        index,
        1
    );


    renderDirectorTable();

}


// =============================================================
// PREPARE SUBMIT
// =============================================================

function prepareSubmit() {

    const form =
        document.getElementById(
            "customerForm"
        );


    if (!form) {

        return false;

    }


    if (kycList.length === 0) {

        alert(
            "PLEASE ADD AT LEAST ONE KYC"
        );

        showStep(2);

        return false;

    }


    if (directorList.length === 0) {

        alert(
            "PLEASE ADD AT LEAST ONE DIRECTOR"
        );

        showStep(3);

        return false;

    }


    // =========================================================
    // KYC JSON
    // =========================================================

    const kycData =
        document.getElementById(
            "kycData"
        );


    if (kycData) {

        kycData.value =
            JSON.stringify(
                kycList.map(
                    function(item) {

                        return {

                            kycid: item.kycid,

                            kycName: item.kycName,

                            kycNumber:
                                item.kycNumber,

                            issueDate:
                                item.issueDate,

                            expdat:
                                item.expdat

                        };

                    }
                )
            );

    }


    // =========================================================
    // DIRECTOR JSON
    // =========================================================

    const directorData =
        document.getElementById(
            "directorData"
        );


    if (directorData) {

        directorData.value =
            JSON.stringify(
                directorList.map(
                    function(item) {

                        return {

                            name: item.name,

                            nameKn: item.nameKn,

                            place: item.place,

                            placeName:
                                item.placeName,

                            qualification:
                                item.qualification,

                            qualificationName:
                                item.qualificationName,

                            gender:
                                item.gender,

                            genderName:
                                item.genderName,

                            caste:
                                item.caste,

                            casteName:
                                item.casteName,

                            subcaste:
                                item.subcaste,

                            subcasteName:
                                item.subcasteName,

                            occupation:
                                item.occupation,

                            occupationName:
                                item.occupationName,

                            dob:
                                item.dob,

                            designation:
                                item.designation,

                            designationName:
                                item.designationName,

                            transport:
                                item.transport

                        };

                    }
                )
            );

    }


    // =========================================================
    // REMOVE OLD GENERATED FILE INPUTS
    // =========================================================

    form
        .querySelectorAll(
            ".generated-file-input"
        )
        .forEach(
            function(input) {

                input.remove();

            }
        );


    // =========================================================
    // KYC FILES
    // =========================================================

    kycList.forEach(
        function(item) {

            if (!item.image) {

                return;

            }


            const dataTransfer =
                new DataTransfer();


            dataTransfer.items.add(
                item.image
            );


            const input =
                document.createElement(
                    "input"
                );


            input.type =
                "file";

            input.name =
                "kycImage";

            input.className =
                "generated-file-input";

            input.style.display =
                "none";

            input.files =
                dataTransfer.files;


            form.appendChild(
                input
            );

        }
    );


	directorList.forEach(function(item) {

	    // PHOTO IS OPTIONAL
	    if (item.photo) {

	        const dataTransfer = new DataTransfer();

	        dataTransfer.items.add(item.photo);

	        const input = document.createElement("input");

	        input.type = "file";
	        input.name = "directorPhoto";
	        input.className = "generated-file-input";
	        input.style.display = "none";
	        input.files = dataTransfer.files;

	        form.appendChild(input);
	    }
	});


	// =========================================================
	// DIRECTOR SIGNATURE FILES
	// =============================================================

	directorList.forEach(function(item) {

	    // SIGNATURE IS OPTIONAL
	    if (item.signature) {

	        const dataTransfer = new DataTransfer();

	        dataTransfer.items.add(item.signature);

	        const input = document.createElement("input");

	        input.type = "file";
	        input.name = "directorSignature";
	        input.className = "generated-file-input";
	        input.style.display = "none";
	        input.files = dataTransfer.files;

	        form.appendChild(input);
	    }
	});

	return true;

// =============================================================
// KYC FILE DISPLAY
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const fileInput =
            document.getElementById(
                "kycImage"
            );


        const fileName =
            document.getElementById(
                "kycFileName"
            );


        if (!fileInput) {

            return;

        }


        fileInput.addEventListener(
            "change",
            function() {

                if (
                    fileInput.files &&
                    fileInput.files.length > 0
                ) {

                    const file =
                        fileInput.files[0];


                    if (fileName) {

                        fileName.textContent =
                            file.name;

                    }

                }

                else {

                    if (fileName) {

                        fileName.textContent =
                            "Upload KYC Document";

                    }

                }

            }
        );

    }
);


// =============================================================
// DIRECTOR PHOTO DISPLAY
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const photoInput =
            document.getElementById(
                "director-photo"
            );


        const photoName =
            document.getElementById(
                "directorPhotoName"
            );


        if (!photoInput) {

            return;

        }


        photoInput.addEventListener(
            "change",
            function() {

                if (
                    photoInput.files &&
                    photoInput.files.length > 0
                ) {

                    if (photoName) {

                        photoName.textContent =
                            photoInput.files[0].name;

                    }

                }

                else {

                    if (photoName) {

                        photoName.textContent =
                            "Upload Director Photo";

                    }

                }

            }
        );

    }
);


// =============================================================
// DIRECTOR SIGNATURE DISPLAY
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const signInput =
            document.getElementById(
                "director-sign"
            );


        const signName =
            document.getElementById(
                "directorSignName"
            );


        if (!signInput) {

            return;

        }


        signInput.addEventListener(
            "change",
            function() {

                if (
                    signInput.files &&
                    signInput.files.length > 0
                ) {

                    if (signName) {

                        signName.textContent =
                            signInput.files[0].name;

                    }

                }

                else {

                    if (signName) {

                        signName.textContent =
                            "Upload Signature";

                    }

                }

            }
        );

    }
);


// =============================================================
// KYC FILE SIZE CHECK
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const kycImage =
            document.getElementById(
                "kycImage"
            );


        if (!kycImage) {

            return;

        }


        kycImage.addEventListener(
            "change",
            function() {

                if (
                    !kycImage.files ||
                    kycImage.files.length === 0
                ) {

                    return;

                }


                const file =
                    kycImage.files[0];


                const maxSize =
                    2 * 1024 * 1024;


                if (file.size > maxSize) {

                    alert(
                        "KYC FILE SIZE MUST BE LESS THAN 2MB"
                    );


                    kycImage.value = "";


                    const fileName =
                        document.getElementById(
                            "kycFileName"
                        );


                    if (fileName) {

                        fileName.textContent =
                            "Upload KYC Document";

                    }


                    return;

                }


                const fileName =
                    document.getElementById(
                        "kycFileName"
                    );


                if (fileName) {

                    fileName.textContent =
                        file.name;

                }

            }
        );

    }
);


// =============================================================
// DIRECTOR PHOTO SIZE CHECK
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const photoInput =
            document.getElementById(
                "director-photo"
            );


        if (!photoInput) {

            return;

        }


        photoInput.addEventListener(
            "change",
            function() {

                if (
                    !photoInput.files ||
                    photoInput.files.length === 0
                ) {

                    return;

                }


                const file =
                    photoInput.files[0];


                const maxSize =
                    2 * 1024 * 1024;


                if (file.size > maxSize) {

                    alert(
                        "DIRECTOR PHOTO SIZE MUST BE LESS THAN 2MB"
                    );


                    photoInput.value = "";


                    return;

                }

            }
        );

    }
);
}


// =============================================================
// DIRECTOR SIGNATURE SIZE CHECK
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const signInput =
            document.getElementById(
                "director-sign"
            );


        if (!signInput) {

            return;

        }


        signInput.addEventListener(
            "change",
            function() {

                if (
                    !signInput.files ||
                    signInput.files.length === 0
                ) {

                    return;

                }


                const file =
                    signInput.files[0];


                const maxSize =
                    2 * 1024 * 1024;


                if (file.size > maxSize) {

                    alert(
                        "SIGNATURE MUST BE LESS THAN 2MB"
                    );


                    signInput.value = "";


                    return;

                }

            }
        );

    }
);