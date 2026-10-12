<%@page import="com.Bank.Bean.newprolosheadBean"%>

<%@page import="com.Bank.Bean.masloaproBean"%>

<%@page import="com.Bank.Bean.masloabalsheBean"%>

<%@page import="com.Bank.Bean.masbalshesubheaBean"%>

<%@page import="com.Bank.Bean.masbalsheheaBean"%>

<%@page import="com.Bank.Bean.masdirBean"%>

<%@page import="com.Bank.Bean.newcusBean"%>

<%@ page import="com.Bank.Bean.masrdnamBean" %>

<%@ page import="com.Bank.Bean.maspignamBean" %>

<%@ page import="com.Bank.Bean.masccnamBean" %>

<%@ page import="com.Bank.Bean.masternamBean" %>

<%@ page import="com.Bank.Bean.masloaBean" %>

<%@ page import="java.util.List" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"

    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

 <title>New Loan</title>

    <link rel="stylesheet" href="./newloa.css">

</head>

<body>

<%

List<newcusBean> cus= (List<newcusBean>)request.getAttribute("customer");

List<masdirBean> masdir=(List<masdirBean>) request.getAttribute("dir");

%>

<form action="newloa"

    class="customer-form"

    id="customerForm"

>

    <!-- =================================================

         MAIN CARD

    \\================================================== -->

    <div class="cards">

        <!-- =================================================

             HEADER

        \\================================================== -->

        <nav class="header-customer">

            <div class="header-main">

                <div class="header-left">

                    <div class="header-img">

                        <img

                            src="../image/facelogo.png"

                            alt="facelogo"

                        >

                    </div>

                    <div class="head-line">

                        <h2>New Customer</h2>

                        <h5>

                            Customer Information

                        </h5>

                    </div>

                </div>

            </div>

        </nav>

        <!-- =================================================

             CARD CONTENT

        \\================================================== -->

        <div class="card">

            <!-- MAIN TITLE -->

            <div class="lines">

                <h3>

                    New Loan Details

                </h3>

            </div>

            <!-- =================================================

                 TWO COLUMN MAIN LAYOUT

            \\================================================== -->

            <div class="loan-layout">

                <!-- =================================================

                     LEFT SIDE

                \\================================================== -->

                <div class="loan-left">

                    <!-- =================================================

                         LOAN DETAIL

                    \\================================================== -->

                    <div class="form-section loan-detail-section">

                        <div class="section-title">

                            <h3>

                                Loan Detail

                            </h3>

                        </div>

                        <!-- ACCOUNT DATE -->

                        <div class="row one-col">

                            <div class="field">

                                <label for="date">

                                    Account Date

                                    <span class="required">

                                        *

                                    </span>

                                </label>

                                <input

                                    type="date"

                                    id="date"

                                    required

                                >

                            </div>

                        </div>

                        <!-- TYPE + LOAN NAME -->

                        <div class="row two-col">

                            <div class="field">

                                <label for="typeOfLoan">

                                    Type Of Loan

                                    <span class="required">

                                        *

                                    </span>

                                </label>

                                <select

                                    id="typeOfLoan"

                                    required

                                >

                                    <option value="">

                                        Select Type Of Loan

                                    </option>

                                     <option value="1">

                                  Term Deposite Loan

                                    </option>

                                     <option value="2">

                                       CC Deposite Loan

                                    </option>

                                     <option value="3">

                                       Pigmy Deposite Loan

                                    </option>

                                     <option value="4">

                                       RD Deposite Loan

                                    </option>

                                    <option value="5">

                                        Other Loan

                                    </option>

                                </select>

                            </div>

                            <div class="field">

                                <label for="loanName">

                                    Loan Name

                                    <span class="required">

                                        *

                                    </span>

                                </label>

                                <select

                                    id="loanName"

                                    required

                                    disabled

                                >

                                    <option value="">

                                        Select Type Of Loan First

                                    </option>

                                </select>

                            </div>

                        </div>

                        <!-- LOAN NUMBER + AMOUNT -->

                        <div class="row two-col">

                            <div class="field">

                                <label for="loan_no">

                                    Loan Number

                                    <span class="required">

                                        *

                                    </span>

                                </label>

                                <input

                                    type="text"

                                    id="loan_no"

                                    placeholder="Loan Number"

                                    required

                                >

                            </div>

                            <div class="field">

                                <label for="cert_no">

                                    Cert No

                                    <span class="required">

                                        *

                                    </span>

                                </label>

                                <input

                                    type="number"

                                    id="cert_no"

                                   

                                   

                                    required

                                >

                            </div>

                        </div>

                    </div>

                    <!-- =================================================

                         CUSTOMER DETAIL

                    \\================================================== -->

                    <div class="form-section customer-detail-section">

                        <div class="section-title">

                            <h3>

                                Customer Detail

                            </h3>

                        </div>

                       <!--   <div class="row three-col">

                           CUSTOMER ID -->

