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

<title>My JSP 'index.jsp' starting page</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css" href="css/style.css">

</head>

<body>
	<center>
		<form action="validate.jsp" name="login">
			<table>
				<tr>
					<td align="center" colspan=2>欢迎来到考勤管理系统</td>
				</tr>
				<tr>
					<td>账户类型:</td>
					<td><select name="usertype">
							<option selected>学生</option>
							<option>教师</option>
							<option>管理员</option>
					</select></td>
				</tr>
				<tr>
					<td>用户账号:</td>
					<td><input type="text" name="studentNumber"></td>
				</tr>
				<tr>
					<td>用户密码:</td>
					<td><input type="password" name="password"></td>
				</tr>
				<tr>
					<td align="center" colspan="2"><input type="submit" value="提交">&nbsp;&nbsp;
						<input type="reset" value="重置"></td>
				</tr>
			</table>
		</form>
	</center>
</body>
</html>
