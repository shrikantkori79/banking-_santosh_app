<%@page import="com.Bank.Bean.masdirBean"%>
<%@page import="java.util.List"%>
<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.sql.ResultSet" %>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>Company Account</title>

    <link rel="stylesheet"
          href="./newcamacc.css">

</head>

<body>

<%
List<masdirBean> dir=(List<masdirBean>)request.getAttribute("dir");
%>

<form class="customer-form"
      action="newcamacc"
      method="post"
      enctype="multipart/form-data"
      id="customerForm"
      onsubmit="return prepareSubmit();">


<!-- ========================================================= -->
<!-- HEADER -->
<!-- ========================================================= -->

<div class="cards">

    <div class="header-main">

        <div class="header-img">

            <img src="images/headerlogobank.png"
                 alt="Logo">

        </div>


        <div class="head-line">

            <h2>COMPANY ACCOUNT</h2>

            <h5>Create New Company Account</h5>

        </div>

    </div>


<!-- ========================================================= -->
<!-- PROGRESS BAR -->
<!-- ========================================================= -->

<div class="step-progress">

    <div class="progress-step active"
         id="progressStep1">

        <div class="step-number">
            1
        </div>

        <div class="step-title">
            General & Introducer
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
            KYC Verification
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
            Director Details
        </div>

    </div>

</div>


<!-- ========================================================= -->
<!-- STEP 1 -->
<!-- GENERAL DETAILS + INTRODUCER DETAILS -->
<!-- ========================================================= -->

<div class="form-step active"
     id="step1">

<div class="card">


<!-- ========================================================= -->
<!-- GENERAL DETAILS -->
<!-- ========================================================= -->

<div class="section-block">

    <div class="lines">

        <h3>General Details</h3>

    </div>


    <!-- ================================================= -->
    <!-- ROW 1 -->
    <!-- ================================================= -->

    <div class="row">


        <!-- JOIN DATE -->

        <div class="field">

            <label for="join-date">

                Join Date

                <span class="required">*</span>

            </label>


            <input type="date"
                   id="join-date"
                   name="jondat"
                   required>

        </div>


        <!-- CUSTOMER ID -->

        <div class="field">

            <label for="cid">

                Customer ID

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="cid"
                   name="cusid"
                   value="${nextCusId}"
                   required>

        </div>


        <!-- CUSTOMER NAME -->

        <div class="field">

            <label for="full-name">

                Full Name

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="full-name"
                   name="cusnam"
                   required>

        </div>

    </div>


    <!-- ================================================= -->
    <!-- ROW 2 -->
    <!-- ================================================= -->

    <div class="row">


        <!-- FATHER / GUARDIAN -->

        <div class="field">

            <label for="father-name">

                Father / Guardian Name

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="father-name"
                   name="kancusnam"
                   required>

        </div>


        <!-- MOBILE -->

        <div class="field">

            <label for="mobile">

                Mobile Number

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="mobile"
                   name="conno"
                   required>

        </div>


        <!-- EMAIL -->

        <div class="field">

            <label for="email">

                Email

                <span class="required">*</span>

            </label>


            <input type="email"
                   id="email"
                   name="emailid"
                   required>

        </div>

    </div>


    <!-- ================================================= -->
    <!-- ROW 3 -->
    <!-- ================================================= -->

    <div class="row">


        <!-- ADDRESS -->

        <div class="field medium">

            <label for="address">

                Address

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="address"
                   name="add1"
                   required>

        </div>


        <!-- ADDRESS 2 -->

        <div class="field medium">

            <label for="address2">

                Address 2

            </label>


            <input type="text"
                   id="address2"
                   name="add2">

        </div>


        <!-- ADDRESS 3 -->

        <div class="field medium">

            <label for="address3">

                Address 3

            </label>


            <input type="text"
                   id="address3"
                   name="add3">

        </div>

    </div>

</div>


