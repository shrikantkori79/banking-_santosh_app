
<%@page import="com.Bank.Bean.masdirBean"%>
<%@page import="java.util.List"%>
<%@page import="java.sql.ResultSet"%>
<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>New Customer</title>

<link rel="stylesheet"
      href="./newcus.css">

</head>


<body>

<%
List<masdirBean> list=  (List<masdirBean>)request.getAttribute("dir");
%>


<form class="customer-form"
      action="newcus"
      method="post"
      enctype="multipart/form-data"
      id="customerForm">


<!-- =====================================================
     MAIN CARDS
     ===================================================== -->

<div class="cards">


<!-- =====================================================
     HEADER
     ===================================================== -->

<nav class="header-customer">

    <div class="header-main">

        <div class="header-left">

            <div class="header-img">

                <img src="<%=request.getContextPath()%>/images/facelogo.png"
                     alt="face">

            </div>


            <div class="head-line">

                <h2>New Customer</h2>

                <h5>Customer Information</h5>

            </div>

        </div>


        <div class="nav-actions">


            <!-- =================================================
                 PHOTO
                 ================================================= -->

            <label class="nav-btn">

                <div id="photoIcon"
                     class="upload-icon">
                    📷
                </div>

                <span class="upload-text">

                    <h2>Upload Photo</h2>

                    <h6>JPG, PNG (Max 2MB)</h6>

                </span>


                <input type="file"
                       name="photo"
                       id="photo"
                       accept="image/jpeg,image/png"
                       style="display:none;">


                <!-- PHOTO PREVIEW -->

                <img id="photoPreview"
                     src=""
                     alt="Uploaded Photo"
                     style="display:none;
                            width:100px;
                            height:100px;
                            object-fit:cover;">

            </label>



            <!-- =================================================
                 SIGNATURE
                 ================================================= -->

            <label class="nav-btn">

                <div id="signatureIcon"
                     class="upload-icon">
                    ✍️
                </div>

                <span class="upload-text">

                    <h2>Signature</h2>

                    <h6>JPG, PNG (Max 2MB)</h6>

                </span>


                <input type="file"
                       name="signature"
                       id="signature"
                       accept="image/jpeg,image/png"
                       style="display:none;">


                <!-- SIGNATURE PREVIEW -->

                <img id="signaturePreview"
                     src=""
                     alt="Uploaded Signature"
                     style="display:none;
                            width:160px;
                            height:80px;
                            object-fit:contain;">

            </label>


        </div>

    </div>


    <div class="upload-message"
         aria-live="polite">
    </div>

</nav>



<!-- =====================================================
     3 STEP FORM PROGRESS
     ===================================================== -->

<div class="step-progress">


    <div class="progress-step active"
         id="progressStep1">

        <div class="step-number">
            1
        </div>

        <div class="step-title">
            Personal Details
        </div>

    </div>


    <div class="progress-line"
         id="progressLine1">
    </div>


    <div class="progress-step"
         id="progressStep2">

        <div class="step-number">
            2
        </div>

        <div class="step-title">
            Introducer Details
        </div>

    </div>


    <div class="progress-line"
         id="progressLine2">
    </div>


    <div class="progress-step"
         id="progressStep3">

        <div class="step-number">
            3
        </div>

        <div class="step-title">
            KYC Verification
        </div>

    </div>

</div>



<!-- =====================================================
     STEP 1
     PERSONAL + ADDRESS
     ===================================================== -->

<div class="form-step active"
     id="step1">


<div class="card">


<div class="lines">

    <h3>Personal Details</h3>

    <h5>
        Please enter the personal information of the customer
    </h5>

</div>



<!-- =================================================
     CUSTOMER ID / DOB / NAME
     ================================================= -->

<div class="row">


    <!-- CUSTOMER ID -->

    <div class="field">

        <label>

            Customer ID (CID)

            <span class="required">*</span>

        </label>


        <input type="number"
               name="cusid"
               id="cusid"
               value="<%=request.getAttribute("nextCusId")%>"
               required>

    </div>



    <!-- DATE OF BIRTH -->

    <div class="field">

        <label>

            Date of Birth

            <span class="required">*</span>

        </label>


        <input type="date"
               name="date"
               required>

    </div>



    <!-- CUSTOMER NAME -->

    <div class="field">

        <label>

            Full Name

            <span class="required">*</span>

        </label>


        <input type="text"
               name="name"
               id="name"
               placeholder="Enter full name"
               required>

    </div>


</div>



<!-- =================================================
     KANNADA NAME / PLACE / QUALIFICATION
     ================================================= -->

