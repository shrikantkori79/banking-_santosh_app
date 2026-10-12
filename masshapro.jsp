<%@page import="com.Bank.Bean.masbalsheaccBean"%>
<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="com.Bank.Bean.newprolosheadBean"%>
<%@ page import="com.Bank.Bean.masbalsheheaBean"%>
<%@ page import="com.Bank.Bean.masbalshesubheaBean"%>

<%@ page import="java.util.List"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Share Master Settings</title>

    <link rel="stylesheet"
          href="./masshapro.css">

</head>

<body>

<%

    // =====================================================
    // INCOME / EXPENSE MAIN + SUB HEAD
    // =====================================================

    List<newprolosheadBean> subhead =
        (List<newprolosheadBean>)
        request.getAttribute("subhead");


    // =====================================================
    // BALANCE SHEET MAIN HEAD
    // =====================================================

    List<masbalsheheaBean> balMain =
        (List<masbalsheheaBean>)
        request.getAttribute("balshehead");


    // =====================================================
    // BALANCE SHEET SUB HEAD
    // =====================================================

    List<masbalshesubheaBean> balSub =
        (List<masbalshesubheaBean>)
        request.getAttribute("balsshesub");


    // =====================================================
    // BALANCE SHEET ACCOUNT NAME
    // =====================================================

    List<masbalsheaccBean> balanceAccounts =
        (List<masbalsheaccBean>)
        request.getAttribute("balanceAccounts");

%>


<!-- =====================================================
     FORM
====================================================== -->