<script>

    console.log("CUSTOMER LIST FROM JSP =", window.customerList);

    document.addEventListener("DOMContentLoaded", function () {

        const customerId = document.getElementById("cust_id");

        const customerName = document.getElementById("customer_name");

        if (!customerId || !customerName) {

            console.log("Customer fields not found");

            return;

        }

        customerId.addEventListener("input", function () {

            const enteredId = this.value.trim();

            customerName.value = "";

            if (enteredId === "") {

                return;

            }

            console.log("Entered Customer ID:", enteredId);

            console.log("Customer List:", window.customerList);

            const customer = window.customerList.find(function (c) {

                return String(c.id).trim() === enteredId;

            });

            console.log("Found Customer:", customer);

            if (customer) {

                customerName.value = customer.name;

            }else{

            	alert("Customer Id Not Found")

            }

        });

    });

</script>

<div class="customer-input-row">

    <!-- CUSTOMER ID -->
    <div class="field">
        <label for="cust_id">
            Customer ID
            <span class="required">*</span>
        </label>

        <input
            type="text"
            id="cust_id"
            name="cust_id"
            placeholder="Customer ID"
            required
        >
    </div>


    <!-- CUSTOMER NAME -->
    <div class="field">
        <label for="customer_name">
            Customer Name
            <span class="required">*</span>
        </label>

        <input
            type="text"
            id="customer_name"
            name="customer_name"
            placeholder="Customer Name"
            readonly
            required
        >
    </div>


    <!-- JOINT -->
<div class="files" id="jointSection">
    <label>
        Joint
        <input type="checkbox" id="jointAccount">
    </label>
</div>


    <!-- ADD CUSTOMER -->
    <div class="customer-add">
        <button
            type="button"
            id="addCustomerButton"
            class="customer-add-btn"
        >
            Add Customer
        </button>
    </div>

</div>

                           
<div class="filed">
    <table id="customerTable">
        <thead>
            <tr>
                <th>SlNo</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="customerTableBody">
        </tbody>
    </table>
</div>

</div>
                    <!-- =================================================

                         LOAN SURETIES

                    \\================================================== -->

                    <div class="form-section surety-section">

                        <div class="section-title">

                            <h3>

                                Loan Sureties

                            </h3>

                        </div>

                        <div class="surety-director-row">

                            <!-- =================================================

                                 SURETY

                            \\================================================== -->

                            <div class="surety-box">

                                <h4>

                                    Surety

                                </h4>

                                <div class="row two-col">

                                <script>

    console.log("CUSTOMER LIST FROM JSP =", window.customerList);

    document.addEventListener("DOMContentLoaded", function () {

        const customerId = document.getElementById("surety_id");

        const customerName = document.getElementById("surety_name");

        if (!customerId || !customerName) {

            console.log("Customer fields not found");

            return;

        }

        customerId.addEventListener("input", function () {

            const enteredId = this.value.trim();

            customerName.value = "";

            if (enteredId === "") {

                return;

            }

            console.log("Entered Customer ID:", enteredId);

            console.log("Customer List:", window.customerList);

            const customer = window.customerList.find(function (s) {

                return String(s.id).trim() === enteredId;

            });

            console.log("Found Customer:", customer);

            if (customer) {

                customerName.value = customer.name;

            }else{

            	alert("Surety Id Not Found")

            }

        });

    });