<div class="row">


    <!-- KANNADA NAME -->

    <div class="field">

        <label>
            Kannada Name
        </label>


        <input type="text"
               name="kndname"
               placeholder="Enter Kannada name">

    </div>



    <!-- =================================================
         PLACE
         ================================================= -->

    <div class="field">

        <label>

            Place

            <span class="required">*</span>

        </label>


       <div class="master-field-row">


            <select name="place"
                    id="place"
                    required
                    style="flex:1;">

                <option value="">
                    Select the place
                </option>


                <%

                ResultSet rs =
                    (ResultSet)request.getAttribute("rs");

                if(rs != null){

                    while(rs.next()){

                %>

                <option value="<%=rs.getInt(1)%>">
                    <%=rs.getString(2)%>
                </option>

                <%

                    }

                } else {

                %>

                <option value="">
                    data is not found
                </option>

                <%

                }

                %>

            </select>


            <button type="button"
             class="master-add-btn"
                    onclick="openMasterModal('place')"
                   
                    ">
                + Add
            </button>


        </div>

    </div>



    <!-- =================================================
         QUALIFICATION
         ================================================= -->

    <div class="field">

        <label>

            Qualification

            <span class="required">*</span>

        </label>


       <div class="master-field-row">


            <select name="qualifaction"
                    id="qualification"
                    required
                    style="flex:1;">

                <option value="">
                    Select the Qualification
                </option>


                <%

                ResultSet qu1 =
                    (ResultSet)request.getAttribute("nq1");

                if(qu1 != null){

                    while(qu1.next()){

                %>

                <option value="<%=qu1.getInt(1)%>">
                    <%=qu1.getString(2)%>
                </option>

                <%

                    }

                } else {

                %>

                <option value="">
                    data is not found
                </option>

                <%

                }

                %>

            </select>


            <button type="button"
             class="master-add-btn"
                    onclick="openMasterModal('qualification')"
                   
                    ">
                + Add
            </button>


        </div>

    </div>


</div>



<!-- =================================================
     CASTE / OCCUPATION / SUB CASTE
     ================================================= -->

<div class="row">


    <!-- =================================================
         CASTE
         ================================================= -->

    <div class="field">

        <label>

            Cast

            <span class="required">*</span>

        </label>


      <div class="master-field-row">


            <select name="cast"
                    id="caste"
                    required
                    style="flex:1;">

                <option value="">
                    Select the caste
                </option>


                <%

                ResultSet cst =
                    (ResultSet)request.getAttribute("cat");

                if(cst != null){

                    while(cst.next()){

                %>

                <option value="<%=cst.getInt(1)%>">
                    <%=cst.getString(2)%>
                </option>

                <%

                    }

                } else {

                %>

                <option value="">
                    data is not found
                </option>

                <%

                }

                %>

            </select>


            <button type="button"
             class="master-add-btn"
                    onclick="openMasterModal('caste')"
                   
                    ">
                + Add
            </button>


        </div>

    </div>



    <!-- =================================================
         OCCUPATION
         ================================================= -->

    <div class="field">

        <label>

            Occupation

            <span class="required">*</span>

        </label>


      <div class="master-field-row">


            <select name="occupactiopn"
                    id="occupation"
                    required
                    style="flex:1;">

                <option value="">
                    Select the occupation
                </option>


                <%

                ResultSet occ =
                    (ResultSet)request.getAttribute("occ1");

                if(occ != null){

                    while(occ.next()){

                %>

                <option value="<%=occ.getInt(1)%>">
                    <%=occ.getString(2)%>
                </option>

                <%

                    }

                } else {

                %>

                <option value="">
                    data is not found
                </option>

                <%

                }

                %>

            </select>


            <button type="button"
             class="master-add-btn"
                    onclick="openMasterModal('occupation')"
                    
                    ">
                + Add
            </button>


        </div>

    </div>



    <!-- =================================================
         SUB CASTE
         ================================================= -->

    <div class="field">

        <label>

            Sub Cast

            <span class="required">*</span>

        </label>


        <div class="master-field-row">


            <select name="subcaste"
                    id="subcaste"
                    required
                    style="flex:1;">

                <option value="">
                    Select sub cast
                </option>


                <%

                ResultSet rs3 =
                    (ResultSet)request.getAttribute("subcat");

                if(rs3 != null){

                    while(rs3.next()){

                %>

                <option value="<%=rs3.getInt(1)%>">
                    <%=rs3.getString(2)%>
                </option>

                <%

                    }

                } else {

                %>

                <option value="">
                    data is not found
                </option>

                <%

                }

                %>

            </select>


            <button type="button"
             class="master-add-btn"
                    onclick="openMasterModal('subcaste')"
                   
                    ">
                + Add
            </button>


        </div>

    </div>


