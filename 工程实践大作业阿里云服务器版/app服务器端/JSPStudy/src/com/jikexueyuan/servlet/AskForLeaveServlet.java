package com.jikexueyuan.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.jkxy.model.AskForLeaveRec;
import com.jkxy.model.CheckInTable;

public class AskForLeaveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AskForLeaveServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		System.out.println("====== service ======");
		
		String studentNumber = request.getParameter("studentNumber");
		String course = request.getParameter("course");
		String time = request.getParameter("time");
		String reason = request.getParameter("reason");
		
		
		System.out.println(studentNumber);
		System.out.println(course);
		System.out.println(time);
		System.out.println(reason);
		
		
		AskForLeaveRec rec = new AskForLeaveRec();
		rec.setStudentNumber(studentNumber);
		rec.setTime(time);
		rec.setCourse(course);
		rec.setReason(reason);
		
		String result="";
		boolean bool = new com.jkxy.service.AskForLeaveService().addAskForLeaveRec(rec);
		if (bool) {
			result = "yes";
		} else {
			result = "no";
		}
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods","POST");
		response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
		
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json; charset=utf-8");
		
		Map map = new HashMap();  
        map.put("para1", result); 
         
        JSONObject mapJson = new JSONObject(map); // 传入Map类型  
        String jsonStr = mapJson.toString();
		/*String jsonStr = "{\"name\":\""+ pa + "\",\"type\":\"虫子\"}";*/
		
		PrintWriter out = null;
		try {
		    out = response.getWriter();
		    out.write(jsonStr);
		} catch (IOException e) {
		    e.printStackTrace();
		} finally {
		    if (out != null) {
		        out.close();
		    }
		}
	}

}