</script>

                                    <div class="field">

                                        <label for="surety_id">

                                            Surety ID

                                            <span class="required">

                                                *

                                            </span>

                                        </label>

                                        <input

                                            type="text"

                                            id="surety_id"

                                            placeholder="Surety ID"

                                        >

                                    </div>

                                    <div class="field">

                                        <label for="surety_name">

                                            Surety Name

                                            <span class="required">

                                                *

                                            </span>

                                        </label>

                                        <input type="text" id="surety_name"    name="surety_name" required>

                                    </div>

                                </div>

                                                            <!-- CUSTOMER ID -->

                                <div

                                    class="button-row small-button-row"

                                >

                                    <button

                                        type="button"

                                        class="btn save"

                                        id="addSuretyButton"

                                    >

                                        Add Surety

                                    </button>

                                </div>

                                <div class="table-wrap">

                                    <table

                                        class="account-table"

                                        id="suretyTable"

                                    >

                                        <thead>

                                            <tr>

                                                <th>

                                                    Sl No

                                                </th>

                                                <th>

                                                    Surety ID

                                                </th>

                                                <th>

                                                    Surety Name

                                                </th>

                                                <th>

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody

                                            id="suretyTableBody"

                                        >

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            <!-- =================================================

                                 DIRECTOR

                            \\================================================== -->

                            <div class="director-box">

                                <h4>

                                    Director

                                </h4>

                                <div class="field">

                                    <label for="director_name">

                                        Director Name

                                        <span class="required">

                                            *

                                        </span>

                                    </label>

                                    <select id="director_name">
                                    <option value="">select the Director</option>

                                    <%

                                    if(masdir != null){

                                    	for(masdirBean d:masdir){

                                    		%>

                                    		

                                    		<option value="<%= d.getId()%>">

                                    		<%=d.getDirnam() %>

                                    		</option>

                                    		<%

                                    	}

                                    }

                                    %>

                                    </select>

                                </div>

                                <div

                                    class="button-row small-button-row"

                                >

                                    <button

                                        type="button"

                                        class="btn save"

                                        id="addDirectorButton"

                                    >

                                        Add Director

                                    </button>

                                </div>

                                <div class="table-wrap">

                                    <table

                                        class="account-table"

                                        id="directorTable"

                                    >

                                        <thead>

                                            <tr>

                                                <th>

                                                    Sl No

                                                </th>

                                                <th>

                                                    Director Name

                                                </th>

                                                <th>

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody

                                            id="directorTableBody"

                                        >

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <!-- =================================================

                     RIGHT SIDE

                \\================================================== -->

                <div class="loan-right">

                    <!-- =================================================

                         CASH / CONTRA

                    \\================================================== -->

                    <div class="payment-section">

                        <div class="checkbox-option">

                            <input

                                type="radio"

                                name="paymentMode"

                                id="cashRadio"

                                value="Cash"

                                checked

                            >

                            <label for="cashRadio">

                                Cash

                            </label>

                        </div>

                        <div class="checkbox-option">

                            <input

                                type="radio"

                                name="paymentMode"

                                id="contraRadio"

                                value="Contra"

                            >

                            <label for="contraRadio">

                                Contra

                            </label>

                        </div>

                    </div>

                    <!-- =================================================

                         VOUCHER DETAILS

                    \\================================================== -->

                    <div

                        class="section-block hidden"

                        id="otherLoanSection"

                    >

                        <div class="section-title">

                            <h3>

                                Voucher Details

                            </h3>

                        </div>

                        <!-- TOTAL AMOUNT ABOVE TABLE -->
                       <div
                           id="loanGrandTotalTop"
                            style="font-size:16px; font-weight:bold; margin:0; "
                       >
                           TOTAL AMOUNT: 0.00
                       </div>

                       <!-- ENTER AMOUNT - SHOWN ONLY WHEN A PERCENTAGE ROW EXISTS -->
                       <div
                           class="row one-col"
                           id="loanCalcAmountRow"
                           style="display:none;"
                       >
                           <div class="field"        style="position: relative; left: 300px; bottom: 50px ">
                               <label for="loanCalcAmount">
                                   Enter Amount
                               </label>
                               <input
                                   type="number"
                                   id="loanCalcAmount"
                                   min="0"
                                   step="0.01"
                                   placeholder="Enter Amount"
                                  style="width:180px;" 
                               >
                           </div>
                       </div>

                       <div class="table-wrap">
                           <table
                               class="account-table"
                               id="voucherTable"
                           >
                               <thead>
                                   <tr>
                                       <th>Sl No</th>
                                       <th>PL / BS</th>
                                       <th>Main Head</th>
                                       <th>Sub Head</th>
                                       <th>Value</th>
                                       <th>Amount</th>
                                       <th></th>
                                   </tr>
                               </thead>

                               <tbody id="voucherTableBody"></tbody>

                               <tfoot>
                                   <tr>
                                       <th colspan="5" style="text-align:right;">
                                           GRAND TOTAL
                                       </th>
                                       <th id="loanGrandTotal">0.00</th>
                                       <th></th>
                                   </tr>
                               </tfoot>
                           </table>
                       </div>

                       

                        <!-- OTHER LOAN DETAILS -->
                      <div id="otherLoanDetailSection" class="section-block hidden">
                        <div class="section-title">

                            <h3>

                                Loan Details

                            </h3>

                        </div>

                        <div class="row two-col">

                            <div class="field">

                                <label for="san_loan">

                                    Sanctioned Loan

                                </label>

                                <input

                                    type="number"

                                    id="san_loan"
                                    name="san_loan"
    placeholder="Sanctioned Loan"
    min="1"
    step="1"
    required

                                >

                            </div>

                            <div class="field">

                                <label for="no_instal">

                                    No of Instalment

                                </label>

                                <input

                                    type="number"

                                    id="no_instal"
                                    
                                    name="no_instal"
    placeholder="No of Instalment"
    min="1"
    step="1"
    required

                                >

                            </div>

                        </div>

                        <div class="row two-col">

                            <div class="field">

                                <label for="instal_type">

                                    Instalment Type

                                </label>

                                <select id="instal_type">

                                    <option value="">

                                        Select Instalment Type

                                    </option>

                                    <option value="1">

                                        Day

                                    </option>

                                    <option value="2">

                                        Month

                                    </option>

                                </select>

                            </div>

                            <div class="field">

                                <label for="after_every">

                                    After Every

                                </label>

                                <input

                                    type="number"

                                    id="after_every"
                                        name="after_every"
    placeholder="After Every"
     min="1"
    step="1"
    required

                                >

                            </div>

                        </div>

                        <div class="row two-col">

                            <div class="field">

                                <label for="instal_amt">

                                    Instalment Amount

                                </label>

                                <input

                                    type="number"

                                    id="instal_amt"
                                    
                                       name="instal_amt"
    placeholder="Instalment Amount"
    min="0"
    step="1"
    readonly

                                >

                            </div>

                            <div class="field">

                                <label for="gap_instal">

                                    Gap Instalment

                                </label>

                                <input

                                    type="number"

                                    id="gap_instal"
                                       name="gap_instal"
    placeholder="Gap Instalment"
    min="0"
    step="1"
    required

                                >

                            </div>

                        </div>

                    </div>
                    </div>

                