</div>



<!-- =================================================
     GENDER / CONTACT / EMAIL
     ================================================= -->

<div class="row">


    <!-- GENDER -->

    <div class="field">

        <label>

            Gender

            <span class="required">*</span>

        </label>


        <select name="gender"
                required>

            <option value="1">
                Male
            </option>

            <option value="2">
                Female
            </option>

            <option value="3">
                Other
            </option>

        </select>

    </div>



    <!-- CONTACT -->

    <div class="field">

        <label>

            Mobile Number

            <span class="required">*</span>

        </label>


        <input type="number"
               name="cont"
               placeholder="Enter mobile number"
               required>

    </div>



    <!-- EMAIL -->

    <div class="field">

        <label>
            Email
        </label>


        <input type="text"
               name="email"
               placeholder="Enter email">

    </div>


</div>



<!-- =================================================
     ADDRESS DETAILS
     ================================================= -->

<div class="lines">

    <h3>Address Details</h3>

    <h5>
        Please enter the address information
    </h5>

</div>



<div class="row">


    <div class="field">

        <label>

            Address Line 1

            <span class="required">*</span>

        </label>


        <input type="text"
               name="add1"
               placeholder="Enter address line 1"
               required>

    </div>



    <div class="field">

        <label>
            Address Line 2
        </label>


        <input type="text"
               name="add2"
               placeholder="Enter address line 2">

    </div>



    <div class="field">

        <label>
            Address Line 3
        </label>


        <input type="text"
               name="add3"
               placeholder="Enter address line 3">

    </div>


</div>



<!-- =================================================
     PIN CODE
     ================================================= -->

<div class="row">


    <div class="field">

        <label>

            Pin Code

            <span class="required">*</span>

        </label>


        <input type="number"
               name="pincod"
               placeholder="Enter Pin Code"
               required>

    </div>


</div>



<!-- =================================================
     STEP 1 BUTTON
     ================================================= -->

<div class="button-row">


    <button type="button"
            class="btn cancel"
            onclick="cancelForm()">

        Cancel

    </button>


    <button type="button"
            class="btn next"
            onclick="nextStep(2)">

        Next

    </button>


</div>


</div>

</div>



<!-- =====================================================
     STEP 2
     INTRODUCER DETAILS
     ===================================================== -->

<div class="form-step"
     id="step2">


<div class="card">


<div class="lines">

    <h3>Introducer Details</h3>

    <h5>
        Please enter the introducer information
    </h5>

</div>



<!-- =================================================
     DIRECTOR / INTRODUCER ID / INTRODUCER NAME
     ================================================= -->

<div class="row">


    <!-- DIRECTOR -->

    <div class="field">

        <label>

            Director

            <span class="required">*</span>

        </label>


        <select name="dir"
                required>

            <option value="">
                Select the director
            </option>


            <%

         //  ResultSet rs4 =
           //     (ResultSet)request.getAttribute("dir");

//            if(rs4 != null){
//
  //              while(rs4.next()){
	  
	  if(list !=null){
		  for(masdirBean mtn:list){
			  
		
	  

            %>

            <option value="<%=mtn.getId()%>"
            data-dirname="<%=mtn.getDirnam()%>">
                <%=mtn.getDirnam()%>
            </option>

            <%

                }

            } else {

            %>

            <option value="">
                data is not found
            </option>

            <%

            }

            %>

        </select>

    </div>



    <!-- INTRODUCER ID -->

    <div class="field">

        <label>

            Introducer ID

            <span class="required">*</span>

        </label>


        <input type="number"
               id="indid"
               name="id"
               oninput="getIntroducerName()"
               required>

    </div>



    <!-- INTRODUCER NAME -->

    <div class="field">

        <label>
            Introducer Name
        </label>


        <input type="text"
               id="indname"
               readonly>

    </div>


</div>



<!-- =================================================
     RELATION / NOMINEE
     ================================================= -->

<div class="row two-col">


    <div class="field">

        <label>

            Relation

            <span class="required">*</span>

        </label>


        <input type="text"
               name="reon"
               placeholder="Enter relation"
               required>

    </div>



    <div class="field">

        <label>

            Nominee

            <span class="required">*</span>

        </label>


        <input type="text"
               name="nomi"
               placeholder="Enter nominee"
               required>

    </div>


</div>



<!-- =================================================
     STEP 2 BUTTONS
     ================================================= -->

<div class="button-row">


    <button type="button"
            class="btn back"
            onclick="previousStep(1)">

        Back

    </button>


    <button type="button"
            class="btn next"
            onclick="nextStep(3)">

        Next

    </button>


</div>


</div>

</div>



