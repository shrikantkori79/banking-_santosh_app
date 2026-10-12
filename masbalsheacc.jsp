
<%@ page import="com.Bank.Bean.masbalsheheaBean" %>
<%@ page import="com.Bank.Bean.masbalshesubheaBean" %>
<%@ page import="java.util.List" %>

<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Balance Sheet Headers</title>

    <link rel="stylesheet"
          href="./masbalsheacc.css">

</head>

<body>

<%

    List<masbalsheheaBean> listhead =
        (List<masbalsheheaBean>) request.getAttribute("head");

    List<masbalshesubheaBean> listsub =
        (List<masbalshesubheaBean>) request.getAttribute("sub");

%>


<form action="masbalsheacc"
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
                            Balance Sheet Account Information
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
                    Balance Sheet Headers
                </h3>

            </div>



            <!-- =========================================
                 MAIN HEAD
            ========================================== -->

            <div class="row three-col">


                <!-- MAIN HEAD -->

                <div class="field">

                    <label for="main_head">

                        Main Head

                        <span class="required">*</span>

                    </label>


                    <select id="main_head"
                            name="main_head">

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



                <!-- CREATE MAIN HEAD -->

                <div class="field">

                    <label>&nbsp;</label>

                    <a href="./masbalshehea.jsp"
                       class="create-btn">

                        Create New Head

                    </a>

                </div>



                <!-- MAIN HEAD KANNADA -->

                <div class="field">

                    <label for="main_head_kn">
                        Kannada
                    </label>

                    <input type="text"
                           id="main_head_kn"
                           name="main_head_kn"
                           placeholder="Kannada"
                           readonly>

                </div>

            </div>



            <!-- =========================================
                 SUB HEAD
            ========================================== -->

            <div class="row three-col">


                <!-- SUB HEAD -->

                <div class="field">

                    <label for="sub_head">

                        Sub Head

                        <span class="required">*</span>

                    </label>


                    <select id="sub_head"
                            name="sub_head">

                        <option value="">
                            Select Sub Head
                        </option>


                        <%

                            if (listsub != null) {

                                for (masbalshesubheaBean s : listsub) {

                        %>

                        <!--
                            IMPORTANT:
                            data-main-id contains the Main Head ID
                            belonging to this Sub Head.
                        -->

                        <option value="<%=s.getId()%>"
                                data-main-id="<%=s.getMasid()%>"
                                data-kannada="<%=s.getMassubheakan()%>"
                              >

                            <%=s.getMasubhea()%>

                        </option>

                        <%

                                }

                            }

                        %>

                    </select>

                </div>



                <!-- CREATE SUB HEAD -->

                <div class="field">

                    <label>&nbsp;</label>

                    <a href="./masbalshesubhea.jsp"
                       class="create-btn">

                        Create New Sub

                    </a>

                </div>



                <!-- SUB HEAD KANNADA -->

                <div class="field">

                    <label for="sub_head_kn">
                        Kannada
                    </label>

                    <input type="text"
                           id="sub_head_kn"
                           name="sub_head_kn"
                           placeholder="Kannada"
                           readonly>

                </div>

            </div>



            <!-- =========================================
                 ACCOUNT NAME
            ========================================== -->

            <div class="row two-col">


                <!-- ACCOUNT NAME -->

                <div class="field">

                    <label for="acc_name">

                        Account Name

                        <span class="required">*</span>

                    </label>

                    <input type="text"
                           id="acc_name"
                           name="acc_name"
                           placeholder="Account Name">

                </div>



                <!-- ACCOUNT NAME KANNADA -->

                <div class="field">

                    <label for="acc_name_kn">

                        Account Name (Kn)

                    </label>

                    <input type="text"
                           id="acc_name_kn"
                           name="acc_name_kn"
                           placeholder="Account Name Kannada">

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

                <a href="./profit_loss_head.html"
                   class="btn exit"
                   id="exitButton">

                    Exit

                </a>

            </div>


        </div>

    </div>

</form>


<script src="./masbalsheacc.js"></script>

</body>

</html>