<div class="section-block hidden" id="depositSection">
                        <div class="table-wrap">

                           
   <table class="account-table" id="depositTable"
                               

                            >

                                <thead>

                                    <tr>

                                        <th>Sl No</th>

                                        <th>Acc No</th>

                                        <th>Cert/Age</th>

                                        <th>Dep Amount</th>

                                        <th>Mat Date</th>

                                        <th>Int %</th>

                                        <th>Sel/Unsel</th>

                                        <th></th>

                                    </tr>

                                </thead>

                                <tbody id="depositTableBody">

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <!-- =================================================

                         SPECIFIC LOAN

                    \\================================================== -->

                    <div

                        class="section-block hidden"

                        id="specificLoanSection"

                    >
                    

                        <div class="section-title">

                            <h3>

                                Deposit Loan Details

                            </h3>

                        </div>

                        <div class="row two-col">

                            <div class="field">

                                <label for="select_dep">

                                    Selected Deposit

                                </label>

                               <input type="text" id="select_dep" readonly>

                            </div>

                            <div class="field">

                                <label for="dep_loan_percent">

                                    Loan %

                                </label>

                                <input

                                    type="number"

                                    id="dep_loan_percent"

                                    min="0"

                                    step="0.01"

                                >

                            </div>

                        </div>

                        <div class="row two-col">

                            <div class="field">

                                <label for="dep_san_loan">

                                    Sanctioned Loan

                                </label>

                                <input

                                    type="text"

                                    id="dep_san_loan"

                                >

                            </div>

                            <div class="field">

                                <label for="dep_int_percent">

                                    Int %

                                </label>

                                <input

                                    type="number"

                                    id="dep_int_percent"

                                    min="0"

                                    step="0.01"

                                >

                            </div>

                        </div>

                        <div class="row one-col">

                            <div class="field">

                                <label for="dep_max_amt">

                                    Max Loan Amount

                                </label>

                                <input

                                    type="text"

                                    id="dep_max_amt"

                                >

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            </div>

            <!-- =================================================

                 MAIN BUTTONS

            \\================================================== -->

            <div class="main-button-row">

                <button

                    type="button"

                    class="btn back"

                    id="cancelButton"

                >

                    Cancel

                </button>

                <button

                    type="button"

                    class="btn save"

                    id="saveButton"

                >

                    Save Account

                </button>

            </div>

        </div>

    </div>

</form>


