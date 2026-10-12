// =========================================================
// MASTER TD JAVASCRIPT
// =========================================================

// =========================================================
// SELECTED SLABS
// =========================================================

let selectedSlabs = [];


// =========================================================
// LOAD DEPOSIT DETAILS
// =========================================================

function loadDeposit() {

    const deposit =
        document.getElementById("depositId");

    const selectedOption =
        deposit.options[deposit.selectedIndex];

    // Clear slab details
    clearSlabDetails();

    // Clear previous slabs
    selectedSlabs = [];

    renderSlabTable();

    if (!deposit.value) {

        clearDepositDetails();

        return;
    }

    // =====================================================
    // LOAD DEPOSIT LOCAL NAME
    // =====================================================

    document.getElementById(
        "depositNameLocal"
    ).value =
        selectedOption.dataset.local || "";


    // =====================================================
    // LOAD LOAN DETAILS
    // =====================================================

    document.getElementById(
        "loanDeposit"
    ).value =
        selectedOption.dataset.loanDeposit || "";


    document.getElementById(
        "loanInterest"
    ).value =
        selectedOption.dataset.loanInterest || "";


    document.getElementById(
        "panInterest"
    ).value =
        selectedOption.dataset.panInterest || "";


    // =====================================================
    // LOAD MATURITY DETAILS
    // =====================================================

    const autoRenewal =
        selectedOption.dataset.autoRenewal;

    const autoRenewalCheckbox =
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


    document.getElementById(
        "interestAfterMaturity"
    ).value =
        selectedOption.dataset.afterMaturity || "";


    document.getElementById(
        "maturityDays"
    ).value =
        selectedOption.dataset.afterMaturityDays || "";


    // =====================================================
    // LOAD PRE MATURITY DETAILS
    // =====================================================

    document.getElementById(
        "deduction"
    ).value =
        selectedOption.dataset.deduction || "";


    // =====================================================
    // LOAD SLABS FOR SELECTED DEPOSIT
    // =====================================================

    loadSlabs();
}


// =========================================================
// CLEAR DEPOSIT DETAILS
// =========================================================

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


// =========================================================
// LOAD SLABS BASED ON DEPOSIT
// =========================================================

function loadSlabs() {

    const depositId =
        document.getElementById(
            "depositId"
        ).value;

    const slabSelect =
        document.getElementById(
            "slabName"
        );

    // Clear old options
    slabSelect.innerHTML = "";

    // Default option
    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent =
        "Select slab name";

    slabSelect.appendChild(
        defaultOption
    );

    if (!depositId) {
        return;
    }

    // =====================================================
    // FILTER SLABS
    // =====================================================

    const depositSlabs =
        allSlabs.filter(function(slab) {

            return String(slab.depid) ===
                   String(depositId);
        });


    // =====================================================
    // ADD SLABS TO DROPDOWN
    // =====================================================

    depositSlabs.forEach(function(slab) {

        const option =
            document.createElement("option");

        option.value =
            slab.id;

        option.textContent =
            slab.slanam;


        // Store slab details
        option.dataset.slanam =
            slab.slanam;

        option.dataset.fromon =
            slab.fromon;

        option.dataset.froday =
            slab.froday;

        option.dataset.tomon =
            slab.tomon;

        option.dataset.today =
            slab.today;


        slabSelect.appendChild(
            option
        );
    });
}


// =========================================================
// LOAD SELECTED SLAB DETAILS
// =========================================================

function loadSlabDetails() {

    const slabSelect =
        document.getElementById(
            "slabName"
        );

    const selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];

    // Clear details first
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


    if (!slabSelect.value) {
        return;
    }


    // =====================================================
    // DISPLAY RANGE
    // =====================================================

    document.getElementById(
        "fromMonths"
    ).value =
        selectedOption.dataset.fromon;


    document.getElementById(
        "fromDays"
    ).value =
        selectedOption.dataset.froday;


    document.getElementById(
        "toMonths"
    ).value =
        selectedOption.dataset.tomon;


    document.getElementById(
        "toDays"
    ).value =
        selectedOption.dataset.today;
}


