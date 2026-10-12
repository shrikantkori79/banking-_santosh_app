<%@page import="com.Bank.Bean.masbalshesubheaBean"%>
<%@page import="com.Bank.Bean.masbalsheheaBean"%>
<%@page import="com.Bank.Bean.masbalsheaccBean"%>
<%@page import="com.Bank.Bean.newprolosheadBean"%>

<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List" %>


<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>Create Deposit Ledger</title>

<link rel="stylesheet"
      href="./masdeppro.css">

</head>


<body>


<%
    // =====================================================
    // INCOME / EXPENSE
    // =====================================================

    List<newprolosheadBean> main =
        (List<newprolosheadBean>)
        request.getAttribute("mainhead");


    List<newprolosheadBean> subhead =
        (List<newprolosheadBean>)
        request.getAttribute("subhead");


    // =====================================================
    // BALANCE SHEET
    // =====================================================

    List<masbalsheheaBean> balhead =
        (List<masbalsheheaBean>)
        request.getAttribute("balhead");


    List<masbalshesubheaBean> balsubhead =
        (List<masbalshesubheaBean>)
        request.getAttribute("balsubhead");


    List<masbalsheaccBean> balacc =
        (List<masbalsheaccBean>)
        request.getAttribute("balacc");

%>



<form
    class="customer-form"
    action="masdeppro"
    method="post"
    id="depositForm">


<div class="cards">


<!-- =====================================================
     HEADER
====================================================== -->

<div class="header-customer">

    <div class="header-left">

        <div class="header-img">

            <img
                src="../image/facelogo.png"
                alt="Face logo">

        </div>


        <div class="head-line">

            <h2>
                Create Deposit Ledger
            </h2>

            <h5>
                Deposit ledger information
            </h5>

        </div>

    </div>

</div>



<!-- =====================================================
     DEPOSIT DETAILS
====================================================== -->

<div class="section">

    <div class="section-title">

        <span class="section-icon">
            ◆
        </span>

        <span>
            Deposit Details
        </span>

    </div>



    <div class="details-row deposit-row">


        <!-- DEPOSIT NAME -->

        <div class="field">

            <label for="depositName">

                Deposit Name

                <span class="required">*</span>

            </label>


            <input
                type="text"
                name="nam"
                id="depositName"
                placeholder="Enter deposit name"
                required>

        </div>



        <!-- LOCAL NAME -->

        <div class="field">

            <label for="depositNameLocal">

                Deposit Name (Local)

            </label>


            <input
                type="text"
                name="namkan"
                id="depositNameLocal"
                placeholder="Enter local deposit name">

        </div>


    </div>

</div>



<!-- =====================================================
     TRANSACTION DETAILS
====================================================== -->

<div class="section">

    <div class="section-title">

        <span class="section-icon">
            ₹
        </span>

        <span>
            Transaction Details
        </span>

    </div>



    <div class="transaction-row">


        <div class="field">

            <label for="balanceWithCheque">

                Balance With Cheque

            </label>


            <input
                type="number"
                id="balanceWithCheque"
                name="balwitche"
                placeholder="Enter amount"
                min="0"
                step="0.01">

        </div>



        <div class="field">

            <label for="withoutCheque">

                Without Cheque

            </label>


            <input
                type="number"
                id="withoutCheque"
                name="witoutche"
                placeholder="Enter amount"
                min="0"
                step="0.01">

        </div>



        <div class="field">

            <label for="minTransaction">

                Min Transaction Amount

            </label>


            <input
                type="number"
                id="minTransaction"
                name="mintraamo"
                placeholder="Enter minimum amount"
                min="0"
                step="0.01">

        </div>



        <div class="field">

            <label for="maxCashLimit">

                Max Cash Tran Limit

            </label>


            <input
                type="number"
                id="maxCashLimit"
                name="maxcastralim"
                placeholder="Enter maximum amount"
                min="0"
                step="0.01">

        </div>


    </div>

</div>



<!-- =====================================================
     INTEREST SETTINGS
====================================================== -->

<div class="section">

    <div class="section-title">

        <span class="section-icon">
            %
        </span>

        <span>
            Interest Settings
        </span>

    </div>



    <div class="interest-row">


        <div class="field small-field">

            <label for="minApplicableDays">

                Min Applicable Days

            </label>


            <input
                type="number"
                id="minApplicableDays"
                name="minaooday"
                placeholder="Enter days"
                min="0">

        </div>



        <div class="field small-field">

            <label for="interestPercent">

                Interest %

            </label>


            <input
                type="number"
                id="interestPercent"
                name="int"
                placeholder="Enter %"
                min="0"
                step="0.01">

        </div>


    </div>

</div>



<!-- =====================================================
     HEAD SELECTION
====================================================== -->

