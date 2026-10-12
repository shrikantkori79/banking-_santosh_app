<%@page import="com.Bank.Bean.masbalsheaccBean"%>
<%@page import="com.Bank.Bean.masbalshesubheaBean"%>
<%@page import="com.Bank.Bean.masbalsheheaBean"%>
<%@page import="com.Bank.Bean.newprolosheadBean"%>
<%@page import="java.util.List"%>
<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>Create New Loan</title>

    <link rel="stylesheet" href="masloa.css">

</head>

<body>

<%
    // =====================================================
    // INCOME / EXPENSE MAIN + SUB HEAD
    // =====================================================

    List<newprolosheadBean> incomeHeads =
        (List<newprolosheadBean>) request.getAttribute("subhead");


    // =====================================================
    // BALANCE SHEET MAIN HEAD
    // =====================================================

    List<masbalsheheaBean> balMain =
        (List<masbalsheheaBean>) request.getAttribute("balshehead");


    // =====================================================
    // BALANCE SHEET SUB HEAD
    // =====================================================

    List<masbalshesubheaBean> balSub =
        (List<masbalshesubheaBean>) request.getAttribute("balsshesub");


    // =====================================================
    // BALANCE SHEET ACCOUNT NAME
    // =====================================================

    List<masbalsheaccBean> balanceAccounts =
        (List<masbalsheaccBean>) request.getAttribute("balanceAccounts");
%>


<form class="customer-form" onsubmit="return false;">

