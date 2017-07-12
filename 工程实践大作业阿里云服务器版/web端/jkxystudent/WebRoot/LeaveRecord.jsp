<%@ page import="com.jkxy.model.StuInfoTabl"%>
<%@ page import="com.jkxy.model.AskForLeaveRec"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'LeaveRecord.jsp' starting page</title>
    
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
    <jsp:useBean id="stuSer" class="com.jkxy.service.AskForLeaveService"></jsp:useBean>
    
    <%
    	StuInfoTabl user = (StuInfoTabl) session.getAttribute("user");
		String studentNumber = user.getStudentNumber();
    	String usertype = user.getUsertype();
    	
		List stus = null;
		if(usertype.equals("学生")){
			stus = stuSer.queryAllRecord(studentNumber);
		}else if(usertype.equals("教师")){
			stus = stuSer.queryAllRecord();
		}else if(usertype.equals("管理员")){
			stus = stuSer.queryAllRecord();
		}
		Iterator iter = stus.iterator();
	%>
	
	<table>
		<tr>
			<td>学号</td>
			<td>请假课程</td>
			<td>请假时间</td>
			<td>请假原因</td>
			
		</tr>
		<%
			int i = 0;
			while (iter.hasNext()) {
				AskForLeaveRec record = (AskForLeaveRec) iter.next();
		%>
		<tr <%if (i % 2 == 0) {%> bgcolor="#F0F8FF" <%}%>>
			<td><%=record.getStudentNumber()%></td>
			<td><%=record.getCourse()%></td>
			<td><%=record.getTime()%></td>
			<td><%=record.getReason()%></td>
		</tr>
		<%
			i++;
			}
		%>

	</table>
    
  </body>
</html>
