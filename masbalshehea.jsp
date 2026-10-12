<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Balancesheet Headers Masters</title>
<link rel="stylesheet" href="./masbalshehea.css">
</head>
<body>

<form  action="masbalshehea" method="post" class="customer-form" id="customerForm">

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

                        <h2>New Customer</h2>

                        <h5>
                            Customer Information
                        </h5>

                    </div>

                </div>

           
            

        </nav>



         <div class="card">


            <div class="lines">

                <h3>
                Balancesheet Headers Masters
                </h3>

                <div class="row three-col">
                    <div class="filed">
                        <label for="type_head">Type Of Head</label>
                        <select name="typeofset" id="type_head">
                            <option value="1">Asset</option>
                            <option value="2">Liablities</option>
                          
                        </select>
                    </div>

                   

                   
                </div>

               

            </div>
        </div>
          <div class="row two-col">
                    <div class="filed">
                        <label for="main_head"> Main Head</label>
                        <input type="text" id="main_head" name="nam">
                    </div>

               

                    <div class="filed">

                        <label for="knd">Kannada</label>
                        <input type="text" id="knd" name="namkan">
                    </div>
                </div>

               

            


           

                  <button type="button" class="btn cancle" id="addSuretyButton">Cancle</button>
          <button type="submit" class="btn save" id="addSuretyButton">Save</button>
            

                    
           <button type="button" class="btn exit" id="addSuretyButton"> <a href="./masbalsheacc"></a>Exit</button>
        </div>
       
        </div>



           
    </div>
</form>
<script src="./masbalshehea.js"></script>
</body>
</html>