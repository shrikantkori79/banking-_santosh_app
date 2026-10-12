// ============================================================
// CC INTEREST MASTER JAVASCRIPT
// ============================================================

let selectedSlabs = [];


// ============================================================
// LOAD DEPOSIT
// ============================================================

function loadDeposit() {

    const depositSelect =
        document.getElementById("depositId");

    const selectedOption =
        depositSelect.options[
            depositSelect.selectedIndex
        ];

    // Clear previous slab data
    selectedSlabs = [];

    clearSlabDetails();

    renderSlabTable();

    // Clear right side details
    document.getElementById("loanDeposit").value = "";
    document.getElementById("loanInterest").value = "";
    document.getElementById("panInterest").value = "";
    document.getElementById("autoRenewal").checked = false;
    document.getElementById("interestAfterMaturity").value = "";
    document.getElementById("maturityDays").value = "";
    document.getElementById("deduction").value = "";

    // No deposit selected
    if (!depositSelect.value) {
        return;
    }

    // ========================================================
    // LOAD DEPOSIT DETAILS
    // ========================================================

    document.getElementById("depositNameLocal").value =
        selectedOption.dataset.local || "";

    document.getElementById("loanDeposit").value =
        selectedOption.dataset.loanDeposit || "";

    document.getElementById("loanInterest").value =
        selectedOption.dataset.loanInterest || "";

    document.getElementById("panInterest").value =
        selectedOption.dataset.panInterest || "";

    document.getElementById("autoRenewal").checked =
        selectedOption.dataset.autoRenewal === "true";

    document.getElementById("interestAfterMaturity").value =
        selectedOption.dataset.afterMaturity || "";

    document.getElementById("maturityDays").value =
        selectedOption.dataset.afterMaturityDays || "";

    document.getElementById("deduction").value =
        selectedOption.dataset.deduction || "";


    // ========================================================
    // LOAD SLABS FOR SELECTED DEPOSIT
    // ========================================================

    loadSlabs();
}


// ============================================================
// LOAD SLABS
// ============================================================

function loadSlabs() {

    const depositSelect =
        document.getElementById("depositId");

    const slabSelect =
        document.getElementById("slabName");

    const depositId =
        depositSelect.value;

    // Clear slab dropdown
    slabSelect.innerHTML = "";

    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "Select Slab";

    slabSelect.appendChild(defaultOption);

    clearSlabDetails();

    if (!depositId) {
        return;
    }


    // ========================================================
    // FILTER SLABS BY DEPOSIT ID
    // ========================================================

    allSlabs
        .filter(function (slab) {

            return String(slab.depid) ===
                   String(depositId);

        })
        .forEach(function (slab) {

            const option =
                document.createElement("option");

            option.value =
                slab.id;

            option.textContent =
                slab.slanam;


            // =================================================
            // STORE SLAB DATA
            // =================================================

            option.dataset.slanam =
                slab.slanam;

            option.dataset.mon =
                slab.mon;

            option.dataset.day =
                slab.day;

            option.dataset.nooftimofdep =
                slab.nooftimofdep;


            slabSelect.appendChild(option);
        });
}


// ============================================================
// LOAD SELECTED SLAB DETAILS
// ============================================================

function loadSlabDetails() {

    const slabSelect =
        document.getElementById("slabName");

    const selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];


    // No slab selected
    if (!slabSelect.value ||
        !selectedOption) {

        clearSlabDetails();

        return;
    }


    // ========================================================
    // GET SLAB DATA
    // ========================================================

    const mon =
        selectedOption.dataset.mon;

    const day =
        selectedOption.dataset.day;

    const nooftimofdep =
        selectedOption.dataset.nooftimofdep;


    // ========================================================
    // DISPLAY MONTH
    // ========================================================

    document.getElementById("slabMonth").value =
        mon || "";


    // ========================================================
    // DISPLAY DAY
    // ========================================================

    document.getElementById("slabDay").value =
        day || "";


    // ========================================================
    // DISPLAY NO. OF TIMES OF DEPOSIT
    // ========================================================

    document.getElementById("noOfTimes").value =
        nooftimofdep || "";
}