<script>
window.customerList = [
<%
if (cus != null) {
    for (newcusBean c : cus) {
%>
    {
        id: "<%= c.getCusid() %>",
        name: "<%= c.getCusnam() %>"
    },
<%
    }
}
%>
];
</script>

<script >

<%

List<masternamBean> master=(List<masternamBean>)request.getAttribute("terbean");

List<masccnamBean> mascc=(List<masccnamBean>) request.getAttribute("ccbean");

List<maspignamBean> maspig= (List<maspignamBean>)request.getAttribute("pigbean");

List<masrdnamBean> masrd=(List<masrdnamBean>) request.getAttribute("rdbean");

List<masloaBean> masloa= (List<masloaBean>)request.getAttribute("loabean");

List<masbalsheheaBean> maheasbal=(List<masbalsheheaBean>)request.getAttribute("bhbean");

List<masbalshesubheaBean> massubbal= (List<masbalshesubheaBean>)request.getAttribute("bsbean");

List<masloabalsheBean> masbal=(List<masloabalsheBean>) request.getAttribute("mbbean");

List<masloaproBean> maspro=(List<masloaproBean>) request.getAttribute("mpbean");

List<newprolosheadBean> newheapro=(List<newprolosheadBean>) request.getAttribute("phbean");

List<newprolosheadBean> newsubpro=(List<newprolosheadBean>)request.getAttribute("psbean");

%>



const master=[

<%

if(master != null){

    for(masternamBean t : master){

%>

    {

        id:<%= t.getId()%>,

        name:"<%= t.getDepnam()%>"

    },

<%

    }

}

%>

];



const mascc=[

<%

if(mascc != null){

    for(masccnamBean c : mascc){

%>

    {

        id:<%= c.getId()%>,

        name:"<%= c.getDepnam()%>"

    },

<%

    }

}

%>

];



const maspig=[

<%

if(maspig != null){

    for(maspignamBean p : maspig){

%>

    {

        id:<%= p.getId()%>,

        name:"<%= p.getPignam()%>"

    },

<%

    }

}

%>

];



const masrd=[

<%

if(masrd != null){

    for(masrdnamBean r : masrd){

%>

    {

        id:<%= r.getId()%>,

        name:"<%= r.getRdnam()%>"

    },

<%

    }

}

%>

];



const masloa=[

<%

if(masloa != null){

    for(masloaBean l : masloa){

%>

    {

        id:<%= l.getId()%>,

        name:"<%= l.getLoanam()%>"

    },

<%

    }

}

%>

];



const newprohea=[

<%

if(newheapro != null){

    for(newprolosheadBean phea : newheapro){

%>

    {

        id:<%= phea.getHeaid()%>,

        name:"<%= phea.getHeanam()%>"

    },

<%

    }

}

%>

];



const newprosub=[

<%

if(newsubpro != null){

    for(newprolosheadBean shea : newsubpro){

%>

    {

        id:<%= shea.getSubid()%>,

        name:"<%= shea.getSubnam()%>"

    },

<%

    }

}

%>

];



const balhea=[

<%

if(maheasbal != null){

    for(masbalsheheaBean bhea : maheasbal){

%>

    {

        id:<%= bhea.getId()%>,

        name:"<%= bhea.getMaihea()%>"

    },

<%

    }

}

%>

];



const balsub=[

<%

if(massubbal != null){

    for(masbalshesubheaBean ms : massubbal){

%>

    {

        id:<%= ms.getId()%>,

        name:"<%= ms.getMasubhea()%>"

    },

<%

    }

}

%>

];



const maspro=[

<%

if(maspro != null){

    for(masloaproBean mp : maspro){

%>

    {

        id:<%= mp.getId()%>,

        headid:<%= mp.getHeaid()%>,

        subheaid:<%= mp.getSubid()%>,

        amo:<%= mp.getAmo()%>,

        per:<%= mp.getPer()%>,

        masloaid:<%= mp.getMasloaid()%>

    },

<%

    }

}

%>

];



const masbal=[

<%

if(masbal != null){

    for(masloabalsheBean mb : masbal){

%>

    {

        id:<%= mb.getId()%>,

        headid:<%= mb.getHeaid()%>,

        subheaid:<%= mb.getSubid()%>,

        amo:<%= mb.getAmo()%>,

        per:<%= mb.getPer()%>,

        masloaid:<%= mb.getMaslaoid()%>

    },

<%

    }

}

%>

];



</script>





<script src="${pageContext.request.contextPath}/newloa.js"></script>

</body>

</html>
