
<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List" %>

<%@ page import="com.Bank.Bean.masternamBean" %>


<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Create Slab Master</title>

    <link rel="stylesheet"
          href="mastersla.css">

</head>


<body>


<form class="customer-form"
      action="mastersla"
      method="post">


<div class="cards">


    <!-- =====================================================
         HEADER
    ====================================================== -->

    <div class="header-customer">

        <div class="header-left">


            <!-- HEADER IMAGE -->

            <div class="header-img">

                <img
                    src="../image/facelogo.png"
                    alt="">

            </div>


            <!-- HEADER TEXT -->

            <div class="head-line">

                <h2>
                    Create Slab Master
                </h2>

                <h5>
                    Term deposit master information
                </h5>

            </div>


        </div>

    </div>



    <!-- =====================================================
         GET MASTER LIST FROM SERVLET
    ====================================================== -->

    <%
        List<masternamBean> masterList =
            (List<masternamBean>)
            request.getAttribute("masterList");
    %>



    <!-- =====================================================
         MAIN LAYOUT
    ====================================================== -->

    <div class="main-layout">


        <div class="left-card">


            <!-- =================================================
                 DEPOSIT DETAILS
            ================================================== -->

            <div class="section">


                <div class="section-title">
                    Deposit Details
                </div>


                <div class="deposit-row">


                    <!-- =========================================
                         DEPOSIT NAME
                    ========================================== -->

                    <div class="field">


                        <label for="depositId">
                            Deposit Name
                        </label>


                        <select
                            id="depositId"
                            name="depid"
                            onchange="showKannadaName()">


                            <option value="">
                                Select Deposit
                            </option>


                            <%
                                if (masterList != null) {

                                    for (
                                        masternamBean mtn :
                                        masterList
                                    ) {
                            %>


                            <option
                                value="<%= mtn.getId()%>"
                                data-local="<%=mtn.getDepnamkan() == null ? "" : mtn.getDepnamkan()%>">


                                <%=mtn.getDepnam()%>


                            </option>


                            <%
                                    }

                                }
                            %>


                        </select>


                    </div>



                    <!-- =========================================
                         KANNADA / LOCAL NAME
                    ========================================== -->

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



            <!-- =================================================
                 SLAB DETAILS
            ================================================== -->

            <div class="section">


                <div class="section-title">
                    Slab Details
                </div>


                <div class="slab-input-row">


                    <div class="field">


                        <label for="slabName">
                            Slab Name
                        </label>


                        <!--
                             SLAB NAME IS TEXT INPUT
                             NOT DROPDOWN
                        -->

                        <input
                            type="text"
                            id="slabName"
                            name="slanam"
                            placeholder="Enter slab name"
                            maxlength="100">


                    </div>


                </div>


            </div>



            <!-- =================================================
                 INSTALMENT DETAIL
            ================================================== -->

            <div class="section">


                <div class="section-title">
                    Instalment Detail
                </div>



                <div class="from-to-row">



                    <!-- =========================================
                         FROM
                    ========================================== -->

                    <div class="range-box">


                        <h4>
                            From
                        </h4>


                        <div class="small-row">



                            <!-- FROM MONTH -->

                            <div class="field">


                                <label for="fromMonths">
                                    Months
                                </label>


                                <select
                                    id="fromMonths"
                                    name="fromon">


                                    <option value="">
                                        Select
                                    </option>


                                    <%
                                        for (
                                            int i = 0;
                                            i <= 60;
                                            i++
                                        ) {
                                    %>


                                    <option value="<%=i%>">
                                        <%=i%>
                                    </option>


                                    <%
                                        }
                                    %>


                                </select>


                            </div>



                            <!-- FROM DAY -->

                            <div class="field">


                                <label for="fromDays">
                                    Days
                                </label>


                                <select
                                    id="fromDays"
                                    name="froday">


                                    <option value="">
                                        Select
                                    </option>


                                    <%
                                        for (
                                            int i = 0;
                                            i <= 365;
                                            i++
                                        ) {
                                    %>


                                    <option value="<%=i%>">
                                        <%=i%>
                                    </option>


                                    <%
                                        }
                                    %>


                                </select>


                            </div>


                        </div>


                    </div>



                    <!-- =========================================
                         TO
                    ========================================== -->

                    <div class="range-box">


                        <h4>
                            To
                        </h4>


                        <div class="small-row">



                            <!-- TO MONTH -->

                            <div class="field">


                                <label for="toMonths">
                                    Months
                                </label>


                                <select
                                    id="toMonths"
                                    name="tomon">


                                    <option value="">
                                        Select
                                    </option>


                                    <%
                                        for (
                                            int i = 0;
                                            i <= 60;
                                            i++
                                        ) {
                                    %>


                                    <option value="<%=i%>">
                                        <%=i%>
                                    </option>


                                    <%
                                        }
                                    %>


                                </select>


                            </div>



                            <!-- TO DAY -->

                            <div class="field">


                                <label for="toDays">
                                    Days
                                </label>


                                <select
                                    id="toDays"
                                    name="today">


                                    <option value="">
                                        Select
                                    </option>


                                    <%
                                        for (
                                            int i = 0;
                                            i <= 365;
                                            i++
                                        ) {
                                    %>


                                    <option value="<%=i%>">
                                        <%=i%>
                                    </option>


                                    <%
                                        }
                                    %>


                                </select>


                            </div>


                        </div>


                    </div>


                </div>


            </div>



            <!-- =================================================
                 BUTTONS
            ================================================== -->

            <div class="button-row">


                <!-- SAVE -->

                <button
                    type="submit"
                    class="btn save">

                    Save

                </button>



                <!-- RESET -->

                <button
                    type="reset"
                    class="btn reset"
                    onclick="clearLocalName()">

                    Reset

                </button>



                <!-- EXIT -->

                <button
                    type="button"
                    class="btn exit"
                    onclick="exitTD()">

                    Exit

                </button>


            </div>


        </div>


    </div>