<!-- ========================================================= -->
<!-- INTRODUCER DETAILS -->
<!-- ========================================================= -->

<div class="section-block">

    <div class="lines">

        <h3>Introducer Details</h3>

    </div>


    <div class="row">


        <!-- INTRODUCER ID -->

        <div class="field">

            <label for="introducer_no">

                Introducer ID

            </label>


            <input type="number"
                   id="introducer_no"
                   name="introducer_no">

        </div>


        <!-- INTRODUCER NAME -->

        <div class="field">

            <label for="introducer_name">

                Introducer Name

            </label>


            <input type="text"
                   id="introducer_name"
                   name="introducer_name"
                   readonly>

        </div>


        <!-- NOMINEE -->

        <div class="field">

            <label for="nominee">

                Nominee

            </label>


            <input type="text"
                   id="nominee"
                   name="nominee">

        </div>

    </div>


    <!-- ================================================= -->
    <!-- DIRECTOR -->
    <!-- ================================================= -->

    <div class="row">

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

            //   ResultSet rs4 =
            //        (ResultSet)request.getAttribute("dir");

            //    if(rs4 != null){

            //        while(rs4.next()){
            	
            	if(dir !=null){
            		for(masdirBean mtn : dir){
            		
            	
                %>

                <option value="<%=mtn.getId()%>"
                value-dirnam="<%=mtn.getDirnam()%>"
                >

                    <%=mtn.getDirnam()%>

                </option>

           

                <%

                }
            }

                %>

            </select>

        </div>

    </div>

</div>


<!-- ========================================================= -->
<!-- STEP 1 BUTTONS -->
<!-- ========================================================= -->

<div class="button-row">

    <button type="reset"
            class="btn reset">

        Reset

    </button>


    <button type="button"
            class="btn next"
            onclick="validateStep1AndNext()">

        Next

    </button>

</div>


</div>

</div>


<!-- ========================================================= -->
<!-- STEP 2 -->
<!-- KYC VERIFICATION -->
<!-- ========================================================= -->

<div class="form-step"
     id="step2">

<div class="card">

<div class="section-block">


<div class="lines">

    <h3>KYC Verification</h3>

</div>


<!-- ================================================= -->
<!-- KYC INPUT -->
<!-- ================================================= -->

<div class="row">


    <!-- KYC TYPE -->

    <div class="field">

        <label for="kyc">

            KYC Type

            <span class="required">*</span>

        </label>


        <!-- IMPORTANT:
             id="kyc"
             because JavaScript uses getElementById("kyc")
        -->

        <select id="kyc">

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

        <label for="kyc-number">

            KYC Number
            <span class="required">*</span>

        </label>


        <input type="text"
               id="kyc-number">

    </div>


    <!-- ISSUE DATE -->

    <div class="field">

        <label for="issue-date">

            Issue Date

        </label>


        <input type="date"
               id="issue-date">

    </div>

</div>


<!-- ================================================= -->
<!-- ROW 2 -->
<!-- ================================================= -->

<div class="row">


    <!-- EXPIRY DATE -->
        <div class="field">

        <label for="expiry-date">

            Expiry Date

        </label>


        <input type="date"
               id="expiry-date">

    </div>

<!-- ================================================= -->
<!-- KYC DOCUMENT -->
<!-- ================================================= -->

<div class="field">

    <label for="kycImage">
        KYC Document
    </label>

    <div class="upload-box"
         onclick="document.getElementById('kycImage').click()">

        <div id="kycIcon"
             class="upload-icon">
            📄
        </div>

        <span class="kyc-upload-text">
            <span id="kycFileName"
                  class="kyc-upload-title">
                Upload KYC Document
            </span>

            <h6>
                JPG, PNG (Max 2MB)
            </h6>
        </span>

    </div>

 <input type="file"
       id="kycImage"
       name="kycImage"
       accept="image/*"
       style="display:none;">

</div>


 <!-- ================================================= -->