<div class="cards">


    <!-- =====================================================
         HEADER
    ====================================================== -->

    <div class="header-customer">

        <div class="header-left">

            <div class="header-img">

                <img
                    src="../image/facelogo.png"
                    alt="">

            </div>


            <div class="head-line">

                <h2>
                    Create New Loan
                </h2>

                <h5>
                    Loan master information
                </h5>

            </div>

        </div>

    </div>


    <!-- =====================================================
         LOAN DETAILS
    ====================================================== -->

    <div class="section">

        <div class="section-title">
            Loan Details
        </div>


        <div class="loan-name-row">


            <!-- LOAN NAME -->

            <div class="field">

                <label for="loanName">

                    Loan Name

                    <span class="required">
                        *
                    </span>

                </label>


                <input
                    type="text"
                    id="loanName"
                    name="loanam"
                    placeholder="Enter loan name">

            </div>



            <!-- LOCAL NAME -->

            <div class="field">

                <label for="loanNameLocal">
                    Loan Name (Local)
                </label>


                <input
                    type="text"
                    id="loanNameLocal"
                    name="loanamkan"
                    placeholder="Enter local loan name">

            </div>


        </div>

    </div>


    <!-- =====================================================
         TOP LAYOUT
    ====================================================== -->

    <div class="top-layout">


        <!-- =================================================
             INTEREST DETAILS
        ================================================== -->

        <div class="section interest-section">


            <div class="section-title">
                Interest Details
            </div>


            <div class="interest-top-row">


                <!-- APPLICABLE DATE -->

                <div class="field">

                    <label for="applicableDate">
                        Applicable Date
                    </label>


                    <input
                        type="date"
                        id="applicableDate"
                        name="appdat">

                </div>



                <!-- INTEREST NAME -->

                <div class="field">

                    <label for="interestName">
                        Interest Name
                    </label>


                    <select
                        id="interestName"
                        name="intnam"
                        onchange="interestTypeChanged()">


                        <option value="">
                            Select Interest Name
                        </option>


                        <!-- SIMPLE INTEREST 1 -->

                        <option
                            value="1"
                            data-code="SI1"
                            data-type="SI1">

                            Simple Interest - 1

                        </option>


                        <!-- SIMPLE INTEREST 2 -->

                        <option
                            value="2"
                            data-code="SI2"
                            data-type="SI2">

                            Simple Interest - 2

                        </option>


                        <!-- PANEL INTEREST 1 -->

                        <option
                            value="3"
                            data-code="PI1"
                            data-type="PI1">

                            Panel Interest - 1

                        </option>


                        <!-- PANEL INTEREST 2 -->

                        <option
                            value="4"
                            data-code="PI2"
                            data-type="PI2">

                            Panel Interest - 2

                        </option>


                    </select>

                </div>



                <!-- INTEREST PERCENT -->

                <div class="field small-input">

                    <label for="interestPercent">
                        Interest %
                    </label>


                    <input
                        type="number"
                        id="interestPercent"
                        name="int"
                        min="0"
                        step="0.01"
                        placeholder="%">

                </div>



                <!-- APP AFTER -->

                <div class="field small-input">

                    <label for="applicableAfter">
                        App Af
                    </label>


                    <select
                        id="applicableAfter"
                        name="appaff"
                        disabled>


                        <!-- SIMPLE -->

                        <option value="0">
                            0
                        </option>


                        <!-- PANEL -->

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



                <!-- ADD -->

                <button
                    type="button"
                    class="add-btn"
                    onclick="addInterest()">

                    Add

                </button>


            </div>



            <!-- =================================================
                 INTEREST TABLE
            ================================================== -->

            <div class="table-scroll interest-table-scroll">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Name
                            </th>

                            <th>
                                Int Typ
                            </th>

                            <th>
                                Int %
                            </th>

                            <th>
                                App Af
                            </th>

                        </tr>

                    </thead>


                    <tbody id="interestTableBody">


                        <tr id="emptyInterestRow">

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
             PLEDGE DETAILS
        ================================================== -->

        <div class="section pledge-section">


            <div class="section-title pledge-title">

                <span>
                    Pledge Detail
                </span>


                <label class="compulsory">

                    <input
                        type="checkbox"
                        id="compulsory"
                        name="com">

                    Compulsory

                </label>

            </div>



            <div class="pledge-grid">


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="agrlan">

                    Agricultural Land

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="nonagrlan">

                    Non Agricultural Land

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="golass">

                    Gold Asset

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="veh">

                    Vehicle

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="agaconhou">

                    Against Constructed House

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="paysli">

                    Pay Slip

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="dir">

                    Director

                </label>


                <label class="check-option">

                    <input
                        type="checkbox"
                        name="sec">

                    Securities

                </label>


            </div>

        </div>


    </div>



    <!-- =====================================================
         HEAD SELECTION
    ====================================================== -->

    <div class="section heads-section">


        <div class="section-title">

            Income / Expense & Balance Sheet Heads

        </div>


        <div class="heads-layout">


            <!-- =================================================
                 INCOME / EXPENSE
            ================================================== -->

            <div class="head-box">

                <div class="head-box-title">

                    Income / Expense Heads

                </div>


                <select
                    id="incomeExpenseHead"
                    multiple
                    size="5"
                    onchange="selectIncomeHead(this)">


                    <%
                        if (incomeHeads != null) {

                            for (newprolosheadBean bean : incomeHeads) {

                                int headId = bean.getHeaid();

                                int subId = bean.getSubid();

                                String headName = bean.getHeanam();

                                String subName = bean.getSubnam();

                                String headKannada = bean.getHeakannam();

                                String subKannada = bean.getSubkannam();

                                if (headName == null) {
                                    headName = "";
                                }

                                if (subName == null) {
                                    subName = "";
                                }

                                if (headKannada == null) {
                                    headKannada = "";
                                }

                                if (subKannada == null) {
                                    subKannada = "";
                                }
                    %>


                    <option
                        value="<%=subId%>"
                        data-head-id="<%=headId%>"
                        data-sub-id="<%=subId%>"
                        data-head-name="<%=headName%>"
                        data-sub-name="<%=subName%>"
                        data-head-kannada="<%=headKannada%>"
                        data-sub-kannada="<%=subKannada%>">

                        <%=headName%> -- <%=subName%>

                    </option>


                    <%
                            }
                        }
                    %>


                </select>

            </div>



            <!-- =================================================
                 BALANCE SHEET
            ================================================== -->

            <div class="head-box">

                <div class="head-box-title">

                    Balance Sheet Heads

                </div>


                <select
                    id="balanceHead"
                    multiple
                    size="5"
                    onchange="selectBalanceHead(this)">


                    <%
                        /*
                         * =================================================
                         * BALANCE SHEET
                         *
                         * We create the complete combination:
                         *
                         * Main Head
                         *      ->
                         * Sub Head
                         *      ->
                         * Account
                         *
                         * IDs are stored in data attributes.
                         * =================================================
                         */

                        if (balMain != null && balSub != null && balanceAccounts != null) {

                            for (masbalsheheaBean mainBean : balMain) {

                                int mainId = mainBean.getId();

                                String mainName = mainBean.getMaihea();

                                String mainKannada = mainBean.getMaiheakan();

                                if (mainName == null) {
                                    mainName = "";
                                }

                                if (mainKannada == null) {
                                    mainKannada = "";
                                }


                                for (masbalshesubheaBean subBean : balSub) {

                                    /*
                                     * masid = MAIN HEAD ID
                                     */

                                    if (subBean.getMasid() != mainId) {
                                        continue;
                                    }


                                    int subId = subBean.getId();

                                    String subName = subBean.getMasubhea();

                                    String subKannada = subBean.getMassubheakan();

                                    if (subName == null) {
                                        subName = "";
                                    }

                                    if (subKannada == null) {
                                        subKannada = "";
                                    }


                                    for (masbalsheaccBean accBean : balanceAccounts) {

                                        /*
                                         * Account:
                                         *
                                         * heaid      = Main Head ID
                                         * heasubiod  = Sub Head ID
                                         */

                                        if (accBean.getHeaid() != mainId) {
                                            continue;
                                        }

                                        if (accBean.getHeasubiod() != subId) {
                                            continue;
                                        }


                                        int accId = accBean.getId();

                                        String accName = accBean.getAccnam();

                                        String accKannada = accBean.getAccnamkan();

                                        if (accName == null) {
                                            accName = "";
                                        }

                                        if (accKannada == null) {
                                            accKannada = "";
                                        }
                    %>


                <option
    value="<%=accId%>"
    data-head-id="<%=mainId%>"
    data-sub-id="<%=subId%>"
    data-acc-id="<%=accId%>"
    data-head-name="<%=mainName%>"
    data-sub-name="<%=subName%>"
    data-acc-name="<%=accName%>"
    data-head-kannada="<%=mainKannada%>"
    data-sub-kannada="<%=subKannada%>"
    data-acc-kannada="<%=accKannada%>">

    <%=mainName%> -- <%=subName%> -- <%=accName%>

</option>

                    <%
                                    }
                                }
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
             INCOME TABLE
        ================================================== -->

        <div class="table-card">

            <div class="table-header">

                <h3>
                    Income / Main Head
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
                                Percentage
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
             BALANCE TABLE
        ================================================== -->

        <div class="table-card">

            <div class="table-header">

                <h3>
                    Balance Sheet / Sub Head
                </h3>

                <span>
                    Selected balance head details
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
                                Percentage
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
            type="button"
            class="btn save"
            onclick="saveLoan()">

            Save

        </button>


        <button
            type="button"
            class="btn reset"
            onclick="resetLoan()">

            Reset

        </button>


        <button
            type="button"
            class="btn exit"
            onclick="exitLoan()">

            Exit

        </button>


    </div>


</div>

</form>



<!-- =====================================================
     AMOUNT POPUP
====================================================== -->

<div id="amountPopup" class="amount-popup">


    <div class="popup-title">

        <span id="popupTitle">
            LOAN
        </span>


        <button
            type="button"
            onclick="cancelAmount()">

            ×

        </button>

    </div>


    <div class="popup-body">


        <div class="percent-option">

            <input
                type="checkbox"
                id="amountPercentCheck"
                onchange="amountTypeChanged()">


            <label for="amountPercentCheck">
                %
            </label>

        </div>


        <label
            for="amountInput"
            id="amountInputLabel">

            Enter Amount

        </label>


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



<script src="masloa.js"></script>

</body>

</html>