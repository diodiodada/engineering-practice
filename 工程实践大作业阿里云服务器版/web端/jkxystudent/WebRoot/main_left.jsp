<%@ page import="com.jkxy.model.StuInfoTabl"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'main_left.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

</head>
<jsp:include page="islogin.jsp"></jsp:include>
<body>
	<%
		StuInfoTabl user = (StuInfoTabl) session.getAttribute("user");
		String usertype = user.getUsertype();
	%>



	<a href="displayperinfo.jsp" target="main_right">个人信息查看</a>
	<br>
	<a href="modifyperinfo.jsp" target="main_right">个人信息修改</a>
	<br>
	
	<%
	if(usertype.equals("学生")||usertype.equals("教师")){
	%>
	<a href="classSchedule.jsp" target="main_right">教学计划</a>
	<br>
	<%
	}
	%>
	
	<a href="checkInRecord.jsp" target="main_right">查看签到记录</a>
	<br>
	<a href="LeaveRecord.jsp" target="main_right">查看请假记录</a>
	<br>
	
	<%
	if(usertype.equals("教师")||usertype.equals("管理员")){
	%>
	<a href="inputstuinfo.jsp" target="main_right">录入学生信息</a>
	<br>
	<a href="displaystuinfo.jsp" target="main_right">查看学生信息</a>
	<br>
	<a href="modifystuinfo.jsp" target="main_right">修改学生信息</a>  
	<br>
	<a href="deletestuinfo.jsp" target="main_right">删除学生信息</a>
	<br>
	<%
	}
	%>
	
	<a href="exit.jsp" target="_top">退出</a>
	<br>
</body>
</html>
