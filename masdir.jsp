<%@page import="com.Bank.Bean.masdesBean"%>
<%@page import="java.util.List"%>

<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Director Master</title>

    <link rel="stylesheet"
          href="./masdir.css">

</head>


<body>


<%

    List<masdesBean> list =
        (List<masdesBean>) request.getAttribute("list");


    String message =
        (String) request.getAttribute("message");

%>


<!-- =====================================================
     MAIN FORM
====================================================== -->

<form
    action="masdir"
    method="post"
    class="customer-form">


    <!-- =================================================
         HIDDEN DIRECTOR DATA

         JavaScript stores every added director here.
    ================================================== -->

    <div id="directorHiddenData"></div>


    <!-- =================================================
         DIRECTOR COUNT
    ================================================== -->

    <input
        type="hidden"
        id="directorCount"
        name="directorCount"
        value="0">


    <div class="cards">


        <!-- =================================================
             HEADER
        ================================================== -->

        <div class="header-customer">


            <div class="header-left">


                <div class="header-img">

                    <img
                        src="../image/facelogo.png"
                        alt="Face logo">

                </div>


                <div class="head-line">

                    <h2>
                        Director Master
                    </h2>

                    <h5>
                        Director master information
                    </h5>

                </div>


            </div>


        </div>



        <!-- =================================================
             BRANCH DETAILS
        ================================================== -->

        <div class="section">


            <div class="section-title">

                <span class="section-icon">
                    ◆
                </span>

                <span>
                    Branch Details
                </span>

            </div>


            <div class="branch-row">


                <!-- BRANCH CODE -->

                <div class="field">

                    <label for="branchCode">
                        Branch Code
                    </label>

                    <input
                        type="number"
                        name="code"
                        id="branchCode"
                        placeholder="Enter branch code">

                </div>



                <!-- BRANCH NAME -->

                <div class="field">

                    <label for="branchName">
                        Branch Name
                    </label>

                    <input
                        type="text"
                        name="braname"
                        id="branchName"
                        placeholder="Enter branch name">

                </div>



                <!-- ALL BRANCHES -->

                <div class="checkbox-field">

                    <label for="allBranches">

                        <input
                            type="checkbox"
                            name="allbra"
                            id="allBranches">

                        All Branches

                    </label>

                </div>


            </div>


        </div>



        <!-- =================================================
             DIRECTOR DETAILS
        ================================================== -->

        <div class="section">


            <div class="section-title">

                <span class="section-icon">
                    ◆
                </span>

                <span>
                    Director Details
                </span>

            </div>



            <div class="director-row">


                <!-- DIRECTOR NAME -->

                <div class="field">

                    <label for="directorName">
                        Director Name
                    </label>

                    <input
                        name="name"
                        type="text"
                        id="directorName"
                        placeholder="Enter name">

                </div>



                <!-- DIRECTOR NAME KANNADA -->

                <div class="field">

                    <label for="directorNameKannada">
                        Director Name Kannada
                    </label>

                    <input
                        type="text"
                        name="namkan"
                        id="directorNameKannada"
                        placeholder="Enter name">

                </div>



                <!-- DESIGNATION -->

                <div class="field">

                    <label for="designation">
                        Designation
                    </label>


                    <select
                        id="designation"
                        name="desid">


                        <option value="">
                            Select Designation
                        </option>


                        <%

                        if (list != null) {

                            for (masdesBean des : list) {

                        %>


                        <option
                            value="<%=des.getId()%>"
                            data-name="<%=des.getDesnam()%>"
                            data-kannada="<%=des.getDesnamkan()%>">

                            <%=des.getDesnam()%>

                        </option>


                        <%

                            }

                        }

                        %>


                    </select>


                </div>



                <!-- ADD DESIGNATION -->

                <div class="add-field">

                    <button
                        type="button"
                        class="add-btn"
                        onclick="addDesignation()">

                        Add

                    </button>

                </div>


            </div>


        </div>



        <!-- =================================================
             CONTACT DETAILS
        ================================================== -->

        <div class="section">


            <div class="section-title">

                <span class="section-icon">
                    ◆
                </span>

                <span>
                    Contact Details
                </span>

            </div>



            <div class="contact-row">


                <!-- JOINING DATE -->

                <div class="field">

                    <label for="joiningDate">
                        Joining Date
                    </label>

                    <input
                        name="date"
                        type="date"
                        id="joiningDate">

                </div>



                <!-- MOBILE -->

                <div class="field">

                    <label for="mobileNo">
                        Mobile No
                    </label>

                    <input
                        name="mobile"
                        type="number"
                        id="mobileNo"
                        placeholder="Enter mobile number">

                </div>


            </div>



            <!-- ADDRESS -->

            <div class="address-row">


                <div class="field">

                    <label for="address">
                        Address
                    </label>

                    <input
                        type="text"
                        name="add"
                        id="address"
                        placeholder="Enter address">

                </div>



                <!-- ADD DIRECTOR TO TABLE -->

                <div class="add-field">

                    <button
                        type="button"
                        class="add-btn"
                        onclick="addDirector()">

                        Add To Table

                    </button>

                </div>


            </div>


        </div>



        <!-- =================================================
             DIRECTOR TABLE
        ================================================== -->

        <div class="table-card">


            <div class="table-header">

                <h3>
                    Director Details
                </h3>

                <span>
                    Added director information
                </span>

            </div>



            <div class="table-scroll">


                <table>


                    <thead>

                        <tr>

                            <th>
                                Name
                            </th>

                            <th>
                                Join Date
                            </th>

                            <th>
                                Address
                            </th>

                            <th>
                                Mobile No
                            </th>

                            <th>
                                Branch
                            </th>

                            <th>
                                Designation
                            </th>

                        </tr>

                    </thead>



                    <tbody
                        id="directorTableBody">


                        <tr
                            id="emptyRow">

                            <td
                                colspan="6"
                                class="empty-row">

                                No records found

                            </td>

                        </tr>


                    </tbody>


                </table>


            </div>


        </div>



        <!-- =================================================
             BUTTONS
        ================================================== -->

        <div class="button-row">


            <!-- SAVE -->

            <button
                type="button"
                class="btn save"
                onclick="saveDirector()">

                Save

            </button>



            <!-- RESET -->

            <button
                type="button"
                class="btn reset"
                onclick="resetDirector()">

                Reset

            </button>



            <!-- EXIT -->

            <button
                type="button"
                class="btn exit"
                onclick="exitDirector()">

                Exit

            </button>


        </div>


    </div>


</form>



<!-- =====================================================
     SERVER MESSAGE
====================================================== -->

<%

if (message != null &&
    !message.trim().isEmpty()) {

%>

<script>

    window.addEventListener(
        "DOMContentLoaded",
        function() {

            alert(
                "<%= message
                    .replace("\\", "\\\\")
                    .replace("\"", "\\\"")
                    .replace("\r", "")
                    .replace("\n", "\\n") %>"
            );

        }
    );

</script>

<%

}

%>



<!-- =====================================================
     JAVASCRIPT
====================================================== -->

<script
    src="./masdir.js">
</script>


</body>

</html>