<!-- ADD KYC -->
<!-- ================================================= -->

    <div class="field">

      
    <button type="button"
            class="btn add-kyc"
            onclick="addKyc()">

        Add KYC

    </button>

    </div>

</div>


<div class="upload-status"
     id="kyc-upload-status">
</div>





<!-- ================================================= -->
<!-- KYC TABLE -->
<!-- ================================================= -->

<div class="table-wrap">

    <table class="kyc-table"
           id="kyc-table">

        <thead>

            <tr>

                <th>KYC Type</th>

                <th>KYC Number</th>

                <th>Issue Date</th>

                <th>Expiry Date</th>

                <th>Document</th>

                <th>Action</th>

            </tr>

        </thead>


        <tbody id="kycBody">

        </tbody>

    </table>

</div>


</div>


<!-- ================================================= -->
<!-- STEP 2 BUTTONS -->
<!-- ================================================= -->

<div class="button-row">

    <button type="button"
            class="btn reset"
            onclick="previousStep(1)">

        Back

    </button>
    
    <button type="reset"
            class="btn reset">

        Reset

    </button>


    <button type="button"
            class="btn next"
           onclick="validateStep2AndNext()">

        Next

    </button>

</div>


</div>

</div>


<!-- ========================================================= -->
<!-- STEP 3 -->
<!-- DIRECTOR DETAILS -->
<!-- ========================================================= -->

<div class="form-step"
     id="step3">

<div class="card">

<div class="section-block">


<div class="lines">

    <h3>Director Details</h3>

</div>


<!-- ================================================= -->
<!-- ROW 1 -->
<!-- ================================================= -->

<div class="row">


    <!-- DIRECTOR NAME -->

    <div class="field">

        <label for="director-name-en">

            Director Name
            <span class="required">*</span>

        </label>


        <input type="text"
               id="director-name-en">

    </div>


    <!-- KANNADA NAME -->

    <div class="field">

        <label for="director-name-kn">

            Director Name Kannada
            
            <span class="required">*</span>

        </label>


        <input type="text"
               id="director-name-kn">

    </div>


    <!-- PLACE -->

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
                    onclick="openMasterModal('place')">

                + Add

            </button>

        </div>

    </div>

</div>


<!-- ================================================= -->
<!-- QUALIFICATION -->
<!-- ================================================= -->

<div class="row">

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
                onclick="openMasterModal('qualification')">

            + Add

        </button>

    </div>

</div>




<!-- ================================================= -->
<!-- CASTE / OCCUPATION / SUB CASTE -->
<!-- ================================================= -->




    <!-- CASTE -->

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
                    onclick="openMasterModal('caste')">

                + Add

            </button>

        </div>

    </div>


    <!-- OCCUPATION -->

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
                    onclick="openMasterModal('occupation')">

                + Add

            </button>

        </div>

    </div>
    </div>


    <!-- SUB CASTE -->
    
    <div class="row">

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
                    onclick="openMasterModal('subcaste')">

                + Add

            </button>

        </div>

    </div>




<!-- ================================================= -->
<!-- GENDER / DOB -->
<!-- ================================================= -->




    <!-- GENDER -->

    <div class="field">
    <label>
        Gender
        <span class="required">*</span>
    </label>

    <select name="gender" id="gender" required>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
    </select>
</div>


    <!-- DOB -->

    <div class="field">

        <label for="dob">

            Date of Birth
            <span class="required">*</span>

        </label>


        <input type="date"
               id="dob">

    </div>

</div>


<!-- ================================================= -->
<!-- DESIGNATION / TRANSPORT -->
<!-- ================================================= -->

<div class="row">


    <!-- DESIGNATION -->
