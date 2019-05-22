<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page import="java.text.*,java.util.*" %>
<%@ page import="edugate.demo.model.Users" %>
<%@ page import="edugate.demo.model.UserProfile" %>
<%@ page import="edugate.demo.model.Course" %>
<%@ page import="edugate.demo.model.CourseRealization" %>
<html>

<head>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/Profile.css" rel="stylesheet">
</head>


<body>
    <%@include file="header.jsp" %>
    <div class="profile-container">
        <div class="container">
            <div class="profile-info">
				<%
				Users currentUser = (Users)request.getAttribute("currentUser");
				UserProfile userProfile = (UserProfile)request.getAttribute("currentUserProfile");
				Map<Course, CourseRealization> courses = (Map<Course, CourseRealization>)request.getAttribute("courses");
				String name = userProfile.getFirstName()+" "+userProfile.getLastName();
				
				
				%>
                
				
                <h2>Witaj,</h2>
                
                <h3><%=name%></h3>
                
                <br>

                <div class="row">
                   <div class="col">
                    <h5>Szczegóły użytkownika</h5>
                    <b>Uczelnia</b>
                    <p>x</p>
                    <b>Wydział</b>
                    <p>x</p>
                    <b>Kierunek</b>
                    <p>x</p>
                    <b>E-mail</b>
                    <p>x</p>
                    <b>Rok akademicki</b>
                    <p>x</p>
                    <b>E-mail</b>
                    <p>x</p>
                    <br>
                    <button>
                        Modyfikuj dane
                    </button>
                </div>
                       <div class="col">
                           <h5>Realizowane kursy</h5>
                           <p>kurs</p>
                           <p>kurs</p>
                           <p>kurs</p>
                           <p>kurs</p>
                           <p>kurs</p>

                           <p>kurs</p>
                           <p>kurs</p>

                           <p>kurs</p>
                       </div> 
                </div>
                        
                        

                    </div>
                   
                </div>




            </div>
        </div>
    </div>
    </div>
</body>

</html>