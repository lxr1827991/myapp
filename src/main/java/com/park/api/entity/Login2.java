package com.park.api.entity;

public class Login2 {
	
	String id;
	
	String account;
	
	Long last_access;
	
	Long login_time;
	
	String session_id;
	
	String token;
	
	Integer islogout;
	
	Long logout_time;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public Long getLast_access() {
		return last_access;
	}

	public void setLast_access(Long last_access) {
		this.last_access = last_access;
	}

	public Long getLogin_time() {
		return login_time;
	}

	public void setLogin_time(Long login_time) {
		this.login_time = login_time;
	}

	public String getSession_id() {
		return session_id;
	}

	public void setSession_id(String session_id) {
		this.session_id = session_id;
	}
	
	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Integer getIslogout() {
		return islogout;
	}

	public void setIslogout(Integer islogout) {
		this.islogout = islogout;
	}

	public Long getLogout_time() {
		return logout_time;
	}

	public void setLogout_time(Long logout_time) {
		this.logout_time = logout_time;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof Login2))
			return false;
		Login2 tLogin2 = (Login2)obj;
		
		if(getId().equals(tLogin2.getId())&&getSession_id().equals(tLogin2.getSession_id()))
			return true;
		
		return false;
	}

}