<div class="field">

    <label>
        Designation
        <span class="required">*</span>
    </label>

    <div class="master-field-row">

        <select name="designation"
                id="designation"
                required
                style="flex:1;">

            <option value="">
                Select designation
            </option>

            <%
            ResultSet des1 =
                (ResultSet)request.getAttribute("des");

            if(des1 != null){

                while(des1.next()){
            %>

            <option value="<%=des1.getInt(1)%>">
                <%=des1.getString(2)%>
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
                onclick="openDesignationModal()">
            +Add
        </button>

    </div>

</div>


    <!-- TRANSPORT -->

    <div class="field">

        <label>

            Trans Permission

        </label>


        <label class="checkbox-field">

            <input type="checkbox"
                   id="transport-permission">

            Allowed

        </label>

    </div>
    
    
    
    
        <div class="field">

            <label for="mobile">

                Mobile Number

                <span class="required">*</span>

            </label>


            <input type="text"
                   id="mobile"
                   name="dirconno"
                   required>

        </div>
    </div>
    
    <!-- ================================================= -->
<!-- DIRECTOR PHOTO -->
<!-- ================================================= -->
<div class="row">
<!-- ================================================= -->
<!-- DIRECTOR PHOTO -->
<!-- ================================================= -->

<div class="field">

    <label for="director-photo">
        Director Photo
    </label>

    <div class="upload-box"
         onclick="document.getElementById('director-photo').click()">

        <div id="directorPhotoIcon"
             class="upload-icon">
            📷
        </div>

        <span class="upload-text">
            <h2>Upload Photo</h2>
            <h6>JPG, PNG (Max 2MB)</h6>
        </span>

    </div>

    <input type="file"
           name="directorPhoto"
           id="director-photo"
           accept="image/*"
           style="display:none;">

</div>


<!-- ================================================= -->
<!-- DIRECTOR SIGNATURE -->
<!-- ================================================= -->

<div class="field">

    <label for="director-sign">
        Director Signature
    </label>

    <div class="upload-box"
         onclick="document.getElementById('director-sign').click()">

        <div id="directorSignatureIcon"
             class="upload-icon">
            ✍️
        </div>

        <span class="upload-text">
            <h2>Signature</h2>
            <h6>JPG, PNG (Max 2MB)</h6>
        </span>

    </div>

    <input type="file"
           name="directorSignature"
           id="director-sign"
           accept="image/*"
           style="display:none;">

</div>


<!-- ================================================= -->
<!-- ADD DIRECTOR -->
<!-- ================================================= -->

<button type="button"
        class="btn add-kyc"
        onclick="addDirector()">

    Add Director

</button>
</div>

<!-- ================================================= -->
<!-- DIRECTOR TABLE -->
<!-- ================================================= -->

<div class="table-wrap">

    <table class="director-table"
           id="director-table">

        <thead>

            <tr>

                <th>Name</th>

                <th>Kannada Name</th>

                <th>Place</th>

                <th>Qualification</th>

                <th>Gender</th>

                <th>Caste</th>

                <th>Priority</th>

                <th>Occupation</th>

                <th>DOB</th>

                <th>Designation</th>

                <th>Trans Permission</th>

                <th>Action</th>

            </tr>

        </thead>


        <tbody id="directorBody">

        </tbody>

    </table>

</div>


</div>


<!-- ================================================= -->
<!-- STEP 3 BUTTONS -->
<!-- ================================================= -->

<div class="button-row">


    <button type="button"
            class="btn reset"
            onclick="previousStep(2)">

        Back

    </button>
    
    
    
    <button type="reset"
            class="btn reset">

        Reset

    </button>


    <button type="button"
        onclick="if (prepareSubmit()) document.getElementById('customerForm').submit();">
    Save
</button>

</div>


</div>

</div>


<!-- ========================================================= -->
<!-- HIDDEN DATA -->
<!-- ========================================================= -->

<input type="hidden"
       name="kycData"
       id="kycData">


<input type="hidden"
       name="directorData"
       id="directorData">


</div>

</form>


<!-- ========================================================= -->
<!-- JAVASCRIPT -->
<!-- ========================================================= -->

<script src="newcamacc.js"></script>


</body>

</html>