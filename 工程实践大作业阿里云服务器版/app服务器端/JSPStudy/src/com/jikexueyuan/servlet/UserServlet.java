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

import com.jkxy.model.StuInfoTabl;

public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UserServlet() {
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
		
		System.out.println(studentNumber);
		
		StuInfoTabl stu = new com.jkxy.service.StuInfoTablService().queryStubyNum(studentNumber);
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods","POST");
		response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json; charset=utf-8");
		
		Map map = new HashMap();  
		
		if (stu != null) {
			map.put("para1", stu.getName()); 
			map.put("para2", stu.getStudentNumber()); 
			map.put("para3", stu.getPassword());
			map.put("para4", stu.getCourseStr());
			map.put("para5", stu.getUsertype());
		} else {
			map.put("para1", ""); 
			map.put("para2", ""); 
			map.put("para3", ""); 
			map.put("para4", ""); 
			map.put("para5", ""); 
		}
        
        JSONObject mapJson = new JSONObject(map); // 传入Map类型  
        String jsonStr = mapJson.toString();
		
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
