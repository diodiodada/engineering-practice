<%@page import="com.jkxy.model.stuInfo"%>
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

<title>My JSP 'deleteOneStu.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

</head>

<body>
	<jsp:useBean id="stuSer" class="com.jkxy.service.stuInfoService"></jsp:useBean>
	<%
		int id = Integer.parseInt(request.getParameter("id"));
		stuInfo stu = stuSer.queryStubyID(id);
		out.print("删除了id号为" + stu.getId() + "的记录<br/>");
		
		if (stuSer.deleteStu(id))
			out.print("success");
		else
			out.print("failure");
	%>
</body>
</html>
