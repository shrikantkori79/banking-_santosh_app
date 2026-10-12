<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>Create RD Master</title>

    <link rel="stylesheet"
          href="masrd.css">

</head>


<body>


<form action="masrd"
      method="post"
      class="customer-form"
      id="rdForm">


<div class="cards">


<!-- =====================================================
     HEADER
====================================================== -->

<div class="header-customer">

    <div class="header-left">

        <div class="header-img">

            <img src="../image/facelogo.png"
                 alt="">

        </div>


        <div class="head-line">

            <h2>
                Create RD Master
            </h2>

            <h5>
                Recurring deposit master information
            </h5>

        </div>

    </div>

</div>


<!-- =====================================================
     MAIN TWO COLUMN LAYOUT
====================================================== -->

<div class="main-layout">


<!-- =================================================
     LEFT SIDE
================================================== -->

<div class="left-card">


<!-- =================================================
     RD DETAILS
================================================== -->

<div class="section">

    <div class="section-title">
        RD Details
    </div>


    <div class="rd-name-row">


        <div class="field">

            <label for="rdName">
                RD Name
            </label>

            <input
                type="text"
                id="rdName"
                name="rdName"
                placeholder="Enter RD name"
                required>

        </div>


        <div class="field">

            <label for="rdNameKnd">
                RD Name (Knd)
            </label>

            <input
                type="text"
                id="rdNameKnd"
                name="rdNameKnd"
                placeholder="Enter RD name (Knd)"
                required>

        </div>


    </div>

</div>


<!-- =================================================
     INSTALLMENT DETAILS
================================================== -->

<div class="section">

    <div class="section-title">
        Installment Details
    </div>


    <div class="installment-input-row">


        <!-- =========================================
             INTEREST APPLICATION DATE
        ========================================== -->

        <div class="field">

            <label for="interestAppDate">
                Interest App Date
            </label>

            <input
                type="date"
                id="interestAppDate"
                name="interestAppDate"
                required>

        </div>


        <!-- =========================================
             NUMBER OF INSTALLMENT
             
             IMPORTANT:
             NO name="month"
             
             JavaScript creates hidden
             name="month" when Add is clicked.
        ========================================== -->

        <div class="field">

            <label for="month">
                No Of Instalment
            </label>

            <select id="month">

                <option value="">
                    Select Instalment
                </option>

                <%
                    for (int i = 1; i <= 200; i++) {
                %>

                    <option value="<%=i%>">
                        <%=i%>
                    </option>

                <%
                    }
                %>

            </select>

        </div>


        <!-- =========================================
             TYPE OF INSTALLMENT
             
             IMPORTANT:
             NO name="typofins"
             
             JavaScript creates hidden
             name="typofins" when Add is clicked.
        ========================================== -->

        <div class="field">

            <label for="typofins">
                Type Of Instalment
            </label>

            <select id="typofins">

                <option value="">
                    Select the type
                </option>

                <option value="1">
                    Monthly
                </option>

                <option value="2">
                    Quarterly
                </option>

                <option value="3">
                    Half Yearly
                </option>

                <option value="4">
                    Year
                </option>

            </select>

        </div>


    </div>


    <!-- =============================================
         INTEREST INPUT + ADD BUTTON
    ============================================== -->

    <div class="installment-input-row">


        <div class="field">

            <label for="intPercent">
                Int %
            </label>

            <input
                type="number"
                id="intPercent"
                min="0"
                step="0.01"
                placeholder="%">

        </div>


        <button
            type="button"
            class="add-btn"
            onclick="addInstallment()">

            Add

        </button>


    </div>


    <!-- =============================================
         INSTALLMENT TABLE
    ============================================== -->

    <div class="table-scroll">

        <table>

            <thead>

                <tr>

                    <th>
                        No Of Instalment
                    </th>

                    <th>
                        Type Of Instalment
                    </th>

                    <th>
                        Int %
                    </th>

                    <th>
                        Action
                    </th>

                </tr>

            </thead>


            <tbody id="installmentTableBody">


                <tr id="emptyInstallmentRow">

                    <td
                        colspan="4"
                        class="empty-row">

                        No records found

                    </td>

                </tr>


            </tbody>

        </table>

    </div>

</div>


<!-- =================================================
     AGENT COMMISSION DETAILS
================================================== -->

