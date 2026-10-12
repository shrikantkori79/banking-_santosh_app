<%@page import="com.Bank.Bean.masdirBean"%>

<%@ page language="java"

    contentType="text/html; charset=UTF-8"

    pageEncoding="UTF-8"%>

<%@ page import="java.util.List"%>

<%@ page import="com.Bank.Bean.masshaBean"%>

<%@ page import="com.Bank.Bean.masshaproBean"%>

<%@ page import="com.Bank.Bean.masdepBean"%>

<%@ page import="com.Bank.Bean.masdepproBean"%>

<%@ page import="com.Bank.Bean.masternamBean"%>

<%@ page import="com.Bank.Bean.masccnamBean"%>

<%@ page import="com.Bank.Bean.newcusBean"%>

<%@ page import="com.Bank.Bean.newprolosheadBean"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Share Saving Term CC Account</title>

    <link rel="stylesheet"

          href="./new_sha_sb_td_cc_acc.css">

</head>

<body>

<%

List<masdirBean> listDir =

    (List<masdirBean>) request.getAttribute("listDir");

List<newprolosheadBean> listProLossHead =

    (List<newprolosheadBean>)

    request.getAttribute("listProLossHead");

List<newprolosheadBean> listProLossSubHead =

    (List<newprolosheadBean>)

    request.getAttribute("listProLossSubHead");

%>



<form class="customer-form"

      id="customerForm"

      method="post"

      action="new_sha_sb_td_cc_acc">

<div class="cards">



<!-- ========================================================= -->

<!-- HEADER -->

<!-- ========================================================= -->

<nav class="header-customer">

    <div class="header-main">

        <div class="header-left">

            <div class="header-img">

                <img src="../image/facelogo.png"

                     alt="facelogo">

            </div>

            <div class="head-line">

                <h2>New Customer</h2>

                <h5>Customer Information</h5>

            </div>

        </div>

    </div>

</nav>



<!-- ========================================================= -->

<!-- ACCOUNTING DETAILS -->

<!-- ========================================================= -->

<div class="card accounting-card">

    <div class="lines">

        <h3>Accounting Details</h3>

        <h5>

            Please enter the personal information of the Accounting

        </h5>

    </div>



    <!-- ===================================================== -->

    <!-- ACCOUNT DATE -->

    <!-- ===================================================== -->

    <div class="row one-col">

        <div class="field">

            <label for="date">

                Account Date

                <span class="required">*</span>

            </label>

            <input type="date"

                   id="date"

                   name="accdat"

                   required>

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- HEAD + SUB HEAD -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="field">

            <label for="head_acc">

                Head Of Account

                <span class="required">*</span>

            </label>

            <select id="head_acc"

                    name="head"

                    required>

                <option value="">

                    Select Head Of Account

                </option>

                <option value="1">

                    Member Share

                </option>

                <option value="2">

                    Member Saving / Current / Other

                </option>

                <option value="3">

                    Member Term Deposit

                </option>

                <option value="4">

                    Member CC Deposit

                </option>

            </select>

        </div>



        <div class="field">

            <label for="sub_head">

                Sub Head

                <span class="required">*</span>

            </label>

            <select id="sub_head"

                    name="subheaid"

                    required>

                <option value="">

                    Select Sub Head

                </option>

            </select>

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- SELECTED INFORMATION -->

    <!-- ===================================================== -->

    <div class="row one-col">

        <div class="field">

            <label for="selectedInfo">

                Selected Account Details

            </label>

            <input type="text"

                   id="selectedInfo"

                   readonly

                   placeholder="Selected account details will appear here">

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- ACCOUNT NUMBER + CERTIFICATE -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="field">

            <label for="acc_no">

                Account Number

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="acc_no"

                   name="accno"

                   inputmode="numeric"

                   required>

        </div>



            <div class="field">

    <label>Enter amount convert percentage to amount</label>

    <input type="number"

           id="percentageBaseAmount"

           placeholder="">

