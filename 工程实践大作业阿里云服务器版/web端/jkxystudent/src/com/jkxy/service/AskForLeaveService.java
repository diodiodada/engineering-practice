package com.jkxy.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.jkxy.model.AskForLeaveRec;

public class AskForLeaveService {
	
	private Connection conn;
	private PreparedStatement pstmt;
	
	public AskForLeaveService(){
		conn=new com.jkxy.conn.conn().getCon();
	}

	public List queryAllRecord(String studentNumber) {
		List stus = new ArrayList();
		try {
			pstmt = conn.prepareStatement("select * from askforleave where studentNumber=?");
			pstmt.setString(1, studentNumber);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				AskForLeaveRec stu = new AskForLeaveRec();
				
				stu.setStudentNumber(rs.getString(1));
				stu.setCourse(rs.getString(2));
				if (rs.getDate(3) != null)
					stu.setTime(rs.getDate(3).toString());
				stu.setReason(rs.getString(4));
				
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
			pstmt = conn.prepareStatement("select * from askforleave ");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				AskForLeaveRec stu = new AskForLeaveRec();
				
				stu.setStudentNumber(rs.getString(1));
				stu.setCourse(rs.getString(2));
				if (rs.getDate(3) != null)
					stu.setTime(rs.getDate(3).toString());
				stu.setReason(rs.getString(4));
				
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
