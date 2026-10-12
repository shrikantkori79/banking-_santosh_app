<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.List" %>
<%@ page import="com.Bank.Bean.newprolosheadBean" %>

<%

    List<newprolosheadBean> mainHeads =
        (List<newprolosheadBean>)
        request.getAttribute("mainHeads");

%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Profit Loss Main Head</title>

    <link rel="stylesheet"
          href="./newprolossubhead.css">

</head>

<body>


<form

    class="customer-form"

    id="customerForm"

    action="newprolossubhead"

    method="post"

>


    <!-- =====================================================
         MAIN CARD
    ====================================================== -->

    <div class="cards">


        <!-- =====================================================
             HEADER
        ====================================================== -->

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
             FORM CONTENT
        ====================================================== -->

        <div class="card">


            <!-- =================================================
                 TITLE
            ================================================== -->

            <div class="lines">

                <h3>
                    Create Profit Loss Head
                </h3>
                </div>
                
                
                  <!-- =================================================
                 SERVER MESSAGE
            ================================================== -->

            <%

                String msg =
                    (String) request.getAttribute("message");


                if (msg != null &&
                    !msg.trim().isEmpty()) {

            %>


                <div class="message-box">

                    <%= msg %>

                </div>


            <%

                }

            %>


                <!-- =================================================
                     MAIN HEAD + CREATE + KANNADA
                ================================================== -->

                <div class="row three-col">


                    <!-- =================================================
                         MAIN HEAD
                    ================================================== -->

                    <div class="field">

                        <label for="main_head">

                            Main Head

                        </label>


                        <select

                            id="main_head"

                            name="heaid"

                            required

                            onchange="setKannadaName()"

                        >

                            <option value="">

                                Select Main Head

                            </option>


                            <%

                                if (mainHeads != null) {

                                    for (
                                        newprolosheadBean head
                                        : mainHeads
                                    ) {

                            %>


                            <option

                                value="<%=head.getHeaid()%>"

                                data-kannam="<%=head.getHeakannam()%>"

                            >

                                <%=head.getHeanam()%>

                            </option>


                            <%

                                    }

                                }

                            %>


                        </select>

                    </div>


                    <!-- =================================================
                         CREATE NEW HEAD
                    ================================================== -->

                    <div class="field">

                        <label>
                            &nbsp;
                        </label>


                        <button

                            type="button"

                            class="create-head-btn"

                            id="createHeadButton"

                            onclick="window.location.href='newproloshead.jsp'"

                        >

                            Create New Head

                        </button>

                    </div>


                    <!-- =================================================
                         KANNADA MAIN HEAD
                    ================================================== -->

                    <div class="field">

                        <label for="knd">

                            Kannada

                        </label>


                        <input

                            type="text"

                            id="knd"

                            name="mainKannam"

                            readonly

                        >

                    </div>


                </div>

            </div>


            <!-- =================================================
                 ACCOUNT NAME
            ================================================== -->

            <div class="row two-col">


                <!-- =================================================
                     ACCOUNT NAME
                ================================================== -->

                <div class="field">

                    <label for="acc_name">

                        Account Name

                    </label>


                    <input

                        type="text"

                        id="acc_name"

                        name="subnam"

                        placeholder="Enter Account Name"

                        required

                    >

                </div>


                <!-- =================================================
                     ACCOUNT NAME KANNADA
                ================================================== -->

                <div class="field">

                    <label for="acc_name_kn">

                        Account Name (Kn)

                    </label>


                    <input

                        type="text"

                        id="acc_name_kn"

                        name="subkannam"

                        placeholder="Enter Account Name Kannada"

                        required

                    >

                </div>


            </div>


            <!-- =================================================
                 BUTTONS
            ================================================== -->

            <div class="button-row">


                <!-- CANCEL -->

                <button

                    type="button"

                    class="btn cancle"

                    id="cancelButton"

                >

                    Cancel

                </button>


                <!-- SAVE -->

                <button

                    type="submit"

                    class="btn save"

                    id="saveButton"

                >

                    Save

                </button>


                <!-- EXIT -->

                <button

                    type="button"

                    class="btn exit"

                    id="exitButton"

                    onclick="window.location.href='./balanace_sheet.html'"

                >

                    Exit

                </button>


            </div>


        </div>

    </div>

</form>


<!-- =====================================================
     KANNADA AUTO FETCH
====================================================== -->

<script>

function setKannadaName() {

    var select =
        document.getElementById("main_head");


    var selectedOption =
        select.options[
            select.selectedIndex
        ];


    var kannada =
        selectedOption.getAttribute(
            "data-kannam"
        );


    document.getElementById(
        "knd"
    ).value =
        kannada || "";

}

</script>


<script src="./newprolossubhead.js"></script>

</body>

</html>