package com.park.api;


import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import com.lxapp.SecurityService;
import com.park.api.service.SecurityServiceImpl;


/**
 * session监听
 * @author Administrator
 *
 */
public class LoginSessionListener implements HttpSessionListener {  
	
    public void sessionCreated(HttpSessionEvent event) {  
    	
    	System.out.println("session生成："+event.getSession().getId());
    }  
    
    
   public void sessionDestroyed(HttpSessionEvent event) {   
        
      
    }   
   
   public static void main(String[] args) {
	
	   Date currentTime = new Date(1508815355991l);
	   SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	   String dateString = formatter.format(currentTime);
	   System.out.println(dateString);
	   
	   Date currentTime2 = new Date(1508814313526l);
	   
	   System.out.println(formatter.format(currentTime2));
	   
	   
	   
}
   
}    