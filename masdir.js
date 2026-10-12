/* =====================================================
   ADD NEW DESIGNATION
===================================================== */

function addDesignation() {

    /*
     * Confirmation popup
     */

    const confirmAdd =
        confirm(
            "Do you want to add a new Designation?"
        );


    if (!confirmAdd) {

        return;
    }


    /*
     * Enter designation name
     */

    const designationName =
        prompt(
            "Enter Designation Name:"
        );


    /*
     * Cancel
     */

    if (designationName === null) {

        return;
    }


    const name =
        designationName.trim();


    /*
     * Empty name
     */

    if (name === "") {

        alert(
            "Please enter Designation Name"
        );

        return;
    }


    /*
     * Check duplicate on client side
     */

    const designationSelect =
        document.getElementById(
            "designation"
        );


    for (
        let i = 0;
        i < designationSelect.options.length;
        i++
    ) {

        const existingName =
            designationSelect.options[i]
                .textContent
                .trim()
                .toLowerCase();


        if (
            existingName ===
            name.toLowerCase()
        ) {

            alert(
                "Designation already exists"
            );

            designationSelect.selectedIndex =
                i;

            return;
        }
    }


    /*
     * Kannada name
     *
     * Optional
     */

    const designationKannada =
        prompt(
            "Enter Designation Kannada Name (Optional):"
        );


    let kannada = "";


    if (
        designationKannada !== null
    ) {

        kannada =
            designationKannada.trim();
    }


    /*
     * Send to masdes servlet
     */

    fetch(
        "masdes",
        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded"

            },

            body:
                "desnam=" +
                encodeURIComponent(name) +

                "&desnamkan=" +
                encodeURIComponent(kannada)

        }
    )


    /*
     * Response
     */

    .then(
        function(response) {

            if (!response.ok) {

                throw new Error(
                    "Server returned error"
                );
            }


            return response.json();

        }
    )


    /*
     * Handle response
     */

    .then(
        function(data) {

            console.log(
                "Designation response:",
                data
            );


            /*
             * SUCCESS
             */

            if (data.success) {


                /*
                 * Create option
                 */

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    data.id;


                option.textContent =
                    data.desnam;


                option.setAttribute(
                    "data-name",
                    data.desnam
                );


                option.setAttribute(
                    "data-kannada",
                    data.desnamkan || ""
                );


                /*
                 * Add to dropdown
                 */

                designationSelect.appendChild(
                    option
                );


                /*
                 * Select newly added
                 * designation
                 */

                designationSelect.value =
                    data.id;


                /*
                 * Success popup
                 */

                alert(
                    "Designation added successfully"
                );


            } else {


                /*
                 * SAVE FAILED
                 */

                alert(
                    data.message ||
                    "Designation could not be saved"
                );

            }

        }
    )


    /*
     * ERROR
     */

    .catch(
        function(error) {

            console.error(
                "Designation error:",
                error
            );


            alert(
                "Error while saving Designation"
            );

        }
    );

}



/* =====================================================
   ADD DIRECTOR TO TABLE
===================================================== */