</div>

        <div class="field"

             id="certificateRow"

             style="display:none;">

            <label for="cerno">

                Certificate No

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="cerno"

                   name="cerno"

                   placeholder="Enter Certificate No">

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- JOINT -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="checkbox-area">

            <label class="checkbox-option">

                <input type="checkbox"

                       id="joint"

                       name="joint">

                <span>Joint</span>

            </label>



            <div class="joint-dropdown"

                 id="jointDropdown"

                 style="display:none;">

                <select id="jointCustomer"

                        name="typeofJoint">

                    <option value="">

                        Select Joint Type

                    </option>

                    <option value="1">

                        Either Or Survivor

                    </option>

                    <option value="2">

                        Anyone Or Survivor

                    </option>

                    <option value="3">

                        Former Or Survivor

                    </option>

                    <option value="4">

                        Latter Or Survivor

                    </option>

                    <option value="5">

                        Jointly

                    </option>

                </select>

            </div>

        </div>

              <div class="field"

             id="certificateRow"

             style="display:none;">

            <label for="cerno">

                Certificate No

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="cerno"

                   name="cerno"

                   placeholder="Enter Certificate No">

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- DIRECTOR -->

    <!-- ===================================================== -->

    <div class="row one-col">

        <div class="field">

            <label for="director">

                Director

                <span class="required">*</span>

            </label>

            <select id="director"

                    name="dirid"

                    required>

                <option value="">

                    Select Director

                </option>

                <%

                if (listDir != null) {

                    for (masdirBean d : listDir) {

                %>

                <option value="<%= d.getId() %>">

                    <%= d.getDirnam() %>

                </option>

                <%

                    }

                }

                %>

            </select>

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- CUSTOMER -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="field">

            <label for="cust_id">

                Customer ID

                <span class="required">*</span>

            </label>

            <input type="number"

                   id="cust_id"

                   name="cusid"

                   placeholder="Enter Customer ID"

                   required>

        </div>



        <div class="field">

            <label for="custname">

                Customer Name

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="custname"

                   readonly

                   placeholder="Customer name">

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- NOMINEE -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="field">

            <label for="nominee">

                Nominee

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="nominee"

                   name="nom"

                   placeholder="Enter nominee"

                   required>

        </div>



        <div class="field">

            <label for="relation">

                Relation

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="relation"

                   name="rel"

                   placeholder="Enter relation"

                   required>

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- GUARDIAN -->

    <!-- ===================================================== -->

    <div class="row two-col">

        <div class="field">

            <label for="guardian_id">

                Guardian ID

                <span class="required">*</span>

            </label>

            <input type="number"

                   id="guardian_id"

                   name="gurid"

                   placeholder="Enter Guardian ID"

                   required>

        </div>



        <div class="field">

            <label for="guardian_name">

                Guardian Name

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="guardian_name"

                   readonly

                   placeholder="Guardian name">

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- GUARDIAN RELATION -->

    <!-- ===================================================== -->

    <div class="row one-col">

        <div class="field">

            <label for="guardian_relation">

                Guardian Relation

                <span class="required">*</span>

            </label>

            <input type="text"

                   id="guardian_relation"

                   name="gurrel"

                   placeholder="Enter guardian relation"

                   required>

        </div>

    </div>



    <!-- ===================================================== -->

    <!-- SAVE ACCOUNT -->

    <!-- ===================================================== -->

    <div class="button-row">

        <button type="button"

                class="btn save"

                id="saveButton">

            Save Account

        </button>

    </div>

</div>



<!-- ========================================================= -->

<!-- CUSTOMER DETAILS -->

<!-- ========================================================= -->

<div class="card customer-details-card">

    <div class="section-title">

        <h3>Customer Details</h3>

    </div>



    <div class="table-wrap">

        <table class="account-table"

               id="customerTable">

            <thead>

                <tr>

                    <th>Sl No</th>

                    <th>Account Date</th>

                    <th>Head Of Account</th>

                    <th>Sub Head</th>

                    <th>Account Number</th>

                    <th>Joint Customer</th>

                    <th>Director</th>

                    <th>Customer ID</th>

                    <th>Customer Name</th>

                    <th>Nominee</th>

                    <th>Relation</th>

                    <th>Guardian ID</th>

                    <th>Guardian Name</th>

                    <th>Guardian Relation</th>

                    <th>Certificate No</th>

                </tr>

            </thead>

            <tbody id="customerTableBody">

            </tbody>

        </table>

    </div>

