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

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		System.out.println("====== service ======");
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String usertype = request.getParameter("usertype");
		
		System.out.println(username);
		System.out.println(password);
		System.out.println(usertype);
		
		
		StuInfoTabl user = new StuInfoTabl();
		user.setStudentNumber(username);
		user.setPassword(password);
		user.setUsertype(usertype);
		
		String result="";
		boolean bool = new com.jkxy.service.StuInfoTablService().valiUser(user);
		System.out.println(bool);
		if (bool) {
			result = "yes";
		} else {
			result = "no";
		}
		
		System.out.println(result);
		
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