// =========================================================
// ADD SLAB
// =========================================================

function addSlab() {

    const depositId =
        document.getElementById(
            "depositId"
        ).value;

    const slabSelect =
        document.getElementById(
            "slabName"
        );

    const interest =
        document.getElementById(
            "slabInterest"
        ).value;


    // =====================================================
    // VALIDATE DEPOSIT
    // =====================================================

    if (!depositId) {

        alert(
            "Please select Deposit Name."
        );

        return;
    }


    // =====================================================
    // VALIDATE SLAB
    // =====================================================

    if (!slabSelect.value) {

        alert(
            "Please select Slab Name."
        );

        return;
    }


    // =====================================================
    // VALIDATE INTEREST
    // =====================================================

    if (
        interest === "" ||
        interest === null
    ) {

        alert(
            "Please enter Interest %."
        );

        return;
    }


    const interestValue =
        parseFloat(interest);


    if (isNaN(interestValue)) {

        alert(
            "Please enter a valid Interest %."
        );

        return;
    }


    // =====================================================
    // SELECTED SLAB
    // =====================================================

    const selectedOption =
        slabSelect.options[
            slabSelect.selectedIndex
        ];


    const slaid =
        parseInt(
            slabSelect.value
        );


    const slanam =
        selectedOption.dataset.slanam;


    const fromon =
        parseInt(
            selectedOption.dataset.fromon
        );


    const froday =
        parseInt(
            selectedOption.dataset.froday
        );


    const tomon =
        parseInt(
            selectedOption.dataset.tomon
        );


    const today =
        parseInt(
            selectedOption.dataset.today
        );


    // =====================================================
    // CHECK DUPLICATE SLAB
    // =====================================================

    const duplicate =
        selectedSlabs.some(function(item) {

            return String(item.slaid) ===
                   String(slaid);

        });


    if (duplicate) {

        alert(
            "This slab is already added."
        );

        return;
    }


    // =====================================================
    // ADD OBJECT
    // =====================================================

    const slabObject = {

        slaid: slaid,

        slanam: slanam,

        fromon: fromon,

        froday: froday,

        tomon: tomon,

        today: today,

        // FLOAT VALUE
        interest: interestValue
    };


    selectedSlabs.push(
        slabObject
    );


    // =====================================================
    // DISPLAY TABLE
    // =====================================================

    renderSlabTable();


    // =====================================================
    // CLEAR INPUTS
    // =====================================================

    slabSelect.value = "";

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
}


// =========================================================
// DISPLAY SLAB TABLE
// =========================================================

