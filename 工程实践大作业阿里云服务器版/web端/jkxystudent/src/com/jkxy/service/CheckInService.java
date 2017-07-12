package com.jkxy.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.jkxy.model.CheckInTable;

public class CheckInService {
	
	private Connection conn;
	private PreparedStatement pstmt;
	
	public CheckInService(){
		conn=new com.jkxy.conn.conn().getCon();
	}

	public List queryAllRecord(String studentNumber) {
		List stus = new ArrayList();
		try {
			pstmt = conn.prepareStatement("select * from checkintabl where studentNumber=?");
			pstmt.setString(1, studentNumber);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				CheckInTable stu = new CheckInTable();
				
				stu.setStudentNumber(rs.getString(1));
				if (rs.getDate(2) != null)
					stu.setTime(rs.getDate(2).toString());
				stu.setCourse(rs.getString(3));
				stu.setPlace(rs.getString(4));
				stu.setIdCode(rs.getString(5));
				stu.setStatus(rs.getString(6));
				
				stus.add(stu);

			}
			return stus;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}
	
	public List queryAllRecord() {
		List stus = new ArrayList();
		try {
			pstmt = conn.prepareStatement("select * from checkintabl");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				CheckInTable stu = new CheckInTable();
				
				stu.setStudentNumber(rs.getString(1));
				if (rs.getDate(2) != null)
					stu.setTime(rs.getDate(2).toString());
				stu.setCourse(rs.getString(3));
				stu.setPlace(rs.getString(4));
				stu.setIdCode(rs.getString(5));
				stu.setStatus(rs.getString(6));
				
				stus.add(stu);

			}
			return stus;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}

}