</div>



<!-- ========================================================= -->

<!-- VOUCHER -->

<!-- ========================================================= -->

<div class="card voucher-section"

     id="voucherSection">

    <div class="voucher-layout">



        <!-- ================================================= -->

        <!-- VOUCHER ENTRY -->

        <!-- ================================================= -->

        <div class="voucher-entry">

            <div class="section-title voucher-title">

                <h3>Voucher</h3>

            </div>



            <div class="row voucher-row">



                <!-- ========================================= -->

                <!-- VOUCHER TOTAL -->

                <!-- ========================================= -->

                <div class="field">

                    <label for="voucherAmount">

                        Voucher Amount

                        <span class="required">*</span>

                    </label>

                    <input type="number"

                           id="voucherAmount"

                           name="voucherAmount"

                           step="0.01"

                           min="0"

                           placeholder="Voucher Total"

                           autocomplete="off"

                           readonly>

                </div>



                <!-- ========================================= -->

                <!-- TOKEN -->

                <!-- ========================================= -->

                <div class="field">

                    <label for="Tokn_No">

                        Token No

                        <span class="required">*</span>

                    </label>

                    <input type="text"

                           id="Tokn_No"

                           name="Tokn_No"

                           autocomplete="off">

                </div>



                <!-- ========================================= -->

                <!-- CONTRA -->

                <!-- ========================================= -->

                <div class="voucher-check">

                    <label class="checkbox-option">

                        <input type="checkbox"

                               id="voucherContra"

                               name="voucherContra">

                        <span>Contra</span>

                    </label>

                </div>

            </div>

        </div>



        <!-- ================================================= -->

        <!-- VOUCHER DETAILS -->

        <!-- ================================================= -->

        <div class="voucher-details">

            <div class="section-title">

                <h3>Voucher Details</h3>

            </div>



            <div class="table-wrap">

                <table class="account-table"

                       id="voucherTable">

                    <thead>

                        <tr>

                            <th>Sl No</th>

                            <th>Head</th>

                            <th>Head Name</th>

                            <th>Percentage</th>

                            <th>Enter Amount</th>

                            <th>Calculated Amount</th>

                        </tr>

                    </thead>

                    <tbody id="voucherTableBody">

                    </tbody>

                </table>

            </div>

        </div>

    </div>

</div>



<!-- ========================================================= -->

<!-- FINAL BUTTONS -->

<!-- ========================================================= -->

<div class="button-row final-actions">

    <button type="button"

            class="btn save"

            id="finalSaveButton">

        Save

    </button>



    <button type="button"

            class="btn back"

            id="resetButton">

        Reset

    </button>



    <button type="button"

            class="btn back"

            id="exitButton">

        Exit

    </button>

</div>



</div>

</form>



<!-- ========================================================= -->

<!-- JSP DATA -->

<!-- ========================================================= -->

<script>

<%

List<masshaBean> listSha =

    (List<masshaBean>) request.getAttribute("listSha");

List<masshaproBean> listShaPro =

    (List<masshaproBean>) request.getAttribute("listShaPro");

List<masdepBean> listDep =

    (List<masdepBean>) request.getAttribute("listDep");

List<masdepproBean> listDepPro =

    (List<masdepproBean>) request.getAttribute("listDepPro");

List<masternamBean> listTer =

    (List<masternamBean>) request.getAttribute("listTer");

List<masccnamBean> listCc =

    (List<masccnamBean>) request.getAttribute("listCc");

List<newcusBean> listCus =

    (List<newcusBean>) request.getAttribute("listCus");

%>



/* =========================================================

   SHARE MASTER

   ========================================================= */

const shareData = [

<%

if (listSha != null) {

    for (masshaBean b : listSha) {

%>

{

    id: <%= b.getId() %>,

    name: "<%= b.getShanam() != null

                ? b.getShanam().replace("\"", "'")

                : "" %>",

    kannada: "<%= b.getShakannam() != null

                ? b.getShakannam().replace("\"", "'")

                : "" %>",

    faceValue: <%= b.getFaccval() %>

},

<%

    }

}

%>

];



/* =========================================================

   SHARE PRO

   amount AND per BOTH COME FROM DB

   ========================================================= */