function addDirector() {


    /*
     * Get values
     */

    const directorName =
        document.getElementById(
            "directorName"
        ).value.trim();


    const directorNameKannada =
        document.getElementById(
            "directorNameKannada"
        ).value.trim();


    const designationSelect =
        document.getElementById(
            "designation"
        );


    const designationId =
        designationSelect.value;


    let designationText = "";


    if (
        designationSelect.selectedIndex >= 0
    ) {

        designationText =
            designationSelect.options[
                designationSelect.selectedIndex
            ].textContent.trim();

    }


    const joiningDate =
        document.getElementById(
            "joiningDate"
        ).value;


    const mobileNo =
        document.getElementById(
            "mobileNo"
        ).value.trim();


    const address =
        document.getElementById(
            "address"
        ).value.trim();


    const branchCode =
        document.getElementById(
            "branchCode"
        ).value.trim();


    const branchName =
        document.getElementById(
            "branchName"
        ).value.trim();


    const allBranches =
        document.getElementById(
            "allBranches"
        ).checked;



    /* =================================================
       VALIDATION
    ================================================= */


    if (
        directorName === ""
    ) {

        alert(
            "Please enter Director Name"
        );

        return;
    }


    if (
        designationId === ""
    ) {

        alert(
            "Please select Designation"
        );

        return;
    }


    if (
        joiningDate === ""
    ) {

        alert(
            "Please select Joining Date"
        );

        return;
    }


    if (
        mobileNo === ""
    ) {

        alert(
            "Please enter Mobile No"
        );

        return;
    }


    if (
        address === ""
    ) {

        alert(
            "Please enter Address"
        );

        return;
    }


    /*
     * Branch validation
     *
     * If All Branches is selected,
     * branch code/name are NOT required.
     */

    if (
        !allBranches &&
        branchCode === ""
    ) {

        alert(
            "Please enter Branch Code or select All Branches"
        );

        return;
    }


    if (
        !allBranches &&
        branchName === ""
    ) {

        alert(
            "Please enter Branch Name or select All Branches"
        );

        return;
    }



    /* =================================================
       REMOVE EMPTY TABLE ROW
    ================================================= */

    const emptyRow =
        document.getElementById(
            "emptyRow"
        );


    if (emptyRow) {

        emptyRow.remove();

    }



    /* =================================================
       CREATE TABLE ROW
    ================================================= */

    const tableBody =
        document.getElementById(
            "directorTableBody"
        );


    const row =
        document.createElement(
            "tr"
        );


    /*
     * Name
     */

    const nameCell =
        document.createElement(
            "td"
        );


    nameCell.textContent =
        directorName;


    row.appendChild(
        nameCell
    );


    /*
     * Joining Date
     */

    const dateCell =
        document.createElement(
            "td"
        );


    dateCell.textContent =
        joiningDate;


    row.appendChild(
        dateCell
    );


    /*
     * Address
     */

    const addressCell =
        document.createElement(
            "td"
        );


    addressCell.textContent =
        address;


    row.appendChild(
        addressCell
    );


    /*
     * Mobile
     */

    const mobileCell =
        document.createElement(
            "td"
        );


    mobileCell.textContent =
        mobileNo;


    row.appendChild(
        mobileCell
    );


    /*
     * Branch
     */

    const branchCell =
        document.createElement(
            "td"
        );


    if (allBranches) {

        branchCell.textContent =
            "All Branches";

    } else {

        branchCell.textContent =
            branchCode +
            " - " +
            branchName;

    }


    row.appendChild(
        branchCell
    );


    /*
     * Designation
     */

    const designationCell =
        document.createElement(
            "td"
        );


    designationCell.textContent =
        designationText;


    row.appendChild(
        designationCell
    );


    /*
     * Add row
     */

    tableBody.appendChild(
        row
    );



    /* =================================================
       STORE DIRECTOR DATA IN HIDDEN INPUTS
    ================================================= */

    const hiddenContainer =
        document.getElementById(
            "directorHiddenData"
        );


    const entries =
        hiddenContainer.querySelectorAll(
            ".director-entry"
        );


    const index =
        entries.length;


    const entry =
        document.createElement(
            "div"
        );


    entry.className =
        "director-entry";


    /*
     * All Branches:
     *
     * checked   = 1
     * unchecked = 0
     */

    const allBranchValue =
        allBranches
            ? "1"
            : "0";


    entry.innerHTML = `

        <input
            type="hidden"
            name="dirnam_${index}"
            value="${escapeValue(directorName)}">

        <input
            type="hidden"
            name="dirnamkan_${index}"
            value="${escapeValue(directorNameKannada)}">

        <input
            type="hidden"
            name="desid_${index}"
            value="${escapeValue(designationId)}">

        <input
            type="hidden"
            name="joidat_${index}"
            value="${escapeValue(joiningDate)}">

        <input
            type="hidden"
            name="mobno_${index}"
            value="${escapeValue(mobileNo)}">

        <input
            type="hidden"
            name="add_${index}"
            value="${escapeValue(address)}">

        <input
            type="hidden"
            name="bracod_${index}"
            value="${escapeValue(branchCode)}">

        <input
            type="hidden"
            name="branam_${index}"
            value="${escapeValue(branchName)}">

        <input
            type="hidden"
            name="allbra_${index}"
            value="${allBranchValue}">

    `;


    hiddenContainer.appendChild(
        entry
    );



    /* =================================================
       UPDATE COUNT
    ================================================= */

    const directorCount =
        document.getElementById(
            "directorCount"
        );


    directorCount.value =
        index + 1;



    /* =================================================
       DEBUG
    ================================================= */

    console.log(
        "Director added"
    );


    console.log(
        "Director index:",
        index
    );


    console.log(
        "Director name:",
        directorName
    );


    console.log(
        "Designation ID:",
        designationId
    );


    console.log(
        "Joining date:",
        joiningDate
    );


    console.log(
        "All Branches:",
        allBranchValue
    );



    /* =================================================
       CLEAR DIRECTOR ENTRY FIELDS
    ================================================= */

    document.getElementById(
        "directorName"
    ).value = "";


    document.getElementById(
        "directorNameKannada"
    ).value = "";


    document.getElementById(
        "designation"
    ).value = "";


    document.getElementById(
        "joiningDate"
    ).value = "";


    document.getElementById(
        "mobileNo"
    ).value = "";


    document.getElementById(
        "address"
    ).value = "";


    /*
     * Do NOT clear branch fields.
     *
     * They can be reused for the next director.
     */


    alert(
        "Director added successfully"
    );

}



