package com.park.api.service;

import org.springframework.stereotype.Service;

import com.lxapp.appsession.bean.AppClient;
import com.lxapp.SecurityService;

@Service
public class SecurityServiceImpl extends SecurityService{


	@Override
	public AppClient checkUser(AppClient subject) {
		
		if("qq".equals(subject.getAccount()))
			return subject;
		
		return null;
	}
	
	
	
	
}