const shareProData = [

<%

if (listShaPro != null) {

    for (masshaproBean b : listShaPro) {

%>

{

    heaid: <%= b.getHeanam() %>,

    subid: <%= b.getSubheanam() %>,

    amount: <%= b.getAmo() %>,

    shaid: <%= b.getMasshaid() %>,

    per: <%= b.getPer() %>

},

<%

    }

}

%>

];



/* =========================================================

   DEPOSIT MASTER

   ========================================================= */

const depositData = [

<%

if (listDep != null) {

    for (masdepBean b : listDep) {

%>

{

    id: <%= b.getId() %>,

    name: "<%= b.getDepnam() != null

                ? b.getDepnam().replace("\"", "'")

                : "" %>",

    kannada: "<%= b.getDepnamkan() != null

                ? b.getDepnamkan().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];



/* =========================================================

   DEPOSIT PRO

   amount AND per BOTH COME FROM DB

   ========================================================= */

const depositProData = [

<%

if (listDepPro != null) {

    for (masdepproBean b : listDepPro) {

%>

{

    heaid: <%= b.getHeaid() %>,

    subid: <%= b.getSubheaid() %>,

    amount: <%= b.getAmo() %>,

    depid: <%= b.getDepid() %>,

    per: <%= b.getPer() %>

},

<%

    }

}

%>

];



/* =========================================================

   TERM

   ========================================================= */

const termData = [

<%

if (listTer != null) {

    for (masternamBean b : listTer) {

%>

{

    id: <%= b.getId() %>,

    name: "<%= b.getDepnam() != null

                ? b.getDepnam().replace("\"", "'")

                : "" %>",

    kannada: "<%= b.getDepnamkan() != null

                ? b.getDepnamkan().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];



/* =========================================================

   CC

   ========================================================= */

const ccData = [

<%

if (listCc != null) {

    for (masccnamBean b : listCc) {

%>

{

    id: <%= b.getId() %>,

    name: "<%= b.getDepnam() != null

                ? b.getDepnam().replace("\"", "'")

                : "" %>",

    kannada: "<%= b.getDepnamkan() != null

                ? b.getDepnamkan().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];



/* =========================================================

   PROFIT / LOSS MAIN HEAD

   newproloshead

   id     -> Main Head ID

   nam    -> Main Head Name

   ========================================================= */

const proLossHeadData = [

<%

if (listProLossHead != null) {

    for (newprolosheadBean b : listProLossHead) {

%>

{

    id: <%= b.getHeaid() %>,

    name: "<%= b.getHeanam() != null

                ? b.getHeanam().replace("\"", "'")

                : "" %>",

    kannada: "<%= b.getHeakannam() != null

                ? b.getHeakannam().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];



/* =========================================================

   PROFIT / LOSS SUB HEAD

   newprolossubhead

   heaid  -> Main Head ID

   subid  -> Sub Head ID

   heanam -> Main Head Name

   subnam -> Sub Head Name

   ========================================================= */

const proLossSubHeadData = [

<%

if (listProLossSubHead != null) {

    for (newprolosheadBean b : listProLossSubHead) {

%>

{

    heaid: <%= b.getHeaid() %>,

    subid: <%= b.getSubid() %>,

    heanam: "<%= b.getHeanam() != null

                ? b.getHeanam().replace("\"", "'")

                : "" %>",

    subnam: "<%= b.getSubnam() != null

                ? b.getSubnam().replace("\"", "'")

                : "" %>",

    heakannam: "<%= b.getHeakannam() != null

                ? b.getHeakannam().replace("\"", "'")

                : "" %>",

    subkannam: "<%= b.getSubkannam() != null

                ? b.getSubkannam().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];



/* =========================================================

   CUSTOMER DATA

   ========================================================= */

const customerData = [

<%

if (listCus != null) {

    for (newcusBean b : listCus) {

%>

{

    id: <%= b.getCusid() %>,

    name: "<%= b.getCusnam() != null

                ? b.getCusnam().replace("\"", "'")

                : "" %>"

},

<%

    }

}

%>

];

</script>



<script src="./new_sha_sb_td_cc_acc.js"></script>

</body>

</html>