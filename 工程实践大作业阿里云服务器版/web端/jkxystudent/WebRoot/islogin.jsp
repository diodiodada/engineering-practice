<%@page import="com.jkxy.model.StuInfoTabl"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
	StuInfoTabl user = (StuInfoTabl) session.getAttribute("user");
	if (user == null) {
%>

<jsp:forward page="index.jsp"></jsp:forward>
<%
	}
%>
