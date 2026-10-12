<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Create CC Name Master</title>

    <link rel="stylesheet"
          href="masccnam.css">

</head>

<body>


<form action="masccnam"
      method="post"
      class="customer-form">


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

                <h2>Create Name CC Master</h2>

                <h5>Cash credit master information</h5>

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


                    <!-- DEPOSIT NAME -->

                    <div class="field">

                        <label for="depositName">

                            Deposit Name

                        </label>


                        <input type="text"
                               id="depositName"
                               name="nam"
                               placeholder="Enter deposit name"
                               required>

                    </div>


                    <!-- LOCAL NAME -->

                    <div class="field">

                        <label for="depositNameLocal">

                            Deposit Name (kan)

                        </label>


                        <input type="text"
                               id="depositNameLocal"
                               name="namkan"
                               placeholder="Enter local name"
                               required>

                    </div>


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


                    <!-- LOAN ON DEPOSIT -->

                    <div class="field">

                        <label for="loanDeposit">

                            % Of Loan On Deposit

                        </label>


                        <input type="number"
                               id="loanDeposit"
                               name="loanondeposit"
                               placeholder="%"
                               step="0.01"
                               required>

                    </div>


                    <!-- INTEREST ON LOAN -->

                    <div class="field">

                        <label for="loanInterest">

                            Interest % On Loan

                        </label>


                        <input type="number"
                               id="loanInterest"
                               name="interstloan"
                               placeholder="%"
                               step="0.01"
                               required>

                    </div>


                    <!-- PAN INTEREST -->

                    <div class="field">

                        <label for="panInterest">

                            Pan Interest % On Loan

                        </label>


                        <input type="number"
                               id="panInterest"
                               name="paninterstonloan"
                               placeholder="%"
                               step="0.01"
                               required>

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

                        <input type="checkbox"
                               name="autorenoul"
                               id="autoRenewal">

                        <label for="autoRenewal">

                            Auto Renewal Account

                        </label>

                    </div>


                    <!-- INTEREST AFTER MATURITY -->

                    <div class="field">

                        <label for="interestAfterMaturity">

                            Interest % After Maturity

                        </label>


                        <input type="number"
                               id="interestAfterMaturity"
                               name="integeraftermat"
                               placeholder="%"
                               step="0.01"
                               required>

                    </div>


                </div>


                <!-- MATURITY DAYS -->

                <div class="field">

                    <label for="maturityDays">

                        Interest After Maturity Days

                    </label>


                    <input type="number"
                           id="maturityDays"
                           name="interstaftermatday"
                           placeholder="Enter days"
                           class="small-input"
                           min="0"
                           required>

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


                    <input type="number"
                           id="deduction"
                           name="deductioninterst"
                           placeholder="Enter %"
                           class="small-input"
                           step="0.01"
                           required>

                </div>


            </div>


        </div>


    </div>


    <!-- ================================================= -->
    <!-- BUTTONS -->
    <!-- ================================================= -->

    <div class="button-row">


        <!-- SAVE -->

        <button type="submit"
                class="btn save">

            Save

        </button>


        <!-- RESET -->

        <button type="reset"
                class="btn reset">

            Reset

        </button>


        <!-- EXIT -->

        <button type="button"
                class="btn exit"
                onclick="exitCC()">

            Exit

        </button>


    </div>


</div>


</form>


<script>

function exitCC() {

    window.history.back();

}

</script>


<script src="master.js"></script>


</body>

</html>