<form
    id="shareForm"
    class="customer-form"
    method="post"
    action="<%=request.getContextPath()%>/masshapro">


    <div class="cards">


        <!-- =================================================
             HEADER
        ================================================== -->

        <div class="header-customer">

            <div class="header-left">

                <div class="header-img">

                    <span>◆</span>

                </div>


                <div class="head-line">

                    <h2>
                        Share Master Settings
                    </h2>

                    <h5>
                        Create and manage share master information
                    </h5>

                </div>

            </div>

        </div>


        <!-- =================================================
             SHARE DETAILS
        ================================================== -->

        <div class="section basic-section">

            <div class="section-title">

                <span class="section-icon">
                    ◆
                </span>

                <span>
                    Share Details
                </span>

            </div>


            <div class="basic-row">


                <!-- SHARE NAME -->

                <div class="field">

                    <label for="shareName">

                        Share Name

                        <span class="required">*</span>

                    </label>


                    <input
                        type="text"
                        id="shareName"
                        name="shareName"
                        placeholder="Enter share name">

                </div>


                <!-- SHARE NAME KANNADA -->

                <div class="field">

                    <label for="shareNameSecond">

                        Share Name (Knd)

                    </label>


                    <input
                        type="text"
                        id="shareNameSecond"
                        name="shareNameSecond"
                        placeholder="Enter share name knd">

                </div>


                <!-- FACE VALUE -->

                <div class="field">

                    <label for="faceValue">

                        Face Value

                        <span class="required">*</span>

                    </label>


                    <input
                        type="number"
                        id="faceValue"
                        name="faceValue"
                        placeholder="Enter value"
                        min="0"
                        step="0.01">

                </div>

            </div>

        </div>


        <!-- =================================================
             INCOME / EXPENSE / BALANCE SHEET HEADS
        ================================================== -->

        <div class="section heads-section">


            <div class="section-title">

                <span class="section-icon">
                    ≡
                </span>

                <span>
                    Income / Expense & Balance Sheet Heads
                </span>

            </div>


            <div class="heads-row">


                <!-- =================================================
                     INCOME HEAD
                ================================================== -->

                <div class="field">

                    <label for="incomeHead">
                        Income Head
                    </label>


                    <select id="incomeHead">

                        <option value="">
                            Select Income Head
                        </option>


                        <%

                            if (subhead != null) {

                                for (newprolosheadBean head : subhead) {

                        %>

                        <option
                            value="<%=head.getSubid()%>"
                            data-main-id="<%=head.getHeaid()%>"
                            data-sub-id="<%=head.getSubid()%>"
                            data-main-name="<%=head.getHeanam()%>"
                            data-sub-name="<%=head.getSubnam()%>"
                        >

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
                     
                     ONE DROPDOWN ONLY
                     
                     Main Head + Sub Head + Account Name
                ================================================== -->

                <div class="field">

                    <label for="balanceHead">
                        Balance Sheet Head
                    </label>


                    <select id="balanceHead">

                        <option value="">
                            Select Balance Sheet Head
                        </option>


                        <%

                        if (balanceAccounts != null) {

                            for (masbalsheaccBean account : balanceAccounts) {

                                String mainName = "";
                                String subName = "";


                                // FIND MAIN HEAD NAME

                                if (balMain != null) {

                                    for (masbalsheheaBean main : balMain) {

                                        if (main.getId() == account.getHeaid()) {

                                            mainName = main.getMaihea();

                                            break;
                                        }

                                    }

                                }


                                // FIND SUB HEAD NAME

                                if (balSub != null) {

                                    for (masbalshesubheaBean sub : balSub) {

                                        if (sub.getId() == account.getHeasubiod()) {

                                            subName = sub.getMasubhea();

                                            break;
                                        }

                                    }

                                }

                        %>


                        <option

                            value="<%=account.getId()%>"

                            data-main-id="<%=account.getHeaid()%>"

                            data-sub-id="<%=account.getHeasubiod()%>"

                            data-main-name="<%=mainName%>"

                            data-sub-name="<%=subName%>"



                         
                          
                               data-account-id="<%=account.getId()%>"
                                 data-account-name="<%=account.getAccnam()%>"
 >

                            <%=mainName%>
                            -
                            <%=subName%>
                            -
                            <%=account.getAccnam()%>

                        </option>


                        <%

                            }

                        }

                        %>

                    </select>

                </div>


            </div>

        </div>


        <!-- =================================================
             TABLES
        ================================================== -->

        <div class="tables-row">


            <!-- =================================================
                 INCOME TABLE
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
                                    Sub Head
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
                                    class="empty-row"
                                >

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
                        Balance Sheet Heads
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
                                    Percentage
                                </th>

                            </tr>

                        </thead>


                        <tbody id="balanceTableBody">

                            <tr>

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
             BUTTONS
        ================================================== -->

        <div class="button-row">


            <button
                type="button"
                class="btn save"
                onclick="saveShare()"
            >

                Save

            </button>


            <button
                type="button"
                class="btn reset"
                onclick="resetShare()"
            >

                Reset

            </button>


            <button
                type="button"
                class="btn exit"
                onclick="exitShare()"
            >

                Exit

            </button>


        </div>


    </div>

</form>


<!-- =====================================================
     AMOUNT / PERCENTAGE POPUP
====================================================== -->

<div
    id="amountPopup"
    class="amount-popup"
>


    <!-- POPUP TITLE -->

    <div class="popup-title">

        <span id="popupTitle">
            INCOME HEAD
        </span>


        <button
            type="button"
            onclick="cancelAmount()"
        >

            ×

        </button>

    </div>


    <!-- POPUP BODY -->

    <div class="popup-body">


        <div class="amount-input-row">


            <!-- PERCENTAGE -->

            <div class="percentage-option">

                <input
                    type="checkbox"
                    id="percentage"
                    name="percentage"
                >


                <label for="percentage">
                    %
                </label>

            </div>


            <!-- LABEL -->

            <label
                for="amountInput"
                id="amountLabel"
            >

                Enter Amount

            </label>


            <!-- AMOUNT -->

            <input
                type="number"
                id="amountInput"
                min="0"
                step="0.01"
                autocomplete="off"
                placeholder="Enter Amount"
            >


        </div>


    </div>


    <!-- POPUP BUTTONS -->

    <div class="popup-buttons">


        <button
            type="button"
            onclick="confirmAmount()"
        >

            OK

        </button>


        <button
            type="button"
            onclick="cancelAmount()"
        >

            Cancel

        </button>


    </div>


</div>


<script src="masshapro.js"></script>


</body>

</html>