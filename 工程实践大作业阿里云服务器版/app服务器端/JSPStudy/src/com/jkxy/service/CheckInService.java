package com.jkxy.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.jkxy.model.CheckInTable;
import com.jkxy.model.stuInfo;

public class CheckInService {
	
	private Connection conn;
	private PreparedStatement pstmt;
	
	public CheckInService(){
		conn=new com.jkxy.conn.conn().getCon();
	}

	public String queryAllRecord(String studentNumber) {
		String rec = "";
		try {
			pstmt = conn.prepareStatement("select * from checkintabl where studentNumber=?");
			pstmt.setString(1, studentNumber);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				
				rec += rs.getString(1);
				rec += "#";
				if (rs.getDate(2) != null)
					rec += rs.getDate(2).toString();
				rec += "#";
				rec += rs.getString(3);
				rec += "#";
				rec += rs.getString(4);
				rec += "#";
				rec += rs.getString(5);
				rec += "#";
				rec += rs.getString(6);
				
				rec += "&";

			}
			rec=rec.substring(0,rec.length()-1);
			return rec;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}
	
	public String queryAllRecordByCourse(String course) {
		String rec = "";
		try {
			pstmt = conn.prepareStatement("select * from checkintabl where course=?");
			pstmt.setString(1, course);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				
				rec += rs.getString(1);
				rec += "#";
				if (rs.getDate(2) != null)
					rec += rs.getDate(2).toString();
				rec += "#";
				rec += rs.getString(3);
				rec += "#";
				rec += rs.getString(4);
				rec += "#";
				rec += rs.getString(5);
				rec += "#";
				rec += rs.getString(6);
				
				rec += "&";

			}
			rec=rec.substring(0,rec.length()-1);
			return rec;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}
	
	
	public String queryAllRecord() {
		String rec = "";
		try {
			pstmt = conn.prepareStatement("select * from checkintabl");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				
				rec += rs.getString(1);
				rec += "#";
				if (rs.getDate(2) != null)
					rec += rs.getDate(2).toString();
				rec += "#";
				rec += rs.getString(3);
				rec += "#";
				rec += rs.getString(4);
				rec += "#";
				rec += rs.getString(5);
				rec += "#";
				rec += rs.getString(6);
				
				rec += "&";
				
			}
			rec=rec.substring(0,rec.length()-1);
			return rec;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}

	public boolean addCheckInRec(CheckInTable rec) {
		try {
			pstmt = conn.prepareStatement("insert into checkintabl"
					+ "(studentNumber,time,course,place,idCode,status) "
					+ "values(?,?,?,?,?,?)");
			pstmt.setString(1, rec.getStudentNumber());
			pstmt.setString(2, rec.getTime());
			pstmt.setString(3, rec.getCourse());
			pstmt.setString(4, rec.getPlace());
			pstmt.setString(5, rec.getIdCode());
			pstmt.setString(6, rec.getStatus());

			pstmt.executeUpdate();
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
			return false;
		}

	}
}
