
document.addEventListener("DOMContentLoaded", function () {

    // ============================================================
    // ELEMENTS
    // ============================================================

    const mainHead = document.getElementById("main_head");
    const subHead = document.getElementById("subhead");
    const agentNo = document.getElementById("age_no");

    const customerId = document.getElementById("acc_id");
    const accountName = document.getElementById("acc_name");

    const agentMessage = document.getElementById("agentMessage");
    const customerMessage = document.getElementById("customerMessage");

    const form = document.getElementById("customerForm");


    // ============================================================
    // HEAD -> SUB HEAD
    // ============================================================

    mainHead.addEventListener("change", function () {

        const headId = this.value;

        subHead.innerHTML =
            '<option value="">Select Sub Head</option>';

        agentNo.value = "";

        agentMessage.textContent = "";
        agentMessage.style.visibility = "hidden";

        agentNo.setCustomValidity("");


        if (headId === "") {
            return;
        }


        // ========================================================
        // PIGMY
        // ========================================================

        if (headId === "1") {

            pigList.forEach(function (pig) {

                const option =
                    document.createElement("option");

                option.value = pig.id;
                option.textContent = pig.name;

                subHead.appendChild(option);
            });
        }


        // ========================================================
        // RD
        // ========================================================

        else if (headId === "2") {

            rdList.forEach(function (rd) {

                const option =
                    document.createElement("option");

                option.value = rd.id;
                option.textContent = rd.name;

                subHead.appendChild(option);
            });
        }

    });


    // ============================================================
    // SUB HEAD -> GET NEXT AGENT NUMBER
    // ============================================================

    subHead.addEventListener("change", function () {

        const headId = mainHead.value;
        const subHeadId = this.value;


        agentNo.value = "";
        agentMessage.textContent = "";
        agentMessage.style.visibility = "hidden";

        agentNo.setCustomValidity("");


        if (headId === "" || subHeadId === "") {
            return;
        }


        // ========================================================
        // SHOW CHECKING
        // ========================================================

        agentNo.value = "Checking...";

        agentMessage.textContent =
            "Generating Agent No...";

        agentMessage.style.visibility =
            "visible";


        // ========================================================
        // AJAX URL
        // ========================================================

		const url =
		    "${pageContext.request.contextPath}/newrdpigage?nextAgentNo=true" +
		    "&headname=" +
		    encodeURIComponent(headId) +
		    "&subhead=" +
		    encodeURIComponent(subHeadId);

		console.log("Agent URL:", url);


        console.log("=================================");
        console.log("GET NEXT AGENT");
        console.log("Head     :", headId);
        console.log("Sub Head :", subHeadId);
        console.log("URL      :", url);
        console.log("=================================");


        fetch(url, {
            method: "GET",
            cache: "no-cache"
        })

        .then(function (response) {

            console.log(
                "HTTP Status:",
                response.status
            );

            if (!response.ok) {

                throw new Error(
                    "HTTP Error: " +
                    response.status
                );
            }

            return response.text();
        })

        .then(function (result) {

            result = result.trim();

            console.log(
                "SERVER RESPONSE:",
                result
            );


            // ====================================================
            // AVAILABLE
            // ====================================================

            if (result.startsWith("available:")) {

                const number =
                    result.substring(
                        "available:".length
                    ).trim();


                console.log(
                    "GENERATED AGENT NO:",
                    number
                );


                if (
                    number !== "" &&
                    /^\d+$/.test(number)
                ) {

                    agentNo.value = number;

                    agentMessage.textContent =
                        "Agent No available";

                    agentMessage.style.visibility =
                        "visible";

                    agentNo.setCustomValidity("");

                } else {

                    agentNo.value = "";

                    agentMessage.textContent =
                        "Invalid Agent No received";

                    agentMessage.style.visibility =
                        "visible";

                    agentNo.setCustomValidity(
                        "Invalid Agent No"
                    );
                }

            }


            // ====================================================
            // EXISTS
            // ====================================================

            else if (result.startsWith("exists:")) {

                const number =
                    result.substring(
                        "exists:".length
                    ).trim();

                console.log(
                    "Agent already exists:",
                    number
                );


                agentNo.value = number;

                agentMessage.textContent =
                    "Agent No already exists";

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity(
                    "Agent No already exists"
                );
            }


            // ====================================================
            // EMPTY RESPONSE
            // ====================================================

            else if (result === "") {

                agentNo.value = "";

                agentMessage.textContent =
                    "No response from server";

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity(
                    "No response from server"
                );
            }


            // ====================================================
            // OTHER RESPONSE
            // ====================================================

            else {

                console.error(
                    "UNEXPECTED SERVER RESPONSE:",
                    result
                );


                agentNo.value = "";

                agentMessage.textContent =
                    "Server response: " + result;

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity(
                    "Unable to generate Agent No"
                );
            }

        })

        .catch(function (error) {

            console.error(
                "AGENT NUMBER ERROR:",
                error
            );


            agentNo.value = "";

            agentMessage.textContent =
                "Error generating Agent No";

            agentMessage.style.visibility =
                "visible";

            agentNo.setCustomValidity(
                "Error generating Agent No"
            );
        });

    });


    // ============================================================
    // MANUAL AGENT NUMBER CHECK
    // ============================================================

    agentNo.addEventListener("blur", function () {

        const ageno =
            this.value.trim();

        const headId =
            mainHead.value;

        const subHeadId =
            subHead.value;


        agentMessage.textContent = "";
        agentMessage.style.visibility = "hidden";

        agentNo.setCustomValidity("");


        if (ageno === "") {
            return;
        }


        // ========================================================
        // ONLY NUMBERS
        // ========================================================

        if (!/^\d+$/.test(ageno)) {

            agentMessage.textContent =
                "Enter valid Agent No";

            agentMessage.style.visibility =
                "visible";

            agentNo.setCustomValidity(
                "Enter valid Agent No"
            );

            return;
        }


        // ========================================================
        // HEAD
        // ========================================================

        if (headId === "") {

            agentMessage.textContent =
                "Select Head first";

            agentMessage.style.visibility =
                "visible";

            agentNo.setCustomValidity(
                "Select Head first"
            );

            return;
        }


        // ========================================================
        // SUB HEAD
        // ========================================================

        if (subHeadId === "") {

            agentMessage.textContent =
                "Select Sub Head first";

            agentMessage.style.visibility =
                "visible";

            agentNo.setCustomValidity(
                "Select Sub Head first"
            );

            return;
        }


        // ========================================================
        // CHECK DATABASE
        // ========================================================

        agentMessage.textContent =
            "Checking Agent No...";

        agentMessage.style.visibility =
            "visible";


        const url =
            "newrdpigage?checkAgent=true" +
            "&headname=" +
            encodeURIComponent(headId) +
            "&subhead=" +
            encodeURIComponent(subHeadId) +
            "&agentno=" +
            encodeURIComponent(ageno);


        console.log(
            "CHECK AGENT URL:",
            url
        );


        fetch(url, {
            method: "GET",
            cache: "no-cache"
        })

        .then(function (response) {

            if (!response.ok) {

                throw new Error(
                    "HTTP Error: " +
                    response.status
                );
            }

            return response.text();
        })

        .then(function (result) {

            result = result.trim();

            console.log(
                "CHECK AGENT RESPONSE:",
                result
            );


            if (result === "exists") {

                agentMessage.textContent =
                    "Duplicate Agent No";

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity(
                    "Agent No already exists"
                );

                alert(
                    "Agent No " +
                    ageno +
                    " already exists for this Head and Sub Head."
                );
            }


            else if (result === "available") {

                agentMessage.textContent =
                    "Agent No available";

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity("");
            }


            else {

                agentMessage.textContent =
                    "Unable to check Agent No";

                agentMessage.style.visibility =
                    "visible";

                agentNo.setCustomValidity(
                    "Unable to check Agent No"
                );

                console.log(
                    "Unexpected response:",
                    result
                );
            }

        })

        .catch(function (error) {

            console.error(
                "CHECK AGENT ERROR:",
                error
            );

            agentMessage.textContent =
                "Error checking Agent No";

            agentMessage.style.visibility =
                "visible";

            agentNo.setCustomValidity(
                "Error checking Agent No"
            );
        });

    });


    // ============================================================
    // CUSTOMER ID -> CUSTOMER NAME
    // ============================================================

    customerId.addEventListener("blur", function () {

        const enteredId =
            this.value.trim();

        accountName.value = "";

        customerMessage.textContent = "";

        customerMessage.style.visibility =
            "hidden";


        if (enteredId === "") {
            return;
        }


        const customer =
            customerList.find(function (cus) {

                return String(cus.id) ===
                    enteredId;

            });


        if (customer) {

            accountName.value =
                customer.name;

            customerMessage.textContent =
                "Customer found";

            customerMessage.style.visibility =
                "visible";

        } else {

            accountName.value = "";

            customerMessage.textContent =
                "Customer not found";

            customerMessage.style.visibility =
                "visible";

            alert("Customer not found");
        }

    });


    // ============================================================
    // FORM SUBMIT
    // ============================================================

    form.addEventListener("submit", function (event) {

        // HEAD

        if (mainHead.value === "") {

            event.preventDefault();

            alert("Please select Head");

            mainHead.focus();

            return;
        }


        // SUB HEAD

        if (subHead.value === "") {

            event.preventDefault();

            alert("Please select Sub Head");

            subHead.focus();

            return;
        }


        // AGENT NO

        if (agentNo.value.trim() === "") {

            event.preventDefault();

            alert("Please enter Agent No");

            agentNo.focus();

            return;
        }


        // INVALID / DUPLICATE

        if (!agentNo.checkValidity()) {

            event.preventDefault();

            alert(
                "Please enter an available Agent No."
            );

            agentNo.focus();

            return;
        }


        // CUSTOMER ID

        if (customerId.value.trim() === "") {

            event.preventDefault();

            alert("Please enter Customer ID");

            customerId.focus();

            return;
        }


        // CUSTOMER NAME

        if (accountName.value.trim() === "") {

            event.preventDefault();

            alert(
                "Please enter a valid Customer ID"
            );

            customerId.focus();

            return;
        }

    });


    // ============================================================
    // CANCEL
    // ============================================================

    document
        .getElementById("cancelButton")
        .addEventListener("click", function () {

            form.reset();

            subHead.innerHTML =
                '<option value="">Select Sub Head</option>';

            agentNo.value = "";

            accountName.value = "";

            agentMessage.textContent = "";

            customerMessage.textContent = "";

            agentMessage.style.visibility =
                "hidden";

            customerMessage.style.visibility =
                "hidden";

            agentNo.setCustomValidity("");

        });


    // ============================================================
    // EXIT
    // ============================================================

    document
        .getElementById("exitButton")
        .addEventListener("click", function () {

            window.history.back();

        });

});