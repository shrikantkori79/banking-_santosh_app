<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Form Testing Hub</title>
<link rel="stylesheet" href="./forentendButton.css">
</head>
<body>
    <main class="page-shell">
        <header class="page-header">
            <span class="eyebrow">SOOKTH BANKING</span>
            <h1>Form Testing</h1>
            <p>Choose a form to open and test.</p>
        </header>

        <div class="form-columns">
            <section class="form-card master-card" aria-labelledby="master-heading">
                <div class="card-heading">
                    <div>
                        <span class="section-label">SETUP &amp; CONFIGURATION</span>
                        <h2 id="master-heading">Master Forms</h2>
                    </div>
                    <span class="form-count" aria-label="15 forms">13</span>
                </div>

                <nav class="form-list" aria-label="Master forms">

                    <details class="form-dropdown">
                        <summary class="dropdown-trigger">
                            <span class="form-number">01</span>
                            <span>master term </span>
                            <span class="dropdown-indicator" aria-hidden="true"></span>
                        </summary>

                        <div class="dropdown-options">

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/masternam.jsp">
                                <span class="form-number">01</span>
                                <span>Term Name</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/masterint.jsp">
                                <span class="form-number">02</span>
                                <span>Term Interst</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/mastersla.jsp">
                                <span class="form-number">03</span>
                                <span>Term Slab</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                        </div>
                    </details>

                    <details class="form-dropdown">
                        <summary class="dropdown-trigger">
                            <span class="form-number">02</span>
                            <span>CC Master</span>
                            <span class="dropdown-indicator" aria-hidden="true"></span>
                        </summary>

                        <div class="dropdown-options">

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/masccnam.jsp">
                                <span class="form-number">01</span>
                                <span>CC Name</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/masccint.jsp">
                                <span class="form-number">02</span>
                                <span>CC Interst</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                            <a class="form-link"
                               href="<%=request.getContextPath()%>/masccsla.jsp">
                                <span class="form-number">03</span>
                                <span>CC Slab</span>
                                <span class="arrow" aria-hidden="true">›</span>
                            </a>

                        </div>
                    </details>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masbalsheacc.jsp">
                        <span class="form-number">03</span>
                        <span>Masster BalanceSheet Acc</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masbalshehea.jsp">
                        <span class="form-number">04</span>
                        <span>Master BlanceSheet Head</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masbalshesubhea.jsp">
                        <span class="form-number">05</span>
                        <span>Master BlanceSheet Head</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masdeppro.jsp">
                        <span class="form-number">06</span>
                        <span>Master Deposit ProLos</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masdir.jsp">
                        <span class="form-number">07</span>
                        <span>master Director</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masloa.jsp">
                        <span class="form-number">08</span>
                        <span>Master Loan</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/maspig.jsp">
                        <span class="form-number">09</span>
                        <span>Master Pigmy</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masrd.jsp">
                        <span class="form-number">10</span>
                        <span>Master RD</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/masshapro.jsp">
                        <span class="form-number">11</span>
                        <span>Master Share ProLos</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newproloshead">
                        <span class="form-number">12</span>
                        <span>Master ProLos Head</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newprolossubhead">
                        <span class="form-number">13</span>
                        <span>Master ProLos Sub Head</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                </nav>
            </section>

            <section class="form-card new-card" aria-labelledby="new-heading">
                <div class="card-heading">
                    <div>
                        <span class="section-label">CUSTOMER &amp; ACCOUNT FORMS</span>
                        <h2 id="new-heading">New Forms</h2>
                    </div>
                    <span class="form-count" aria-label="8 forms">08</span>
                </div>

                <nav class="form-list" aria-label="New forms">

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/new_sha_sb_td_cc_acc.jsp">
                        <span class="form-number">01</span>
                        <span>New sha_sb_ts_acc</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newcamacc">
                        <span class="form-number">02</span>
                        <span>New Company Acc</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newcus">
                        <span class="form-number">03</span>
                        <span>New Customer </span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newloa">
                        <span class="form-number">04</span>
                        <span>New Loan</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newrdpigacc.jsp">
                        <span class="form-number">05</span>
                        <span>New RD &amp; Pigmy Acc</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                    <a class="form-link"
                       href="<%=request.getContextPath()%>/newrdpigage">
                        <span class="form-number">06</span>
                        <span>New RD &amp; Pigmy Agent</span>
                        <span class="arrow" aria-hidden="true">›</span>
                    </a>

                </nav>
            </section>
        </div>

        <footer class="page-footer">
            Form testing shortcuts
            <span aria-hidden="true">•</span>
            Select any item to open its form
        </footer>
    </main>
</body>
</html>