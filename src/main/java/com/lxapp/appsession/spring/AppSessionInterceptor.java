package com.lxapp.appsession.spring;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.lxapp.appsession.AppSessionReception;

public class AppSessionInterceptor extends HandlerInterceptorAdapter{

	@Autowired
	AppSessionReception appSessionReception;
	
	
	String sessionKey = "sysSessionid";
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		appSessionReception.setSessionId(request.getParameter(sessionKey));
		
		return true;
	}

	public String getSessionKey() {
		return sessionKey;
	}

	public void setSessionKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}
	
}
