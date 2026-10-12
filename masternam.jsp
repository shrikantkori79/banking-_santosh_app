<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <title>Create name TD Master</title>
    <link rel="stylesheet" href="masternam.css">
</head>

<body>

<form action="masternam" method="post" class="customer-form" ">

<div class="cards">

    <!-- HEADER -->
    <div class="header-customer">

        <div class="header-left">

            <div class="header-img">
                <img src="../image/facelogo.png" alt="">
            </div>

            <div class="head-line">
                <h2>Create Name TD Master</h2>
                <h5>Term deposit master information</h5>
            </div>

        </div>

    </div>


    <!-- MAIN LAYOUT -->
    <div class="main-layout">

        <!-- LEFT CARD -->
        <div class="left-card">

            <!-- DEPOSIT DETAILS -->
            <div class="section">

                <div class="section-title">
                    Deposit Details
                </div>

                <div class="deposit-row">

                    <div class="field">
                        <label for="depositName">
                            Deposit Name
                        </label>

                        <input type="text"
                               id="depositName"
                               name="nam"
                               placeholder="Enter deposit name">
                    </div>


                    <div class="field">
                        <label for="depositNameLocal">
                            Deposit Name (Local)
                        </label>

                        <input type="text"
                               id="depositNameLocal"
                               name="namkan"
                               placeholder="Enter local name">
                    </div>

                </div>

            </div>

        </div>


        <!-- RIGHT CARD -->
        <div class="right-card">

            <!-- LOAN DETAILS -->
            <div class="section">

                <div class="section-title">
                    Loan Details
                </div>

                <div class="right-grid">

                    <div class="field">
                        <label for="loanDeposit">
                            % Of Loan On Deposit
                        </label>

                        <input type="number"
                               id="loanDeposit"
                               name="loanondeposit"
                               placeholder="%"
                               step="0.01">
                    </div>


                    <div class="field">
                        <label for="loanInterest">
                            Interest % On Loan
                        </label>

                        <input type="number"
                               id="loanInterest"
                               name="interstloan"
                               placeholder="%"
                               step="0.01">
                    </div>


                    <div class="field">
                        <label for="panInterest">
                            Pan Interest % On Loan
                        </label>

                        <input type="number"
                               id="panInterest"
                               name="paninterstonloan"
                               placeholder="%"
                               step="0.01">
                    </div>

                </div>

            </div>


            <!-- MATURITY SETTINGS -->
            <div class="section">

                <div class="section-title">
                    Maturity Settings
                </div>

                <div class="maturity-row">

                    <div class="checkbox-field">

                        <input type="checkbox"
                        name="autorenoul"
                               id="autoRenewal">

                        <label for="autoRenewal">
                            Auto Renewal Account
                        </label>

                    </div>


                    <div class="field">

                        <label for="interestAfterMaturity">
                            Interest % After Maturity
                        </label>

                        <input type="number"
                               id="interestAfterMaturity"
                               name="integeraftermat"
                               placeholder="%"
                               step="0.01">

                    </div>

                </div>


                <div class="field">

                    <label for="maturityDays">
                        Interest After Maturity Days
                    </label>

                    <input type="number"
                           id="maturityDays"
                           name="interstaftermatday"
                           placeholder="Enter days"
                           class="small-input">

                </div>

            </div>


            <!-- PRE MATURITY SETTINGS -->
            <div class="section">

                <div class="section-title">
                    Pre Maturity Settings
                </div>

                <div class="field">

                    <label for="deduction">
                        Deduction %
                    </label>

                    <input type="number"
                           id="deduction"
                           placeholder="Enter %"
                           name="deductioninterst"
                           class="small-input"
                           step="0.01">

                </div>

            </div>

        </div>

    </div>


    <!-- BUTTONS -->
    <div class="button-row">

        <button type="submit"
                class="btn save"
                onclick="saveTD()">
            Save
        </button>

        <button type="button"
                class="btn reset"
                onclick="resetTD()">
            Reset
        </button>

        <button type="button"
                class="btn exit"
                onclick="exitTD()">
            Exit
        </button>

    </div>

</div>


</form>

<script src="master.js"></script>

</body>
</html>
