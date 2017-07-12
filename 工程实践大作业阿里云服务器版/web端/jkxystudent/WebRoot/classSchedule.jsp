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

<title>My JSP 'classSchedule.jsp' starting page</title>

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
	<jsp:useBean id="stuSer" class="com.jkxy.service.StuInfoTablService"></jsp:useBean>
	
	<%
		StuInfoTabl user = (StuInfoTabl) session.getAttribute("user");
		String studentNumber = user.getStudentNumber();

		StuInfoTabl stu = stuSer.queryStubyNum(studentNumber);
	%>
	
	<h2>您这学期有下面的课程需要签到：</h2>
	<ul>
							<%String course[] = stu.getCourse();
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机导论")) {
								%><li>计算机导论</li><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据结构")) {
								%><li>数据结构</li><%break;
								}
							}%>
							
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据库原理")) {
								%><li>数据库原理</li><%break;
								}
							}%>

						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("操作系统")) {
								%><li>操作系统 </li><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机网络")) {
								%><li>计算机网络</li> <%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("软件工程")) {
								%><li>软件工程</li> <%break;
								}
							}%>
	</ul>
	
</body>
</html>
