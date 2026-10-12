<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List" %>
<%@ page import="com.Bank.Bean.masternamBean" %>
<%@ page import="com.Bank.Bean.masterslaBean" %>

<%

List<masternamBean> masterList =
        (List<masternamBean>)
        request.getAttribute("masterList");

List<masterslaBean> masslabean =
        (List<masterslaBean>)
        request.getAttribute("masslabean");

String msg =
        (String) request.getAttribute("msg");

%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Create TD Master</title>

    <link rel="stylesheet"
          href="masterint.css">

</head>


<body>


<form id="mastertdForm"
      class="customer-form"
      action="masterint"
      method="post"
      onsubmit="return false;">


<div class="cards">


    <!-- ================================================= -->
    <!-- HEADER -->
    <!-- ================================================= -->

    <div class="header-customer">

        <div class="header-left">

            <div class="header-img">

                <img src="../image/facelogo.png"
                     alt="">

            </div>


            <div class="head-line">

                <h2>Create TD Master</h2>

                <h5>
                    Term deposit master information
                </h5>

            </div>

        </div>

    </div>


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


                    <!-- ================================================= -->
                    <!-- DEPOSIT NAME -->
                    <!-- ================================================= -->

                    <div class="field">

                        <label for="depositId">
                            Deposit Name
                        </label>


                        <select id="depositId"
                                name="depid"
                                onchange="loadDeposit()">

                            <option value="">
                                Select Deposit
                            </option>


                            <%

                            if (masterList != null) {

                                for (masternamBean mtn :
                                     masterList) {

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

                                data-deduction="<%=mtn.getDedint()%>"
                            >

                                <%=mtn.getDepnam()%>

                            </option>


                            <%

                                }

                            }

                            %>


                        </select>

                    </div>


                    <!-- ================================================= -->
                    <!-- LOCAL NAME -->
                    <!-- ================================================= -->

                    <div class="field">

                        <label for="depositNameLocal">
                            Deposit Name (Local)
                        </label>


                        <input
                            type="text"
                            id="depositNameLocal"
                            readonly
                            placeholder="Kannada name">

                    </div>


                </div>

            </div>


            <!-- ================================================= -->
            <!-- INTEREST SETTINGS -->
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


                <div class="slab-input-row">


                    <!-- ================================================= -->
                    <!-- SLAB NAME -->
                    <!-- ================================================= -->

                    <div class="field">

                        <label for="slabName">
                            Slab Name
                        </label>


                        <select
                            id="slabName"
                            onchange="loadSlabDetails()">

                            <option value="">
                                Select slab name
                            </option>

                        </select>

                    </div>


                    <!-- ================================================= -->
                    <!-- INTEREST -->
                    <!-- ================================================= -->

                    <div class="field int-field">

                        <label for="slabInterest">
                            Int %
                        </label>


                        <input
                            type="number"
                            id="slabInterest"
                            placeholder="%"
                            step="0.01"
                            min="0">

                    </div>


                    <!-- ================================================= -->
                    <!-- ADD BUTTON -->
                    <!-- ================================================= -->

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
                <!-- FROM / TO -->
                <!-- ================================================= -->

                <div class="from-to-row">


                    <!-- ================================================= -->
                    <!-- FROM -->
                    <!-- ================================================= -->

                    <div class="range-box">

                        <h4>
                            From
                        </h4>


                        <div class="small-row">


                            <div class="field">

                                <label>
                                    Months
                                </label>


                                <input
                                    type="number"
                                    id="fromMonths"
                                    readonly>

                            </div>


                            <div class="field">

                                <label>
                                    Days
                                </label>


                                <input
                                    type="number"
                                    id="fromDays"
                                    readonly>

                            </div>


                        </div>

                    </div>


                    <!-- ================================================= -->
                    <!-- TO -->
                    <!-- ================================================= -->

                    <div class="range-box">

                        <h4>
                            To
                        </h4>


                        <div class="small-row">


                            <div class="field">

                                <label>
                                    Months
                                </label>


                                <input
                                    type="number"
                                    id="toMonths"
                                    readonly>

                            </div>


                            <div class="field">

                                <label>
                                    Days
                                </label>


                                <input
                                    type="number"
                                    id="toDays"
                                    readonly>

                            </div>


                        </div>

                    </div>


                </div>


                <!-- ================================================= -->
                <!-- TABLE -->
                <!-- ================================================= -->

                <div class="table-scroll slab-scroll">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    From Month
                                </th>

                                <th>
                                    From Day
                                </th>

                                <th>
                                    To Month
                                </th>

                                <th>
                                    To Day
                                </th>

                                <th>
                                    Int %
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
                                    colspan="7"
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


                    <!-- ================================================= -->
                    <!-- LOAN ON DEPOSIT -->
                    <!-- ================================================= -->

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


                    <!-- ================================================= -->
                    <!-- INTEREST ON LOAN -->
                    <!-- ================================================= -->

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


                    <!-- ================================================= -->
                    <!-- PAN INTEREST -->
                    <!-- ================================================= -->

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


                    <!-- ================================================= -->
                    <!-- AUTO RENEWAL -->
                    <!-- ================================================= -->

                    <div class="checkbox-field">

                        <input
                            type="checkbox"
                            id="autoRenewal"
                            disabled>


                        <label for="autoRenewal">

                            Auto Renewal Account

                        </label>

                    </div>


                    <!-- ================================================= -->
                    <!-- INTEREST AFTER MATURITY -->
                    <!-- ================================================= -->

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


                <!-- ================================================= -->
                <!-- MATURITY DAYS -->
                <!-- ================================================= -->

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
            <!-- PRE MATURITY SETTINGS -->
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
            onclick="saveTD()">

            Save

        </button>


        <button
            type="button"
            class="btn reset"
            onclick="resetTD()">

            Reset

        </button>


        <button
            type="button"
            class="btn exit"
            onclick="exitTD()">

            Exit

        </button>


    </div>


</div>


</form>


<!-- ================================================= -->
<!-- ALL SLAB DATA FROM DATABASE -->
<!-- ================================================= -->

<script>

const allSlabs = [

<%

if (masslabean != null) {

    for (masterslaBean ms :
         masslabean) {

%>

{

    id: <%=ms.getId()%>,

    depid: <%=ms.getDepid()%>,

    slanam: "<%=ms.getSlanam()
        .replace("\\", "\\\\")
        .replace("\"", "\\\"")
        .replace("\r", "\\r")
        .replace("\n", "\\n")%>",

    fromon: <%=ms.getFromon()%>,

    froday: <%=ms.getFroday()%>,

    tomon: <%=ms.getTomon()%>,

    today: <%=ms.getToday()%>

},

<%

    }

}

%>

];

</script>


<!-- ================================================= -->
<!-- JAVASCRIPT -->
<!-- ================================================= -->

<script src="masterint.js"></script>


<!-- ================================================= -->
<!-- MESSAGE -->
<!-- ================================================= -->

<%

if ("success".equals(msg)) {

%>

<script>

alert(
    "TD Master saved successfully."
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
    "TD Master could not be saved."
);

</script>

<%

}

%>


</body>

</html>