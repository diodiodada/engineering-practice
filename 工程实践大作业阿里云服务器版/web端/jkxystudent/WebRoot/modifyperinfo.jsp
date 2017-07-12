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

<title>My JSP 'modifyperinfo.jsp' starting page</title>

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


	<form action="modifyPerInfo_result.jsp" method="post">
		
		<% 
		if(usertype.equals("学生")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息修改</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><input type="text" size=20 name="name"
					value="<%=stu.getName()%>"></td>
			</tr>
			
			<tr>
				<td>学号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><input type="text" size=20 name="password"
					value="<%=stu.getPassword()%>"></td>
			</tr>
			
			<tr>
				<td>所选课程：</td>
				<td><select name="course" size=4 multiple="multiple">
						<option
							<%String course[] = stu.getCourse();
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机导论")) {%>
									selected <%break;
								}
							}%>>计算机导论</option>
						<option
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据结构")) {%>
									selected <%break;
								}
							}%>>数据结构</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据库原理")) {%>
									selected <%break;
								}
							}%>>数据库原理</option>

						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("操作系统")) {%>
									selected <%break;
								}
							}%>>操作系统</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机网络")) {%>
									selected <%break;
								}
						}%>>计算机网络</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("软件工程")) {%>
									selected <%break;
								}
							}%>>软件工程</option>
				</select></td>
			</tr>
			
			<tr>
				<td align="center" colspan="2">
					<input type="hidden" name="studentNumber" value="<%=stu.getStudentNumber()%>" />
					<input type="submit" value="提交">&nbsp;&nbsp;
					<input type="reset" value="重置">
				</td>
			</tr>

			
		</table>
		
		<%
		}else if(usertype.equals("教师")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息修改</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><input type="text" size=20 name="name"
					value="<%=stu.getName()%>"></td>
			</tr>
			
			<tr>
				<td>工号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><input type="text" size=20 name="password"
					value="<%=stu.getPassword()%>"></td>
			</tr>
			
			<tr>
				<td>所授课程：</td>
				<td><select name="course" size=4 multiple="multiple">
						<option
							<%String course[] = stu.getCourse();
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机导论")) {%>
									selected <%break;
								}
							}%>>计算机导论</option>
						<option
							<%for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据结构")) {%>
									selected <%break;
								}
							}%>>数据结构</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("数据库原理")) {%>
									selected <%break;
								}
							}%>>数据库原理</option>

						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("操作系统")) {%>
									selected <%break;
								}
							}%>>操作系统</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("计算机网络")) {%>
									selected <%break;
								}
						}%>>计算机网络</option>
						<option
							<%
							for (int i = 0; i < course.length; i++) {
								if (course[i].equals("软件工程")) {%>
									selected <%break;
								}
							}%>>软件工程</option>
				</select></td>
			</tr>
			
			<tr>
				<td align="center" colspan="2">
					<input type="hidden" name="studentNumber" value="<%=stu.getStudentNumber()%>" />
					<input type="submit" value="提交">&nbsp;&nbsp;
					<input type="reset" value="重置">
				</td>
			</tr>

			
		</table>
		
		<%
		}else if(usertype.equals("管理员")){
		%>
		
		<table bgColor="#c0c0c0">

			<tr>
				<td align="center" bgcolor=green colspan=2><font color=white>个人信息修改</font></td>
			</tr>
			
			<tr>
				<td>姓名：</td>
				<td><input type="text" size=20 name="name"
					value="<%=stu.getName()%>"></td>
			</tr>
			
			<tr>
				<td>工号：</td>
				<td><%=stu.getStudentNumber()%></td>
			</tr>
			
			<tr>
				<td>密码：</td>
				<td><input type="text" size=20 name="password"
					value="<%=stu.getPassword()%>"></td>
			</tr>
			
			<tr>
				<td align="center" colspan="2">
					<input type="hidden" name="studentNumber" value="<%=stu.getStudentNumber()%>" />
					<input type="submit" value="提交">&nbsp;&nbsp;
					<input type="reset" value="重置">
				</td>
			</tr>

			
		</table>
		
		<%
		}
		%>

	</form>
</body>
</html>