<div class="section">

    <div class="section-title">
        Agent Commission Details
    </div>


    <div class="agent-row">


        <!-- =========================================
             MIN AMOUNT
        ========================================== -->

        <div class="field">

            <label for="minAmount">
                Min Amount
            </label>

            <input
                type="number"
                id="minAmount"
                min="0"
                placeholder="Min amount">

        </div>


        <!-- =========================================
             MAX AMOUNT
        ========================================== -->

        <div class="field">

            <label for="maxAmount">
                Max Amount
            </label>

            <input
                type="number"
                id="maxAmount"
                min="0"
                placeholder="Max amount">

        </div>


        <!-- =========================================
             AGENT INTEREST
        ========================================== -->

        <div class="field">

            <label for="agentInt">
                Int %
            </label>

            <input
                type="number"
                id="agentInt"
                min="0"
                step="0.01"
                placeholder="%">

        </div>


        <button
            type="button"
            class="add-btn"
            onclick="addCommission()">

            Add

        </button>

    </div>


    <!-- =============================================
         AGENT COMMISSION TABLE
    ============================================== -->

    <div class="table-scroll commission-table">

        <table>

            <thead>

                <tr>

                    <th>
                        Min Amount
                    </th>

                    <th>
                        Max Amount
                    </th>

                    <th>
                        Int %
                    </th>

                    <th>
                        Action
                    </th>

                </tr>

            </thead>


            <tbody id="commissionTableBody">


                <tr id="emptyCommissionRow">

                    <td
                        colspan="4"
                        class="empty-row">

                        No records found

                    </td>

                </tr>


            </tbody>

        </table>

    </div>

</div>


</div>


<!-- =================================================
     RIGHT SIDE
================================================== -->

<div class="right-card">


<!-- =================================================
     LOAN DETAILS
================================================== -->

<div class="section">

    <div class="section-title">
        Loan Details
    </div>


    <div class="loan-grid">


        <div class="field">

            <label for="loanDeposit">
                % Of Loan On Deposit
            </label>

            <input
                type="number"
                id="loanDeposit"
                name="loanDeposit"
                min="0"
                step="0.01"
                placeholder="%"
                required>

        </div>


        <div class="field">

            <label for="loanInterest">
                Interest % On Loan
            </label>

            <input
                type="number"
                id="loanInterest"
                name="loanInterest"
                min="0"
                step="0.01"
                placeholder="%"
                required>

        </div>


        <div class="field">

            <label for="panInterest">
                Pen Interest % On Loan
            </label>

            <input
                type="number"
                id="panInterest"
                name="panInterest"
                min="0"
                step="0.01"
                placeholder="%"
                required>

        </div>


    </div>

</div>


<!-- =================================================
     INSTALLMENT DEFAULT SETTINGS
================================================== -->

<div class="section">

    <div class="section-title">
        Installment Default Settings
    </div>


    <div class="default-grid">


        <div class="field">

            <label for="daysAfter">
                Days After Installment Due
            </label>

            <input
                type="number"
                id="daysAfter"
                name="daysAfter"
                min="0"
                step="0.01"
                placeholder="Days"
                required>

        </div>


        <div class="field">

            <label for="penaltyAmount">
                Penalty Amount
            </label>

            <input
                type="number"
                id="penaltyAmount"
                name="penaltyAmount"
                min="0"
                step="0.01"
                placeholder="Amount"
                required>

        </div>


    </div>


    <!-- =============================================
         PENALTY TYPE
    ============================================== -->

    <div class="penalty-type">

        <label>

            <input
                type="checkbox"
                name="penaltyType"
                value="percent"
                checked>

            %

        </label>

    </div>


    <!-- =============================================
         DEPOSIT PENALTY
    ============================================== -->

    <div class="field deposit-penalty">

        <label for="depositPenalty">
            Penalty Amount Or % On Deposit
        </label>

        <input
            type="number"
            id="depositPenalty"
            name="depositPenalty"
            min="0"
            step="0.01"
            placeholder="%"
            required>

    </div>

</div>


<!-- =================================================
     PRE MATURITY CLOSE SETTINGS
================================================== -->

<div class="section">

    <div class="section-title">
        Pre Maturity Close Settings
    </div>


    <div class="field small-field">

        <label for="deduction">
            Deduction %
        </label>

        <input
            type="number"
            id="deduction"
            name="deduction"
            min="0"
            step="0.01"
            placeholder="%"
            required>

    </div>

</div>


</div>

</div>


<!-- =====================================================
     BUTTONS
====================================================== -->

<div class="button-row">


    <button
        type="button"
        class="btn save"
        onclick="saveRD()">

        Save

    </button>


    <button
        type="button"
        class="btn reset"
        onclick="resetRD()">

        Reset

    </button>


    <button
        type="button"
        class="btn exit"
        onclick="exitRD()">

        Exit

    </button>


</div>


</div>

</form>


<script src="masrd.js"></script>

</body>

</html>