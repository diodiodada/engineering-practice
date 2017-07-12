<%@ page import="com.jkxy.model.StuInfoTabl"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'main_right.jsp' starting page</title>
    
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
	
	<%
		if(usertype.equals("学生")){
		%>
		<p>欢迎来到考勤管理系统——学生版</p>
  		<h3>这里可以：</h3>
  		<ul>
  			<li>修改个人信息</li>
  			<li>修改密码</li>
  			<li>查看教学计划</li>
  			<li>查看签到记录</li>
  			<li>查看请假记录</li>
  		</ul>
    	<h2>注意：您需要在手机端进行签到!!</h2>
		<%
		}else if(usertype.equals("教师")){
		%>
		<p>欢迎来到考勤管理系统——教师版</p>
  		<h3>这里可以：</h3>
  		<ul>
  			<li>修改个人信息</li>
  			<li>修改密码</li>
  			<li>查看教学计划</li>
  			<li>查看签到记录</li>
  			<li>查看请假记录</li>
  			
  			<li>录入学生信息</li>
  			<li>查看学生信息</li>
  			<li>修改学生信息</li>
  			<li>删除学生信息</li>
  		</ul>
    	<h2>注意：您的学生需要在手机端进行签到!!</h2>	
		<%
		}else if(usertype.equals("管理员")){
		%>
		<p>欢迎来到考勤管理系统——管理员</p>
  		<h3>这里可以：</h3>
  		<ul>
  			<li>修改个人信息</li>
  			<li>修改密码</li>
  			<li>查看教学计划</li>
  			<li>查看签到记录</li>
  			<li>查看请假记录</li>
  			
  			<li>录入学生信息</li>
  			<li>查看学生信息</li>
  			<li>修改学生信息</li>
  			<li>删除学生信息</li>
  		</ul>
		<%
		}
	%>
  </body>
</html>
