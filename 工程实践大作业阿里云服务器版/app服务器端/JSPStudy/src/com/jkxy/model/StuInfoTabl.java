package com.jkxy.model;

public class StuInfoTabl {
	
	private String usertype;
	private String name;
	private String studentNumber;
	private String password;
	private String[] course = { "" };
	private String courseStr = "";
	
	
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStudentNumber() {
		return studentNumber;
	}
	public void setStudentNumber(String studentNumber) {
		this.studentNumber = studentNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String[] getCourse() {
		return course;
	}
	public void setCourse(String[] course) {
		this.course = course;
	}
	public String getCourseStr() {
		if(course!=null)
		{
			courseStr="";
			for(int i=0;i<course.length;i++)
				courseStr+=course[i]+"&";
		}
		courseStr=courseStr.substring(0,courseStr.length()-1);
		return courseStr;
	}
	public void setCourseStr(String courseStr) {
		this.courseStr = courseStr;
	}

	

}