// ============================================================
// CLEAR SLAB DETAILS
// ============================================================

function clearSlabDetails() {

    document.getElementById("slabMonth").value = "";

    document.getElementById("slabDay").value = "";

    document.getElementById("noOfTimes").value = "";

    document.getElementById("slabInterest").value = "";

    const slabSelect =
        document.getElementById("slabName");

    if (slabSelect) {
        slabSelect.value = "";
    }
}


// ============================================================
// ADD SLAB
// ============================================================

function addSlab() {

    const depositSelect =
        document.getElementById("depositId");

    const slabSelect =
        document.getElementById("slabName");

    const interestInput =
        document.getElementById("slabInterest");


    // ========================================================
    // VALIDATE DEPOSIT
    // ========================================================

    if (!depositSelect.value) {

        alert("Please select Deposit Name.");

        return;
    }


    // ========================================================
    // VALIDATE SLAB
    // ========================================================

    if (!slabSelect.value) {

        alert("Please select Slab Name.");

        return;
    }


    // ========================================================
    // VALIDATE INTEREST
    // ========================================================

    if (!interestInput.value ||
        interestInput.value.trim() === "") {

        alert("Please enter Interest %.");

        interestInput.focus();

        return;
    }


    // ========================================================
    // GET SELECTED OPTION
    // ========================================================

    const selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];


    const slaid =
        slabSelect.value;

    const slanam =
        selectedOption.dataset.slanam;

    const mon =
        parseInt(
            selectedOption.dataset.mon,
            10
        );

    const day =
        parseInt(
            selectedOption.dataset.day,
            10
        );

    const nooftimofdep =
        parseInt(
            selectedOption.dataset.nooftimofdep,
            10
        );

    const interest =
        parseFloat(
            interestInput.value
        );


    // ========================================================
    // VALIDATE NO. OF TIMES
    // ========================================================

    if (isNaN(nooftimofdep) ||
        nooftimofdep < 1) {

        alert(
            "No. of Times of Deposit is not available for this slab."
        );

        return;
    }


    // ========================================================
    // VALIDATE INTEREST NUMBER
    // ========================================================

    if (isNaN(interest) ||
        interest < 0) {

        alert("Please enter a valid Interest %.");

        interestInput.focus();

        return;
    }


    // ========================================================
    // CHECK DUPLICATE SLAB
    // ========================================================

    const duplicate =
        selectedSlabs.some(function (slab) {

            return String(slab.slaid) ===
                   String(slaid);

        });


    if (duplicate) {

        alert(
            "This slab has already been added."
        );

        return;
    }


    // ========================================================
    // CREATE SLAB OBJECT
    // ========================================================

    const slab = {

        slaid: slaid,

        slanam: slanam,

        mon: mon,

        day: day,

        // IMPORTANT
        nooftimofdep: nooftimofdep,

        interest: interest
    };


    // ========================================================
    // ADD TO ARRAY
    // ========================================================

    selectedSlabs.push(slab);


    // ========================================================
    // DISPLAY TABLE
    // ========================================================

    renderSlabTable();


    // ========================================================
    // CLEAR CURRENT SLAB INPUT
    // ========================================================

    slabSelect.value = "";

    document.getElementById("slabMonth").value = "";

    document.getElementById("slabDay").value = "";

    document.getElementById("noOfTimes").value = "";

    interestInput.value = "";
}


// ============================================================
// RENDER SLAB TABLE
// ============================================================

