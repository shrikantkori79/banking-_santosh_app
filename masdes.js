/**
 * 
 */

// ============================================================
// ADD DESIGNATION
// ============================================================

function addDesignation() {

    // --------------------------------------------------------
    // Confirmation
    // --------------------------------------------------------

    const confirmAdd = confirm(
        "Do you want to add a new Designation?"
    );

    if (!confirmAdd) {
        return;
    }


    // --------------------------------------------------------
    // Designation name
    // --------------------------------------------------------

    const name = prompt(
        "Enter Designation Name:"
    );

    if (name === null) {
        return;
    }

    const designationName = name.trim();

    if (designationName === "") {

        alert(
            "Please enter Designation Name."
        );

        return;
    }


    // --------------------------------------------------------
    // Check existing dropdown
    // --------------------------------------------------------

    const designationSelect =
        document.getElementById("designation");

    if (!designationSelect) {

        alert(
            "Designation dropdown not found."
        );

        return;
    }


    const existingOptions =
        designationSelect.options;

    for (let i = 0; i < existingOptions.length; i++) {

        const existingName =
            existingOptions[i].text
                .trim()
                .toLowerCase();

        if (
            existingName ===
            designationName.toLowerCase()
        ) {

            alert(
                "This Designation already exists."
            );

            designationSelect.value =
                existingOptions[i].value;

            return;
        }
    }


    // --------------------------------------------------------
    // Kannada name - optional
    // --------------------------------------------------------

    const kannada =
        prompt(
            "Enter Designation Kannada Name (Optional):"
        );

    let kannadaName = "";

    if (kannada !== null) {
        kannadaName = kannada.trim();
    }


    // --------------------------------------------------------
    // Get context path
    // --------------------------------------------------------

    let contextPath = "";

    if (
        typeof window.contextPath !== "undefined"
    ) {

        contextPath = window.contextPath;

    } else {

        const path =
            window.location.pathname;

        const firstSlash =
            path.indexOf("/", 1);

        if (firstSlash > 0) {

            contextPath =
                path.substring(0, firstSlash);

        } else {

            contextPath = "";
        }
    }


    // --------------------------------------------------------
    // Send to masdesservlet
    // --------------------------------------------------------

    const body =
        "desnam=" +
        encodeURIComponent(designationName) +

        "&desnamkan=" +
        encodeURIComponent(kannadaName);


    fetch(
        contextPath + "/masdes",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },

            body: body
        }
    )

    .then(function(response) {

        console.log(
            "MASDES HTTP STATUS =",
            response.status
        );

        return response.text();
    })

    .then(function(data) {

        console.log(
            "MASDES SERVER RESPONSE =",
            data
        );


        // ----------------------------------------------------
        // Parse JSON
        // ----------------------------------------------------

        let result;

        try {

            result = JSON.parse(data);

        } catch (error) {

            console.error(
                "Invalid JSON response:",
                data
            );

            alert(
                "Server returned an invalid response."
            );

            return;
        }


        // ----------------------------------------------------
        // SUCCESS
        // ----------------------------------------------------

        if (result.success === true) {

            // Create new option
            const option =
                document.createElement("option");


            // Generated masdes ID
            option.value =
                result.id;


            // Designation name
            option.textContent =
                result.desnam;


            // Kannada name
            option.setAttribute(
                "data-kannada",
                result.desnamkan || ""
            );


            // Optional data-name
            option.setAttribute(
                "data-name",
                result.desnam
            );


            // Add to dropdown
            designationSelect.appendChild(
                option
            );


            // Automatically select
            designationSelect.value =
                result.id;


            // If you have Kannada display textbox
            const kannadaField =
                document.getElementById(
                    "designationKannada"
                );

            if (kannadaField) {

                kannadaField.value =
                    result.desnamkan || "";
            }


            // Success popup
            alert(
                "Designation saved successfully."
            );

        } else {

            // ------------------------------------------------
            // ERROR FROM SERVER
            // ------------------------------------------------

            alert(
                result.message ||
                "Error while saving Designation"
            );
        }

    })

    .catch(function(error) {

        console.error(
            "MASDES FETCH ERROR =",
            error
        );

        alert(
            "Error while saving Designation"
        );
    });
}