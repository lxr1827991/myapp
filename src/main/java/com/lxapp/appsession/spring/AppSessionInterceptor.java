package com.lxapp.appsession.spring;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.lxapp.appsession.AppSessionReception;

public class AppSessionInterceptor extends HandlerInterceptorAdapter{

	@Autowired
	AppSessionReception appSessionReception;
	
	
	String sessionKey = "Sid";
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		appSessionReception.requestStart();
		appSessionReception.setSessionId(request.getParameter(sessionKey));
		
		return true;
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		appSessionReception.requestFinish();
		super.postHandle(request, response, handler, modelAndView);
	}

	public String getSessionKey() {
		return sessionKey;
	}

	public void setSessionKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}
	
}
