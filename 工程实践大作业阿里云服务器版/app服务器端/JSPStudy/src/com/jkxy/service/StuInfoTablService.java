package com.jkxy.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.jkxy.model.StuInfoTabl;
import com.jkxy.model.stuInfo;

public class StuInfoTablService {
	
	private Connection conn;
	private PreparedStatement pstmt;
	
	public StuInfoTablService(){
		conn=new com.jkxy.conn.conn().getCon();
	}
	
	public boolean valiUser(StuInfoTabl user)
	{
		
		try {
			pstmt=conn.prepareStatement("select * from stuinfotabl where studentNumber=? and password=? and usertype=? " );
			pstmt.setString(1,user.getStudentNumber());
			pstmt.setString(2,user.getPassword());
			pstmt.setString(3, user.getUsertype());
			ResultSet rs=pstmt.executeQuery();
			
			//pstmt=conn.prepareStatement("select * from stuinfotabl where studentNumber=? and password=? and usertype=? "   );
			//pstmt.setString(1,user.getStudentNumber());
			//pstmt.setString(2,user.getPassword());
			//pstmt.setString(3, user.getUsertype());
			//ResultSet rs=pstmt.executeQuery();
			
			System.out.println(pstmt.toString());
			//System.out.println(rs.next());
			
			if(rs.next())
				return true;
			else
				return false;
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
	}

	public StuInfoTabl queryStubyNum(String studentNumber) {
		// List stus = new ArrayList();
		try {
			pstmt = conn
					.prepareStatement("select * from stuinfotabl where studentNumber=?");
			pstmt.setString(1, studentNumber);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				StuInfoTabl stu = new StuInfoTabl();
				
				stu.setName(rs.getString(1));
				stu.setStudentNumber(rs.getString(2));
				stu.setPassword(rs.getString(3));
				
				if (rs.getString(4) != null)
					stu.setCourse(rs.getString(4).split("&"));
				
				stu.setUsertype(rs.getString(5));
				return stu;

			}
			return null;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}

	public boolean updateStu(StuInfoTabl stu) {

		try {
			pstmt = conn
					.prepareStatement("update  stuinfotabl set name=? , password=? ,course=? where studentNumber=? ");
			
			pstmt.setString(1, stu.getName());
			pstmt.setString(2, stu.getPassword());
			pstmt.setString(3, stu.getCourseStr());
			pstmt.setString(4, stu.getStudentNumber());
			
			pstmt.executeUpdate();
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}

}
