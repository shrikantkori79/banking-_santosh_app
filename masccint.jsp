<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List"%>

<%@ page import="com.Bank.Bean.masccnamBean"%>
<%@ page import="com.Bank.Bean.masccsalBean"%>


<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Create CC Interest Master</title>

    <link rel="stylesheet"
          href="masccint.css">

</head>


<body>


<form id="masccintForm"
      class="customer-form"
      action="masccint"
      method="post"
      onsubmit="return false;">


<div class="cards">


    <!-- ================================================= -->
    <!-- HEADER -->
    <!-- ================================================= -->

    <div class="header-customer">

        <div class="header-left">

            <div class="header-img">

                <img
                    src="../image/facelogo.png"
                    alt="">

            </div>


            <div class="head-line">

                <h2>
                    Create CC Interest Master
                </h2>

                <h5>
                    Cash credit interest master information
                </h5>

            </div>

        </div>

    </div>



    <!-- ================================================= -->
    <!-- GET DATA FROM SERVLET -->
    <!-- ================================================= -->

    <%

        List<masccnamBean> masterList =
            (List<masccnamBean>)
            request.getAttribute("masterList");


        List<masccsalBean> masslabean =
            (List<masccsalBean>)
            request.getAttribute("masslabean");

    %>



    <!-- ================================================= -->
    <!-- MAIN LAYOUT -->
    <!-- ================================================= -->

    <div class="main-layout">



        <!-- ================================================= -->
        <!-- LEFT CARD -->
        <!-- ================================================= -->

        <div class="left-card">



            <!-- ================================================= -->
            <!-- DEPOSIT DETAILS -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Deposit Details

                </div>


                <div class="deposit-row">


                    <!-- ========================================= -->
                    <!-- DEPOSIT NAME -->
                    <!-- ========================================= -->

                    <div class="field">

                        <label for="depositId">

                            Deposit Name kan

                        </label>


                        <select
                            id="depositId"
                            name="depid"
                            onchange="loadDeposit()">


                            <option value="">

                                Select Deposit

                            </option>


                            <%

                                if (masterList != null) {

                                    for (
                                        masccnamBean mtn :
                                        masterList
                                    ) {

                            %>


                            <option

                                value="<%=mtn.getId()%>"

                                data-local="<%=mtn.getDepnamkan() == null
                                    ? ""
                                    : mtn.getDepnamkan()%>"

                                data-loan-deposit="<%=mtn.getIntloadep()%>"

                                data-loan-interest="<%=mtn.getIntloa()%>"

                                data-pan-interest="<%=mtn.getPanintloa()%>"

                                data-auto-renewal="<%=mtn.isAuto()%>"

                                data-after-maturity="<%=mtn.getIntaftmat()%>"

                                data-after-maturity-days="<%=mtn.getIntaftmatday()%>"

                                data-deduction="<%=mtn.getDedint()%>">


                                <%=mtn.getDepnam()%>


                            </option>


                            <%

                                    }

                                }

                            %>


                        </select>

                    </div>



                    <!-- ========================================= -->
                    <!-- LOCAL NAME -->
                    <!-- ========================================= -->

                    <div class="field">

                        <label for="depositNameLocal">

                            Deposit Name (Local)

                        </label>


                        <input
                            type="text"
                            id="depositNameLocal"
                            readonly
                            placeholder="Local name">

                    </div>


                </div>

            </div>



            <!-- ================================================= -->
            <!-- INTEREST DATE -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Interest Settings

                </div>


                <div class="field">

                    <label for="interestDate">

                        Interest Applicable Date

                    </label>


                    <input
                        type="date"
                        id="interestDate"
                        name="intdate">

                </div>

            </div>



            <!-- ================================================= -->
            <!-- SLAB DETAILS -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Slab Details

                </div>



                <!-- ================================================= -->
                <!-- SLAB NAME + INTEREST + ADD -->
                <!-- ================================================= -->

                <div class="slab-input-row">


                    <!-- SLAB NAME -->

                    <div class="field">

                        <label for="slabName">

                            Slab Name

                        </label>


                        <select
                            id="slabName"
                            onchange="loadSlabDetails()">


                            <option value="">

                                Select Slab

                            </option>


                        </select>

                    </div>



                    <!-- INTEREST -->

                    <div class="field">

                        <label for="slabInterest">

                            Interest %

                        </label>


                        <input
                            type="number"
                            id="slabInterest"
                            placeholder="%"
                            step="0.01"
                            min="0">

                    </div>



                    <!-- ADD BUTTON -->

                    <div class="field">

                        <label>

                            &nbsp;

                        </label>


                        <button
                            type="button"
                            class="btn save"
                            onclick="addSlab()">

                            Add

                        </button>

                    </div>


                </div>



                <!-- ================================================= -->
                <!-- MONTH + DAY + NO OF TIMES OF DEPOSIT -->
                <!-- SAME ROW -->
                <!-- ================================================= -->

                <div class="from-to-row">


                    <!-- ========================================= -->
                    <!-- MONTH -->
                    <!-- ========================================= -->

                    <div class="field">

                        <label for="slabMonth">

                            Month

                        </label>


                        <input
                            type="number"
                            id="slabMonth"
                            readonly
                            placeholder="Month">

                    </div>



                    <!-- ========================================= -->
                    <!-- DAY -->
                    <!-- ========================================= -->

                    <div class="field">

                        <label for="slabDay">

                            Day

                        </label>


                        <input
                            type="number"
                            id="slabDay"
                            readonly
                            placeholder="Day">

                    </div>



                    <!-- ========================================= -->
                    <!-- NO OF TIMES OF DEPOSIT -->
                    <!-- ========================================= -->

                    <div class="field">

                        <label for="noOfTimes">

                            No. of Times of Deposit

                        </label>


                        <input
                            type="number"
                            id="noOfTimes"
                            readonly
                            placeholder="No. of Times">

                    </div>


                </div>



                <!-- ================================================= -->
                <!-- SLAB TABLE -->
                <!-- ================================================= -->

                <div class="table-scroll">


                    <table>


                        <thead>

                            <tr>

                                <th>
                                    Month
                                </th>

                                <th>
                                    Day
                                </th>

                                <th>
                                    No. of Times of Deposit
                                </th>

                                <th>
                                    Interest %
                                </th>

                                <th>
                                    Slab Name
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody id="slabTableBody">


                            <tr id="emptySlabRow">

                                <td
                                    colspan="6"
                                    class="empty-row">

                                    No records found

                                </td>

                            </tr>


                        </tbody>


                    </table>


                </div>


            </div>


        </div>



        <!-- ================================================= -->
        <!-- RIGHT CARD -->
        <!-- ================================================= -->

        <div class="right-card">



            <!-- ================================================= -->
            <!-- LOAN DETAILS -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Loan Details

                </div>


                <div class="right-grid">


                    <!-- % OF LOAN ON DEPOSIT -->

                    <div class="field">

                        <label for="loanDeposit">

                            % Of Loan On Deposit

                        </label>


                        <input
                            type="number"
                            id="loanDeposit"
                            placeholder="%"
                            step="0.01"
                            readonly>

                    </div>



                    <!-- INTEREST ON LOAN -->

                    <div class="field">

                        <label for="loanInterest">

                            Interest % On Loan

                        </label>


                        <input
                            type="number"
                            id="loanInterest"
                            placeholder="%"
                            step="0.01"
                            readonly>

                    </div>



                    <!-- PAN INTEREST -->

                    <div class="field">

                        <label for="panInterest">

                            PAN Interest % On Loan

                        </label>


                        <input
                            type="number"
                            id="panInterest"
                            placeholder="%"
                            step="0.01"
                            readonly>

                    </div>


                </div>

            </div>



            <!-- ================================================= -->
            <!-- MATURITY SETTINGS -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Maturity Settings

                </div>


                <div class="maturity-row">


                    <!-- AUTO RENEWAL -->

                    <div class="checkbox-field">

                        <input
                            type="checkbox"
                            id="autoRenewal"
                            disabled>


                        <label for="autoRenewal">

                            Auto Renewal Account

                        </label>

                    </div>



                    <!-- AFTER MATURITY INTEREST -->

                    <div class="field">

                        <label for="interestAfterMaturity">

                            Interest % After Maturity

                        </label>


                        <input
                            type="number"
                            id="interestAfterMaturity"
                            placeholder="%"
                            step="0.01"
                            readonly>

                    </div>


                </div>



                <!-- AFTER MATURITY DAYS -->

                <div class="field">

                    <label for="maturityDays">

                        Interest After Maturity Days

                    </label>


                    <input
                        type="number"
                        id="maturityDays"
                        placeholder="Days"
                        class="small-input"
                        readonly>

                </div>


            </div>



            <!-- ================================================= -->
            <!-- PRE MATURITY -->
            <!-- ================================================= -->

            <div class="section">

                <div class="section-title">

                    Pre Maturity Settings

                </div>


                <div class="field">

                    <label for="deduction">

                        Deduction %

                    </label>


                    <input
                        type="number"
                        id="deduction"
                        placeholder="%"
                        class="small-input"
                        step="0.01"
                        readonly>

                </div>


            </div>


        </div>


    </div>



    <!-- ================================================= -->
    <!-- BUTTONS -->
    <!-- ================================================= -->

    <div class="button-row">


        <button
            type="button"
            class="btn save"
            onclick="saveCCInterest()">

            Save

        </button>



        <button
            type="button"
            class="btn reset"
            onclick="resetCCInterest()">

            Reset

        </button>



        <button
            type="button"
            class="btn exit"
            onclick="exitCCInterest()">

            Exit

        </button>


    </div>


