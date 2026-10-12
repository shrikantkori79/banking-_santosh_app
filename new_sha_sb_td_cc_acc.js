document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================

       ELEMENTS

       ===================================================== */

    const form =

        document.getElementById("customerForm");

    const accountDate =

        document.getElementById("date");

    const headAcc =

        document.getElementById("head_acc");

    const subHead =

        document.getElementById("sub_head");

    const selectedInfo =

        document.getElementById("selectedInfo");

    const accountNo =

        document.getElementById("acc_no");

    const joint =

        document.getElementById("joint");

    const jointDropdown =

        document.getElementById("jointDropdown");

    const jointCustomer =

        document.getElementById("jointCustomer");

    const certificateRow =

        document.getElementById("certificateRow");

    const cerno =

        document.getElementById("cerno");

    const director =

        document.getElementById("director");

    const customerId =

        document.getElementById("cust_id");

    const customerName =

        document.getElementById("custname");

    const nominee =

        document.getElementById("nominee");

    const relation =

        document.getElementById("relation");

    const guardianId =

        document.getElementById("guardian_id");

    const guardianName =

        document.getElementById("guardian_name");

    const guardianRelation =

        document.getElementById("guardian_relation");

    const saveButton =

        document.getElementById("saveButton");

    const customerTableBody =

        document.getElementById("customerTableBody");

    const voucherAmount =

        document.getElementById("voucherAmount");

    const tokenNo =

        document.getElementById("Tokn_No");

    const voucherContra =

        document.getElementById("voucherContra");

    const voucherTableBody =

        document.getElementById("voucherTableBody");

    const finalSaveButton =

        document.getElementById("finalSaveButton");

    const resetButton =

        document.getElementById("resetButton");

    const exitButton =

        document.getElementById("exitButton");









    /* =====================================================

       VARIABLES

       ===================================================== */

    let customerSlNo = 0;

    let voucherSlNo = 0;

    let savedAccount = null;

    let customerList = [];

    let voucherList = [];









    /* =====================================================

       INITIAL

       ===================================================== */

    if (jointDropdown) {

        jointDropdown.style.display = "none";

    }

    if (jointCustomer) {

        jointCustomer.required = false;

    }

    if (certificateRow) {

        certificateRow.style.display = "none";

    }









    /* =====================================================

       TODAY DATE

       ===================================================== */

    if (accountDate) {

        const today = new Date();

        const yyyy =

            today.getFullYear();

        const mm =

            String(

                today.getMonth() + 1

            ).padStart(2, "0");

        const dd =

            String(

                today.getDate()

            ).padStart(2, "0");

        accountDate.value =

            yyyy + "-" + mm + "-" + dd;

    }









    /* =====================================================

       HEAD CHANGE

       ===================================================== */

    if (headAcc) {

        headAcc.addEventListener(

            "change",

            function () {

                const head =

                    this.value;

                subHead.innerHTML =

                    '<option value="">Select Sub Head</option>';

                selectedInfo.value =

                    "";

                accountNo.value =

                    "";

                clearVoucher();









                /* =========================================

                   CERTIFICATE

                   ========================================= */

                if (

                    head === "3" ||

                    head === "4"

                ) {

                    certificateRow.style.display =

                        "block";

                    cerno.required =

                        true;

                } else {

                    certificateRow.style.display =

                        "none";

                    cerno.required =

                        false;

                    cerno.value =

                        "";

                }









                /* =========================================

                   SHARE

                   ========================================= */

                if (

                    head === "1"

                ) {

                    loadShareData();

                }









                /* =========================================

                   SAVING

                   ========================================= */

                else if (

                    head ===









					"2"

                ) {

                    loadSavingData();

                }









                /* =========================================

                   TERM

                   ========================================= */

                else if (

                    head ===

                    "3"

                ) {

                    loadTermData();

                }









                /* =========================================

                   CC

                   ========================================= */

                else if (

                    head ===

                   "4"

                ) {

                    loadCCData();

                }

            }

        );

    }









    /* =====================================================

       LOAD SHARE

       ===================================================== */

    function loadShareData() {

        subHead.innerHTML =

            '<option value="">Select Share</option>';

        if (

            typeof shareData === "undefined" ||

            !Array.isArray(shareData)

        ) {

            return;

        }









        shareData.forEach(

            function (share) {

                const option =

                    document.createElement(

                        "option"

                    );

                option.value =

                    share.id;

                let display =

                    share.name || "";

                if (

                    share.kannada &&

                    share.kannada.trim() !== ""

                ) {

                    display +=

                        " - " +

                        share.kannada;

                }

                if (

                    share.faceValue !==

                    undefined

                ) {

                    display +=

                        " | Face Value: " +

                        share.faceValue;

                }

                option.textContent =

                    display;

                subHead.appendChild(

                    option

                );

            }

        );

    }









    /* =====================================================

       LOAD SAVING

       ===================================================== */

    function loadSavingData() {

        subHead.innerHTML =

            '<option value="">Select Saving / Deposit</option>';

        if (

            typeof depositData === "undefined" ||

            !Array.isArray(depositData)

        ) {

            return;

        }









        depositData.forEach(

            function (deposit) {

                const option =

                    document.createElement(

                        "option"

                    );

                option.value =

                    deposit.id;

                option.textContent =

                    (deposit.name || "") +

                    (

                        deposit.kannada

                            ? " - " +

                              deposit.kannada

                            : ""

                    );

                subHead.appendChild(

                    option

                );

            }

        );

    }









    /* =====================================================

       LOAD TERM

       ===================================================== */

    function loadTermData() {

        subHead.innerHTML =

            '<option value="">Select Term Deposit</option>';

        if (

            typeof termData === "undefined" ||

            !Array.isArray(termData)

        ) {

            return;

        }









        termData.forEach(

            function (term) {

                const option =

                    document.createElement(

                        "option"

                    );

                option.value =

                    term.id;

                option.textContent =

                    (term.name || "") +

                    (

                        term.kannada

                            ? " - " +

                              term.kannada

                            : ""

                    );

                subHead.appendChild(

                    option

                );

            }

        );

    }









    /* =====================================================

       LOAD CC

       ===================================================== */

    function loadCCData() {

        subHead.innerHTML =

            '<option value="">Select CC Deposit</option>';

        if (

            typeof ccData === "undefined" ||

            !Array.isArray(ccData)

        ) {

            return;

        }









        ccData.forEach(

            function (cc) {

                const option =

                    document.createElement(

                        "option"

                    );

                option.value =

                    cc.id;

                option.textContent =

                    (cc.name || "") +

                    (

                        cc.kannada

                            ? " - " +

                              cc.kannada

                            : ""

                    );

                subHead.appendChild(

                    option

                );

            }

        );

    }









    /* =====================================================

       SUB HEAD CHANGE

       ===================================================== */

    if (subHead) {

        subHead.addEventListener(

            "change",

            function () {

                const selectedId =

                    this.value;

                selectedInfo.value =

                    "";

                accountNo.value =

                    "";

                clearVoucher();









                if (!selectedId) {

                    return;

                }









                const head =

                    headAcc.value;









                /* =========================================

                   SHARE

                   ========================================= */

                if (

                    head === "1"

                ) {

                    const share =

                        findById(

                            shareData,

                            selectedId

                        );

                    if (share) {

                        selectedInfo.value =

                            (share.name || "") +

                            (

                                share.kannada

                                    ? " | " +

                                      share.kannada

                                    : ""

                            ) +

                            (

                                share.faceValue !==

                                undefined

                                    ? " | Face Value: " +

                                      share.faceValue

                                    : ""

                            );

                    }

                }









                /* =========================================

                   SAVING

                   ========================================= */

                else if (

                    head ===

                    "2"

                ) {

                    const deposit =

                        findById(

                            depositData,

                            selectedId

                        );

                    if (deposit) {

                        selectedInfo.value =

                            (deposit.name || "") +

                            (

                                deposit.kannada

                                    ? " | " +

                                      deposit.kannada

                                    : ""

                            );

                    }

                }









                /* =========================================

                   TERM

                   ========================================= */

                else if (

                    head ===

                    "3"

                ) {

                    const term =

                        findById(

                            termData,

                            selectedId

                        );

                    if (term) {

                        selectedInfo.value =

                            (term.name || "") +

                            (

                                term.kannada

                                    ? " | " +

                                      term.kannada

                                    : ""

                            );

                    }

                }









                /* =========================================

                   CC

                   ========================================= */

                else if (

                    head ===

                    "4"

                ) {

                    const cc =

                        findById(

                            ccData,

                            selectedId

                        );

                    if (cc) {

                        selectedInfo.value =

                            (cc.name || "") +

                            (

                                cc.kannada

                                    ? " | " +

                                      cc.kannada

                                    : ""

                            );

                    }

                }









                /* =========================================

                   ACCOUNT NUMBER

                   ========================================= */

                generateAccountNumber(

                    head,

                    selectedId

                );









                /* =========================================

                   AUTOMATIC VOUCHER

                   ========================================= */

                loadVoucherAutomatically();

            }

        );

    }









    /* =====================================================

       FIND BY ID

       ===================================================== */

    function findById(

        array,

        id

    ) {

        if (!Array.isArray(array)) {

            return null;

        }

        return array.find(

            function (item) {

                return String(item.id) ===

                    String(id);

            }

        ) || null;

    }









    /* =====================================================

       ACCOUNT NUMBER

       ===================================================== */

    function generateAccountNumber(head, subId) {

        if (!accountNo) {
            return;
        }

        if (!head || !subId) {
            accountNo.value = "";
            return;
        }

        if (
            head !== "1" &&
            head !== "2" &&
            head !== "3" &&
            head !== "4"
        ) {
            console.error(
                "Invalid Head ID:",
                head
            );
            return;
        }

        accountNo.value =
            "Loading...";

        if (cerno) {
            cerno.value = "";
        }

        const url =
            "new_sha_sb_td_cc_acc?getNextAccountNo=1" +
            "&headid=" +
            encodeURIComponent(head) +
            "&subheaid=" +
            encodeURIComponent(subId) +
            "&head=" +
            encodeURIComponent(head);

        fetch(
            url,
            {
                method: "GET",
                cache: "no-store"
            }
        )
        .then(
            function (response) {
                return response.text();
            }
        )
        .then(
            function (text) {

                let data;

                try {
                    data =
                        JSON.parse(text);
                } catch (e) {
                    throw new Error(
                        "Invalid JSON response from servlet: " +
                        text
                    );
                }

                if (data.error) {
                    throw new Error(
                        data.error
                    );
                }

                const nextAccount =
                    Number(
                        data.accountNo
                    );

                if (
                    !Number.isFinite(nextAccount) ||
                    nextAccount <= 0
                ) {
                    throw new Error(
                        "Invalid account number received: " +
                        data.accountNo
                    );
                }

                accountNo.value =
                    String(nextAccount);

                /* Generated DB number is the current valid number. */
                accountNo.dataset.lastValid =
                    String(nextAccount);

                if (
                    cerno &&
                    (
                        head === "3" ||
                        head === "4"
                    )
                ) {

                    const nextCertificate =
                        Number(
                            data.certificateNo
                        );

                    cerno.value =
                        (
                            Number.isFinite(
                                nextCertificate
                            ) &&
                            nextCertificate > 0
                        )
                            ? String(
                                nextCertificate
                            )
                            : "";
                }

                /*
                 * Keep the generated number as the
                 * current valid number.
                 */
                accountNo.dataset.lastValid =
                    String(nextAccount);

                savedAccount = {
                    head: head,
                    subHeadId: subId,
                    accountNo: String(nextAccount)
                };
            }
        )
        .catch(
            function (error) {

                console.error(
                    "ACCOUNT NUMBER ERROR:",
                    error
                );

                accountNo.value = "";

                if (cerno) {
                    cerno.value = "";
                }

                alert(
                    "Unable to fetch Account Number from database.\n\n" +
                    error.message
                );
            }
        );
    }


    /* =====================================================
       CHECK MANUAL ACCOUNT NUMBER
       ===================================================== */

    function checkManualAccountNumber() {

        if (!accountNo || !headAcc || !subHead) {
            return;
        }

        const value =
            accountNo.value.trim();

        const head =
            headAcc.value.trim();

        const subId =
            subHead.value.trim();

        if (!value) {
            return;
        }

        if (!/^\d+$/.test(value)) {

            alert(
                "Account Number must contain only numbers."
            );

            accountNo.value =
                accountNo.dataset.lastValid || "";

            return;
        }

        if (!head || !subId) {
            return;
        }

        fetch(
            "new_sha_sb_td_cc_acc?checkAccountNo=1" +
            "&head=" +
            encodeURIComponent(head) +
            "&subheaid=" +
            encodeURIComponent(subId) +
            "&accno=" +
            encodeURIComponent(value),
            {
                method: "GET",
                cache: "no-store"
            }
        )
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (data) {

                if (data.error) {
                    throw new Error(
                        data.error
                    );
                }

                if (data.exists === true) {

                    alert(
                        "Account Number " +
                        value +
                        " is already present for the selected Head and Sub Head."
                    );

                    accountNo.value =
                        accountNo.dataset.lastValid || "";

                    return;
                }

                /*
                 * Number is available.
                 */
                accountNo.dataset.lastValid =
                    value;

                if (savedAccount) {
                    savedAccount.accountNo =
                        value;
                }

                /*
                 * If customers were already added,
                 * update their account number also.
                 */
                customerList.forEach(
                    function (customer) {
                        customer.accountNo =
                            value;
                    }
                );

                if (customerTableBody) {

                    const rows =
                        customerTableBody
                            .querySelectorAll("tr");

                    rows.forEach(
                        function (row) {

                            const cells =
                                row.querySelectorAll(
                                    "td"
                                );

                            /*
                             * Account number is
                             * column 5 = index 4.
                             */
                            if (cells.length > 4) {
                                cells[4].textContent =
                                    value;
                            }
                        }
                    );
                }
            }
        )
        .catch(
            function (error) {

                console.error(
                    "ACCOUNT NUMBER CHECK ERROR:",
                    error
                );

                alert(
                    "Unable to check Account Number.\n\n" +
                    error.message
                );

                accountNo.value =
                    accountNo.dataset.lastValid || "";
            }
        );
    }


    if (accountNo) {

        /* Check only after the customer changes the account number.
         * Do not check on blur as well, because change + blur can send
         * two database requests at the same time and appear random.
         */
        accountNo.addEventListener(
            "change",
            checkManualAccountNumber
        );
    }


    /* CUSTOMER ID CHANGE */












    if (customerId) {

        customerId.addEventListener(

            "change",

            function () {

                const id =

                    this.value.trim();

                if (!id) {

                    if (customerName) {

                        customerName.value = "";

                    }

                    return;

                }

                findCustomer(

                    id,

                    customerName

                );

            }

        );

    }









    /* =====================================================

       GUARDIAN ID CHANGE

       ===================================================== */

    if (guardianId) {

        guardianId.addEventListener(

            "change",

            function () {

                const id =

                    this.value.trim();

                if (!id) {

                    if (guardianName) {

                        guardianName.value = "";

                    }

                    return;

                }

                findCustomer(

                    id,

                    guardianName

                );

            }

        );

    }









    /* =====================================================

       FIND CUSTOMER

       ===================================================== */

    function findCustomer(

        id,

        nameElement

    ) {

        if (!nameElement) {

            return;

        }

        /*

         * First search the customer list

         * already loaded from the database.

         */

        if (

            typeof customerData !== "undefined" &&

            Array.isArray(customerData)

        ) {

            const customer =

                customerData.find(

                    function (cus) {

                        return String(cus.id) ===

                            String(id);

                    }

                );

            if (customer) {

                nameElement.value =

                    customer.name || "";

                return;

            }

        }









        /*

         * If not found locally,

         * check through servlet.

         */

        fetch(

            "new_sha_sb_td_cc_acc?checkCustomerId=" +

            encodeURIComponent(id)

        )

        .then(

            function (response) {

                return response.text();

            }

        )

        .then(

            function (result) {

                result =

                    result.trim();

                if (

                    result !== "NOT_FOUND" &&

                    result !== "INVALID" &&

                    result !== "ERROR" &&

                    result !== ""

                ) {

                    nameElement.value =

                        result;

                } else {

                    nameElement.value =

                        "";

                    alert(

                        "Customer ID not found."

                    );

                }

            }

        )

        .catch(

            function (error) {

                console.error(

                    "Customer lookup error:",

                    error

                );

                nameElement.value =

                    "";

                alert(

                    "Unable to fetch customer details."

                );

            }

        );

    }









    /* =====================================================

       JOINT / SINGLE CHANGE

       ===================================================== */

       /* =====================================================

          JOINT / SINGLE CHANGE

          ===================================================== */

       if (joint) {

           joint.addEventListener(

               "change",

               function () {

                   if (this.checked) {

                       // JOINT

                       if (jointDropdown) {

                           jointDropdown.style.display = "block";

                       }

                       if (jointCustomer) {

                           jointCustomer.required = true;

                       }

                   } else {

                       // SINGLE

                       if (jointDropdown) {

                           jointDropdown.style.display = "none";

                       }

                       if (jointCustomer) {

                           jointCustomer.required = false;

                           jointCustomer.value = "";

                       }

                   }

               }

           );

       }









    /* =====================================================

       ADD CUSTOMER BUTTON

       ===================================================== */

    if (saveButton) {

        saveButton.addEventListener(

            "click",

            function (event) {

                event.preventDefault();

                addCustomer();

            }

        );

    }









	/* =====================================================

	   ADD CUSTOMER

	   ===================================================== */

	function addCustomer() {

	    const cusId =

	        customerId

	            ? customerId.value.trim()

	            : "";

	    const cusName =

	        customerName

	            ? customerName.value.trim()

	            : "";

	    const nom =

	        nominee

	            ? nominee.value.trim()

	            : "";

	    const rel =

	        relation

	            ? relation.value.trim()

	            : "";

	    const gurId =

	        guardianId

	            ? guardianId.value.trim()

	            : "";

	    const gurName =

	        guardianName

	            ? guardianName.value.trim()

	            : "";

	    const gurRel =

	        guardianRelation

	            ? guardianRelation.value.trim()

	            : "";

	    /* =========================================

	       VALIDATION

	       ========================================= */

	    if (!cusId) {

	        alert("Please enter Customer ID.");

	        if (customerId) {

	            customerId.focus();

	        }

	        return;

	    }

	    if (!cusName) {

	        alert("Please enter a valid Customer ID.");

	        if (customerId) {

	            customerId.focus();

	        }

	        return;

	    }

	    /* =========================================

	       DUPLICATE CUSTOMER CHECK

	       ========================================= */

	    const duplicate =

	        customerList.some(

	            function (customer) {

	                return String(customer.cusid)

	                    === String(cusId);

	            }

	        );

	    if (duplicate) {

	        alert("This customer is already added.");

	        return;

	    }

	    /* =========================================

	       SINGLE ACCOUNT

	       ========================================= */

	    if (

	        joint &&

	        !joint.checked &&

	        customerList.length >= 1

	    ) {

	        alert(

	            "Single account can have only one customer."

	        );

	        return;

	    }

	    /* =========================================

	       CUSTOMER SL NO

	       ========================================= */

	    customerSlNo++;

	    /* =========================================

	       GET ACCOUNT DETAILS

	       ========================================= */

	    const accountDateValue =

	        accountDate

	            ? accountDate.value

	            : "";

	    const headIdValue =

	        headAcc

	            ? headAcc.value

	            : "";

	    const headNameValue =

	        headAcc &&

	        headAcc.selectedIndex >= 0

	            ? headAcc.options[

	                headAcc.selectedIndex

	              ].text

	            : "";

	    const subHeadIdValue =

	        subHead

	            ? subHead.value

	            : "";

	    const subHeadNameValue =

	        subHead &&

	        subHead.selectedIndex >= 0

	            ? subHead.options[

	                subHead.selectedIndex

	              ].text

	            : "";

	    const accountNoValue =

	        accountNo

	            ? accountNo.value

	            : "";

	    const jointValue =

	        joint

	            ? joint.checked

	            : false;

	    let jointCustomerValue = "Single";

	    if (

	        joint &&

	        joint.checked &&

	        jointCustomer

	    ) {

	        if (

	            jointCustomer.selectedIndex >= 0

	        ) {

	            jointCustomerValue =

	                jointCustomer.options[

	                    jointCustomer.selectedIndex

	                ].text;

	        }

	    }

	    const directorIdValue =

	        director

	            ? director.value

	            : "";

	    let directorNameValue = "";

	    if (

	        director &&

	        director.selectedIndex >= 0

	    ) {

	        directorNameValue =

	            director.options[

	                director.selectedIndex

	            ].text;

	    }

	    const certificateNoValue =

	        cerno

	            ? cerno.value

	            : "";

	    /* =========================================

	       CREATE CUSTOMER OBJECT

	       ========================================= */

	    const customer = {

	        slNo:

	            customerSlNo,

	        accountDate:

	            accountDateValue,

	        headId:

	            headIdValue,

	        headName:

	            headNameValue,

	        subHeadId:

	            subHeadIdValue,

	        subHeadName:

	            subHeadNameValue,

	        accountNo:

	            accountNoValue,

	        joint:

	            jointValue,

	        jointCustomer:

	            jointCustomerValue,

	        directorId:

	            directorIdValue,

	        directorName:

	            directorNameValue,

	        cusid:

	            cusId,

	        cusname:

	            cusName,

	        nominee:

	            nom,

	        relation:

	            rel,

	        gurid:

	            gurId,

	        gurname:

	            gurName,

	        gurrel:

	            gurRel,

	        certificateNo:

	            certificateNoValue

	    };

	    /* =========================================

	       ADD TO CUSTOMER LIST

	       ========================================= */

	    customerList.push(customer);

	    /* =========================================

	       SHOW IN TABLE

	       ========================================= */

	    addCustomerRow(customer);

	    /* =========================================

	       SAVE ACCOUNT DETAILS

	       ========================================= */

	    savedAccount = {

	        head:

	            headAcc

	                ? headAcc.value

	                : "",

	        subHeadId:

	            subHead

	                ? subHead.value

	                : "",

	        accountNo:

	            accountNo

	                ? accountNo.value

	                : "",

	        joint:

	            joint

	                ? joint.checked

	                : false,

	        jointType:

	            jointCustomer

	                ? jointCustomer.value

	                : "",

	        director:

	            director

	                ? director.value

	                : "",

	        customerId:

	            cusId,

	        customerName:

	            cusName,

	        nominee:

	            nom,

	        relation:

	            rel,

	        guardianId:

	            gurId,

	        guardianName:

	            gurName,

	        guardianRelation:

	            gurRel,

	        certificateNo:

	            certificateNoValue

	    };

	    /* =========================================

	       CLEAR CUSTOMER INPUTS

	       ========================================= */

	    if (customerId) {

	        customerId.value = "";

	    }

	    if (customerName) {

	        customerName.value = "";

	    }

	    if (nominee) {

	        nominee.value = "";

	    }

	    if (relation) {

	        relation.value = "";

	    }

	    if (guardianId) {

	        guardianId.value = "";

	    }

	    if (guardianName) {

	        guardianName.value = "";

	    }

	    if (guardianRelation) {

	        guardianRelation.value = "";

	    }

	}



	/* =====================================================

	   ADD CUSTOMER ROW

	   ===================================================== */

	function addCustomerRow(customer) {

	    if (!customerTableBody) {

	        return;

	    }

	    const tr =

	        document.createElement("tr");

	    tr.dataset.slNo =

	        customer.slNo;

	    tr.innerHTML =

	        /* SL NO */

	        "<td>" +

	            escapeHtml(

	                customer.slNo || ""

	            ) +

	        "</td>" +

	        /* ACCOUNT DATE */

	        "<td>" +

	            escapeHtml(

	                customer.accountDate || ""

	            ) +

	        "</td>" +

	        /* HEAD OF ACCOUNT */

	        "<td>" +

	            escapeHtml(

	                customer.headName || ""

	            ) +

	        "</td>" +

	        /* SUB HEAD */

	        "<td>" +

	            escapeHtml(

	                customer.subHeadName || ""

	            ) +

	        "</td>" +

	        /* ACCOUNT NUMBER */

	        "<td>" +

	            escapeHtml(

	                customer.accountNo || ""

	            ) +

	        "</td>" +

	        /* JOINT CUSTOMER */

	        "<td>" +

	            escapeHtml(

	                customer.jointCustomer ||

	                "Single"

	            ) +

	        "</td>" +

	        /* DIRECTOR */

	        "<td>" +

	            escapeHtml(

	                customer.directorName || ""

	            ) +

	        "</td>" +

	        /* CUSTOMER ID */

	        "<td>" +

	            escapeHtml(

	                customer.cusid || ""

	            ) +

	        "</td>" +

	        /* CUSTOMER NAME */

	        "<td>" +

	            escapeHtml(

	                customer.cusname || ""

	            ) +

	            " " +

	            "<button " +

	                "type='button' " +

	                "class='remove-customer'>" +

	                "Remove" +

	            "</button>" +

	        "</td>" +

	        /* NOMINEE */

	        "<td>" +

	            escapeHtml(

	                customer.nominee || ""

	            ) +

	        "</td>" +

	        /* RELATION */

	        "<td>" +

	            escapeHtml(

	                customer.relation || ""

	            ) +

	        "</td>" +

	        /* GUARDIAN ID */

	        "<td>" +

	            escapeHtml(

	                customer.gurid || ""

	            ) +

	        "</td>" +

	        /* GUARDIAN NAME */

	        "<td>" +

	            escapeHtml(

	                customer.gurname || ""

	            ) +

	        "</td>" +

	        /* GUARDIAN RELATION */

	        "<td>" +

	            escapeHtml(

	                customer.gurrel || ""

	            ) +

	        "</td>" +

	        /* CERTIFICATE NO */

	        "<td>" +

	            escapeHtml(

	                customer.certificateNo || ""

	            ) +

	        "</td>";

	    customerTableBody.appendChild(tr);

	    /* =========================================

	       REMOVE BUTTON

	       ========================================= */

	    const removeButton =

	        tr.querySelector(

	            ".remove-customer"

	        );

	    if (removeButton) {

	        removeButton.addEventListener(

	            "click",

	            function () {

	                removeCustomer(

	                    customer.slNo

	                );

	            }

	        );

	    }

	}



    /* =====================================================

       REMOVE CUSTOMER

       ===================================================== */

    function removeCustomer(

        slNo

    ) {

        customerList =

            customerList.filter(

                function (customer) {

                    return Number(

                        customer.slNo

                    ) !== Number(slNo);

                }

            );









        if (customerTableBody) {

            const rows =

                customerTableBody

                    .querySelectorAll("tr");









            rows.forEach(

                function (row) {

                    if (

                        Number(

                            row.dataset.slNo

                        ) === Number(slNo)

                    ) {

                        row.remove();

                    }

                }

            );

        }

    }









    /* =====================================================

       ESCAPE HTML

       ===================================================== */

    function escapeHtml(

        value

    ) {

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









    /* =====================================================

       CLEAR VOUCHER

       ===================================================== */

    function clearVoucher() {

        voucherList = [];

        voucherSlNo = 0;









        if (voucherTableBody) {

            voucherTableBody.innerHTML =

                "";

        }









        if (voucherAmount) {

            voucherAmount.value =

                "";

        }









        if (voucherContra) {

            voucherContra.value =

                "";

        }

    }









    /* =====================================================

       LOAD VOUCHER AUTOMATICALLY

       ===================================================== */

    function loadVoucherAutomatically() {

        clearVoucher();

        const head =

            headAcc

                ? headAcc.value

                : "";

        const subId =

            subHead

                ? subHead.value

                : "";

        if (!head || !subId) {

            return;

        }









        /* =================================================

           FIND P/L HEAD + SUB HEAD NAME

           newproloshead + newprolossubhead

           ================================================= */

        function getProLossDetails(detail) {

            if (

                typeof proLossSubHeadData === "undefined" ||

                !Array.isArray(proLossSubHeadData)

            ) {

                return null;

            }

            return proLossSubHeadData.find(

                function (p) {

                    return String(p.heaid) ===

                               String(detail.heaid)

                        && String(p.subid) ===

                               String(detail.subid);

                }

            );

        }









        /* =================================================

           MEMBER SHARE

           ================================================= */

        if (head === "1") {

            if (

                typeof shareProData === "undefined" ||

                !Array.isArray(shareProData)

            ) {

                return;

            }

            const rows =

                shareProData.filter(

                    function (item) {

                        return String(item.shaid) ===

                               String(subId);

                    }

                );









            rows.forEach(

                function (detail) {

                    voucherSlNo++;

                    const pl =

                        getProLossDetails(detail);









                    const voucher = {

                        slNo:

                            voucherSlNo,

                        /* P/L MAIN HEAD NAME */

                        head:

                            pl

                                ? pl.heanam

                                : "",

                        /* P/L SUB HEAD NAME */

                        headName:

                            pl

                                ? pl.subnam

                                : "",

                        percentage:

                            parseFloat(

                                detail.per

                            ) || 0,

                        amount:

                            parseFloat(

                                detail.amount

                            ) || 0,

                        dbPercentage:

                            parseFloat(

                                detail.per

                            ) || 0,

                        dbAmount:

                            parseFloat(

                                detail.amount

                            ) || 0

                    };









                    voucherList.push(

                        voucher

                    );









                    addVoucherRow(

                        voucher

                    );

                }

            );

        }









        /* =================================================

           MEMBER SAVING

           ================================================= */

        else if (

            head ===

            "2"

        ) {

            if (

                typeof depositProData === "undefined" ||

                !Array.isArray(depositProData)

            ) {

                return;

            }









            const rows =

                depositProData.filter(

                    function (item) {

                        return String(item.depid) ===

                               String(subId);

                    }

                );









            rows.forEach(

                function (detail) {

                    voucherSlNo++;

                    const pl =

                        getProLossDetails(detail);









                    const voucher = {

                        slNo:

                            voucherSlNo,

                        /* P/L MAIN HEAD NAME */

                        head:

                            pl

                                ? pl.heanam

                                : "",

                        /* P/L SUB HEAD NAME */

                        headName:

                            pl

                                ? pl.subnam

                                : "",

                        percentage:

                            parseFloat(

                                detail.per

                            ) || 0,

                        amount:

                            parseFloat(

                                detail.amount

                            ) || 0,

                        dbPercentage:

                            parseFloat(

                                detail.per

                            ) || 0,

                        dbAmount:

                            parseFloat(

                                detail.amount

                            ) || 0

                    };









                    voucherList.push(

                        voucher

                    );









                    addVoucherRow(

                        voucher

                    );

                }

            );

        }









        /* =================================================

           MEMBER TERM

           ================================================= */

        else if (

            head ===

            "3"

        ) {

            const term =

                findById(

                    typeof termData !== "undefined"

                        ? termData

                        : [],

                    subId

                );









            if (term) {

                voucherSlNo++;









                const voucher = {

                    slNo:

                        voucherSlNo,

                    head:

                        head,

                    headName:

                        term.name || "",

                    percentage:

                        0,

                    amount:

                        0,

                    dbPercentage:

                        0,

                    dbAmount:

                        0

                };









                voucherList.push(

                    voucher

                );









                addVoucherRow(

                    voucher

                );

            }

        }









        /* =================================================

           MEMBER CC

           ================================================= */

        else if (

            head ===

            "4"

        ) {

            const cc =

                findById(

                    typeof ccData !== "undefined"

                        ? ccData

                        : [],

                    subId

                );









            if (cc) {

                voucherSlNo++;









                const voucher = {

                    slNo:

                        voucherSlNo,

                    head:

                        head,

                    headName:

                        cc.name || "",

                    percentage:

                        0,

                    amount:

                        0,

                    dbPercentage:

                        0,

                    dbAmount:

                        0

                };









                voucherList.push(

                    voucher

                );









                addVoucherRow(

                    voucher

                );

            }

        }

    }









    /* =====================================================

       ADD VOUCHER ROW

       ===================================================== */

    function addVoucherRow(voucher) {

        if (!voucherTableBody) {
            return;
        }

        const tr =
            document.createElement("tr");

        tr.dataset.slNo =
            voucher.slNo;

        /*
         * DATABASE RULE
         *
         * DB Percentage > 0
         *     Percentage = ENABLED
         *     Amount     = DISABLED
         *
         * DB Percentage = 0
         *     Percentage = DISABLED
         *     Amount     = ENABLED
         *
         * IMPORTANT:
         * The initial calculated amount is ALWAYS the
         * amount fetched from the database.
         * It must not be recalculated on page load.
         */

        const dbPercentage =
            Number(
                (
                    voucher.dbPercentage !== undefined &&
                    voucher.dbPercentage !== null
                )
                    ? voucher.dbPercentage
                    : (
                        voucher.percentage !== undefined &&
                        voucher.percentage !== null
                    )
                        ? voucher.percentage
                        : 0
            );

        const percentageBased =
            dbPercentage > 0;

        const percentageValue =
            Number(
                voucher.percentage || 0
            ).toFixed(2);

        const amountValue =
            Number(
                voucher.amount || 0
            ).toFixed(2);

        const calculatedValue =
            amountValue;

        tr.innerHTML =
            "<td>" +
                voucher.slNo +
            "</td>" +

            "<td>" +
                escapeHtml(
                    voucher.head || ""
                ) +
            "</td>" +

            "<td>" +
                "<input " +
                    "type='text' " +
                    "class='voucher-head-name' " +
                    "value='" +
                    escapeHtml(
                        voucher.headName || ""
                    ) +
                    "' " +
                    "readonly " +
                    "style='width:200px;'>" +
            "</td>" +

            "<td>" +
                "<input " +
                    "type='number' " +
                    "class='voucher-percentage' " +
                    "step='0.01' " +
                    "min='0' " +
                    "value='" +
                    percentageValue +
                    "' " +
                    (
                        percentageBased
                            ? ""
                            : "disabled "
                    ) +
                    "style='width:100px;'>" +
            "</td>" +

            "<td>" +
                "<input " +
                    "type='number' " +
                    "class='voucher-amount' " +
                    "step='0.01' " +
                    "min='0' " +
                    "value='" +
                    amountValue +
                    "' " +
                    (
                        percentageBased
                            ? "disabled "
                            : ""
                    ) +
                    "style='width:120px;'>" +
            "</td>" +

            "<td>" +
                "<input " +
                    "type='number' " +
                    "class='voucher-calculated-amount' " +
                    "step='0.01' " +
                    "min='0' " +
                    "value='" +
                    calculatedValue +
                    "' " +
                    "readonly " +
                    "style='width:120px;'>" +
            "</td>";

        voucherTableBody.appendChild(tr);

        const percentageInput =
            tr.querySelector(
                ".voucher-percentage"
            );

        const amountInput =
            tr.querySelector(
                ".voucher-amount"
            );

        const calculatedInput =
            tr.querySelector(
                ".voucher-calculated-amount"
            );

        /*
         * INITIAL VALUE:
         * Keep exactly the amount received from DB.
         */
        if (calculatedInput) {
            calculatedInput.value =
                Number(
                    voucher.amount || 0
                ).toFixed(2);
        }

        /*
         * PERCENTAGE CHANGE
         */
        if (percentageInput) {

            percentageInput.addEventListener(
                "input",
                function () {

                    voucher.percentage =
                        parseFloat(
                            this.value
                        ) || 0;

                    if (percentageBased) {

                        voucher.amount =
                            calculatePercentageAmount(
                                voucher.percentage
                            );

                        if (amountInput) {

                            amountInput.value =
                                voucher.amount.toFixed(2);

                            amountInput.disabled =
                                true;
                        }

                        if (calculatedInput) {

                            calculatedInput.value =
                                voucher.amount.toFixed(2);
                        }

                        updateVoucherTotal();
                    }
                }
            );
        }

        /*
         * MANUAL AMOUNT CHANGE
         */
        if (amountInput) {

            amountInput.addEventListener(
                "input",
                function () {

                    if (percentageBased) {
                        return;
                    }

                    voucher.amount =
                        parseFloat(
                            this.value
                        ) || 0;

                    if (calculatedInput) {

                        calculatedInput.value =
                            voucher.amount.toFixed(2);
                    }

                    updateVoucherTotal();
                }
            );
        }

        /*
         * SHOW DATABASE TOTAL IMMEDIATELY.
         */
        updateVoucherTotal();
    }


    /* =====================================================
       CALCULATE PERCENTAGE AMOUNT
       ===================================================== */

function calculatePercentageAmount(

        percentage

    ) {

        const baseAmountInput =

            document.getElementById(

                "percentageBaseAmount"

            );









        const baseAmount =

            baseAmountInput

                ? parseFloat(

                    baseAmountInput.value

                  ) || 0

                : 0;









        const per =

            parseFloat(

                percentage

            ) || 0;









        return (

            baseAmount *

            per /

            100

        );

    }









    /* =====================================================

       REFRESH PERCENTAGE VOUCHER AMOUNTS

       ===================================================== */

    function refreshPercentageVoucherAmounts() {

        voucherList.forEach(

            function (voucher) {

                const dbPercentage =

                    Number(

    					(

    					    voucher.dbPercentage !== undefined &&

    					    voucher.dbPercentage !== null

    					        ? voucher.dbPercentage

    					        : (

    					            voucher.percentage !== undefined &&

    					            voucher.percentage !== null

    					                ? voucher.percentage

    					                : 0

    					        )

    					)

                    );









                /*

                 * Direct amount rows

                 * are not changed.

                 */

                if (

                    dbPercentage <= 0

                ) {

                    return;

                }









                /*

                 * Recalculate amount

                 * from percentage.

                 */

                voucher.amount =

                    calculatePercentageAmount(

                        voucher.percentage

                    );

            }

        );









        /* =================================================

           UPDATE TABLE VALUES

           ================================================= */

        if (

            voucherTableBody

        ) {

            const rows =

                voucherTableBody

                    .querySelectorAll(

                        "tr"

                    );









            rows.forEach(

                function (tr) {

                    const slNo =

                        Number(

                            tr.dataset.slNo

                        );









                    const voucher =

                        voucherList.find(

                            function (item) {

                                return Number(

                                    item.slNo

                                ) === slNo;

                            }

                        );









                    if (!voucher) {

                        return;

                    }









                    const dbPercentage =

                        Number(

    						(

    						    voucher.dbPercentage !== undefined &&

    						    voucher.dbPercentage !== null

    						        ? voucher.dbPercentage

    						        : (

    						            voucher.percentage !== undefined &&

    						            voucher.percentage !== null

    						                ? voucher.percentage

    						                : 0

    						        )

    						)

                        );









                    if (

                        dbPercentage <= 0

                    ) {

                        return;

                    }









                    const amountInput =

                        tr.querySelector(

                            ".voucher-amount"

                        );









                    if (

                        amountInput

                    ) {

                        amountInput.value =

                            Number(

                                voucher.amount ||

                                0

                            ).toFixed(2);









                        amountInput.disabled =

                            true;

                    }

                }

            );

        }









        updateVoucherTotal();

    }









    /* =====================================================

       EXTERNAL BASE AMOUNT CHANGE

       ===================================================== */

    const percentageBaseAmount =

        document.getElementById(

            "percentageBaseAmount"

        );









    if (

        percentageBaseAmount

    ) {

        percentageBaseAmount.addEventListener(

            "input",

            function () {

                refreshPercentageVoucherAmounts();

            }

        );

    }









	/* =====================================================

	   UPDATE VOUCHER TOTAL

	   ===================================================== */

	function updateVoucherTotal() {

	    let total = 0;

	    if (!voucherTableBody) {

	        return;

	    }

	    const rows =

	        voucherTableBody.querySelectorAll("tr");

	    rows.forEach(function (row) {

	        const calculatedInput =

	            row.querySelector(

	                ".voucher-calculated-amount"

	            );

	        if (calculatedInput) {

	            total +=

	                parseFloat(

	                    calculatedInput.value

	                ) || 0;

	        } else {

	            const oldCalculatedInput =

	                row.querySelector(

	                    ".voucherCalculatedAmount"

	                );

	            if (oldCalculatedInput) {

	                total +=

	                    parseFloat(

	                        oldCalculatedInput.value

	                    ) || 0;

	            }

	        }

	    });

	    /* =========================================

	       SHOW TOTAL

	       ========================================= */

	    if (voucherAmount) {

	        voucherAmount.value =

	            total.toFixed(2);

	    }

	    /* =========================================

	       CONTRA

	       ========================================= */

	    if (voucherContra) {

	        voucherContra.value =

	            total.toFixed(2);

	    }

	}



	/* =====================================================

	   VOUCHER TABLE MANUAL UPDATE

	   ===================================================== */

	if (voucherTableBody) {

	    voucherTableBody.addEventListener(

	        "input",

	        function (event) {

	            const target =

	                event.target;

	            const row =

	                target.closest("tr");

	            if (!row) {

	                return;

	            }

	            const slNo =

	                Number(

	                    row.dataset.slNo

	                );

	            const voucher =

	                voucherList.find(

	                    function (item) {

	                        return Number(

	                            item.slNo

	                        ) === slNo;

	                    }

	                );

	            if (!voucher) {

	                return;

	            }



	            /* =========================================

	               ENTER AMOUNT

	               ========================================= */

	            if (

	                target.classList.contains(

	                    "voucher-amount"

	                )

	            ) {

	                const dbPercentage =

	                    Number(

	                        voucher.dbPercentage ||

	                        0

	                    );

	                /*

	                 * Only manually entered amount

	                 * when database percentage is 0.

	                 */

	                if (dbPercentage <= 0) {

	                    voucher.amount =

	                        parseFloat(

	                            target.value

	                        ) || 0;

	                    const calculatedInput =

	                        row.querySelector(

	                            ".voucher-calculated-amount"

	                        );

	                    if (calculatedInput) {

	                        calculatedInput.value =

	                            voucher.amount.toFixed(2);

	                    }

	                    const oldCalculatedInput =

	                        row.querySelector(

	                            ".voucherCalculatedAmount"

	                        );

	                    if (oldCalculatedInput) {

	                        oldCalculatedInput.value =

	                            voucher.amount.toFixed(2);

	                    }

	                    updateVoucherTotal();

	                }

	            }

	        }

	    );



	    /* =================================================

	       PERCENTAGE CHANGE

	       Update ONLY after percentage is changed

	       ================================================= */

	    voucherTableBody.addEventListener(

	        "change",

	        function (event) {

	            const target =

	                event.target;

	            if (

	                !target.classList.contains(

	                    "voucher-percentage"

	                )

	            ) {

	                return;

	            }

	            const row =

	                target.closest("tr");

	            if (!row) {

	                return;

	            }

	            const slNo =

	                Number(

	                    row.dataset.slNo

	                );

	            const voucher =

	                voucherList.find(

	                    function (item) {

	                        return Number(

	                            item.slNo

	                        ) === slNo;

	                    }

	                );

	            if (!voucher) {

	                return;

	            }



	            /* =========================================

	               GET DATABASE PERCENTAGE

	               ========================================= */

	            const dbPercentage =

	                Number(

	                    voucher.dbPercentage ||

	                    0

	                );



	            if (dbPercentage > 0) {

	                voucher.percentage =

	                    parseFloat(

	                        target.value

	                    ) || 0;



	                /* =====================================

	                   CALCULATE NEW AMOUNT

	                   ===================================== */

	                voucher.amount =

	                    calculatePercentageAmount(

	                        voucher.percentage

	                    );



	                /* =====================================

	                   UPDATE ENTER AMOUNT

	                   ===================================== */

	                const amountInput =

	                    row.querySelector(

	                        ".voucher-amount"

	                    );

	                if (amountInput) {

	                    amountInput.value =

	                        voucher.amount.toFixed(2);

	                    amountInput.disabled =

	                        true;

	                }



	                /* =====================================

	                   UPDATE CALCULATED AMOUNT

	                   ===================================== */

	                const calculatedInput =

	                    row.querySelector(

	                        ".voucher-calculated-amount"

	                    );

	                if (calculatedInput) {

	                    calculatedInput.value =

	                        voucher.amount.toFixed(2);

	                }



	                const oldCalculatedInput =

	                    row.querySelector(

	                        ".voucherCalculatedAmount"

	                    );

	                if (oldCalculatedInput) {

	                    oldCalculatedInput.value =

	                        voucher.amount.toFixed(2);

	                }



	                /* =====================================

	                   NOW UPDATE TOTAL

	                   ===================================== */

	                updateVoucherTotal();

	            }

	        }

	    );

	}



	/* =====================================================

	   INITIAL TOTAL FROM DATABASE

	   ===================================================== */

	updateVoucherTotal();

        /* =====================================================

           FINAL SAVE

           ===================================================== */

        if (finalSaveButton) {

            finalSaveButton.addEventListener(

                "click",

                function () {

                    /* =========================================

                       CUSTOMER

                       ========================================= */

                    if (

                        !savedAccount ||

                        customerList.length === 0

                    ) {

                        alert(

                            "Please add customer details first."

                        );

                        return;

                    }









                    /* =========================================

                       JOINT

                       ========================================= */

                    if (

                        savedAccount.joint

                    ) {

                        if (

                            customerList.length < 2

                        ) {

                            alert(

                                "Joint account requires minimum 2 customers."

                            );

                            return;

                        }

                    }









                    /* =========================================

                       SINGLE

                       ========================================= */

                    else {

                        if (

                            customerList.length !== 1

                        ) {

                            alert(

                                "Single account must have only 1 customer."

                            );

                            return;

                        }

                    }
/* =========================================

                       HIDDEN DATA

                       ========================================= */

                    addHiddenField(

                        "savedHead",

                        savedAccount.head

                    );









                    addHiddenField(

                        "savedSubHead",

                        savedAccount.subHeadId

                    );









                    addHiddenField(

                        "savedAccountNo",

                        savedAccount.accountNo

                    );









                    addHiddenField(

                        "savedJoint",

                        savedAccount.joint === true ? "true" : "false"

                    );









                    addHiddenField(

                        "savedJointType",

                        savedAccount.jointType

                    );









                    addHiddenField(

                        "savedDirector",

                        savedAccount.director

                    );









                    addHiddenField(

                        "savedCustomerId",

                        savedAccount.customerId

                    );









                    addHiddenField(

                        "savedCustomerName",

                        savedAccount.customerName

                    );









                    /* =========================================

                       ALL CUSTOMER DETAILS

                       ========================================= */

                    addHiddenField(

                        "customerData",

                        JSON.stringify(

                            customerList

                        )

                    );









                    addHiddenField(

                        "savedNominee",

                        savedAccount.nominee

                    );









                    addHiddenField(

                        "savedRelation",

                        savedAccount.relation

                    );









                    addHiddenField(

                        "savedGuardianId",

                        savedAccount.guardianId

                    );









                    addHiddenField(

                        "savedGuardianName",

                        savedAccount.guardianName

                    );









                    addHiddenField(

                        "savedGuardianRelation",

                        savedAccount.guardianRelation

                    );









                    addHiddenField(

                        "savedCertificateNo",

                        savedAccount.certificateNo

                    );









                    /* =========================================

                       ALL VOUCHER DETAILS

                       INCLUDING EDITED VALUES

                       ========================================= */

                    addHiddenField(

                        "voucherData",

                        JSON.stringify(

                            voucherList

                        )

                    );









                    /* =========================================

                       SUBMIT

                       ========================================= */

                    form.submit();

                }

            );

        }









        /* =====================================================

           HIDDEN FIELD

           ===================================================== */

        function addHiddenField(

            name,

            value

        ) {

            let field =

                form.querySelector(

                    'input[name="' +

                    name +

                    '"]'

                );









            if (!field) {

                field =

                    document.createElement(

                        "input"

                    );

                field.type =

                    "hidden";

                field.name =

                    name;

                form.appendChild(

                    field

                );

            }









            field.value =

                value == null

                    ? ""

                    : value;

        }









        /* =====================================================

           RESET

           ===================================================== */

        if (resetButton) {

            resetButton.addEventListener(

                "click",

                function () {

                    form.reset();









                    subHead.innerHTML =

                        '<option value="">Select Sub Head</option>';









                    selectedInfo.value =

                        "";









                    accountNo.value =

                        "";









                    if (customerName) {

                        customerName.value =

                            "";

                    }









                    if (guardianName) {

                        guardianName.value =

                            "";

                    }









                    if (jointDropdown) {

                        jointDropdown.style.display =

                            "none";

                    }









                    if (certificateRow) {

                        certificateRow.style.display =

                            "none";

                    }









                    if (jointCustomer) {

                        jointCustomer.required =

                            false;

                    }









                    if (cerno) {

                        cerno.required =

                            false;

                    }









                    if (customerTableBody) {

                        customerTableBody.innerHTML =

                            "";

                    }









                    clearVoucher();









                    customerSlNo =

                        0;









                    voucherSlNo =

                        0;









                    savedAccount =

                        null;









                    customerList =

                        [];









                    voucherList =

                        [];

                }

            );

        }









        /* =====================================================

           EXIT

           ===================================================== */

        if (exitButton) {

            exitButton.addEventListener(

                "click",

                function () {

                    window.history.back();

                }

            );

        }









        /* =====================================================

           ESCAPE HTML

           ===================================================== */

        function escapeHtml(

            value

        ) {

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

    });