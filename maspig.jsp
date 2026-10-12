<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>Create Pigmy Master</title>

<link rel="stylesheet" href="maspig.css">

</head>

<body>

<form
    action="<%=request.getContextPath()%>/maspig"
    method="post"
    class="customer-form"
    
>

<div class="cards">

<!-- =====================================================
     HEADER
====================================================== -->

<div class="header-customer">

<div class="header-left">

    <div class="header-img">

        <img
            src="../image/facelogo.png"
            alt=""
        >

    </div>


    <div class="head-line">

        <h2>
            Create Pigmy Master
        </h2>

        <h5>
            Pigmy deposit master information
        </h5>

    </div>

</div>


</div>

<!-- =====================================================
     MAIN LAYOUT
====================================================== -->

<div class="main-layout">

<!-- =================================================
     LEFT SIDE
================================================== -->

<div class="left-card">

<!-- =================================================
     PIGMY DETAILS
================================================== -->

<div class="section">


<div class="section-title">
    Pigmy Details
</div>


<div class="deposit-row">


    <div class="field">

        <label for="pigmyName">
            Pigmy Name
        </label>

        <input
            type="text"
            id="pigmyName"
            placeholder="Enter pigmy name"
        >

    </div>



    <div class="field">

        <label for="pigmyNameLocal">
            Pigmy Name (knd)
        </label>

        <input
            type="text"
            id="pigmyNameLocal"
            placeholder="Enter knd name"
        >

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


<!-- INTEREST DATE -->

<div class="field">

    <label for="interestDate">
        Interest Date
    </label>

    <input
        type="date"
        id="interestDate"
    >

</div>



<!-- FROM / TO -->

<div class="installment-row">


    <div class="field">

        <label for="fromMonth">
            From Month
        </label>

        <input
            type="number"
            id="fromMonth"
            value="0"
            min="0"
            placeholder="Month"
        >

    </div>



    <div class="field">

        <label for="fromDay">
            From Day
        </label>

        <input
            type="number"
            id="fromDay"
            value="0"
            min="0"
            placeholder="Day"
        >

    </div>



    <div class="field">

        <label for="toMonth">
            To Month
        </label>

        <input
            type="number"
            id="toMonth"
            value="0"
            min="0"
            placeholder="Month"
        >

    </div>



    <div class="field">

        <label for="toDay">
            To Day
        </label>

        <input
            type="number"
            id="toDay"
            value="0"
            min="0"
            placeholder="Day"
        >

    </div>


</div>



<!-- INTEREST / COMMISSION -->

<div class="commission-row">


    <div class="radio-field">


        <label>

            <input
                type="radio"
                name="interestType"
                 id="interestType"
                value="interest"
                checked
            >

            Pay Interest

        </label>



        <label>

            <input
                type="radio"
                name="interestType"
                id="interestType"
                value="commission"
            >

            Receive Commission

        </label>


    </div>



    <div class="field interest-field">

        <label for="interest">
            Int %
        </label>

        <input
            type="number"
            id="interest"
            value="0"
            min="0"
            step="0.01"
            placeholder="%"
        >

    </div>



    <button
        type="button"
        class="add-btn"
        onclick="addInstallment()"
    >
        Add
    </button>


</div>



<!-- INSTALLMENT TABLE -->

<div class="table-scroll">

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
                    TO Month
                </th>

                <th>
                    TO Day
                </th>

                <th>
                    Int %
                </th>
                <th>
                    int/comm
                </th>

            </tr>

        </thead>


        <tbody id="installmentTableBody">

            <tr id="emptyInstallmentRow">

                <td
                    colspan="5"
                    class="empty-row"
                >
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
     INTEREST CALCULATION
================================================== -->

<div class="section">


<div class="section-title">
    Interest Calculation Format
</div>


<div class="checkbox-row">


    <label>

        <input
            type="checkbox"
            id="dayBase"
        >

        Day Base

    </label>



    <label>

        <input
            type="checkbox"
            id="production"
        >

        Production

    </label>


</div>


</div>

<!-- =================================================
     LOAN DETAILS
================================================== -->

<div class="section">


<div class="section-title">
    Loan Details
</div>


<div class="right-grid">


    <div class="field">

        <label for="loanDeposit">
            % Of Loan On Deposit
        </label>

        <input
            type="number"
            id="loanDeposit"
            value="0"
            min="0"
            step="0.01"
            placeholder="%"
        >

    </div>



    <div class="field">

        <label for="loanInterest">
            Interest % On Loan
        </label>

        <input
            type="number"
            id="loanInterest"
            value="0"
            min="0"
            step="0.01"
            placeholder="%"
        >

    </div>



    <div class="field">

        <label for="panInterest">
            Pan Interest % On Loan
        </label>

        <input
            type="number"
            id="panInterest"
            value="0"
            min="0"
            step="0.01"
            placeholder="%"
        >

    </div>


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


    <div class="field">

        <label for="minAmount">
            Min Amount
        </label>

        <input
            type="number"
            id="minAmount"
            value="0"
            min="0"
            placeholder="Min amount"
        >

    </div>



    <div class="field">

        <label for="maxAmount">
            Max Amount
        </label>

        <input
            type="number"
            id="maxAmount"
            value="0"
            min="0"
            placeholder="Max amount"
        >

    </div>



    <div class="field">

        <label for="commission">
            %
        </label>

        <input
            type="number"
            id="commission"
            value="0"
            min="0"
            step="0.01"
            placeholder="%"
        >

    </div>



    <button
        type="button"
        class="add-btn"
        onclick="addCommission()"
    >
        Add
    </button>


</div>



<!-- AGENT COMMISSION TABLE -->

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
                    %
                </th>

            </tr>

        </thead>


        <tbody id="commissionTableBody">

            <tr id="emptyCommissionRow">

                <td
                    colspan="3"
                    class="empty-row"
                >
                    No records found
                </td>

            </tr>

        </tbody>

    </table>

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
    onclick="savePigmy()"
>
    Save
</button>



<button
    type="button"
    class="btn reset"
    onclick="resetPigmy()"
>
    Reset
</button>



<button
    type="button"
    class="btn exit"
    onclick="exitPigmy()"
>
    Exit
</button>


</div>

</div>

</form>

<script src="maspig.js"></script>

</body>

</html>