</div>

</form>



<!-- =====================================================
     JAVASCRIPT
====================================================== -->

<script>


/* =====================================================
   SHOW KANNADA NAME
===================================================== */

function showKannadaName() {


    const deposit =
        document.getElementById(
            "depositId"
        );


    const localName =
        document.getElementById(
            "depositNameLocal"
        );


    if (
        deposit.selectedIndex > 0
    ) {


        const selectedOption =
            deposit.options[
                deposit.selectedIndex
            ];


        const kannadaName =
            selectedOption.getAttribute(
                "data-local"
            );


        localName.value =
            kannadaName || "";


    } else {


        localName.value = "";


    }

}



/* =====================================================
   CLEAR LOCAL NAME ON RESET
===================================================== */

function clearLocalName() {


    document.getElementById(
        "depositNameLocal"
    ).value = "";


}



/* =====================================================
   EXIT
===================================================== */

function exitTD() {


    if (
        confirm(
            "Are you sure you want to exit?"
        )
    ) {


        window.history.back();


    }

}


</script>



<!-- =====================================================
     MESSAGE FROM SERVLET
====================================================== -->

<%

String msg =
    (String) request.getAttribute("msg");


if ("success".equals(msg)) {

%>

<script>

    alert(
        "Slab saved successfully."
    );

</script>

<%

}


else if ("duplicate".equals(msg)) {

%>

<script>

    alert(
        "Slab Name already exists for this Deposit."
    );

</script>

<%

}


else if ("failed".equals(msg)) {

%>

<script>

    alert(
        "Slab could not be saved."
    );

</script>

<%

}


else if ("slabEmpty".equals(msg)) {

%>

<script>

    alert(
        "Please enter Slab Name."
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


else if ("rangeEmpty".equals(msg)) {

%>

<script>

    alert(
        "Please select From and To values."
    );

</script>

<%

}

%>


</body>

</html>