function renderSlabTable() {

    const tbody =
        document.getElementById("slabTableBody");

    tbody.innerHTML = "";


    // ========================================================
    // NO RECORDS
    // ========================================================

    if (selectedSlabs.length === 0) {

        const row =
            document.createElement("tr");

        row.id = "emptySlabRow";

        const cell =
            document.createElement("td");

        cell.colSpan = 6;

        cell.className = "empty-row";

        cell.textContent =
            "No records found";

        row.appendChild(cell);

        tbody.appendChild(row);

        return;
    }


    // ========================================================
    // DISPLAY EACH SLAB
    // ========================================================

    selectedSlabs.forEach(function (slab, index) {

        const row =
            document.createElement("tr");


        // ====================================================
        // MONTH
        // ====================================================

        const monthCell =
            document.createElement("td");

        monthCell.textContent =
            slab.mon;

        row.appendChild(monthCell);


        // ====================================================
        // DAY
        // ====================================================

        const dayCell =
            document.createElement("td");

        dayCell.textContent =
            slab.day;

        row.appendChild(dayCell);


        // ====================================================
        // NO. OF TIMES OF DEPOSIT
        // ====================================================

        const noOfTimesCell =
            document.createElement("td");

        noOfTimesCell.textContent =
            slab.nooftimofdep;

        row.appendChild(noOfTimesCell);


        // ====================================================
        // INTEREST
        // ====================================================

        const interestCell =
            document.createElement("td");

        interestCell.textContent =
            slab.interest;

        row.appendChild(interestCell);


        // ====================================================
        // SLAB NAME
        // ====================================================

        const slabNameCell =
            document.createElement("td");

        slabNameCell.textContent =
            slab.slanam;

        row.appendChild(slabNameCell);


        // ====================================================
        // ACTION
        // ====================================================

        const actionCell =
            document.createElement("td");

        const deleteButton =
            document.createElement("button");

        deleteButton.type = "button";

        deleteButton.className = "btn delete";

        deleteButton.textContent = "Remove";


        deleteButton.onclick =
            function () {

                removeSlab(index);

            };


        actionCell.appendChild(
            deleteButton
        );

        row.appendChild(actionCell);


        // ====================================================
        // ADD ROW
        // ====================================================

        tbody.appendChild(row);

    });
}


// ============================================================
// REMOVE SLAB
// ============================================================

function removeSlab(index) {

    if (index < 0 ||
        index >= selectedSlabs.length) {

        return;
    }


    selectedSlabs.splice(
        index,
        1
    );


    renderSlabTable();
}


// ============================================================
// SAVE CC INTEREST
// ============================================================

