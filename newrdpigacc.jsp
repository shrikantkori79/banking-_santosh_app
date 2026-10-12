<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>RD / Pigmy Account Creation</title>

    <link rel="stylesheet"
          href="./newrdpigacc.css">

</head>


<body>


<form method="post"
      action="newrdpigacc"
      id="customerForm"
      class="customer-form">


<div class="cards">


    <!-- =====================================================
         HEADER
    ====================================================== -->

    <nav class="header-customer">

        <div class="header-main">

            <div class="header-left">

                <div class="header-img">

                    <img src="../image/facelogo.png"
                         alt="Logo">

                </div>

                <div class="head-line">

                    <h2>New Customer</h2>

                    <h5>Customer Information</h5>

                </div>

            </div>

        </div>

    </nav>



    <!-- =====================================================
         MAIN CARD
    ====================================================== -->

    <div class="card">


        <div class="lines">

            <h3>Pigmy RD Accounting Details</h3>

            <h5>
                Please enter the personal information of the Accounting
            </h5>

        </div>



        <div class="main-details">


            <!-- =================================================
                 LEFT + RIGHT AREA
            ================================================== -->

            <div class="account-layout">


                <!-- =================================================
                     LEFT SIDE
                ================================================== -->

                <div class="left-account-details">


                    <!-- =============================================
                         ACCOUNT DATE / MATURE DATE
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="account_date">

                                Account Date

                                <span class="required">*</span>

                            </label>


                            <input type="date"
                                   id="account_date"
                                   name="accdat"
                                   required>

                        </div>



                        <div class="field">

                            <label for="mature_date">

                                Mature Date

                                <span class="required">*</span>

                            </label>


                            <input type="date"
                                   id="mature_date"
                                   name="matdat"
                                   required>

                        </div>

                    </div>



                    <!-- =============================================
                         HEAD / SUB HEAD
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="head_acc">

                                Head Of Account

                                <span class="required">*</span>

                            </label>


                            <select id="head_acc"
                                    name="head_acc"
                                    required>


                                <option value="">

                                    Select Head Of Account

                                </option>


                                <option value="RD">

                                    RD

                                </option>


                                <option value="PIGMY">

                                    PIGMY

                                </option>


                            </select>

                        </div>



                        <div class="field">

                            <label for="sub_head">

                                Sub Head

                                <span class="required">*</span>

                            </label>


                            <select id="sub_head"
                                    name="sub_head"
                                    required>


                                <option value="">

                                    Select Sub Head

                                </option>


                            </select>

                        </div>

                    </div>



                    <!-- =============================================
                         AGENT DETAILS
                    ============================================== -->

                    <div class="row three-col">


                        <!-- AGENT ID -->

                        <div class="field">

                            <label for="agent_id">

                                Agent No

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="agent_id"
                                   name="agenid"
                                   placeholder="Agent ID"
                                   autocomplete="off">

                        </div>



                        <!-- ADD AGENT -->

                        <button type="button"
                                onclick="window.location.href='./newpigage.jsp';"
                                class="small-add-btn">

                            Add

                        </button>



                        <!-- AGENT NAME -->

                        <div class="field">

                            <label for="account_name">

                                Agent Name

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="account_name"
                                   name="account_name"
                                   placeholder="Select Agent"
                                   readonly>

                        </div>



                        <!-- ACCOUNT NUMBER -->

                        <div class="field">

                            <label for="acc_no">

                                Account Number

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="acc_no"
                                   name="accno"
                                   placeholder="Account Number"
                                   readonly>

                        </div>

                    </div>



                    <!-- =============================================
                         CUSTOMER DETAILS
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="cust_id">

                                Customer ID

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="cust_id"
                                   name="cusid"
                                   placeholder="Customer ID"
                                   autocomplete="off">

                        </div>



                        <div class="field">

                            <label for="customer_name">

                                Customer Name

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="customer_name"
                                   name="customer_name"
                                   placeholder="Customer Name"
                                   readonly>

                        </div>

                    </div>



                    <!-- =============================================
                         MAC NAME / NOMINEE / RELATION
                    ============================================== -->

                    <div class="row three-col">


                        <div class="field">

                            <label for="mac_name">

                                Mac Name

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="mac_name"
                                   name="mac_name"
                                   maxlength="13"
                                   placeholder="mac name"
                                   autocomplete="off">

                        </div>



                        <div class="field">

                            <label for="nominee">

                                Nominee

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="nominee"
                                   name="nominee"
                                   placeholder="Enter nominee">

                        </div>



                        <div class="field">

                            <label for="relation">

                                Relation

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="relation"
                                   name="relation"
                                   placeholder="Enter relation">

                        </div>

                    </div>



                    <!-- =============================================
                         GUARDIAN MESSAGE
                    ============================================== -->

                    <div id="guardianMessage"
                         style="display:none;">

                        Customer is below 18 years.

                        Guardian details are mandatory.

                    </div>



                    <!-- =============================================
                         GUARDIAN DETAILS
                    ============================================== -->

                    <div class="row three-col">


                        <div class="field">

                            <label for="guardian_id">

                                Guardian ID

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="guardian_id"
                                   name="guardian_id"
                                   placeholder="Guardian ID"
                                   autocomplete="off">

                        </div>



                        <div class="field">

                            <label for="guardian_name">

                                Guardian Name

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="guardian_name"
                                   name="guardian_name"
                                   placeholder="Select Guardian"
                                   readonly>

                        </div>



                        <div class="field">

                            <label for="guardian_relation">

                                Relation

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="guardian_relation"
                                   name="guardian_relation"
                                   placeholder="Relation">

                        </div>

                    </div>



                    <!-- =============================================
                         BUTTONS
                    ============================================== -->

                    <div class="button-row">


                        <button type="button"
                                id="pigmySaveButton"
                                class="btn save">

                            Save

                        </button>



                        <button type="button"
                                id="resetButton"
                                class="btn back">

                            Reset

                        </button>



                        <button type="button"
                                id="exitButton"
                                class="btn back">

                            Exit

                        </button>


                    </div>


                </div>



                <!-- =================================================
                     RIGHT SIDE - RD DETAILS
                ================================================== -->

                <div id="rdDetails"
                     class="rd-details"
                     hidden>


                    <div class="rd-details-title">

                        <h3>RD Details</h3>

                    </div>



                    <!-- =============================================
                         INSTALLMENT AMOUNT / TYPE
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="installment_amount">

                                Installment Amount

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="installment_amount"
                                   placeholder="Enter amount">

                        </div>



                        <div class="field">

                            <label for="installment_type">

                                Installment Type

                                <span class="required">*</span>

                            </label>


                            <select id="installment_type">


                                <option value="">

                                    Select Installment Type

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

                                    Yearly

                                </option>


                            </select>

                        </div>

                    </div>



                    <!-- =============================================
                         INSTALLMENTS / INTEREST
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

         <label for="no_of_installments">
    No. Of Installments
    <span class="required">*</span>