function renderSlabTable() {

    const tbody =
        document.getElementById(
            "slabTableBody"
        );

    tbody.innerHTML = "";


    // =====================================================
    // NO RECORDS
    // =====================================================

    if (
        selectedSlabs.length === 0
    ) {

        const row =
            document.createElement("tr");

        row.id =
            "emptySlabRow";

        row.innerHTML = `
            <td colspan="7"
                class="empty-row">
                No records found
            </td>
        `;

        tbody.appendChild(
            row
        );

        return;
    }


    // =====================================================
    // DISPLAY EACH SLAB
    // =====================================================

    selectedSlabs.forEach(
        function(item, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${item.fromon}
                </td>

                <td>
                    ${item.froday}
                </td>

                <td>
                    ${item.tomon}
                </td>

                <td>
                    ${item.today}
                </td>

                <td>
                    ${item.interest.toFixed(2)}
                </td>

                <td>
                    ${item.slanam}
                </td>

                <td>
                    <button
                        type="button"
                        class="btn reset"
                        onclick="removeSlab(${index})">
                        Remove
                    </button>
                </td>
            `;


            tbody.appendChild(
                row
            );
        }
    );
}


// =========================================================
// REMOVE SLAB
// =========================================================

function removeSlab(index) {

    if (
        index < 0 ||
        index >= selectedSlabs.length
    ) {
        return;
    }


    selectedSlabs.splice(
        index,
        1
    );


    renderSlabTable();
}


// =========================================================
// SAVE TD
// =========================================================

function saveTD() {

    const depositId =
        document.getElementById(
            "depositId"
        ).value;


    const interestDate =
        document.getElementById(
            "interestDate"
        ).value;


    // =====================================================
    // VALIDATE DEPOSIT
    // =====================================================

    if (!depositId) {

        alert(
            "Please select Deposit Name."
        );

        return;
    }


    // =====================================================
    // VALIDATE DATE
    // =====================================================

    if (!interestDate) {

        alert(
            "Please select Interest Applicable Date."
        );

        return;
    }


    // =====================================================
    // VALIDATE SLABS
    // =====================================================

    if (
        selectedSlabs.length === 0
    ) {

        alert(
            "Please add at least one slab."
        );

        return;
    }


    // =====================================================
    // FORM
    // =====================================================

    const form =
        document.getElementById(
            "mastertdForm"
        );


    // =====================================================
    // REMOVE OLD HIDDEN INPUTS
    // =====================================================

    document
        .querySelectorAll(
            ".dynamic-input"
        )
        .forEach(
            function(input) {

                input.remove();

            }
        );


    // =====================================================
    // ADD EACH SLAB
    // =====================================================

    selectedSlabs.forEach(
        function(item) {

            addHidden(
                form,
                "slaid",
                item.slaid
            );


            addHidden(
                form,
                "slanam",
                item.slanam
            );


            addHidden(
                form,
                "fromon",
                item.fromon
            );


            addHidden(
                form,
                "froday",
                item.froday
            );


            addHidden(
                form,
                "tomon",
                item.tomon
            );


            addHidden(
                form,
                "today",
                item.today
            );


            // =================================================
            // FLOAT INTEREST
            // =================================================

            addHidden(
                form,
                "int",
                item.interest
            );
        }
    );


    // =====================================================
    // DEPOSIT ID
    // =====================================================

    addHidden(
        form,
        "depid",
        depositId
    );


    // =====================================================
    // INTEREST DATE
    // =====================================================

    addHidden(
        form,
        "intdate",
        interestDate
    );


    // =====================================================
    // SUBMIT
    // =====================================================

    form.submit();
}


// =========================================================
// ADD HIDDEN INPUT
// =========================================================

function addHidden(
    form,
    name,
    value
) {

    const input =
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


// =========================================================
// RESET TD
// =========================================================

function resetTD() {

    // =====================================================
    // DEPOSIT
    // =====================================================

    document.getElementById(
        "depositId"
    ).value = "";


    // =====================================================
    // DEPOSIT DETAILS
    // =====================================================

    clearDepositDetails();


    // =====================================================
    // INTEREST DATE
    // =====================================================

    document.getElementById(
        "interestDate"
    ).value = "";


    // =====================================================
    // SLAB DROPDOWN
    // =====================================================

    const slabSelect =
        document.getElementById(
            "slabName"
        );


    slabSelect.innerHTML = `
        <option value="">
            Select slab name
        </option>
    `;


    // =====================================================
    // SLAB DETAILS
    // =====================================================

    clearSlabDetails();


    // =====================================================
    // INTEREST
    // =====================================================

    document.getElementById(
        "slabInterest"
    ).value = "";


    // =====================================================
    // CLEAR SELECTED SLABS
    // =====================================================

    selectedSlabs = [];


    renderSlabTable();
}


// =========================================================
// CLEAR SLAB DETAILS
// =========================================================

function clearSlabDetails() {

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
}


// =========================================================
// EXIT
// =========================================================

function exitTD() {

    window.history.back();
}