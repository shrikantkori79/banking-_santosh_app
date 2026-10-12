<%@page import="com.Bank.Bean.masrdnamBean"%>
<%@page import="com.Bank.Bean.maspignamBean"%>
<%@page import="com.Bank.Bean.newcusBean"%>
<%@page import="java.util.List"%>

<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>New Pigmy Agent</title>

<link rel="stylesheet" href="./newrdpigage.css">


<style>

/* =====================================================
   LAST ROW - AGENT / CUSTOMER
===================================================== */

.agent-customer-row {

    display: grid !important;

    grid-template-columns:
        1fr
        1fr
        2.8fr;

    gap: 16px;

    align-items: start;

    width: 100%;
}


/* =====================================================
   FIELD
===================================================== */

.agent-customer-row .field {

    position: relative;

    min-width: 0;
}


/* =====================================================
   VALIDATION FIELD
===================================================== */

.validation-field {

    position: relative;
}


/* =====================================================
   INPUT
===================================================== */

.agent-customer-row input {

    width: 100%;

    box-sizing: border-box;
}


/* =====================================================
   VALIDATION MESSAGE
===================================================== */

.validation-message {

    position: absolute;

    left: 0;

    top: calc(100% + 5px);

    width: 100%;

    height: 18px;

    line-height: 18px;

    margin: 0;

    padding: 0;

    font-size: 12px;

    white-space: nowrap;

    overflow: visible;

    visibility: hidden;
}


/* =====================================================
   KEEP SPACE BELOW LAST ROW
===================================================== */

.agent-customer-row {

    margin-bottom: 28px;
}


/* =====================================================
   AGENT NUMBER READONLY
===================================================== */

#age_no {

    background-color: #f5f5f5;

    cursor: not-allowed;

}

</style>

</head>


<body>


<%

    /* =====================================================
       GET DATA FROM SERVLET
    ===================================================== */

    List<newcusBean> cuslist =
        (List<newcusBean>) request.getAttribute("cus");


    List<maspignamBean> piglist =
        (List<maspignamBean>) request.getAttribute("pig");


    List<masrdnamBean> rdlist =
        (List<masrdnamBean>) request.getAttribute("rd");


    String error =
        request.getParameter("error");


    String success =
        request.getParameter("success");

%>



<!-- =====================================================
     SUCCESS / ERROR POPUPS
===================================================== -->


<%

if ("agentduplicate".equals(error)) {

%>

<script>

alert(
    "Agent No already exists for this Head and Sub Head."
);

</script>

<%

}

%>



<%

if ("saved".equals(success)) {

%>

<script>

alert(
    "New Pigmy Agent saved successfully."
);

</script>

<%

}

%>



<%

if ("save".equals(error)) {

%>

<script>

alert(
    "New Pigmy Agent could not be saved."
);

</script>

<%

}

%>



<%

if ("exception".equals(error)) {

%>

<script>

alert(
    "Error while saving New Pigmy Agent."
);

</script>

<%

}

%>



<!-- =====================================================
     FORM
===================================================== -->

<form
    action="newrdpigage"
    method="post"
    class="customer-form"
    id="customerForm"
>


<div class="cards">


<!-- =====================================================
     HEADER
===================================================== -->

<nav class="header-customer">

    <div class="header-main">

        <div class="header-left">


            <div class="header-img">

                <img
                    src="../image/facelogo.png"
                    alt="facelogo"
                >

            </div>


            <div class="head-line">

                <h2>
                    New Customer
                </h2>

                <h5>
                    Customer Information
                </h5>

            </div>


        </div>

    </div>

</nav>



<!-- =====================================================
     MAIN CARD
===================================================== -->

<div class="card">


<div class="lines">


<h3>
    New Pigmy Agent
</h3>



<!-- =====================================================
     JOINING DATE
===================================================== -->

<div class="row three-col">


    <div class="field">

        <label>

            Joining Date

            <span class="requred">
                *
            </span>

        </label>


        <input
            type="date"
            name="joindat"
            required
        >

    </div>


</div>



<!-- =====================================================
     HEAD + SUB HEAD
===================================================== -->

