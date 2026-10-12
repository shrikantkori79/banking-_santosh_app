document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =====================================================
        // ELEMENTS
        // =====================================================

        const head =
            document.getElementById(
                "head_acc"
            );


        const subHead =
            document.getElementById(
                "sub_head"
            );


        const rdDetails =
            document.getElementById(
                "rdDetails"
            );


        const agentId =
            document.getElementById(
                "agent_id"
            );


        const accountNo =
            document.getElementById(
                "acc_no"
            );


        const accountName =
            document.getElementById(
                "account_name"
            );


        const customerId =
            document.getElementById(
                "cust_id"
            );


        const customerName =
            document.getElementById(
                "customer_name"
            );


        const macName =
            document.getElementById(
                "mac_name"
            );


        const relation =
            document.getElementById(
                "relation"
            );


        const guardianId =
            document.getElementById(
                "guardian_id"
            );


        const guardianName =
            document.getElementById(
                "guardian_name"
            );


        const guardianRelation =
            document.getElementById(
                "guardian_relation"
            );


        const guardianMessage =
            document.getElementById(
                "guardianMessage"
            );


        const saveButton =
            document.getElementById(
                "pigmySaveButton"
            );


        const addToTableButton =
            document.getElementById(
                "addToTableButton"
            );


        const resetButton =
            document.getElementById(
                "resetButton"
            );


        const exitButton =
            document.getElementById(
                "exitButton"
            );


        const accountDate =
            document.getElementById(
                "account_date"
            );


        const matureDate =
            document.getElementById(
                "mature_date"
            );


        const installmentAmount =
            document.getElementById(
                "installment_amount"
            );


        const installmentType =
            document.getElementById(
                "installment_type"
            );


        const noOfInstallments =
            document.getElementById(
                "no_of_installments"
            );


        const interestPercent =
            document.getElementById(
                "interest_percent"
            );


        const maturityAmount =
            document.getElementById(
                "maturity_amount"
            );


        const maturityDate =
            document.getElementById(
                "maturity_date"
            );


        const rdTableBody =
            document.getElementById(
                "rdTableBody"
            );


        // =====================================================
        // ELEMENT CHECK
        // =====================================================

        if (
            !head ||
            !subHead ||
            !rdDetails ||
            !agentId ||
            !accountNo ||
            !accountName ||
            !customerId ||
            !customerName
        ) {

            console.error(
                "Required elements not found."
            );

            return;
        }


        // =====================================================
        // HEAD CHANGE
        // =====================================================

        head.addEventListener(
            "change",
            function () {


                // =============================================
                // RD
                // =============================================

                if (
                    head.value ===
                    "RD"
                ) {

                    rdDetails.hidden =
                        false;


                    clearFields();


                    loadRDSubHeads();


                    return;
                }


                // =============================================
                // PIGMY
                // =============================================

                if (
                    head.value ===
                    "PIGMY"
                ) {

                    rdDetails.hidden =
                        true;


                    clearRDFields();


                    loadPigmySubHeads();


                    return;
                }


                // =============================================
                // EMPTY
                // =============================================

                rdDetails.hidden =
                    true;


                clearFields();


                clearRDFields();


                subHead.innerHTML =
                    '<option value="">Select Sub Head</option>';

            }
        );


        // =====================================================
        // LOAD PIGMY SUB HEADS
        // =====================================================

        function loadPigmySubHeads() {


            subHead.innerHTML =
                '<option value="">Select Pigmy Sub Head</option>';


            fetch(
                "newrdpigacc?action=subheads"
            )


                .then(
                    function (response) {

                        if (
                            !response.ok
                        ) {

                            throw new Error(
                                "HTTP Error: " +
                                response.status
                            );

                        }

                        return response.text();

                    }
                )


                .then(
                    function (data) {

                        data =
                            data.trim();


                        if (
                            data ===
                            "ERROR"
                        ) {

                            alert(
                                "Unable to load Pigmy Sub Heads."
                            );

                            return;
                        }


                        if (
                            data ===
                            "EMPTY" ||
                            data ===
                            ""
                        ) {

                            return;
                        }


                        const rows =
                            data.split(
                                /\r?\n/
                            );


                        rows.forEach(
                            function (row) {

                                row =
                                    row.trim();


                                if (
                                    row ===
                                    ""
                                ) {

                                    return;
                                }


                                const parts =
                                    row.split("|");


                                if (
                                    parts.length <
                                        3 ||
                                    parts[0] !==
                                        "SUBHEAD"
                                ) {

                                    return;
                                }


                                const option =
                                    document.createElement(
                                        "option"
                                    );


                                option.value =
                                    parts[1];


                                option.textContent =
                                    parts
                                        .slice(2)
                                        .join("|");


                                subHead.appendChild(
                                    option
                                );

                            }
                        );

                    }
                )


                .catch(
                    function (error) {

                        console.error(
                            "Pigmy Sub Head Error:",
                            error
                        );


                        alert(
                            "Server error while loading Pigmy Sub Heads."
                        );

                    }
                );

        }


        // =====================================================
        // LOAD RD SUB HEADS
        // =====================================================

        function loadRDSubHeads() {


            subHead.innerHTML =
                '<option value="">Select RD Sub Head</option>';


            fetch(
                "newrdpigacc?action=rdSubHeads"
            )


                .then(
                    function (response) {

                        if (
                            !response.ok
                        ) {

                            throw new Error(
                                "HTTP Error: " +
                                response.status
                            );

                        }

                        return response.text();

                    }
                )


                .then(
                    function (data) {

                        data =
                            data.trim();


                        if (
                            data ===
                            "ERROR"
                        ) {

                            alert(
                                "Unable to load RD Sub Heads."
                            );

                            return;
                        }


                        if (
                            data ===
                            "EMPTY" ||
                            data ===
                            ""
                        ) {

                            return;
                        }


                        const rows =
                            data.split(
                                /\r?\n/
                            );


                        rows.forEach(
                            function (row) {

                                row =
                                    row.trim();


                                if (
                                    row ===
                                    ""
                                ) {

                                    return;
                                }


                                const parts =
                                    row.split("|");


                                if (
                                    parts.length <
                                        3 ||
                                    parts[0] !==
                                        "SUBHEAD"
                                ) {

                                    return;
                                }


                                const option =
                                    document.createElement(
                                        "option"
                                    );


                                option.value =
                                    parts[1];


                                option.textContent =
                                    parts
                                        .slice(2)
                                        .join("|");


                                subHead.appendChild(
                                    option
                                );

                            }
                        );

                    }
                )


                .catch(
                    function (error) {

                        console.error(
                            "RD Sub Head Error:",
                            error
                        );


                        alert(
                            "Server error while loading RD Sub Heads."
                        );

                    }
                );

        }


        // =====================================================
        // SUB HEAD CHANGE
        // =====================================================

        subHead.addEventListener(
            "change",
            function () {

                agentId.value =
                    "";

                accountNo.value =
                    "";

                accountName.value =
                    "";

                customerId.value =
                    "";

                customerName.value =
                    "";


                makeGuardianOptional();

            }
        );


        // =====================================================
        // AGENT - PIGMY
        // =====================================================

        agentId.addEventListener(
            "blur",
            function () {


                if (
                    head.value !==
                    "PIGMY"
                ) {

                    return;
                }


                if (
                    subHead.value ===
                    ""
                ) {

                    alert(
                        "Please select Pigmy Sub Head."
                    );

                    subHead.focus();

                    return;
                }


                const agent =
                    agentId.value.trim();


                if (
                    agent ===
                    ""
                ) {

                    return;
                }


                if (
                    !/^[0-9]+$/.test(
                        agent
                    )
                ) {

                    alert(
                        "Agent ID must contain numbers only."
                    );

                    agentId.value =
                        "";

                    return;
                }


                const params =
                    new URLSearchParams();


                params.append(
                    "action",
                    "checkAgent"
                );


                params.append(
                    "headid",
                    "1"
                );


                params.append(
                    "subheadid",
                    subHead.value
                );


                params.append(
                    "agenid",
                    agent
                );


                fetch(
                    "newrdpigacc?" +
                    params.toString()
                )


                    .then(
                        function (response) {

                            return response.text();

                        }
                    )


                    .then(
                        function (data) {

                            data =
                                data.trim();


                            if (
                                data ===
                                "NOT_FOUND"
                            ) {

                                alert(
                                    "Agent ID not found for selected Head and Sub Head."
                                );


                                accountNo.value =
                                    "";

                                accountName.value =
                                    "";

                                return;
                            }


                            if (
                                data.startsWith(
                                    "FOUND|"
                                )
                            ) {

                                const parts =
                                    data.split("|");


                                if (
                                    parts.length <
                                    3
                                ) {

                                    alert(
                                        "Invalid Agent response."
                                    );

                                    return;
                                }


                                accountNo.value =
                                    parts[1];


                                accountName.value =
                                    parts[2];


                                return;
                            }


                            if (
                                data ===
                                "INVALID_DATA"
                            ) {

                                alert(
                                    "Invalid Agent details."
                                );

                                return;
                            }


                            alert(
                                "Error while checking Agent."
                            );

                        }
                    )


                    .catch(
                        function (error) {

                            console.error(
                                "Pigmy Agent Error:",
                                error
                            );

                            alert(
                                "Server error while checking Agent."
                            );

                        }
                    );

            }
        );


        // =====================================================
        // AGENT - RD
        // =====================================================

        agentId.addEventListener(
            "blur",
            function () {


                if (
                    head.value !==
                    "RD"
                ) {

                    return;
                }


                if (
                    subHead.value ===
                    ""
                ) {

                    alert(
                        "Please select RD Sub Head."
                    );

                    subHead.focus();

                    return;
                }


                const agent =
                    agentId.value.trim();


                if (
                    agent ===
                    ""
                ) {

                    return;
                }


                if (
                    !/^[0-9]+$/.test(
                        agent
                    )
                ) {

                    alert(
                        "Agent ID must contain numbers only."
                    );

                    agentId.value =
                        "";

                    return;
                }


                const params =
                    new URLSearchParams();


                params.append(
                    "action",
                    "rdCheckAgent"
                );


                params.append(
                    "headid",
                    "2"
                );


                params.append(
                    "subheadid",
                    subHead.value
                );


                params.append(
                    "agenid",
                    agent
                );


                fetch(
                    "newrdpigacc?" +
                    params.toString()
                )


                    .then(
                        function (response) {

                            return response.text();

                        }
                    )


                    .then(
                        function (data) {

                            data =
                                data.trim();


                            if (
                                data ===
                                "NOT_FOUND"
                            ) {

                                alert(
                                    "RD Agent ID not found for selected Head and Sub Head."
                                );


                                accountNo.value =
                                    "";

                                accountName.value =
                                    "";

                                return;
                            }


                            if (
                                data.startsWith(
                                    "FOUND|"
                                )
                            ) {

                                const parts =
                                    data.split("|");


                                if (
                                    parts.length <
                                    3
                                ) {

                                    alert(
                                        "Invalid RD Agent response."
                                    );

                                    return;
                                }


                                accountNo.value =
                                    parts[1];


                                accountName.value =
                                    parts[2];


                                return;
                            }


                            if (
                                data ===
                                "INVALID_DATA"
                            ) {

                                alert(
                                    "Invalid RD Agent details."
                                );

                                return;
                            }


                            alert(
                                "Error while checking RD Agent."
                            );

                        }
                    )


                    .catch(
                        function (error) {

                            console.error(
                                "RD Agent Error:",
                                error
                            );

                            alert(
                                "Server error while checking RD Agent."
                            );

                        }
                    );

            }
        );


        // =====================================================
        // CUSTOMER ID
        // =====================================================

        customerId.addEventListener(
            "blur",
            function () {


                if (
                    head.value !==
                    "RD" &&
                    head.value !==
                    "PIGMY"
                ) {

                    return;
                }


                getCustomer();

            }
        );


        // =====================================================
        // GET CUSTOMER
        // =====================================================

        function getCustomer() {


            const cusid =
                customerId.value.trim();


            if (
                cusid ===
                ""
            ) {

                customerName.value =
                    "";

                makeGuardianOptional();

                return;
            }


            if (
                !/^[0-9]+$/.test(
                    cusid
                )
            ) {

                alert(
                    "Customer ID must contain numbers only."
                );


                customerId.value =
                    "";

                customerName.value =
                    "";

                makeGuardianOptional();

                return;
            }


            const params =
                new URLSearchParams();


            params.append(
                "action",
                "customer"
            );


            params.append(
                "cusid",
                cusid
            );


            params.append(
                "head",
                head.value
            );


            fetch(
                "newrdpigacc?" +
                params.toString()
            )


                .then(
                    function (response) {

                        if (
                            !response.ok
                        ) {

                            throw new Error(
                                "HTTP Error: " +
                                response.status
                            );

                        }

                        return response.text();

                    }
                )


                .then(
                    function (data) {

                        data =
                            data.trim();


                        if (
                            data ===
                            "NOT_FOUND"
                        ) {

                            alert(
                                "Customer ID not found."
                            );


                            customerName.value =
                                "";

                            makeGuardianOptional();

                            return;
                        }


                        if (
                            data ===
                            "INVALID_DATA"
                        ) {

                            alert(
                                "Invalid Customer ID."
                            );


                            customerName.value =
                                "";

                            makeGuardianOptional();

                            return;
                        }


                        if (
                            data.startsWith(
                                "FOUND|"
                            )
                        ) {


                            const parts =
                                data.split("|");


                            if (
                                parts.length <
                                4
                            ) {

                                alert(
                                    "Invalid customer response."
                                );

                                customerName.value =
                                    "";

                                makeGuardianOptional();

                                return;
                            }


                            customerId.value =
                                parts[1];


                            customerName.value =
                                parts[2];


                            // DOB
                            checkCustomerAge(
                                parts[3]
                            );


                            return;
                        }


                        alert(
                            "Unable to fetch customer."
                        );


                        customerName.value =
                            "";


                        makeGuardianOptional();

                    }
                )


                .catch(
                    function (error) {

                        console.error(
                            "Customer Error:",
                            error
                        );


                        alert(
                            "Server error while fetching customer."
                        );


                        customerName.value =
                            "";


                        makeGuardianOptional();

                    }
                );

        }


        // =====================================================
        // CUSTOMER AGE
        // =====================================================

        function checkCustomerAge(
            dob
        ) {


            if (
                !dob ||
                dob ===
                "null"
            ) {

                makeGuardianOptional();

                return;
            }


            const birth =
                new Date(
                    dob
                );


            const today =
                new Date();


            let age =
                today.getFullYear() -
                birth.getFullYear();


            const monthDifference =
                today.getMonth() -
                birth.getMonth();


            if (
                monthDifference < 0 ||
                (
                    monthDifference ===
                    0 &&
                    today.getDate() <
                    birth.getDate()
                )
            ) {

                age--;

            }


            if (
                age < 18
            ) {

                guardianId.required =
                    true;


                guardianRelation.required =
                    true;


                if (
                    guardianMessage
                ) {

                    guardianMessage.style.display =
                        "block";

                }

            } else {

                makeGuardianOptional();

            }

        }


        // =====================================================
        // GUARDIAN OPTIONAL
        // =====================================================

        function makeGuardianOptional() {


            guardianId.required =
                false;


            guardianRelation.required =
                false;


            if (
                guardianMessage
            ) {

                guardianMessage.style.display =
                    "none";

            }

        }


        // =====================================================
        // MAC NAME
        // =====================================================

        if (
            macName
        ) {

            macName.addEventListener(
                "input",
                function () {

                    this.value =
                        this.value.replace(
                            /[^A-Za-z ]/g,
                            ""
                        );

                }
            );

        }


        // =====================================================
        // GUARDIAN ID
        // =====================================================

        if (
            guardianId
        ) {

            guardianId.addEventListener(
                "blur",
                function () {


                    const gid =
                        guardianId.value.trim();


                    if (
                        gid ===
                        ""
                    ) {

                        guardianName.value =
                            "";

                        return;
                    }


                    if (
                        !/^[0-9]+$/.test(
                            gid
                        )
                    ) {

                        alert(
                            "Guardian ID must contain numbers only."
                        );


                        guardianId.value =
                            "";

                        guardianName.value =
                            "";

                        return;
                    }


                    const params =
                        new URLSearchParams();


                    params.append(
                        "action",
                        "customer"
                    );


                    params.append(
                        "cusid",
                        gid
                    );


                    params.append(
                        "head",
                        head.value
                    );


                    fetch(
                        "newrdpigacc?" +
                        params.toString()
                    )


                        .then(
                            function (response) {

                                return response.text();

                            }
                        )


                        .then(
                            function (data) {

                                data =
                                    data.trim();


                                if (
                                    data ===
                                    "NOT_FOUND"
                                ) {

                                    alert(
                                        "Guardian ID not found."
                                    );


                                    guardianName.value =
                                        "";

                                    return;
                                }


                                if (
                                    data.startsWith(
                                        "FOUND|"
                                    )
                                ) {

                                    const parts =
                                        data.split("|");


                                    if (
                                        parts.length >=
                                        3
                                    ) {

                                        guardianName.value =
                                            parts[2];

                                    }

                                    return;
                                }


                                guardianName.value =
                                    "";

                            }
                        )


                        .catch(
                            function (error) {

                                console.error(
                                    "Guardian Error:",
                                    error
                                );


                                alert(
                                    "Server error while checking Guardian."
                                );

                            }
                        );

                }
            );

        }

		// =====================================================
		// ADD TO TABLE
		// =====================================================

		if (addToTableButton) {

		    addToTableButton.addEventListener(
		        "click",
		        function () {

		            // =========================================
		            // ONLY RD
		            // =========================================

		            if (head.value !== "RD") {

		                alert("Select RD first.");
		                return;
		            }


		            // =========================================
		            // GET VALUES
		            // =========================================

		            const amountValue =
		                installmentAmount.value.trim();

		            const type =
		                installmentType.value;

		            const noValue =
		                noOfInstallments.value.trim();

		            const interestValue =
		                interestPercent.value.trim();

		            const accDateValue =
		                accountDate.value;


		            // =========================================
		            // VALIDATION
		            // =========================================

		            if (accDateValue === "") {

		                alert("Please select Account Date.");
		                accountDate.focus();
		                return;
		            }

		            if (amountValue === "") {

		                alert("Please enter Installment Amount.");
		                installmentAmount.focus();
		                return;
		            }

		            if (type === "") {

		                alert("Please select Installment Type.");
		                installmentType.focus();
		                return;
		            }

		            if (noValue === "") {

		                alert("Please select No. Of Installments.");
		                noOfInstallments.focus();
		                return;
		            }

		            if (interestValue === "") {

		                alert("Please enter Interest %.");
		                interestPercent.focus();
		                return;
		            }


		            // =========================================
		            // CONVERT VALUES
		            // =========================================

		            const amount =
		                parseFloat(amountValue);

		            const no =
		                parseInt(noValue, 10);

		            const interestRate =
		                parseFloat(interestValue);


		            if (isNaN(amount) || amount <= 0) {

		                alert(
		                    "Installment Amount must be greater than 0."
		                );

		                return;
		            }


		            if (
		                isNaN(no) ||
		                no < 1 ||
		                no > 200
		            ) {

		                alert(
		                    "No. Of Installments must be between 1 and 200."
		                );

		                return;
		            }


		            if (
		                isNaN(interestRate) ||
		                interestRate < 0
		            ) {

		                alert("Interest % is invalid.");
		                return;
		            }


		            // =========================================
		            // FREQUENCY
		            // =========================================

		            let months;

		            if (type === "1") {

		                // Monthly
		                months = 1;

		            } else if (type === "2") {

		                // Quarterly
		                months = 3;

		            } else if (type === "3") {

		                // Half Yearly
		                months = 6;

		            } else if (type === "4") {

		                // Yearly
		                months = 12;

		            } else {

		                alert("Invalid Installment Type.");
		                return;
		            }


		            // =========================================
		            // START DATE
		            // =========================================

		            const startDate =
		                parseDateInput(accDateValue);


		            if (!startDate) {

		                alert("Invalid Account Date.");
		                return;
		            }


		            // =========================================
		            // ORIGINAL DAY
		            //
		            // Example:
		            // 31-Jan
		            // 28-Feb
		            // 31-Mar
		            // =========================================

		            const originalDay =
		                startDate.getUTCDate();


		            // =========================================
		            // CLEAR OLD TABLE
		            // =========================================

		            rdTableBody.innerHTML = "";


		            // =========================================
		            // BALANCE
		            // =========================================

		            let balance = 0.00;


		            // =========================================
		            // CURRENT PAYMENT DATE
		            // =========================================

		            let paymentDate =
		                startDate;


		            // =========================================
		            // SCHEDULE
		            // =========================================

		            const schedule = [];


		            // =========================================
		            // INSTALLMENT LOOP
		            // =========================================

		            for (
		                let i = 1;
		                i <= no;
		                i++
		            ) {


		                // =====================================
		                // PAYMENT DAY
		                // =====================================

		                const currentPaymentDate =
		                    paymentDate;


		                // =====================================
		                // END DAY
		                // =====================================

		                const endDate =
		                    getNextPaymentDate(
		                        currentPaymentDate,
		                        months,
		                        originalDay
		                    );


		                // =====================================
		                // DAYS
		                // =====================================

		                const days =
		                    getDaysBetween(
		                        currentPaymentDate,
		                        endDate
		                    );


		                // =====================================
		                // PREVIOUS BALANCE
		                // =====================================

		                const previousBalance =
		                    balance;


		                // =====================================
		                // INTEREST BASE
		                //
		                // FIRST ROW:
		                // Interest is calculated on
		                // installment amount.
		                //
		                // OTHER ROWS:
		                // Interest is calculated on
		                // previous balance.
		                // =====================================

		              //  const interestBase =
		                //    i === 1
		                  //      ? amount
		                    ///    : previousBalance;
							
							
							const interestBase =
							    previousBalance + amount;


		                // =====================================
		                // INTEREST
		                //
		                // P * T * R / 36500
		                // =====================================

		                const interest =
		                    interestBase *
		                    days *
		                    interestRate /
		                    36500.0;


		                // =====================================
		                // TOTAL
		                // =====================================

		                const total =
		                    previousBalance +
		                    amount +
		                    interest;


		                // =====================================
		                // UPDATE BALANCE
		                // =====================================

		                balance =
		                    total;


		                // =====================================
		                // ADD SCHEDULE OBJECT
		                // =====================================

		                schedule.push({

		                    no: i,

		                    paymentDay:
		                        formatDate(
		                            currentPaymentDate
		                        ),

		                    endDay:
		                        formatDate(
		                            endDate
		                        ),

		                    days:
		                        days,

		                    previousBalance:
		                        previousBalance,

		                    interest:
		                        interest,

		                    customerPayment:
		                        amount,

		                    total:
		                        total

		                });


		                // =====================================
		                // CREATE TABLE ROW
		                // =====================================

		                const row =
		                    document.createElement("tr");


		                row.innerHTML =

		                    "<td>" +
		                    i +
		                    "</td>" +

		                    "<td>" +
		                    escapeHtml(
		                        formatDate(
		                            currentPaymentDate
		                        )
		                    ) +
		                    "</td>" +

		                    "<td>" +
		                    escapeHtml(
		                        formatDate(
		                            endDate
		                        )
		                    ) +
		                    "</td>" +

		                    "<td>" +
		                    days +
		                    "</td>" +

		                    "<td>" +
		                    previousBalance.toFixed(2) +
		                    "</td>" +

		                    "<td>" +
		                    interest.toFixed(2) +
		                    "</td>" +

		                    "<td>" +
		                    amount.toFixed(2) +
		                    "</td>" +

		                    "<td>" +
		                    total.toFixed(2) +
		                    "</td>";


		                rdTableBody.appendChild(row);


		                // =====================================
		                // NEXT PAYMENT DATE
		                //
		                // IMPORTANT:
		                // NO +1 DAY
		                //
		                // Next Payment Day =
		                // Previous End Day
		                // =====================================

		                paymentDate =
		                    endDate;
		            }


		            // =========================================
		            // MATURITY AMOUNT
		            // =========================================

		            maturityAmount.value =
		                balance.toFixed(2);


		            // =========================================
		            // MATURITY DATE
		            //
		            // FINAL ROW'S END DAY
		            //
		            // NO +1 DAY
		            // =========================================

		            if (schedule.length > 0) {

		                const finalSchedule =
		                    schedule[
		                        schedule.length - 1
		                    ];


		                const finalEndDate =
		                    parseDisplayDate(
		                        finalSchedule.endDay
		                    );


		                if (finalEndDate) {

		                    maturityDate.value =
		                        formatDateForInput(
		                            finalEndDate
		                        );
		                }
		            }


		            // =========================================
		            // SAVE SCHEDULE
		            // =========================================

		            window.rdSchedule =
		                schedule;


		            alert(
		                "RD schedule calculated successfully."
		            );

		        }
		    );
		}

        // =====================================================
        // SAVE BUTTON
        // =====================================================

        if (
            saveButton
        ) {

            saveButton.addEventListener(
                "click",
                function (event) {


                    event.preventDefault();


                    // =========================================
                    // HEAD
                    // =========================================

                    if (
                        head.value !== "RD" &&
                        head.value !== "PIGMY"
                    ) {

                        alert(
                            "Please select Head Of Account."
                        );

                        head.focus();

                        return;
                    }


                    // =========================================
                    // COMMON VALIDATION
                    // =========================================

                    if (
                        !subHead.value
                    ) {

                        alert(
                            "Please select Sub Head."
                        );

                        subHead.focus();

                        return;
                    }


                    if (
                        !agentId.value.trim()
                    ) {

                        alert(
                            "Please enter Agent ID."
                        );

                        agentId.focus();

                        return;
                    }


                    if (
                        !customerId.value.trim()
                    ) {

                        alert(
                            "Customer ID is required."
                        );

                        customerId.focus();

                        return;
                    }


                    if (
                        !customerName.value.trim()
                    ) {

                        alert(
                            "Customer Name is required."
                        );

                        return;
                    }


                    if (
                        !accountNo.value.trim()
                    ) {

                        alert(
                            "Account Number is required."
                        );

                        return;
                    }


                    if (
                        !accountName.value.trim()
                    ) {

                        alert(
                            "Agent Name is required."
                        );

                        return;
                    }


                    // =========================================
                    // MAC
                    // =========================================

                    const mac =
                        macName.value.trim();


                    const lettersOnly =
                        mac.replace(
                            / /g,
                            ""
                        );


                    if (
                        lettersOnly.length !==
                        13
                    ) {

                        alert(
                            "Mac Name must contain exactly 13 letters."
                        );

                        macName.focus();

                        return;
                    }


                    if (
                        !/^[A-Za-z ]+$/.test(
                            mac
                        )
                    ) {

                        alert(
                            "Mac Name can contain only letters and spaces."
                        );

                        macName.focus();

                        return;
                    }


                    // =========================================
                    // RELATION
                    // =========================================

                    if (
                        !relation.value.trim()
                    ) {

                        alert(
                            "Please enter Customer Relation."
                        );

                        relation.focus();

                        return;
                    }


                    // =========================================
                    // GUARDIAN
                    // =========================================

                    if (
                        guardianId.required &&
                        !guardianId.value.trim()
                    ) {

                        alert(
                            "Guardian is mandatory."
                        );

                        guardianId.focus();

                        return;
                    }


                    if (
                        guardianRelation.required &&
                        !guardianRelation.value.trim()
                    ) {

                        alert(
                            "Guardian Relation is mandatory."
                        );

                        guardianRelation.focus();

                        return;
                    }


                    // =========================================
                    // ACCOUNT DATE
                    // =========================================

                    if (
                        !accountDate.value
                    ) {

                        alert(
                            "Please select Account Date."
                        );

                        accountDate.focus();

                        return;
                    }


                    // =========================================
                    // MATURE DATE
                    // =========================================

                    if (
                        !matureDate.value
                    ) {

                        alert(
                            "Please select Mature Date."
                        );

                        matureDate.focus();

                        return;
                    }


                    // =========================================
                    // CREATE FORM
                    // =========================================

                    const form =
                        new URLSearchParams();


                    // =========================================
                    // HEAD ID
                    // =========================================

                    const headId =
                        head.value ===
                        "RD"
                            ? "2"
                            : "1";


                    form.append(
                        "headid",
                        headId
                    );


                    // =========================================
                    // COMMON DATA
                    // =========================================

                    form.append(
                        "subheadid",
                        subHead.value
                    );


                    form.append(
                        "agenid",
                        agentId.value.trim()
                    );


                    form.append(
                        "accno",
                        accountNo.value.trim()
                    );


                    form.append(
                        "cusid",
                        customerId.value.trim()
                    );


                    form.append(
                        "macnam",
                        mac
                    );


                    form.append(
                        "cusrel",
                        relation.value.trim()
                    );


                    form.append(
                        "guaid",
                        guardianId.value.trim()
                            ? guardianId.value.trim()
                            : "0"
                    );


                    form.append(
                        "guarea",
                        guardianRelation.value.trim()
                    );


                    // =========================================
                    // ACCOUNT DATE
                    // =========================================

                    form.append(
                        "accdat",
                        accountDate.value
                    );


                    // =========================================
                    // MATURE DATE
                    // =========================================

                    form.append(
                        "matdat",
                        matureDate.value
                    );


                    // =========================================
                    // RD ONLY
                    // =========================================

                    if (
                        head.value ===
                        "RD"
                    ) {


                        // =====================================
                        // RD AMOUNT
                        // =====================================

                        if (
                            !installmentAmount.value.trim()
                        ) {

                            alert(
                                "Please enter Installment Amount."
                            );

                            installmentAmount.focus();

                            return;
                        }


                        // =====================================
                        // RD TYPE
                        // =====================================

                        if (
                            !installmentType.value
                        ) {

                            alert(
                                "Please select Installment Type."
                            );

                            installmentType.focus();

                            return;
                        }


                        // =====================================
                        // NUMBER
                        // =====================================

                        if (
                            !noOfInstallments.value.trim()
                        ) {

                            alert(
                                "Please enter No. Of Installments."
                            );

                            noOfInstallments.focus();

                            return;
                        }


                        // =====================================
                        // INTEREST
                        // =====================================

                        if (
                            !interestPercent.value.trim()
                        ) {

                            alert(
                                "Please enter Interest %."
                            );

                            interestPercent.focus();

                            return;
                        }


                        // =====================================
                        // SCHEDULE
                        // =====================================

                        if (
                            !window.rdSchedule ||
                            window.rdSchedule.length ===
                            0
                        ) {

                            alert(
                                "Please click Add To Table first."
                            );

                            addToTableButton.focus();

                            return;
                        }


                        // =====================================
                        // RD VALUES
                        // =====================================

                        form.append(
                            "installment_amount",
                            installmentAmount.value.trim()
                        );


                        form.append(
                            "installment_type",
                            installmentType.value
                        );


                        form.append(
                            "no_of_installments",
                            noOfInstallments.value.trim()
                        );


                        form.append(
                            "interest_percent",
                            interestPercent.value.trim()
                        );


                        // =====================================
                        // RD SCHEDULE JSON
                        // =====================================

                        form.append(
                            "rdSchedule",
                            JSON.stringify(
                                window.rdSchedule
                            )
                        );

                    }


                    // =========================================
                    // DISABLE BUTTON
                    // =========================================

                    saveButton.disabled =
                        true;


                    // =========================================
                    // SAVE
                    // =========================================

                    fetch(
                        "newrdpigacc",
                        {
                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/x-www-form-urlencoded"

                            },

                            body:
                                form.toString()
                        }
                    )


                        .then(
                            function (response) {

                                if (
                                    !response.ok
                                ) {

                                    throw new Error(
                                        "HTTP Error: " +
                                        response.status
                                    );

                                }

                                return response.text();

                            }
                        )


                        .then(
                            function (data) {

                                data =
                                    data.trim();


                                // =================================
                                // SUCCESS
                                // =================================

                                if (
                                    data ===
                                    "SUCCESS"
                                ) {

                                    if (
                                        head.value ===
                                        "RD"
                                    ) {

                                        alert(
                                            "RD Account saved successfully."
                                        );

                                    } else {

                                        alert(
                                            "Pigmy Account saved successfully."
                                        );

                                    }


                                    location.reload();

                                    return;
                                }


                                // =================================
                                // MAC
                                // =================================

                                if (
                                    data ===
                                    "MAC_INVALID"
                                ) {

                                    alert(
                                        "Mac Name must contain exactly 13 letters."
                                    );

                                    return;
                                }


                                // =================================
                                // GUARDIAN
                                // =================================

                                if (
                                    data ===
                                    "GUARDIAN_REQUIRED"
                                ) {

                                    alert(
                                        "Guardian is mandatory."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "GUARDIAN_RELATION_REQUIRED"
                                ) {

                                    alert(
                                        "Guardian Relation is mandatory."
                                    );

                                    return;
                                }


                                // =================================
                                // CUSTOMER
                                // =================================

                                if (
                                    data ===
                                    "CUSTOMER_INVALID"
                                ) {

                                    alert(
                                        "Customer ID is invalid."
                                    );

                                    return;
                                }


                                // =================================
                                // ACCOUNT DATE
                                // =================================

                                if (
                                    data ===
                                    "ACCOUNT_DATE_REQUIRED"
                                ) {

                                    alert(
                                        "Please select Account Date."
                                    );

                                    return;
                                }


                                // =================================
                                // MATURE DATE
                                // =================================

                                if (
                                    data ===
                                    "MATURE_DATE_REQUIRED"
                                ) {

                                    alert(
                                        "Please select Mature Date."
                                    );

                                    return;
                                }


                                // =================================
                                // RD DETAILS
                                // =================================

                                if (
                                    data ===
                                    "RD_DETAILS_REQUIRED"
                                ) {

                                    alert(
                                        "Please enter all RD details."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_RD_AMOUNT"
                                ) {

                                    alert(
                                        "Installment Amount must be greater than 0."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_RD_INSTALLMENTS"
                                ) {

                                    alert(
                                        "No. Of Installments must be greater than 0."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_RD_INTEREST"
                                ) {

                                    alert(
                                        "Interest % is invalid."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_INSTALLMENT_TYPE"
                                ) {

                                    alert(
                                        "Invalid Installment Type."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "RD_INTEREST_FAILED"
                                ) {

                                    alert(
                                        "RD details could not be saved."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_DATE"
                                ) {

                                    alert(
                                        "Invalid date."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_NUMBER"
                                ) {

                                    alert(
                                        "Invalid number."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_DATA"
                                ) {

                                    alert(
                                        "Required data is missing."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "INVALID_HEAD"
                                ) {

                                    alert(
                                        "Invalid account head."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "FAILED"
                                ) {

                                    alert(
                                        head.value +
                                        " Account could not be saved."
                                    );

                                    return;
                                }


                                if (
                                    data ===
                                    "ERROR"
                                ) {

                                    alert(
                                        "Database error. Check Tomcat console."
                                    );

                                    return;
                                }


                                // =================================
                                // UNKNOWN
                                // =================================

                                alert(
                                    "Server response: " +
                                    data
                                );

                            }
                        )


                        .catch(
                            function (error) {

                                console.error(
                                    "Save Error:",
                                    error
                                );


                                alert(
                                    "Server error while saving Account."
                                );

                            }
                        )


                        .finally(
                            function () {

                                saveButton.disabled =
                                    false;

                            }
                        );

                }
            );

        }


        // =====================================================
        // RESET
        // =====================================================

        if (
            resetButton
        ) {

            resetButton.addEventListener(
                "click",
                function () {

                    location.reload();

                }
            );

        }


        // =====================================================
        // EXIT
        // =====================================================

        if (
            exitButton
        ) {

            exitButton.addEventListener(
                "click",
                function () {

                    window.history.back();

                }
            );

        }


        // =====================================================
        // CLEAR COMMON FIELDS
        // =====================================================

        function clearFields() {


            agentId.value =
                "";

            accountNo.value =
                "";

            accountName.value =
                "";

            customerId.value =
                "";

            customerName.value =
                "";

            macName.value =
                "";

            relation.value =
                "";


            makeGuardianOptional();

        }


        // =====================================================
        // CLEAR RD
        // =====================================================

        function clearRDFields() {


            installmentAmount.value =
                "";


            installmentType.value =
                "";


            noOfInstallments.value =
                "";


            interestPercent.value =
                "";


            maturityAmount.value =
                "";


            maturityDate.value =
                "";


            window.rdSchedule =
                [];


            if (
                rdTableBody
            ) {

                rdTableBody.innerHTML =

                    '<tr id="emptyRdRow">' +

                    '<td colspan="7" class="empty-row">' +

                    'No RD schedule added' +

                    '</td>' +

                    '</tr>';

            }

        }


        // =====================================================
        // NEXT PAYMENT DATE
        //
        // ORIGINAL DAY IS PRESERVED
        //
        // 31-Jan
        // 28-Feb
        // 31-Mar
        // 30-Apr
        // 31-May
        // =====================================================

        function getNextPaymentDate(
            currentDate,
            months,
            originalDay
        ) {


            const target =
                new Date(
                    Date.UTC(
                        currentDate.getUTCFullYear(),
                        currentDate.getUTCMonth() +
                            months,
                        1
                    )
                );


            const lastDay =
                new Date(
                    Date.UTC(
                        target.getUTCFullYear(),
                        target.getUTCMonth() + 1,
                        0
                    )
                ).getUTCDate();


            const actualDay =
                Math.min(
                    originalDay,
                    lastDay
                );


            return new Date(
                Date.UTC(
                    target.getUTCFullYear(),
                    target.getUTCMonth(),
                    actualDay
                )
            );

        }


        // =====================================================
        // PARSE DATE
        // =====================================================

        function parseDateInput(
            value
        ) {


            if (
                !value
            ) {

                return null;

            }


            const parts =
                value.split("-");


            if (
                parts.length !==
                3
            ) {

                return null;

            }


            const year =
                parseInt(
                    parts[0],
                    10
                );


            const month =
                parseInt(
                    parts[1],
                    10
                );


            const day =
                parseInt(
                    parts[2],
                    10
                );


            return new Date(
                Date.UTC(
                    year,
                    month - 1,
                    day
                )
            );

        }


        // =====================================================
        // DAYS BETWEEN
        // =====================================================

        function getDaysBetween(
            firstDate,
            secondDate
        ) {


            const milliseconds =
                secondDate.getTime() -
                firstDate.getTime();


            return Math.round(
                milliseconds /
                86400000
            );

        }


        // =====================================================
        // FORMAT DATE
        //
        // DD-MM-YYYY
        // =====================================================

        function formatDate(
            date
        ) {


            const day =
                String(
                    date.getUTCDate()
                ).padStart(
                    2,
                    "0"
                );


            const month =
                String(
                    date.getUTCMonth() + 1
                ).padStart(
                    2,
                    "0"
                );


            const year =
                date.getUTCFullYear();


            return (
                day +
                "-" +
                month +
                "-" +
                year
            );

        }


        // =====================================================
        // FORMAT DATE FOR INPUT
        //
        // YYYY-MM-DD
        // =====================================================

        function formatDateForInput(
            date
        ) {


            const day =
                String(
                    date.getUTCDate()
                ).padStart(
                    2,
                    "0"
                );


            const month =
                String(
                    date.getUTCMonth() + 1
                ).padStart(
                    2,
                    "0"
                );


            const year =
                date.getUTCFullYear();


            return (
                year +
                "-" +
                month +
                "-" +
                day
            );

        }


        // =====================================================
        // FINAL PAYMENT DATE
        // =====================================================

        function paymentDateBeforeLast(
            schedule
        ) {


            if (
                !schedule ||
                schedule.length ===
                0
            ) {

                return null;

            }


            const last =
                schedule[
                    schedule.length - 1
                ];


            return parseDisplayDate(
                last.paymentDate
            );

        }


        // =====================================================
        // PARSE DD-MM-YYYY
        // =====================================================

        function parseDisplayDate(
            value
        ) {


            const parts =
                value.split("-");


            if (
                parts.length !==
                3
            ) {

                return null;

            }


            const day =
                parseInt(
                    parts[0],
                    10
                );


            const month =
                parseInt(
                    parts[1],
                    10
                );


            const year =
                parseInt(
                    parts[2],
                    10
                );


            return new Date(
                Date.UTC(
                    year,
                    month - 1,
                    day
                )
            );

        }


        // =====================================================
        // ESCAPE HTML
        // =====================================================

        function escapeHtml(
            value
        ) {

            return String(
                value
            )

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
        // INITIAL STATE
        // =====================================================

        rdDetails.hidden =
            true;


        window.rdSchedule =
            [];


    }
);