</div>


</form>



<!-- ================================================= -->
<!-- CC SLAB DATA FROM DATABASE -->
<!-- ================================================= -->

<script>

const allSlabs = [

<%

if (masslabean != null) {

    for (masccsalBean ms : masslabean) {

%>

{

    id: <%=ms.getId()%>,

    depid: <%=ms.getDepid()%>,

    slanam: "<%=ms.getSlanam()
        .replace("\\", "\\\\")
        .replace("\"", "\\\"")
        .replace("\r", "\\r")
        .replace("\n", "\\n")%>",

    mon: <%=ms.getMon()%>,

    day: <%=ms.getDay()%>,

    nooftimofdep: <%=ms.getNooftimofdep()%>

},

<%

    }

}

%>

];


// Check the data coming from Java

console.log("CC SLAB DATA:", allSlabs);

</script>



<!-- ================================================= -->
<!-- JAVASCRIPT -->
<!-- ================================================= -->

<script src="masccint.js"></script>



<!-- ================================================= -->
<!-- SERVER MESSAGE -->
<!-- ================================================= -->

<%

String msg =
    (String) request.getAttribute("msg");


if ("success".equals(msg)) {

%>

<script>

alert(
    "CC Interest Master saved successfully."
);

</script>

<%

}
else if ("depositEmpty".equals(msg)) {

%>

<script>

alert(
    "Please select Deposit Name."
);

</script>

<%

}
else if ("slabEmpty".equals(msg)) {

%>

<script>

alert(
    "Please add at least one slab."
);

</script>

<%

}
else if ("dateEmpty".equals(msg)) {

%>

<script>

alert(
    "Please select Interest Applicable Date."
);

</script>

<%

}
else if ("failed".equals(msg)) {

%>

<script>

alert(
    "CC Interest Master could not be saved."
);

</script>

<%

}

%>


</body>

</html>