function saveCCInterest() {

    // ========================================================
    // VALIDATE DEPOSIT
    // ========================================================

    const depositId =
        document.getElementById("depositId").value;

    if (!depositId) {

        alert("Please select Deposit Name.");

        return;
    }


    // ========================================================
    // VALIDATE DATE
    // ========================================================

    const interestDate =
        document.getElementById("interestDate").value;

    if (!interestDate) {

        alert(
            "Please select Interest Applicable Date."
        );

        return;
    }


    // ========================================================
    // VALIDATE SLABS
    // ========================================================

    if (selectedSlabs.length === 0) {

        alert(
            "Please add at least one slab."
        );

        return;
    }


    // ========================================================
    // CHECK NO. OF TIMES
    // ========================================================

    for (
        let i = 0;
        i < selectedSlabs.length;
        i++
    ) {

        if (
            isNaN(
                selectedSlabs[i].nooftimofdep
            ) ||
            selectedSlabs[i].nooftimofdep < 1
        ) {

            alert(
                "No. of Times of Deposit is missing for slab: " +
                selectedSlabs[i].slanam
            );

            return;
        }
    }


    // ========================================================
    // CREATE FORM
    // ========================================================

    const form =
        document.getElementById("masccintForm");


    // ========================================================
    // REMOVE OLD HIDDEN INPUTS
    // ========================================================

    const oldHiddenInputs =
        form.querySelectorAll(
            ".dynamic-hidden"
        );

    oldHiddenInputs.forEach(
        function (input) {

            input.remove();

        }
    );


    // ========================================================
    // DEPOSIT ID
    // ========================================================

    createHiddenInput(
        form,
        "depid",
        depositId
    );


    // ========================================================
    // INTEREST DATE
    // ========================================================

    createHiddenInput(
        form,
        "intdate",
        interestDate
    );


    // ========================================================
    // ADD EACH SLAB
    // ========================================================

    selectedSlabs.forEach(
        function (slab) {


            // ================================================
            // SLAB ID
            // ================================================

            createHiddenInput(
                form,
                "slaid",
                slab.slaid
            );


            // ================================================
            // SLAB NAME
            // ================================================

            createHiddenInput(
                form,
                "slanam",
                slab.slanam
            );


            // ================================================
            // MONTH
            // ================================================

            createHiddenInput(
                form,
                "mon",
                slab.mon
            );


            // ================================================
            // DAY
            // ================================================

            createHiddenInput(
                form,
                "day",
                slab.day
            );


            // ================================================
            // NO. OF TIMES OF DEPOSIT
            // ================================================

            createHiddenInput(
                form,
                "nooftimofdep",
                slab.nooftimofdep
            );


            // ================================================
            // INTEREST
            // ================================================

            createHiddenInput(
                form,
                "int",
                slab.interest
            );

        }
    );


    // ========================================================
    // DEBUG
    // ========================================================

    console.log(
        "Saving CC Interest..."
    );

    console.log(
        "Deposit ID:",
        depositId
    );

    console.log(
        "Interest Date:",
        interestDate
    );

    console.log(
        "Selected Slabs:",
        selectedSlabs
    );


    selectedSlabs.forEach(
        function (slab, index) {

            console.log(
                "SLAB " + (index + 1),
                "SLAID:",
                slab.slaid,
                "SLANAM:",
                slab.slanam,
                "MONTH:",
                slab.mon,
                "DAY:",
                slab.day,
                "NO OF TIMES:",
                slab.nooftimofdep,
                "INTEREST:",
                slab.interest
            );

        }
    );


    // ========================================================
    // SUBMIT
    // ========================================================

    form.onsubmit = null;

    form.submit();
}


// ============================================================
// CREATE HIDDEN INPUT
// ============================================================

function createHiddenInput(
    form,
    name,
    value
) {

    const input =
        document.createElement("input");

    input.type = "hidden";

    input.name = name;

    input.value = value;

    input.className =
        "dynamic-hidden";

    form.appendChild(input);
}


// ============================================================
// RESET
// ============================================================

function resetCCInterest() {

    // ========================================================
    // CLEAR SELECTED SLABS
    // ========================================================

    selectedSlabs = [];


    // ========================================================
    // RESET FORM
    // ========================================================

    const form =
        document.getElementById("masccintForm");

    if (form) {

        form.reset();

    }


    // ========================================================
    // CLEAR DEPOSIT LOCAL NAME
    // ========================================================

    document.getElementById(
        "depositNameLocal"
    ).value = "";


    // ========================================================
    // CLEAR SLAB DROPDOWN
    // ========================================================

    const slabSelect =
        document.getElementById("slabName");

    slabSelect.innerHTML = "";

    const option =
        document.createElement("option");

    option.value = "";

    option.textContent =
        "Select Slab";

    slabSelect.appendChild(option);


    // ========================================================
    // CLEAR SLAB DETAILS
    // ========================================================

    clearSlabDetails();


    // ========================================================
    // CLEAR RIGHT SIDE
    // ========================================================

    document.getElementById("loanDeposit").value = "";

    document.getElementById("loanInterest").value = "";

    document.getElementById("panInterest").value = "";

    document.getElementById("autoRenewal").checked = false;

    document.getElementById(
        "interestAfterMaturity"
    ).value = "";

    document.getElementById(
        "maturityDays"
    ).value = "";

    document.getElementById(
        "deduction"
    ).value = "";


    // ========================================================
    // RENDER EMPTY TABLE
    // ========================================================

    renderSlabTable();
}


// ============================================================
// EXIT
// ============================================================

function exitCCInterest() {

    window.history.back();
}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "CC Interest Master JS Loaded"
        );

        console.log(
            "CC Slabs:",
            allSlabs
        );

        renderSlabTable();

    }
);