/* =====================================================
   ESCAPE VALUE
===================================================== */

function escapeValue(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        );

}



/* =====================================================
   SAVE ALL DIRECTORS
===================================================== */

function saveDirector() {


    const entries =
        document.querySelectorAll(
            "#directorHiddenData .director-entry"
        );


    /*
     * No director
     */

    if (
        entries.length === 0
    ) {

        alert(
            "Please add at least one Director"
        );

        return;
    }


    /*
     * Form
     */

    const form =
        document.querySelector(
            ".customer-form"
        );


    if (!form) {

        alert(
            "Form not found"
        );

        return;
    }


    /*
     * Update count
     */

    document.getElementById(
        "directorCount"
    ).value =
        entries.length;


    console.log(
        "Total directors to save:",
        entries.length
    );


    /*
     * Submit
     */

    form.submit();

}



/* =====================================================
   RESET
===================================================== */

function resetDirector() {


    /*
     * Branch
     */

    document.getElementById(
        "branchCode"
    ).value = "";


    document.getElementById(
        "branchName"
    ).value = "";


    document.getElementById(
        "allBranches"
    ).checked = false;


    document.getElementById(
        "branchCode"
    ).disabled = false;


    document.getElementById(
        "branchName"
    ).disabled = false;



    /*
     * Director
     */

    document.getElementById(
        "directorName"
    ).value = "";


    document.getElementById(
        "directorNameKannada"
    ).value = "";


    document.getElementById(
        "designation"
    ).value = "";


    document.getElementById(
        "joiningDate"
    ).value = "";


    document.getElementById(
        "mobileNo"
    ).value = "";


    document.getElementById(
        "address"
    ).value = "";



    /*
     * Clear table
     */

    document.getElementById(
        "directorTableBody"
    ).innerHTML = `

        <tr id="emptyRow">

            <td
                colspan="6"
                class="empty-row">

                No records found

            </td>

        </tr>

    `;



    /*
     * Clear hidden director data
     */

    document.getElementById(
        "directorHiddenData"
    ).innerHTML = "";



    /*
     * Reset count
     */

    document.getElementById(
        "directorCount"
    ).value = "0";


    alert(
        "Form reset"
    );

}



/* =====================================================
   EXIT
===================================================== */

function exitDirector() {

    window.history.back();

}



/* =====================================================
   ALL BRANCHES
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const allBranches =
            document.getElementById(
                "allBranches"
            );


        const branchCode =
            document.getElementById(
                "branchCode"
            );


        const branchName =
            document.getElementById(
                "branchName"
            );


        /*
         * Checkbox change
         */

        allBranches.addEventListener(
            "change",
            function () {


                if (
                    this.checked
                ) {


                    /*
                     * All branches selected
                     */

                    branchCode.value =
                        "";


                    branchName.value =
                        "";


                    branchCode.disabled =
                        true;


                    branchName.disabled =
                        true;


                } else {


                    /*
                     * Specific branch
                     */

                    branchCode.disabled =
                        false;


                    branchName.disabled =
                        false;

                }

            }
        );

    }
);