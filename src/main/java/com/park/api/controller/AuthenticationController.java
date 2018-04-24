package com.park.api.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lxapp.appsession.AppSession;
import com.lxapp.appsession.bean.AppClient;
import com.lxapp.appsession.utils.AppSessionUtils;
import com.lxapp.common.JsonResult;
import com.lxapp.common.VcodeFactory;
import com.lxapp.common.bean.Vcode;
import com.lxapp.common.utils.RequestUtil;
import com.lxr.commons.exception.CallException;
import com.lxr.commons.exception.CheckException;
import com.lxr.commons.utils.ValidateuUitls;
import com.park.api.ServiceManage;
import com.park.api.common.AppContext;
import com.park.api.common.BaseController;
import com.park.api.common.SMSManage;
import com.park.api.common.SMSServiceImpl;



/**
 * 登录授权
 * @author Administrator
 *
 */
@RequestMapping
@Controller
public class AuthenticationController extends BaseController{

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	@RequestMapping("login/sms")
	@ResponseBody
	public Object perRegister(String phone,String debug) {
		
		
		
		
		if(!ValidateuUitls.isChinaPhoneLegal(phone))
			throw new CheckException("非法手机号");
		
		Vcode vcode = VcodeFactory.newVcode();
		
		vcode.setPhone(phone);
		
		RequestUtil.getSession().setAttribute("vcode", vcode);
		
		if("true".equals(debug)&&AppContext.isDebug){
			JsonResult result =  JsonResult.getSuccessResult(vcode.getCode());
			return result;
		}
		else 
		//SMSManage.getService(SMSServiceImpl.class).send(vcode, "您的验证码："+vcode.getCode()+"，请在5分钟内使用");
			SMSManage.getService(SMSServiceImpl.class).send(vcode.getPhone(), "您正在登录洪城停车app，验证码："+vcode.getCode()+"，请在5分钟内使用");
		
		logger.info("send vcode"+vcode.getCode());
		
		
		JsonResult result = JsonResult.getSuccessResult("短信已发送");
		
		
		return result;

	}
	
	@RequestMapping("test")
	@ResponseBody
	public Object test(String vcode) {
		
		if(vcode!=null)AppSessionUtils.getSession().putAttr("code", vcode);
		
		JsonResult jsonResult = JsonResult.getSuccessResult(AppSessionUtils.getSession().getAttr("code"));
		jsonResult.setSid(AppSessionUtils.getSession().getId());
		
		return jsonResult;

	}
	
	@RequestMapping("test2")
	@ResponseBody
	public Object test2(String vcode) {
		AppSession session = AppSessionUtils.getSession();
		Object c = session.getAttr("code");
		if(c==null) {c="1";
		}else {
			c+="1";
			
		}
		
		if (c.toString().length()>2) {
			AppSessionUtils.getSession().setForever();
		}
		
		AppSessionUtils.getSession().putAttr("code", c);
		
		
		JsonResult jsonResult = JsonResult.getSuccessResult(AppSessionUtils.getSession().getAttr("code"));
		jsonResult.setSid(AppSessionUtils.getSession().getId());
		
		return jsonResult;

	}
	
	
	
	
	
	@RequestMapping("login")
	@ResponseBody
	public Object login(String account,String pwd) {
		AppClient appClient = new AppClient();
		appClient.setAccount(account);
		appClient.getPwd();
		appClient = ServiceManage.securityService.checkUser(appClient);
		 ServiceManage.securityService.login(appClient);
		JsonResult result =  JsonResult.getSuccessResult("登录成功");
		
		return result;

	}
	
	
	@RequestMapping("user/logout")
	@ResponseBody
	public Object logout() {
		
	/*	Subject subject = securityService.getSessionSubject();
		
		securityService.logout(subject);*/
		
		return JsonResult.getSuccessResult("退出成功");

	}
	
	
	public static void main(String[] args) {
		System.out.println();
	}
	
}
