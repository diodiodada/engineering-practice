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

<title>My JSP 'modifyOneStu_result.jsp' starting page</title>

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
	<%
		request.setCharacterEncoding("utf-8");
	%>
	<jsp:useBean id="stu" class="com.jkxy.model.stuInfo"></jsp:useBean>
	<jsp:setProperty property="*" name="stu" />
	<jsp:useBean id="stuSer" class="com.jkxy.service.stuInfoService"></jsp:useBean>

	<%-- <%  //这里getKcs和getXqs后会把Kcs和Xqs第一次写入数据库
		out.print(stu.getNicheng());
		out.print(stu.getKcs());
		out.print(stu.getXqs());
		out.print(stu.getId());
	%> --%>
	<%
		if (stuSer.updateStu(stu))
			out.print("update success!!");
		else
			out.print("update failure!!");
	%>

</body>
</html>
