
<%@ page import="com.Bank.Bean.masbalsheheaBean" %>
<%@ page import="java.util.List" %>

<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Balance Sheet Sub Headers</title>

    <link rel="stylesheet"
          href="./masbalshesubhea.css">

</head>

<body>

<%
    // Get Main Head list from servlet
    List<masbalsheheaBean> listhead =
        (List<masbalsheheaBean>) request.getAttribute("head");
%>


<form action="masbalshesubhea"
      method="post"
      class="customer-form"
      id="customerForm">

    <div class="cards">


        <!-- =========================================
             HEADER
        ========================================== -->

        <nav class="header-customer">

            <div class="header-main">

                <div class="header-left">

                    <div class="header-img">

                        <img src="../image/facelogo.png"
                             alt="facelogo">

                    </div>


                    <div class="head-line">

                        <h2>Balance Sheet</h2>

                        <h5>
                            Balance Sheet Sub Header Information
                        </h5>

                    </div>

                </div>

            </div>

        </nav>


        <!-- =========================================
             CARD
        ========================================== -->

        <div class="card">

            <div class="lines">

                <h3>
                    Balance Sheet Sub Headers Masters
                </h3>


                <!-- =========================================
                     MAIN HEAD
                ========================================== -->

                <div class="row two-col">

                    <!-- MAIN HEAD DROPDOWN -->

                    <div class="filed">

                        <label for="main_head">
                            Main Head
                            <span class="required">*</span>
                        </label>

                        <select name="main_head"
                                id="main_head">

                            <option value="">
                                Select Main Head
                            </option>


                            <%
                                if (listhead != null) {

                                    for (masbalsheheaBean h : listhead) {
                            %>

                            <option value="<%=h.getId()%>"
                                    data-kannada="<%=h.getMaiheakan()%>">

                                <%=h.getMaihea()%>

                            </option>

                            <%
                                    }
                                }
                            %>

                        </select>

                    </div>


                    <!-- MAIN HEAD KANNADA -->

                    <div class="filed">

                        <label for="main_head_kn">
                            Main Head (Kannada)
                        </label>

                        <input type="text"
                               id="main_head_kn"
                               name="main_head_kn"
                               placeholder="Kannada"
                               readonly>

                    </div>

                </div>


                <!-- =========================================
                     SUB HEAD NAME
                ========================================== -->

                <div class="row two-col">

                    <!-- SUB HEAD -->

                    <div class="filed">

                        <label for="nam">
                            Sub Head
                            <span class="required">*</span>
                        </label>

                        <input type="text"
                               id="nam"
                               name="nam"
                               placeholder="Sub Head Name"
                               required="required">

                    </div>


                    <!-- SUB HEAD KANNADA -->

                    <div class="filed">

                        <label for="knd">
                            Sub Head (Kannada)
                        </label>

                        <input type="text"
                               id="knd"
                               name="namkan"
                               placeholder="Sub Head Kannada">

                    </div>

                </div>


                <!-- =========================================
                     BUTTONS
                ========================================== -->

                <div class="button-row">

                    <!-- CANCEL -->

                    <button type="button"
                            class="btn cancle"
                            id="cancelButton">

                        Cancel

                    </button>


                    <!-- SAVE -->

                    <button type="submit"
                            class="btn save"
                            id="saveButton">

                        Save

                    </button>


                    <!-- EXIT -->

                     <a href="./masbalsheacc"
                       class="btn exit"
                       id="exitButton">

                        Exit

                    </a>
                    
                     

                </div>


            </div>

        </div>

    </div>

</form>


<script src="./masbalshesubhea.js"></script>

</body>

</html>