</label>

<select id="no_of_installments"
        name="no_of_installments"
        required>

    <option value="">Select No. of Installments</option>

    <%
        for (int i = 1; i <= 200; i++) {
    %>
        <option value="<%= i %>"><%= i %></option>
    <%
        }
    %>

</select>

                        </div>



                        <div class="field">

                            <label for="interest_percent">

                                Interest %

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="interest_percent"
                                   placeholder="Enter interest">

                        </div>

                    </div>



                    <!-- =============================================
                         OFFER
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="offer">

                                Select Offer

                            </label>


                            <select id="offer">


                                <option value="">

                                    Select Offer

                                </option>


                            </select>

                        </div>



                        <div class="field">

                            <label for="send_into_offer">

                                Send Into Offer

                            </label>


                            <input type="text"
                                   id="send_into_offer"
                                   placeholder="Enter offer details">

                        </div>

                    </div>



                    <!-- =============================================
                         MATURITY
                    ============================================== -->

                    <div class="row two-col">


                        <div class="field">

                            <label for="maturity_amount">

                                Maturity Amount

                                <span class="required">*</span>

                            </label>


                            <input type="text"
                                   id="maturity_amount"
                                   placeholder="Automatically calculated"
                                   readonly>

                        </div>



                        <div class="field">

                            <label for="maturity_date">

                                Maturity Date

                                <span class="required">*</span>

                            </label>


                            <input type="date"
                                   id="maturity_date"
                                   readonly>

                        </div>

                    </div>



                    <!-- =============================================
                         ADD TO TABLE
                    ============================================== -->

                    <div class="button-row">


                        <button type="button"
                                id="addToTableButton"
                                class="btn add-table">

                            Add To Table

                        </button>


                    </div>



                    <!-- =============================================
                         RD SCHEDULE TABLE
                    ============================================== -->

                    <div class="table-scroll">


                        <table class="rd-table">


                  <thead>
    <tr>

        <th>
            No.
        </th>

        <th>
            Payment Day
        </th>

        <th>
            End Day
        </th>

        <th>
            Days
        </th>

        <th>
            Previous Balance
        </th>

        <th>
            Interest
        </th>

        <th>
            Customer Payment
        </th>

        <th>
            Total
        </th>

    </tr>
</thead>



                            <tbody id="rdTableBody">


                                <tr id="emptyRdRow">


                                    <td colspan="8"
                                        class="empty-row">

                                        No RD schedule added

                                    </td>


                                </tr>


                            </tbody>


                        </table>


                    </div>


                </div>


            </div>


        </div>


    </div>


</div>


</form>



<!-- =========================================================
     JAVASCRIPT
========================================================= -->

<script src="./newrdpigacc.js"></script>


</body>

</html>