<div class="row two-col">


    <!-- ================= HEAD ================= -->

    <div class="field">

        <label for="main_head">

            Head Of Account

            <span class="requred">
                *
            </span>

        </label>


        <select
            id="main_head"
            name="headname"
            required
        >

            <option value="">
                Select Head
            </option>


            <option value="1">
                Pigmy
            </option>


            <option value="2">
                RD
            </option>

        </select>

    </div>



    <!-- ================= SUB HEAD ================= -->

    <div class="field">

        <label for="subhead">

            Sub Head

            <span class="requred">
                *
            </span>

        </label>


        <select
            id="subhead"
            name="subhead"
            required
        >

            <option value="">
                Select Sub Head
            </option>

        </select>

    </div>


</div>



<!-- =====================================================
     AGENT + CUSTOMER ROW
===================================================== -->

<div class="row three-col agent-customer-row">


    <!-- =================================================
         AGENT NO
    ================================================== -->

    <div class="field validation-field">


        <label for="age_no">

            Agent No

            <span class="requred">
                *
            </span>

        </label>


        <!--
            Agent No is automatically generated.

            User cannot type/change it.
        -->

        <input
            type="text"
            id="age_no"
            name="agentno"
       
            required
            
            placeholder="Auto"
        >


        <small
            id="agentMessage"
            class="validation-message">
        </small>


    </div>



    <!-- =================================================
         ACCOUNT ID
    ================================================== -->

    <div class="field validation-field">


        <label for="acc_id">

            Account ID

            <span class="requred">
                *
            </span>

        </label>


        <input
            type="text"
            id="acc_id"
            name="cusid"
            required
            autocomplete="off"
        >


        <small
            id="customerMessage"
            class="validation-message">
        </small>


    </div>



    <!-- =================================================
         ACCOUNT NAME
    ================================================== -->

    <div class="field">


        <label for="acc_name">

            Account Name

            <span class="requred">
                *
            </span>

        </label>


        <input
            type="text"
            id="acc_name"
            readonly
            required
        >


    </div>


</div>



<!-- =====================================================
     BUTTONS
===================================================== -->

<div class="button-row">


    <button
        type="button"
        class="btn cancle"
        id="cancelButton"
    >

        Cancel

    </button>


    <button
        type="submit"
        class="btn save"
        id="saveButton"
    >

        Save

    </button>


    <button
        type="button"
        class="btn exit"
        id="exitButton"
    >

        Exit

    </button>


</div>


</div>

</div>

</div>


</form>



<!-- =====================================================
     CUSTOMER LIST
===================================================== -->

<script>

const customerList = [

<%

if (cuslist != null) {

    for (
        int i = 0;
        i < cuslist.size();
        i++
    ) {

        newcusBean cus =
            cuslist.get(i);


        String name =
            cus.getCusnam();


        if (name == null) {

            name = "";

        }


        /*
         * Escape characters so the
         * Java value becomes valid JavaScript.
         */

        name = name
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\r", "")
            .replace("\n", " ");

%>

{
    id: <%=cus.getCusid()%>,
    name: "<%=name%>"
}<%= (i < cuslist.size() - 1) ? "," : "" %>

<%

    }

}

%>

];

</script>



<!-- =====================================================
     PIGMY LIST
===================================================== -->

<script>

const pigList = [

<%

if (piglist != null) {

    for (
        int i = 0;
        i < piglist.size();
        i++
    ) {

        maspignamBean pig =
            piglist.get(i);


        String name =
            pig.getPignam();


        if (name == null) {

            name = "";

        }


        name = name
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\r", "")
            .replace("\n", " ");

%>

{
    id: <%=pig.getId()%>,
    name: "<%=name%>"
}<%= (i < piglist.size() - 1) ? "," : "" %>

<%

    }

}

%>

];

</script>



<!-- =====================================================
     RD LIST
===================================================== -->

<script>

const rdList = [

<%

if (rdlist != null) {

    for (
        int i = 0;
        i < rdlist.size();
        i++
    ) {

        masrdnamBean rd =
            rdlist.get(i);


        String name =
            rd.getRdnam();


        if (name == null) {

            name = "";

        }


        name = name
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\r", "")
            .replace("\n", " ");

%>

{
    id: <%=rd.getId()%>,
    name: "<%=name%>"
}<%= (i < rdlist.size() - 1) ? "," : "" %>

<%

    }

}

%>

];

</script>



<!-- =====================================================
     JAVASCRIPT
===================================================== -->

<script src="./newrdpigage.js"></script>


</body>

</html>