<!-- =====================================================
     STEP 3
     MULTIPLE KYC
     ===================================================== -->

<div class="form-step"
     id="step3">


<div class="card">


<div class="lines">

    <h3>KYC Verification</h3>

    <h5>
        Add one or more KYC documents
    </h5>

</div>



<!-- =================================================
     KYC INPUT
     ================================================= -->

<div id="kycInputArea">


<div class="row kyc-row">


    <!-- KYC TYPE -->

    <div class="field">

        <label>

            KYC Type

            <span class="required">*</span>

        </label>


        <select id="kycid">

            <option value="">
                Select KYC
            </option>


            <%

            ResultSet kycList =
                (ResultSet)request.getAttribute("kycList");

            if(kycList != null){

                while(kycList.next()){

            %>

            <option value="<%=kycList.getInt(1)%>">
                <%=kycList.getString(2)%>
            </option>

            <%

                }

            } else {

            %>

            <option value="">
                data is not found
            </option>

            <%

            }

            %>

        </select>

    </div>



    <!-- KYC NUMBER -->

    <div class="field">

        <label>

            KYC Number

            <span class="required">*</span>

        </label>


        <input type="text"
               id="kyc-number"
               placeholder="Enter KYC number">

    </div>



    <!-- KYC IMAGE -->

    <div class="field">

        <label>

            Upload KYC Document

            <span class="required">*</span>

        </label>


        <label for="kycImage"
               class="kyc-upload-box">


            <div id="kycIcon"
                 class="upload-icon">
                📄
            </div>


            <span class="kyc-upload-text">


                <span id="kycFileName"
                      class="kyc-upload-title">

                    Choose File

                </span>


                <span class="kyc-upload-subtitle">

                    JPG, PNG (Max 2MB)

                </span>


            </span>


        </label>


        <input type="file"
               id="kycImage"
               accept="image/jpeg,image/png"
               class="kyc-file-input">


        <!-- KYC PREVIEW -->

        <img id="kycPreview"
             src=""
             alt="Uploaded KYC"
             style="display:none;
                    max-width:160px;
                    max-height:100px;
                    object-fit:contain;">


    </div>


</div>



<!-- =================================================
     ISSUE DATE / EXPIRY DATE / ADD KYC
     ================================================= -->

<div class="row">


    <div class="field">

        <label>

            Issue Date

            <span class="required">*</span>

        </label>


        <input type="date"
               id="issuedat">

    </div>



    <div class="field">

        <label>

            Expiry Date

            <span class="required">*</span>

        </label>


        <input type="date"
               id="expdat">

    </div>



    <div class="field button-field">

        <button type="button"
                class="btn add-kyc"
                onclick="addKyc()">

            Add to Table 

        </button>

    </div>


</div>


</div>



<!-- =================================================
     KYC TABLE
     ================================================= -->

<div class="table-wrap">


<table class="kyc-table"
       id="kycTable">


<thead>

<tr>

    <th>KYC Type</th>

    <th>KYC Number</th>

    <th>Issue Date</th>

    <th>Expiry Date</th>

    <th>Upload Status</th>

    <th>Action</th>

</tr>

</thead>


<tbody id="kycBody">
</tbody>


</table>


</div>



<!-- =================================================
     FINAL BUTTONS
     ================================================= -->

<div class="button-row">


    <button type="button"
            class="btn back"
            onclick="previousStep(2)">

        Back

    </button>


    <button type="submit"
            class="btn next">

        Submit

    </button>


</div>


</div>

</div>


</div>


</form>



<!-- =====================================================
     MASTER ADD MODAL
     ONLY NEW FEATURE
     ===================================================== -->

<div id="masterModal"
     style="
        display:none;
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.5);
        z-index:9999;
        align-items:center;
        justify-content:center;
     ">


    <div style="
        background:white;
        width:350px;
        max-width:90%;
        padding:25px;
        border-radius:10px;
        box-sizing:border-box;
     ">


        <h3 id="masterModalTitle">
            Add
        </h3>


        <input
            type="text"
            id="masterName"
            placeholder="Enter name"
            autocomplete="off"
            style="
                width:100%;
                padding:10px;
                box-sizing:border-box;
            ">


        <br>
        <br>


        <div style="
            display:flex;
            justify-content:flex-end;
            gap:10px;
        ">


            <button type="button"
                    onclick="closeMasterModal()">

                Cancel

            </button>


            <button type="button"
                    onclick="saveMaster()">

                Save

            </button>


        </div>


    </div>

</div>



<!-- =====================================================
     EXISTING JAVASCRIPT
     ===================================================== -->

<script src="newcus.js">
</script>

<script type="">




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






</script>


</body>

</html>