<div class="section">


    <div class="section-title">

        <span class="section-icon">
            ≡
        </span>

        <span>
            Income / Expense & Balance Sheet Heads
        </span>

    </div>



    <!-- =================================================
         INCOME / EXPENSE HEAD
    ================================================== -->

    <div class="head-select-row">


        <div class="field">

            <label for="incomeExpenseHead">

                Income / Expense Head

            </label>


            <select id="incomeExpenseHead">

                <option value="">

                    Select Income / Expense Head

                </option>


                <%
                    if (subhead != null) {

                        for (
                            newprolosheadBean head :
                            subhead
                        ) {

                            /*
                             * Your actual Bean fields:
                             *
                             * heaid  = main head id
                             * subid  = sub head id
                             * heanam = main head name
                             * subnam = sub head name
                             */
                %>


                <option

                    value="<%=head.getSubid()%>"

                    data-main-id="<%=head.getHeaid()%>"

                    data-sub-id="<%=head.getSubid()%>"

                    data-main-name="<%=head.getHeanam()%>"

                    data-sub-name="<%=head.getSubnam()%>">

                    <%=head.getHeanam()%>
                    -
                    <%=head.getSubnam()%>

                </option>


                <%
                        }
                    }
                %>


            </select>

        </div>






    <!-- =================================================
         BALANCE SHEET HEAD
         MAIN HEAD - SUB HEAD - ACCOUNT
    ================================================== -->



        <div class="field">

            <label for="balanceSheetHead">

                Balance Sheet Head

            </label>


            <select id="balanceSheetHead">

                <option value="">

                    Select Balance Sheet Head

                </option>


                <%
                    if (balacc != null) {

                        for (
                            masbalsheaccBean head :
                            balacc
                        ) {


                            String mainName = "";

                            String subName = "";


                            int mainId =
                                head.getHeaid();

                            int subId =
                                head.getHeasubiod();


                            /*
                             * FIND MAIN HEAD NAME
                             */

                            if (balhead != null) {

                                for (
                                    masbalsheheaBean mh :
                                    balhead
                                ) {

                                    if (
                                        mh.getId() ==
                                        mainId
                                    ) {

                                        mainName =
                                            mh.getMaihea();

                                        break;
                                    }
                                }
                            }


                            /*
                             * FIND SUB HEAD NAME
                             */

                            if (balsubhead != null) {

                                for (
                                    masbalshesubheaBean sh :
                                    balsubhead
                                ) {

                                    if (
                                        sh.getId() ==
                                        subId
                                    ) {

                                        subName =
                                            sh.getMasubhea();

                                        break;
                                    }
                                }
                            }

                %>


                <option

                    value="<%=head.getAccid()%>"

                    data-main-id="<%=mainId%>"

                    data-sub-id="<%=subId%>"

                    data-acc-id="<%=head.getAccid()%>"

                    data-main-name="<%=mainName%>"

                    data-sub-name="<%=subName%>"

                    data-account-name="<%=head.getAccnam()%>">

                    <%=mainName%>
                    -
                    <%=subName%>
                    -
                    <%=head.getAccnam()%>

                </option>


                <%
                        }
                    }
                %>


            </select>

        </div>


      

      


    </div>


</div>



<!-- =====================================================
     TABLES
====================================================== -->

<div class="tables-row">


    <!-- =================================================
         INCOME / EXPENSE TABLE
    ================================================== -->

    <div class="table-card">


        <div class="table-header">

            <h3>
                Income / Expense Head
            </h3>

            <span>
                Selected account details
            </span>

        </div>


        <div class="table-scroll">


            <table>

                <thead>

                    <tr>

                        <th>
                            Main Head
                        </th>

                        <th>
                            Account Name
                        </th>

                        <th>
                            Amount
                        </th>

                        <th>
                            Per
                        </th>

                    </tr>

                </thead>


                <tbody id="incomeTableBody">

                    <tr>

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
         BALANCE SHEET TABLE
    ================================================== -->

    <div class="table-card">


        <div class="table-header">

            <h3>
                Balance Sheet Head
            </h3>

            <span>
                Selected account details
            </span>

        </div>


        <div class="table-scroll">


            <table>

                <thead>

                    <tr>

                        <th>
                            Main Head
                        </th>

                        <th>
                            Sub Head
                        </th>

                        <th>
                            Account Name
                        </th>

                        <th>
                            Amount
                        </th>

                        <th>
                            Per
                        </th>

                    </tr>

                </thead>


                <tbody id="balanceTableBody">

                    <tr>

                        <td
                            colspan="5"
                            class="empty-row">

                            No records found

                        </td>

                    </tr>

                </tbody>


            </table>


        </div>

    </div>


</div>



<!-- =====================================================
     BUTTONS
====================================================== -->

<div class="button-row">


    <button
        type="submit"
        class="btn save"
        onclick="saveDeposit()">

        Save

    </button>



    <button
        type="button"
        class="btn reset"
        onclick="resetDeposit()">

        Reset

    </button>



    <button
        type="button"
        class="btn exit"
        onclick="exitDeposit()">

        Exit

    </button>


</div>


</div>

</form>



<!-- =====================================================
     AMOUNT POPUP
====================================================== -->

<div
    id="amountPopup"
    class="amount-popup">


    <div class="popup-title">

        <span id="popupTitle">

            DEPOSIT LEDGER

        </span>


        <button
            type="button"
            onclick="cancelAmount()">

            ×

        </button>

    </div>



    <div class="popup-body">


        <!-- PERCENTAGE OPTION -->

        <div class="percent-option">

            <input
                type="checkbox"
                id="percentageCheck">


            <label
                for="percentageCheck">

                Percentage (%)

            </label>

        </div>



        <!-- INPUT LABEL -->

        <label
            for="amountInput"
            id="amountLabel">

            Enter Amount

        </label>



        <!-- AMOUNT / PERCENTAGE -->

        <input
            type="number"
            id="amountInput"
            min="0"
            step="0.01"
            autocomplete="off">


    </div>



    <div class="popup-buttons">


        <button
            type="button"
            onclick="confirmAmount()">

            OK

        </button>



        <button
            type="button"
            onclick="cancelAmount()">

            Cancel

        </button>


    </div>


</div>



<script src="./masdeppro.js"></script>


</body>

</html>