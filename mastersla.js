/**
 * 
 */


/* =====================================================
   ADD SLAB
===================================================== */

function addSlab() {

    const fromMonth =
        document.getElementById("fromMonths").value;

    const fromDay =
        document.getElementById("fromDays").value;

    const toMonth =
        document.getElementById("toMonths").value;

    const toDay =
        document.getElementById("toDays").value;

    const interest =
        document.getElementById("slabInterest").value.trim();

    const slabName =
        document.getElementById("slabName").value;


    /* ---------------------------------------------
       VALIDATION
    --------------------------------------------- */

    if (fromMonth === "") {

        alert("Please select From Month.");

        document.getElementById("fromMonths").focus();

        return;
    }


    if (fromDay === "") {

        alert("Please select From Day.");

        document.getElementById("fromDays").focus();

        return;
    }


    if (toMonth === "") {

        alert("Please select To Month.");

        document.getElementById("toMonths").focus();

        return;
    }


    if (toDay === "") {

        alert("Please select To Day.");

        document.getElementById("toDays").focus();

        return;
    }


    if (slabName === "") {

        alert("Please select Slab Name.");

        document.getElementById("slabName").focus();

        return;
    }


    if (interest === "") {

        alert("Please enter Interest %.");

        document.getElementById("slabInterest").focus();

        return;
    }


    /* ---------------------------------------------
       TABLE
    --------------------------------------------- */

    const tableBody =
        document.getElementById("slabTableBody");


    const emptyRow =
        document.getElementById("emptySlabRow");


    /* Remove "No records found" */

    if (emptyRow) {

        emptyRow.remove();

    }


    /* ---------------------------------------------
       CREATE NEW ROW
    --------------------------------------------- */

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>${fromMonth}</td>

        <td>${fromDay}</td>

        <td>${toMonth}</td>

        <td>${toDay}</td>

        <td>${interest}</td>

        <td>${slabName}</td>

    `;


    tableBody.appendChild(row);


    /* ---------------------------------------------
       CLEAR INPUTS AFTER ADDING
    --------------------------------------------- */

    document.getElementById("fromMonths").value = "";

    document.getElementById("fromDays").value = "";

    document.getElementById("toMonths").value = "";

    document.getElementById("toDays").value = "";

    document.getElementById("slabInterest").value = "";

    document.getElementById("slabName").value = "";


    /* Put cursor back */

    document.getElementById("slabName").focus();

}


/* =====================================================
   SAVE TD MASTER
===================================================== */

function saveTD() {

    const depositName =
        document
            .getElementById("depositName")
            .value
            .trim();


    const localName =
        document
            .getElementById("depositNameLocal")
            .value
            .trim();


    if (depositName === "") {

        alert("Please enter Deposit Name.");

        document
            .getElementById("depositName")
            .focus();

        return;
    }


    if (localName === "") {

        alert("Please enter Deposit Name (Local).");

        document
            .getElementById("depositNameLocal")
            .focus();

        return;
    }


    /* ---------------------------------------------
       GET TABLE DATA
    --------------------------------------------- */

    const slabRows =
        document.querySelectorAll(
            "#slabTableBody tr"
        );


    const slabs = [];


    slabRows.forEach(function(row) {

        if (row.id === "emptySlabRow") {

            return;

        }


        const cells =
            row.querySelectorAll("td");


        if (cells.length === 6) {

            slabs.push({

                fromMonth:
                    cells[0].textContent,

                fromDay:
                    cells[1].textContent,

                toMonth:
                    cells[2].textContent,

                toDay:
                    cells[3].textContent,

                interest:
                    cells[4].textContent,

                slabName:
                    cells[5].textContent

            });

        }

    });


    const tdMaster = {

        depositName:
            depositName,

        localName:
            localName,

        interestDate:
            document
                .getElementById("interestDate")
                .value,

        loanDeposit:
            document
                .getElementById("loanDeposit")
                .value,

        loanInterest:
            document
                .getElementById("loanInterest")
                .value,

        panInterest:
            document
                .getElementById("panInterest")
                .value,

        autoRenewal:
            document
                .getElementById("autoRenewal")
                .checked,

        interestAfterMaturity:
            document
                .getElementById("interestAfterMaturity")
                .value,

        maturityDays:
            document
                .getElementById("maturityDays")
                .value,

        deduction:
            document
                .getElementById("deduction")
                .value,

        slabs: slabs

    };


    console.log(tdMaster);


    alert(
        "TD Master saved successfully."
    );

}


/* =====================================================
   RESET
===================================================== */

function resetTD() {

    if (
        !confirm(
            "Are you sure you want to reset?"
        )
    ) {

        return;

    }


    document
        .querySelector("form")
        .reset();


    document
        .getElementById("slabTableBody")
        .innerHTML = `

            <tr id="emptySlabRow">

                <td
                    colspan="6"
                    class="empty-row">

                    No records found

                </td>

            </tr>

        `;

}


/* =====================================================
   EXIT
===================================================== */

function exitTD() {

    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {

        window.history.back();

    }

}