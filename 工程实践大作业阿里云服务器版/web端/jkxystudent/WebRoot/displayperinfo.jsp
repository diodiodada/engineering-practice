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

<title>My JSP 'displayperinfo.jsp' starting page</title>

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
		String usertype = user.getUsertype();

		StuInfoTabl stu = stuSer.queryStubyNum(studentNumber);
	%>
	
		<% 
		if(usertype.equals("学生")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><%=stu.getName()%></td>
			</tr>
			
			<tr>
				<td>学号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><%=stu.getPassword()%></td>
			</tr>
			
			<tr>
				<td>所选课程：</td>
				<td><%String course[] = stu.getCourse();
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机导论")) {
								%>计算机导论<br/><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据结构")) {
								%>数据结构<br/><%break;
								}
							}%>
							
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据库原理")) {
								%>数据库原理<br/><%break;
								}
							}%>

						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("操作系统")) {
								%>操作系统 <br/><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机网络")) {
								%>计算机网络<br/> <%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("软件工程")) {
								%>软件工程<br/> <%break;
								}
							}%>
				</td>
			</tr>

		</table>

		<%
		}else if(usertype.equals("教师")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><%=stu.getName()%></td>
			</tr>
			
			<tr>
				<td>工号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><%=stu.getPassword()%></td>
			</tr>
			
			<tr>
				<td>所授课程：</td>
				<td><%String course[] = stu.getCourse();
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机导论")) {
								%>计算机导论<br/><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据结构")) {
								%>数据结构<br/><%break;
								}
							}%>
							
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据库原理")) {
								%>数据库原理<br/><%break;
								}
							}%>

						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("操作系统")) {
								%>操作系统 <br/><%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机网络")) {
								%>计算机网络<br/> <%break;
								}
							}%>
						
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("软件工程")) {
								%>软件工程<br/> <%break;
								}
							}%>
				</td>
			</tr>

		</table>
		
		<%
		}else if(usertype.equals("管理员")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><%=stu.getName()%></td>
			</tr>
			
			<tr>
				<td>帐号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><%=stu.getPassword()%></td>
			</tr>

		</table>
		
		<%
		}
		%>

</body>
</html>
