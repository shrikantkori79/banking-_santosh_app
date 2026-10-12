<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Profit Loss Main Head</title>

    <link rel="stylesheet"
          href="./newproloshead.css">



</head>


<body>


<form

    class="customer-form"

    id="customerForm"

    action="newproloshead"

    method="post"

>


    <!-- =====================================================
         MAIN CARD
    ====================================================== -->

    <div class="cards">


        <!-- =================================================
             HEADER
        ================================================== -->

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


        <!-- =================================================
             FORM CONTENT
        ================================================== -->

        <div class="card">


            <!-- =================================================
                 TITLE
            ================================================== -->

            <div class="lines">


                <h3>

                    Create New Profit Loss Main Head

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
                 MAIN HEAD + KANNADA
            ================================================== -->

            <div class="row two-col">


                <!-- =================================================
                     MAIN HEAD
                ================================================== -->

                <div class="field">


                    <label for="main_head">

                        Main Head

                        <span class="required">

                            *

                        </span>

                    </label>


                    <input

                        type="text"

                        id="main_head"

                        name="heanam"

                        placeholder="Enter Main Head"

                        value="<%= request.getParameter("heanam") != null
                                ? request.getParameter("heanam")
                                : "" %>"

                        required

                    >


                </div>


                <!-- =================================================
                     KANNADA
                ================================================== -->

                <div class="field">


                    <label for="knd">

                        Kannada

                    </label>


                    <input

                        type="text"

                        id="knd"

                        name="heakannam"

                        placeholder="Enter Kannada Name"

                        value="<%= request.getParameter("heakannam") != null
                                ? request.getParameter("heakannam")
                                : "" %>"

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

                <a

                    href="./newprolossubhead.jsp"

                    class="btn exit"

                    id="exitButton"

                >

                    Exit

                </a>


            </div>


        </div>


    </div>


</form>


<!-- =====================================================
     EXISTING JAVASCRIPT
====================================================== -->

<script src="./newproloshead.js"></script>


</body>

</html>